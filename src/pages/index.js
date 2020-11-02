import Link from 'next/link';

export default () => {

	const paths = [
		'/dynamic-1',
		'/dynamic-2',
	];

	return (
		<>
			{
				paths.map(p => (
					<Link href={p}><a>{p}</a></Link>
				))
			}
		</>
	);
};