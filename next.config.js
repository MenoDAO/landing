/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Use modern formats for better compression without quality loss
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different viewports
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimize layout shift - cache optimized images for 30 days
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Disable image size limit warnings for large images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
}

module.exports = nextConfig
