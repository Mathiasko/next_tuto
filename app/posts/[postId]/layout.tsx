import React from "react";

const PostLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex">
			<div className="border m-10 p-2">{children}</div>
		</div>
	);
};

export default PostLayout;
