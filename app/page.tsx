import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>Main Page</h1>
			<Link href="/posts"> Posts </Link>
		</>
	);
}