import React from "react";

const ColoredPosts = ({ params }: { params: { coloredPosts: string[] } }) => {
	return (
		<div>
			<h1 className="bg-gray-500"> {params.coloredPosts[0]} </h1>
			<h2 className={`${params.coloredPosts[1]}`}> {params.coloredPosts[1]} </h2>
		</div>
	);
};

export default ColoredPosts;
