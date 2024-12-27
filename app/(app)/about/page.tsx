import type { Metadata } from "next";
import Image from "next/image";
import { Main, Paragraph, Subtitle } from "@/components/ui/static-pages";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about nodebench - what we do and why we do it",
};

export default function AboutPage() {
    return (
        <>
            <Image src="/images/about_us_hero.png" alt="About NodeBench" width={1980} height={120}
                className="w-full h-48 object-cover mb-8" />

            <Main>
                <h1 className="font-medium text-4xl tracking-tight mb-8">Benchmarks that <span className="tracking-tighter font-semibold">Matter</span></h1>

                <Paragraph>
                    At NodeBench, we&apos;re more than just reviewers – <b>we&apos;re technology enthusiasts</b> dedicated to demystifying the world of Single Board Computers and IoT devices.
                </Paragraph>
                <Paragraph>
                    Founded by passionate makers and tech experts, our mission is to provide in-depth, unbiased benchmarks that help developers, hobbyists, and professionals make informed hardware choices. We dig deep into every device, going beyond specifications to reveal true performance, potential, and practical applications.
                </Paragraph>

                <Subtitle subtitle="Team" />
                <Paragraph>
                    Hey there! I&apos;m Tushar - by day, a web technologist at Orangewood Labs, by night, a hardware hacker with an obsession for Raspberry Pis and an unhealthy love affair with 3D printers. When most people unwind with Netflix, I&apos;m soldering circuits and benchmarking single board computers. NodeBench is basically my digital playground where I get to turn my tech addiction into something useful (or at least, that&apos;s what I tell myself). Expect honest reviews, geeky insights, and the occasional dad joke about microcontrollers.
                </Paragraph>
            </Main>

            <Image src="/images/people.png" alt="NodeBench Team" width={1980} height={120}
                className="w-full h-auto object-cover mt-10 xl:hidden" />
        </>
    )
}