import { PRODUCTS } from "../../data/products";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  const product = PRODUCTS.find(
    (p) => p.id === Number(resolvedParams.id)
  );

  if (!product) {
    return {
      title: "Product not found"
    };
  }

  return {
    title: product.name,
    description: `₹${product.price} | MUZI Fashions`,
    openGraph: {
      title: product.name,
      description: `Buy now for ₹${product.price}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630
        }
      ]
    }
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;

  const product = PRODUCTS.find(
    (p) => p.id === Number(resolvedParams.id)
  );

  if (!product) return <div>Not found</div>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "300px",
          borderRadius: "10px"
        }}
      />

      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        ₹{product.price}
      </p>
    </div>
  );
}