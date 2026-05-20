# hr-ai-consulting

`hr-ai-consulting` 是一个 HR 组织咨询网站，当前已融合 **360 Review Intelligence Agent**。该 Agent 是网站内的一个功能模块，不是独立项目，用于帮助 HR 设计、执行、分析全员 360 评审，并生成需要 HR 确认的发展反馈报告。

Phase 2 已加入本地账号系统、管理员控制台、员工工作台和员工反馈池。系统支持员工登录填写自己的评审任务，管理员查看全员进度、回答数据、AI 分析结果和员工反馈处理状态。

Phase 3.1-3.3 已加入 Agentic HR 主线：HR 先输入组织诊断假设，AI 提炼结构化假设；再基于假设生成 AI 时代人才模型；最后基于诊断假设和人才模型生成更贴合真实组织问题的 360 问卷。

Phase 3.4-3.7 已继续升级为完整组织诊断闭环：AI 诊断规则生成、Employee Voice Agent 员工声音智能体、组织诊断看板、组织诊断报告和 30/60/90 天行动计划。前端已加入全局 sticky 顶部导航，方便在组织咨询首页、HR 诊断假设、AI 人才模型、360评审 Agent、管理员控制台、员工反馈、组织诊断看板和报告生成之间切换。

最新版本新增 **专业诊断辩论室 / Diagnosis Debate Panel**：在组织诊断看板中模拟 OD 组织发展、人才发展、工业与组织心理学、系统思维、People Analytics、AI 转型与人机协作、组织治理与风控等专业流派，对组织诊断结论进行交叉审议，帮助 HR 避免单一归因。

## 360 Agent 定位

360 Review Intelligence Agent 面向 HR、HRBP 和组织发展顾问，覆盖：

- 360 评审项目创建
- AI 生成胜任力维度和行为化题目
- 员工管理与评价关系配置
- 1-5 分评分和逐题开放文本反馈
- 完成率、维度均分、自评/他评差距、群体差异、部门热力图分析
- 开放反馈高频主题和风险提示
- 个人 360 报告与组织诊断摘要

首页或左侧导航中的 **「360评审 Agent」** 是进入该模块的入口。

管理员登录后还可以进入：

- **HR诊断假设**：输入 HR 对组织、团队、人才问题的判断，AI 提炼可验证诊断假设。
- **AI人才模型**：基于已确认诊断假设生成 AI 时代人才能力模型，支持编辑维度、低/中/高行为标准、样例题目和权重。
- **360评审 Agent / 问卷设计**：新增「AI 时代诊断问卷生成」，可基于诊断假设和人才模型生成问卷。
- **诊断规则**：基于诊断假设和人才模型生成评分差异、反馈主题和 AI 转型信号的解释规则。
- **Employee Voice Agent**：升级员工反馈池，支持反馈筛选、AI 总结和员工声音主题聚类。
- **组织诊断看板**：组合项目完成率、AI 人才维度表现、360 差异、员工反馈主题、组织风险、高潜人才信号和 AI 转型卡点。
- **专业诊断辩论室**：在组织诊断看板中进行多专业流派交叉审议，输出共识、分歧、推荐诊断、补充证据和建议行动。
- **报告生成**：生成组织诊断报告、AI 转型成熟度报告和 30/60/90 天行动计划，默认草稿，需要 HR 确认。

## 账号与角色

默认演示管理员会在数据库初始化时自动创建，账号与口令请以本地初始化配置为准。生产环境必须通过环境变量覆盖演示口令，并在上线前完成管理员凭据轮换。

角色权限：

- `admin`：项目、问卷、员工、评价关系、任务进度、回答数据、分析看板、AI 报告、员工反馈池。
- `employee`：我的评审任务、问卷填写、我的提交记录、员工意见反馈。

## Phase 3.1-3.3 使用流程

管理员登录后建议按以下顺序使用：

