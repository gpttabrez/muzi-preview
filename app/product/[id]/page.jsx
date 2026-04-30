import { PRODUCTS } from "../../../data/products";

// ✅ Add caching for stable OG scraping
export const revalidate = 60;

export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  const product = PRODUCTS.find(
    (p) => String(p.id) === String(resolvedParams.id)
  );

  if (!product) {
    return {
      title: "Product not found",
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
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: `Buy now for ₹${product.price}`,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;

  const product = PRODUCTS.find(
    (p) => String(p.id) === String(resolvedParams.id)
  );

  if (!product) {
    return <div>Not found</div>;
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "300px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      />

      <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
        ₹{product.price}
      </p>

      <a
        href={`https://muzigroups.com/?product=${product.id}`}
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px",
        }}
      >
        Shop Now
      </a>
    </div>
  );
}