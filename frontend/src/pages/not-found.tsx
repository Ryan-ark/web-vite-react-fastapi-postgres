import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="not-found">
      <p className="section-label">404</p>
      <h1>Page not found</h1>
      <p>The route does not exist in this sample application.</p>
      <Link className="button button--primary" to="/">
        Return home
      </Link>
    </main>
  );
}
