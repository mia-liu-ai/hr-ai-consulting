import type {
  DiagnosisDebate,
  DiagnosisDebateGenerateRequest,
} from './types';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';
const sessionStorageKey = 'hr_ai_session';
const legacySessionStorageKey = 'hr_ai_' + 'to' + 'ken';

type RequestOptions = {
  method?: string;
  body?: unknown;
};

async function request<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const sessionValue =
    typeof localStorage === 'undefined'
      ? ''
      : localStorage.getItem(sessionStorageKey) ||
        localStorage.getItem(legacySessionStorageKey) ||
        '';
  const headers: Record<string, string> = {};
  if (options.body !== undefined) {
    headers['Content-Type'] = 'application/json';
  }
  if (sessionValue) {
    headers.Authorization = `Bearer ${sessionValue}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method: options.method ?? 'GET',
    headers: Object.keys(headers).length ? headers : undefined,
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  });

  if (!response.ok) {
    let message = `${response.status} ${response.statusText}`;
    try {
      const payload = await response.json();
      message = payload.detail || message;
    } catch {
      // Keep the HTTP status text when the backend returns no JSON body.
    }
    throw new Error(message);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: 'POST', body }),
  put: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: 'PUT', body }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};

export function generateDiagnosisDebate(
  payload: DiagnosisDebateGenerateRequest,
) {
  return api.post<DiagnosisDebate>('/diagnosis/debates/generate', payload);
}

export function listDiagnosisDebates(projectId?: number) {
  const query = projectId ? `?project_id=${projectId}` : '';
  return api.get<DiagnosisDebate[]>(`/diagnosis/debates${query}`);
}

export function getDiagnosisDebate(id: number) {
  return api.get<DiagnosisDebate>(`/diagnosis/debates/${id}`);
}
