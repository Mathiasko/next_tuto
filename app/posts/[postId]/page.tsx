import React from "react";

type Post = {
  id: number;
	title: string;
	content: string;
};

const wait = (ms: number) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const Post = async ({ params }: { params: { postId: number } }) => {
	await wait(2000);
	const res = await fetch(`http://localhost:3000/api/posts/${params.postId}`, {
		cache: "no-store",
	});
	const data = (await res.json()) as Post;

	return (
		<div>
			jako
			<h1>{data.title}</h1>
			<p>{data.content}</p>
		</div>
	);
};
export default Post;
