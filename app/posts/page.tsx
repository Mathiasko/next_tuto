import Link from "next/link";
import React from "react";

const Posts = async () => {
	const res = await fetch(`http://localhost:3000/api/posts/`, {
		cache: "no-store",
	});
	const data = await res.json();
	return (
		<>
			<h1>All posts</h1>
			<p>haha</p>
			{data.map((post: { id: number; title: string }) => (
				<Link href={`posts/${post.id}`} className="">
					<h1>{post.title}</h1>
				</Link>
			))}
		</>
	);
};
export default Posts;
