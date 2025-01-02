import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="container max-w-7xl mx-auto p-4 flex items-center justify-between">
            <Link href="/">
                <Image src="/images/logo.png" alt="nodebench" width={150} height={20} />
            </Link>
            <ul className="flex gap-6 text-sm">
                {/* <li><Link href="/benchmark">Benchmarks</Link></li> */}
                <li><Link href="/review" className="
                    hover:text-orange-200
                    transition-colors
                    duration-300
                ">Reviews</Link></li>
                <li><Link href="/tutorial" className="
                    hover:text-orange-200
                    transition-colors
                    duration-300 
                ">Tutorials</Link></li>
            </ul>
        </nav>
    )
}