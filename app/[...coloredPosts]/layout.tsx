import { FC, ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return <div className="">
    {children}
    <h1 className="bg-red-400 h-full">jako</h1>
    </div>;
};

export default Layout;
