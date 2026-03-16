import { Input } from "../../../components/ui/input";

type ProductToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;
};

export function ProductToolbar({ search, onSearchChange }: ProductToolbarProps) {
  return (
    <section className="panel panel--toolbar">
      <div>
        <p className="section-label">Browse</p>
        <h2>Inventory catalog</h2>
      </div>

      <label className="field">
        <span>Search by name</span>
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search products"
        />
      </label>
    </section>
  );
}
