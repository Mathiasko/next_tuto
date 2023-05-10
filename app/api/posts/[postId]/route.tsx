import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { postId: string } }) {
	const postId = params.postId; // get the post ID from the URI
	const posts = [
		{
			id: 1,
			title: "Post 1",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed lorem sed lorem sed lorem sed",
		},
		{
			id: 2,
			title: "Post 2",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed lorem sed lorem sed lorem sed",
		},
		{
			id: 3,
			title: "Post 3",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem sed lorem sed lorem sed lorem sed",
		},
	];

	const post = posts.find((p) => p.id === parseInt(postId)); // find the post with the specified ID
	if (!post) {
		// return a 404 error if the post is not found
		return new NextResponse("Post not found", {status: 404});
	}
  
	return NextResponse.json(post); // return the post if it is found
}
