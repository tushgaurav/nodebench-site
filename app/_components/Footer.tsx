import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="text-sm max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <Image src="/images/logo.png" alt="nodebench" width={160} height={200} />

                <div className="flex gap-3">
                    <Link href="https://twitter.com/nodebench" target="__blank">
                        <Image src="/images/icons/x.svg" alt="Twitter" width={24} height={24} />
                    </Link>
                    <Link href="https://mastodon.social/@nodebench" target="__blank">
                        <Image src="/images/icons/mastodon.svg" alt="Mastodon" width={24} height={24} />
                    </Link>
                    <Link href="rss.xml">
                        <Image src="/images/icons/rss.svg" alt="RSS" width={24} height={24} />
                    </Link>
                    <Link href="https://reddit.com/r/nodebench" target="__blank">
                        <Image src="/images/icons/reddit.svg" alt="Reddit" width={24} height={24} />
                    </Link>
                </div>
            </div>

            <div className="flex items-baseline py-4 gap-4 mt-2">
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/help">Help</Link>
                <Link href="/ethics-statement">Ethics Statement</Link>
            </div>

            <hr className="border-t border-white" />

            <div className="py-4">
                <p>
                    This website uses affiliate links. Purchases made through these links may provide compensation to <Link target="__blank" href="https://prokits.digital">Prokits Digital</Link>.
                </p>
            </div>

            <div className="flex items-baseline py-4 justify-between mt-6">
                <p>&copy; {new Date().getFullYear()} nodebench. All rights reserved.</p>
                <ul className="flex gap-2">
                    <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}