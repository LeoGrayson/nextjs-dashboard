/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... konfigurasi Next.js lainnya, jika ada
    async headers() {
      return [
        {
          source: '/custom.html',
          headers: [
            {
              key: 'Content-Type',
              value: 'text/html',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;  