1. 进入 **HR诊断假设**，填写诊断对象、诊断目的、公司阶段、HR 核心判断、想识别的人才、重点关注问题、风控边界和期望输出。
2. 点击 **AI 提炼诊断假设**。没有配置模型调用凭证时会返回 fallback mock 假设，至少包含中层目标拆解、AI 转型、跨部门协作和 AI-native 高潜人才四类假设。
3. HR 编辑 AI 假设后点击 **确认诊断假设**。
4. 进入 **AI人才模型**，选择已确认诊断假设和模型模板，点击 **AI 生成人才模型**。没有模型调用凭证时会返回 mock `AI-native Manager Capability Model`。
5. HR 编辑模型名称、说明、维度、低/中/高行为标准、样例题目和权重，保存并确认模型。
6. 回到 **360评审 Agent / 问卷设计**，在「AI 时代诊断问卷生成」区域选择诊断假设和人才模型，生成评分题、行为观察题、开放反馈题、管理者专项题或 AI 治理题。

这些内容仍然只用于发展反馈、能力诊断和组织改进，不作为自动化晋升、淘汰、薪酬或裁员决策依据。

## Phase 3.4-3.7 使用流程

1. 进入 **诊断规则**，选择项目、已确认诊断假设和人才模型，点击 **AI 生成诊断规则**。无模型调用凭证时返回 fallback mock 规则。
2. 进入 **员工反馈**，管理员可筛选反馈、逐条 AI 总结，也可点击 **AI 反馈主题聚类** 生成 Employee Voice 主题。
3. 进入 **组织诊断看板**，查看项目完成率、模型维度、360 差异、员工反馈主题、组织风险、高潜人才线索和 AI 转型卡点。
4. 点击 **生成组织风险**，系统基于诊断假设、人才模型、诊断规则、员工反馈聚类和 360 差异生成风险解释。
5. 在 **组织诊断看板 / 专业诊断辩论室** 中输入诊断主题，生成多专业视角的交叉审议结果。无模型调用凭证时会返回 fallback mock。
6. 进入 **报告生成**，生成组织诊断报告、AI 转型成熟度报告或 30/60/90 天行动计划。报告页可引用最近一次专业诊断辩论摘要。
7. HR 编辑报告草稿后点击 **HR 确认报告**。报告中的 AI 结论仍需结合业务事实人工确认。

## 专业诊断辩论室

专业诊断辩论室不是员工论坛，也不是聊天区。它是组织诊断看板中的审议模块，用于让 AI 模拟多个专业流派对同一组织问题进行交叉分析、反驳和补充证据。

支持的专业视角：

- OD 组织发展：组织结构、权责边界、角色关系、协作机制、决策流程。
- 人才发展：员工能力、管理者能力、学习发展、人才梯队和 AI 时代人才标准。
- 工业与组织心理学：动机、心理安全感、信任、公平感、反馈质量和员工体验。
- 系统思维：上下游系统、流程断点、目标传导、局部优化和整体低效。
- People Analytics：样本量、评分差异、群体偏差、不确定性和置信度。
- AI 转型与人机协作：AI 工作流、团队使用规范、人机任务边界和流程重构。
- 组织治理与风控：隐私、公平、匿名保护、人工复核和用途边界。

输出内容包括：

- 辩论主题与背景摘要
- 多专业视角卡片
- 共识、分歧和推荐诊断
- 置信度、下一步证据和建议行动
- 风控提示

该模块仅用于组织发展和 HR 决策辅助，不作为自动人事决策依据。

后端根路径也提供运行状态：

```text
GET /
```

## 项目结构

```text
hr-ai-consulting/
  backend/
    main.py             # FastAPI app 入口
    app/
      ai.py             # OpenAI-compatible 调用与 JSON 解析
      database.py       # SQLite 路径、建表与轻量迁移
      main.py           # 认证、360 API、员工任务、反馈、分析、报告与审计接口
      security.py       # 登录口令摘要与会话值生成
    requirements.txt
    hr360.sqlite3       # 本地运行后自动生成
  src/
    App.tsx             # HR 网站与 360 Agent 工作台
    api.ts              # 前端统一 /api client
    main.tsx
    styles.css
    types.ts
  package.json
  vite.config.ts
```

## 本地运行

安装后端依赖：

```bash
python -m pip install -r backend/requirements.txt
```

启动后端：

```bash
pnpm dev:backend
```

启动前端：

```bash
pnpm dev -- --host 0.0.0.0
```

前端访问地址：

```text
http://localhost:5174/
```

API 文档地址：

```text
http://localhost:8008/docs
```

## 免费试用部署

### 部署架构

前端使用 Vercel Hobby 部署 React/Vite，后端使用 Render Free Web Service 部署 FastAPI，数据库继续使用 SQLite，仅用于 MVP 演示。

