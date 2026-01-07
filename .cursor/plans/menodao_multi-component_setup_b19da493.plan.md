---
name: MenoDAO Multi-Component Setup
overview: Implement domain configuration, essential tests with CI/CD integration, favicon update, consolidated ECS cluster deployment scripts, and environment-aware API configuration for both frontend and backend.
todos:
  - id: amplify-domain
    content: Find Amplify App ID and add stg.menodao.org domain via CLI
    status: completed
  - id: frontend-favicon
    content: Convert logo.png to favicon.ico and update layout.tsx metadata
    status: completed
  - id: frontend-api-env
    content: Update api.ts with environment-aware URL detection
    status: completed
  - id: frontend-tests
    content: Add Jest setup and essential unit tests for frontend
    status: completed
  - id: frontend-cicd
    content: Update frontend deploy.yml to include test step
    status: in_progress
  - id: backend-health
    content: Enhance health endpoint with environment and version info
    status: pending
  - id: backend-cors
    content: Update CORS configuration to be environment-aware
    status: pending
  - id: backend-tests
    content: Add essential unit tests for auth, members, subscriptions services
    status: completed
  - id: backend-cicd
    content: Update backend deploy.yml to run tests with coverage
    status: pending
  - id: backend-cluster-scripts
    content: Create ECS cluster provisioning and deployment scripts
    status: pending
---

# MenoDAO Infrastructure and Testing Implementation

## 1. Amplify Custom Domain Setup (Frontend)

First, retrieve the Amplify App ID and then add the custom domain:

```bash
# Find the Amplify app
aws amplify list-apps --query "apps[?name=='menodao-frontend']"

# Add domain association for stg.menodao.org -> dev branch
aws amplify create-domain-association \
  --app-id <APP_ID> \
  --domain-name menodao.org \
  --sub-domain-settings "prefix=stg,branchName=dev"
```

---

## 2. Frontend Changes

### 2.1 Favicon Update

- Convert `public/logo.png` to `favicon.ico` format
- Update `src/app/layout.tsx` metadata to reference the new favicon

### 2.2 Environment-Aware API Configuration

Update `src/lib/api.ts` to detect environment:

```typescript
const getApiUrl = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "app.menodao.org") return "https://api.menodao.org";
    if (hostname === "stg.menodao.org") return "https://stg-api.menodao.org";
  }
  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
};
```

### 2.3 Essential Unit Tests

Add Jest + React Testing Library setup:

- `jest.config.ts` - Jest configuration for Next.js
- `src/lib/__tests__/api.test.ts` - API client tests (mocking fetch)
- `src/app/login/__tests__/page.test.tsx` - Login page component tests

### 2.4 Update CI/CD Workflow

Add test step to [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

```yaml
- name: Run tests
  run: npm run test -- --coverage --passWithNoTests
```

---

## 3. Backend Changes

### 3.1 Health Endpoint Enhancement

The endpoint already exists at `/health` in [`src/app.controller.ts`](src/app.controller.ts). Enhance it with more details:

```typescript
@Get('health')
getHealth() {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env.npm_package_version || '1.0.0',
  };
}
```

### 3.2 CORS Configuration

Update [`src/main.ts`](src/main.ts) to be environment-aware:

```typescript
const allowedOrigins = process.env.CORS_ORIGINS?.split(",") || [
  "http://localhost:3000",
  "https://menodao.org",
  "https://app.menodao.org",
  "https://stg.menodao.org",
];
app.enableCors({ origin: allowedOrigins, credentials: true });
```

### 3.3 Essential Unit Tests

Add tests for core services:

- `src/auth/auth.service.spec.ts` - Authentication flow tests
- `src/auth/auth.controller.spec.ts` - Auth endpoint tests
- `src/members/members.service.spec.ts` - Member CRUD tests
- `src/subscriptions/subscriptions.service.spec.ts` - Subscription logic tests
- `src/health/health.controller.spec.ts` - Health endpoint tests

### 3.4 Update CI/CD Workflow

Ensure tests run with coverage in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

```yaml
- name: Run tests
  run: npm run test -- --coverage
```

---

## 4. Backend ECS Cluster Scripts

Create new deployment scripts for a consolidated `menodao` cluster:

### 4.1 Infrastructure Scripts

- `infrastructure/scripts/provision-cluster.sh` - Create/update ECS cluster
- `infrastructure/scripts/deploy-service.sh` - Deploy a service to the cluster

### 4.2 Cluster Architecture

```
menodao (single cluster)
├── menodao-api (service) - builds from main branch
└── menodao-api-dev (service) - builds from dev branch
```

### 4.3 GitHub Actions Deployment

Add `/provision` and `/deploy prod` PR comment commands to [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

---

## File Structure Summary

### Frontend New Files

- `jest.config.ts`
- `jest.setup.ts`
- `src/lib/__tests__/api.test.ts`
- `src/app/login/__tests__/page.test.tsx`
- `public/favicon.ico` (converted from logo)

### Backend New Files

- `src/auth/auth.service.spec.ts`
- `src/auth/auth.controller.spec.ts`
- `src/members/members.service.spec.ts`
- `src/subscriptions/subscriptions.service.spec.ts`
- `infrastructure/scripts/provision-cluster.sh`
- `infrastructure/scripts/deploy-service.sh`

### Files to Modify

- Frontend: `package.json`, `src/lib/api.ts`, `.github/workflows/deploy.yml`
- Backend: `src/main.ts`, `src/app.controller.ts`, `.github/workflows/deploy.yml`
