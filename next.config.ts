import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  env: {
    POSTGRES_URL: process.env.DATABASE_URL,
  },
};

export default nextConfig;
