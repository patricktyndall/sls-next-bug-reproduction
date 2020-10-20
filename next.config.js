module.exports = {
	rewrites: async () => {

		/**
		 * USING SERVERLESS-NEXT.JS:
		 * 
		 * With the first rewrite present, the following behaviors are observed:
		 * - navigating to /dynamic-1 gives 404
		 * - navigating to /my-test-asset.txt works
		 * - navigating to /login works
		 * 
		 * With the first rewrite removed, the following behaviors are observed:
		 * - navigating to /dynamic-1 works
		 * - navigating to /my-test-asset.txt gives 404
		 * - navigating to /login gives 404
		 * 
		 * 
		 * USING LOCAL NEXT SERVER
		 * 
		 * In both of the above scenarios, all of the mentioned routes work correctly
		 */

		return [{
			source: "/:path*",
			destination: "/:path*"
		},{
			source: '/:path*',
			destination: '/content/:path*',
		}];
	}
};