/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.com' },
      { protocol: 'https', hostname: '**.net' },
      { protocol: 'https', hostname: '**.org' },
      { protocol: 'https', hostname: '**.tr' },
      { protocol: 'https', hostname: '**.fr' },
      { protocol: 'https', hostname: '**.it' },
      { protocol: 'https', hostname: '**.me' }
    ].map(pattern => ({ ...pattern, port: '', pathname: '/**' }))
  },
};

export default nextConfig;
