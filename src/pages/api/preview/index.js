export default async (req, res) => {
	// Check the secret and next parameters
	// This secret should only be known to this API route and the CMS
	if (req.query.secret !== '96ffe7d4-2ad2-4699-b64a-a5f74750962e' || !req.query.slug) {
		return res.status(401).json({ message: 'Invalid token' });
	}

	// Enable Preview Mode by setting the cookies
	res.setPreviewData({});

	// Redirect to the path from the fetched post
	// We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
	// res.writeHead(307, { Location: req.query.slug });
	// res.end();

	const url = req.query.slug;
	res.write(
		`<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
		<script>window.location.href = '${url}'</script>
		</head>`
	);
	res.end();
};
