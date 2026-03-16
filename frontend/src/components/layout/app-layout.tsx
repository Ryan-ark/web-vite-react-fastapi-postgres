import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Vite + React + FastAPI + PostgreSQL</p>
          <h1>Product Control Center</h1>
          <p className="hero__summary">
            A sample CRUD workspace designed to stay readable as the codebase grows.
          </p>
        </div>
      </header>
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
