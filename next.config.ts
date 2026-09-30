import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        source: "/blog/building-reliable-full-stack-applications",
        destination: "/blog/building-custom-full-stack-applications",
        permanent: true,
      },
      {
        source: "/north-attleboro-software-developer",
        destination: "/southern-massachusetts-rhode-island-software-developer",
        permanent: true,
      },
      {
        source: "/southern-massachusetts-software-developer",
        destination: "/southern-massachusetts-rhode-island-software-developer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
