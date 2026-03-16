# Deployment

## Vercel Shape

- Static frontend build output comes from `frontend/dist`
- FastAPI is exposed through `api/index.py`
- `vercel.json` rewrites `/api/*` to the Python function and other routes to `index.html`

## Required Environment Variables

- `DATABASE_URL`
- `APP_ENV=production`
- `API_V1_PREFIX=/api/v1`
- `CORS_ORIGINS=https://your-vercel-domain.vercel.app`

## Recommended Hosted Database

Use Neon Free for the first deployment. It keeps the stack on plain PostgreSQL and fits Vercel serverless usage better than running a database yourself.

## Deployment Notes

- Run database migrations before or during release.
- Keep the Vercel adapter thin. The real app should continue to live under `backend/app/`.
- Do not rely on in-memory state in request handlers.
