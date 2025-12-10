export async function GET() {
  const baseUrl = "https://portfolio.jsvb.dev"

  const pages = [
    "/",
    // Página interna de componentes excluida del sitemap por ser solo de diseño
  ]

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}


