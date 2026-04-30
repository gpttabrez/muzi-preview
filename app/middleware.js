export function middleware(req) {
  const ua = req.headers.get("user-agent") || "";

  // Allow Facebook + WhatsApp crawlers
  if (
    ua.includes("facebookexternalhit") ||
    ua.includes("WhatsApp") ||
    ua.includes("Facebot")
  ) {
    return new Response(null, {
      status: 200,
    });
  }

  return;
}