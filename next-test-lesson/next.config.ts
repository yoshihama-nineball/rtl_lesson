import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // 必要に応じてWebpackの設定を追加できます
    return config;
  }
};

export default nextConfig;
