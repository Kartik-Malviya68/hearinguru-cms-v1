/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["placehold.co", "storage.googleapis.com", "images.unsplash.com", "images.pexels.com", "unsplash.com", "plus.unsplash.com"],
	},
	reactStrictMode: false,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;