### 1. 部署后端到 Render

1. 登录 Render。
2. 选择 New Web Service。
3. 选择 GitHub 仓库 `mia-liu-ai/hr-ai-consulting`。
4. Root Directory 设置为 `backend`。
5. Build Command 设置为：

```bash
pip install -r requirements.txt
```

6. Start Command 设置为：

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

7. 环境变量：

```text
FRONTEND_ORIGINS=*
```

部署完成并拿到前端域名后，更推荐将 `FRONTEND_ORIGINS` 改为你的 Vercel 前端域名；多个域名用英文逗号分隔。

模型调用凭证不要写入代码仓库。免费演示可以不配置，系统会使用 fallback mock；如需真实模型调用，可在后台 AI 配置中填写 modelCredential，也可在部署平台按后端兼容配置提供。模型服务地址和模型名称可按需设置为 `OPENAI_BASE_URL`、`OPENAI_MODEL`。

部署完成后测试：

```text
https://你的后端地址/
https://你的后端地址/api/health
https://你的后端地址/docs
```

### 2. 部署前端到 Vercel

1. 登录 Vercel。
2. Import GitHub Project。
3. 选择 `mia-liu-ai/hr-ai-consulting`。
4. Framework Preset 选择 Vite。
5. Install Command 设置为：

```bash
pnpm install
```

6. Build Command 设置为：

```bash
pnpm build
```

7. Output Directory 设置为：

```text
dist
```

8. 环境变量：

```text
VITE_API_BASE_URL=https://你的Render后端地址
```

不要在前端写死 Render 或 Vercel 地址。部署完成后，Vercel 前端会通过 `VITE_API_BASE_URL` 请求 Render 后端；本地没有配置时仍使用相对路径 `/api/...` 和 Vite 代理。

### 3. 部署后验收

1. 打开 Vercel 前端链接。
2. 管理员登录。
3. 进入 HR诊断假设。
4. 进入 AI人才模型。
5. 进入组织诊断看板。
6. 生成专业诊断辩论。
7. 进入报告生成。
8. 员工账号登录。
9. 确认员工只能看到自己的任务和反馈。

### 4. 免费服务限制

1. Render 免费服务可能休眠，首次访问会变慢。
2. SQLite 适合 MVP 演示；免费云服务重启、休眠或重新部署后，SQLite 数据可能不稳定或不持久。
3. 如果要正式给多人长期使用，建议切换 PostgreSQL。
4. 免费额度有限，不适合大量真实员工长期使用。

### 5. 安全提醒

1. 不要把真实模型调用凭证写入代码。
2. 不要公开演示登录口令。
3. 生产环境应启用更严格的账号安全策略。
4. AI 诊断仅用于组织发展和 HR 决策辅助，不作为自动人事决策依据。

## API

基础健康检查：

```text
GET /
GET /api/health
GET /api/360/health
```

认证 API：

```text
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

360 Agent API：

```text
POST /api/360/projects
GET  /api/360/projects
POST /api/360/questionnaire/generate
POST /api/360/questionnaire/generate-from-model
POST /api/360/questionnaire/optimize
POST /api/360/employees
GET  /api/360/employees
POST /api/360/relations
GET  /api/360/relations
POST /api/360/responses
GET  /api/360/responses
GET  /api/360/analytics/{project_id}
POST /api/360/reports/generate
POST /api/360/org-diagnosis/generate
```

诊断假设 API：

```text
POST /api/diagnosis/hypotheses
GET  /api/diagnosis/hypotheses
GET  /api/diagnosis/hypotheses/{id}
PUT  /api/diagnosis/hypotheses/{id}
POST /api/diagnosis/hypotheses/generate
POST /api/diagnosis/hypotheses/{id}/confirm
```

AI 时代人才模型 API：

```text
POST   /api/talent/models/generate
POST   /api/talent/models
GET    /api/talent/models
GET    /api/talent/models/{id}
PUT    /api/talent/models/{id}
POST   /api/talent/models/{id}/confirm
POST   /api/talent/models/{id}/dimensions
GET    /api/talent/models/{id}/dimensions
PUT    /api/talent/dimensions/{dimension_id}
DELETE /api/talent/dimensions/{dimension_id}
```

诊断规则、组织风险、诊断报告与行动计划 API：

```text
POST /api/diagnosis/rules/generate
GET  /api/diagnosis/rules
POST /api/diagnosis/rules
PUT  /api/diagnosis/rules/{rule_id}
DELETE /api/diagnosis/rules/{rule_id}

