// "use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
	return (
		<div>
			Loading
			<ClipLoader
        color='red'
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
		</div>
	);
};

export default Loading;
