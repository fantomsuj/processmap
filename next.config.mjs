const normalizeBasePath = (value) => {
  if (!value) return ""
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`
  return withLeadingSlash.replace(/\/+$/, "")
}

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH)

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a static bundle so it can be hosted on GitHub Pages.
  output: "export",
  // Set this to the repo name (e.g. "/processmap") when deploying to a project
  // page so that routes and assets resolve correctly. Keep it empty for custom
  // domains or user/organization pages.
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
