import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
    return (
        <header>
            <Link href='/'>Logo</Link>
            <Nav />
        </header>
    )
}