import { NextRequest, NextResponse } from "next/server";

export async function GET() {
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

	return NextResponse.json(posts); // return the post if it is found
}
