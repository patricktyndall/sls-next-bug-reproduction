const ContentPage = ({ all }) => {
	return 'Product Page ' + all;
};

export async function getStaticPaths(){
	const paths = [{
		params: { all: ['dynamic-1'] }
	},{
		params: { all: ['dynamic-2'] }
	}];
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params, preview=false }){
	console.log('preview mode: ' + preview);
	console.log(params);
	let { all } = params;
	all = all.join('/');
	return { props: { all } };
}

export default ContentPage;