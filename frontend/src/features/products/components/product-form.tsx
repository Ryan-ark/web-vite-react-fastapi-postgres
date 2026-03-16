import { FormEvent, useEffect, useState } from "react";

import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { productFormSchema } from "../schemas/product-form-schema";
import { Product, ProductFormValues } from "../types/product";

type ProductFormProps = {
  product?: Product | null;
  isSubmitting: boolean;
  onCancelEdit: () => void;
  onSubmit: (values: ProductFormValues) => Promise<void>;
};

const emptyValues: ProductFormValues = {
  name: "",
  description: "",
  price: "",
  is_active: true,
};

export function ProductForm({ product, isSubmitting, onCancelEdit, onSubmit }: ProductFormProps) {
  const [values, setValues] = useState<ProductFormValues>(emptyValues);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!product) {
      setValues(emptyValues);
      setErrorMessage(null);
      return;
    }

    setValues({
      name: product.name,
      description: product.description ?? "",
      price: product.price,
      is_active: product.is_active,
    });
    setErrorMessage(null);
  }, [product]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parsed = productFormSchema.safeParse(values);
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message ?? "Please check the form fields.");
      return;
    }

    setErrorMessage(null);
    await onSubmit({
      ...parsed.data,
      description: parsed.data.description ?? "",
    });

    if (!product) {
      setValues(emptyValues);
    }
  }

  return (
    <section className="panel panel--form">
      <div className="panel__header">
        <div>
          <p className="section-label">{product ? "Edit product" : "Create product"}</p>
          <h2>{product ? product.name : "Add a new catalog item"}</h2>
        </div>
        {product ? (
          <Button variant="ghost" type="button" onClick={onCancelEdit}>
            Clear selection
          </Button>
        ) : null}
      </div>

      <form className="product-form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Name</span>
          <Input
            value={values.name}
            onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
            placeholder="Desk Lamp"
            required
          />
        </label>

        <label className="field">
          <span>Description</span>
          <Textarea
            rows={5}
            value={values.description}
            onChange={(event) =>
              setValues((current) => ({ ...current, description: event.target.value }))
            }
            placeholder="Write a short description for the product."
          />
        </label>

        <div className="field-grid">
          <label className="field">
            <span>Price</span>
            <Input
              type="number"
              step="0.01"
              min="0.01"
              value={values.price}
              onChange={(event) => setValues((current) => ({ ...current, price: event.target.value }))}
              placeholder="49.99"
              required
            />
          </label>

          <label className="field field--checkbox">
            <input
              type="checkbox"
              checked={values.is_active}
              onChange={(event) =>
                setValues((current) => ({ ...current, is_active: event.target.checked }))
              }
            />
            <span>Active listing</span>
          </label>
        </div>

        {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

        <div className="form-actions">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : product ? "Update product" : "Create product"}
          </Button>
          {product ? (
            <Button type="button" variant="secondary" onClick={onCancelEdit} disabled={isSubmitting}>
              Cancel
            </Button>
          ) : null}
        </div>
      </form>
    </section>
  );
}
