/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Hide the Next.js dev-mode badge (bottom-left "N"). Dev-only; not shipped.
  devIndicators: false,
};

export default nextConfig;
