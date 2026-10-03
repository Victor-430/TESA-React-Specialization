// 📝 ASSIGNMENT: Part 3
import { useLazyGetProductByIdQuery } from "../api/shopApi";

type Props = {
  productId: number;
};

export function ProductDetails({ productId }: Props) {
  // TODO (Part 3): load this product's details only when the button is clicked (a lazy query)
  const [loadProduct, { data, isFetching, error }] = useLazyGetProductByIdQuery();

  return (
    <div className="mt-2 text-sm">
      <button
        onClick={() => {
          // TODO (Part 3): start loading the details
          if (!data && !isFetching) {
            void loadProduct(productId, true);
          }
        }}
        className="text-blue-600 underline"
      >
        View details
      </button>

      {/* TODO (Part 3): show "Loading…" while the details load, then the product's description */}
      {isFetching && <p role="status">Loading…</p>}
      {error && <p className="text-red-600" role="alert">Could not load product details</p>}
      {data && <p>{data.description}</p>}
    </div>
  );
}
