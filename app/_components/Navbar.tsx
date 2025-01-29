import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="container max-w-7xl mx-auto p-4 flex items-center justify-between">
            <Link href="/" className="">
                <Image src="/images/logo.png" alt="nodebench" width={170} height={20} />
            </Link>
            <ul className="flex gap-6 text-sm">
                <li><Link href="/review" className="
                    hover:text-orange-200
                    transition-colors
                    duration-300
                ">Reviews</Link></li>
                <li><Link href="/articles" className="
                    hover:text-orange-200
                    transition-colors
                    duration-300 
                ">Articles</Link></li>
            </ul>
        </nav>
    )
}