GET  /api/diagnosis/dashboard
POST /api/diagnosis/risks/generate
GET  /api/diagnosis/risks
PUT  /api/diagnosis/risks/{risk_id}

POST /api/diagnosis/debates/generate
GET  /api/diagnosis/debates
GET  /api/diagnosis/debates/{id}

POST /api/diagnosis/reports/generate
GET  /api/diagnosis/reports
GET  /api/diagnosis/reports/{id}
PUT  /api/diagnosis/reports/{id}
POST /api/diagnosis/reports/{id}/confirm

POST /api/action-plans/generate
GET  /api/action-plans
POST /api/action-plans
PUT  /api/action-plans/{id}
```

管理员 API：

```text
GET  /api/admin/users
POST /api/admin/users
PUT  /api/admin/users/{user_id}
POST 管理员重置登录口令接口，具体路径见 /docs
GET  /api/admin/dashboard
GET  /api/admin/projects/{project_id}/progress
GET  /api/admin/projects/{project_id}/responses
GET  /api/admin/projects/{project_id}/tasks
POST /api/admin/projects/{project_id}/generate-tasks
GET  /api/admin/feedback
PUT  /api/admin/feedback/{feedback_id}/status
POST /api/admin/feedback/{feedback_id}/ai-summary
POST /api/admin/feedback/cluster
GET  /api/admin/feedback/clusters
```

员工 API：

```text
GET  /api/employee/me
GET  /api/employee/tasks
GET  /api/employee/tasks/{task_id}
POST /api/employee/tasks/{task_id}/submit
GET  /api/employee/submissions
POST /api/feedback
GET  /api/feedback/my
```

前端统一请求 `/api/...`，Vite 会代理到：

```text
http://localhost:8008
```

## SQLite

数据库默认位置：

```text
hr-ai-consulting/backend/hr360.sqlite3
```

主要数据表包括：

- `review_projects`
- `users`
- `login_sessions`
- `review_tasks`
- `feedback_items`
- `feedback_clusters`
- `diagnosis_hypotheses`
- `diagnosis_rules`
- `talent_models`
- `talent_dimensions`
- `organization_risks`
- `diagnosis_reports`
- `action_plans`
- `diagnosis_debates`
- `employees`
- `competencies`
- `questions`
- `review_relations`
- `responses`
- `ai_reports`
- `ai_runs`
- `edit_history`

系统同时保留了前端工作台使用的项目、维度、关系、报告等兼容表，以便现有页面继续稳定运行。

## AI 配置

AI 接口兼容 OpenAI Chat Completions。模型调用凭证请通过本地环境变量或页面运行时配置提供，生产环境不要写入代码仓库。

也可以在页面「项目创建」里的 AI 配置表单保存模型调用凭证、服务地址和模型名称。

如果没有配置模型调用凭证，系统不会报错，会自动使用 fallback mock 结果，确保以下功能完整跑通：

- 生成 360 问卷
- 提炼 HR 诊断假设
- 生成 AI 时代人才模型
- 基于诊断假设和人才模型生成问卷
- 生成 AI 诊断规则
- 聚类 Employee Voice 员工反馈主题
- 生成组织风险
- 生成专业诊断辩论
- 生成组织诊断报告
- 生成 30/60/90 天行动计划
- 检查和优化问卷题目
- 总结开放文本反馈
- 分析评分差距
- 生成个人 360 报告
- 生成组织诊断摘要

所有 AI 生成记录都会写入 `ai_runs`。

## 360 评审风控原则

- AI 报告只用于发展反馈和组织诊断，不得直接决定晋升、淘汰、薪酬。
- 所有 AI 报告默认是草稿，需要 HR 人工确认。
- 当某类评价人少于 3 人时，不展示该群体原始评论。
- 开放文本反馈应被脱敏、归类，并用中性发展语言表达，避免攻击性语言直接进入报告。
- 系统保留 AI 生成记录和人工修改记录。
- 360 评审的目标不是打分排名，而是识别能力盲区、协作问题和组织管理问题。

## 构建

```bash
pnpm --dir hr-ai-consulting build
```
