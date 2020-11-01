module.exports = {
	rewrites: async () => {
		return [{
			source: '/:path*',
			destination: '/:path*',
		},{
			source: '/:path*',
			destination: '/content/:path*',
		}];
	}
};