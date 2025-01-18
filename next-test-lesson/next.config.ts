import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpackDevMiddleware: (config: any) => {
    config.watchOptions = {
      poll: 1000, // 毎秒監視
      aggregateTimeout: 300, // 300ms待機
    };
    return config;
  },
};

export default nextConfig;
