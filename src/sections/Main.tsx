import content from '../../content/home.md';

function Main() {
	const { attributes, html } = content;
	return (
		<>
			<h1>{attributes.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</>
	);
}

export default Main;
