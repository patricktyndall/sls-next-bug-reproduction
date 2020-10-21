module.exports = {
	rewrites: async () => {
		return [{
			source: '/:path*',
			destination: '/content/:path*',
		}];
	}
};