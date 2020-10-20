const ContentPage = ({ all }) => {
	return 'Content Page ' + all;
};

export async function getStaticPaths(){
	const paths = [{
		params: { all: ['dynamic-1'] }
	},{
		params: { all: ['dynamic-2'] }
	}];
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, preview=false }){
	let { all } = params;
	all = all.join('/');
	return { props: { all } };
}

export default ContentPage;