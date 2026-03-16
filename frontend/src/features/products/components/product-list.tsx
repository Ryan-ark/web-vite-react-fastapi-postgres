import { Button } from "../../../components/ui/button";
import { formatCurrency, toInputDateTime } from "../../../lib/utils";
import { Product } from "../types/product";

type ProductListProps = {
  products: Product[];
  isDeleting: boolean;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
};

export function ProductList({ products, isDeleting, onEdit, onDelete }: ProductListProps) {
  if (!products.length) {
    return (
      <section className="panel panel--list">
        <div className="empty-state">
          <p className="section-label">No products</p>
          <h2>Your inventory is empty</h2>
          <p>Create the first product to populate the sample CRUD flow.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="panel panel--list">
      <div className="panel__header">
        <div>
          <p className="section-label">Results</p>
          <h2>{products.length} product entries</h2>
        </div>
      </div>

      <div className="product-list">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-card__meta">
              <span className={`status-pill ${product.is_active ? "status-pill--active" : "status-pill--inactive"}`}>
                {product.is_active ? "Active" : "Archived"}
              </span>
              <span>{toInputDateTime(product.created_at)}</span>
            </div>

            <div className="product-card__body">
              <div>
                <h3>{product.name}</h3>
                <p>{product.description || "No description provided."}</p>
              </div>
              <strong>{formatCurrency(product.price)}</strong>
            </div>

            <div className="product-card__actions">
              <Button variant="secondary" onClick={() => onEdit(product)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => onDelete(product.id)} disabled={isDeleting}>
                {isDeleting ? "Removing..." : "Delete"}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
