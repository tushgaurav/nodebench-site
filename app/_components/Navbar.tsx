import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="container max-w-7xl mx-auto p-4 flex items-center justify-between">
            <Link href="/">
                <Image src="/images/logo.png" alt="nodebench" width={150} height={200} />
            </Link>
            <ul className="flex gap-4 text-sm">
                <li><Link href="/benchmark">Benchmarks</Link></li>
                <li><Link href="/review">Reviews</Link></li>
                <li><Link href="/tutorial">Tutorials</Link></li>
            </ul>
        </nav>
    )
}