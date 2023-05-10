type Post = {
	id: number;
	title: string;
	content: string;
};

export default async function sitemap() {
	const res = await fetch(`http://localhost:3000/api/posts/`);
	const data = (await res.json()) as Post[];

	const posts = data.map((post) => ({
		url: `http://localhost:3000/post/${post.id}`,
		lastModified: new Date().toISOString(),
	}));

	const routes = ["", "/posts"].map((route) => ({
		url: `http://localhost:3000${route}`,
		lastModified: new Date().toISOString(),
	}));

	const coloredPosts = ["Pedro", "Stevo"].flatMap((name) =>
		["red", "green", "blue"].map((color) => ({
			url: `http://localhost:3000/${name}/${color}`,
			lastModified: new Date().toISOString(),
		}))
	);
  
	return [...routes, ...posts, ...coloredPosts];
}
