type ProductOverviewProps = {
  total: number;
  activeCount: number;
  inactiveCount: number;
};

export function ProductOverview({ total, activeCount, inactiveCount }: ProductOverviewProps) {
  return (
    <section className="overview-grid">
      <article className="overview-card">
        <p className="section-label">Total products</p>
        <strong>{total}</strong>
      </article>
      <article className="overview-card">
        <p className="section-label">Active</p>
        <strong>{activeCount}</strong>
      </article>
      <article className="overview-card">
        <p className="section-label">Archived</p>
        <strong>{inactiveCount}</strong>
      </article>
    </section>
  );
}
