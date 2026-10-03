import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/resume": ["./docs/**/*"],
  },
}

export default nextConfig
