import type { Metadata } from "next";
import { Main, Paragraph, Subtitle, Title } from "@/components/ui/static-pages";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Reach out to NodeBench for collaborations, device reviews, and partnership opportunities",
};

export default function AboutPage() {
    return (
        <>
            <Main>
                <Title title="Contact Us" />
                <Paragraph className="mb-10">
                    Have a burning tech question, want to discuss a hardware project, or just geek out about computers? I&apos;m all ears!
                </Paragraph>

                <Subtitle subtitle="Reach Out" />
                <ul className="mb-6">
                    <li>Email: <a href="mailto:contact@nodebench.com" className="underline">contact@nodebench.com</a>
                        {" "} or <a href="mailto:iamtushgaurav@gmail.com" className="underline">iamtushgaurav@gmail.com</a>
                    </li>
                    <li>Twitter/X: <Link href="https://x.com/tushgaurav">@tushgaurav</Link></li>
                </ul>

                <Subtitle subtitle="Collaboration & Submissions" />
                <Paragraph>
                    Manufacturers, developers, or makers with interesting hardware? Check out our contact form for details on product reviews and collaboration.
                </Paragraph>

                <Subtitle subtitle="Got Feedback?" />
                <Paragraph>
                    Your insights drive NodeBench forward. Whether it&apos;s a review suggestion, a testing methodology critique, or just a random tech observation, I want to hear it. Consider submitting a PR on nodebench&apos;s github repository.
                </Paragraph>

                <Paragraph>
                    PS: Response time may vary depending on current benchmarking projects and caffeine levels.
                </Paragraph>
            </Main >
        </>
    )
}