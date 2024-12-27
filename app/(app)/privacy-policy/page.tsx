import type { Metadata } from "next";
import Title, { Main, Paragraph } from "@/components/ui/static-pages";
import PPAccordions from "./_components/PPAccordians";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Our privacy policy",
};

export default function PrivacyPolicyPage() {
    return (
        <Main>
            <Title title="Privacy Policy" />
            <h1 className="text-5xl font-semibold mt-10 mb-12 hover:rotate-3 transition-transform group">
                yes, we&apos;re complying to this GDPR thing
                <span className="hidden px-4 group-hover:inline-block">
                    🤷‍♂️
                </span>
            </h1>
            <Paragraph>
                Here&apos;s your superfluous notice letting you know that we&apos;re not selling your info, you&apos;re free to use our service without worry, yada yada. We&apos;re &quot;GDPR compliant.&quot; We do this whole file uploading and sharing thing to make your life easier, not to make money off of your data or whatever... we wouldn&apos;t even know how to do such a thing.
            </Paragraph>
            <Paragraph>
                We&apos;re not lawyers, but we&apos;re pretty sure we&apos;re doing this right. If you have any questions or concerns, feel free to <a href="/contact">contact us</a>. If you want an official &quot;privacy policy,&quot; just scroll down and read the boring stuff below. We promise it&apos;s there.
            </Paragraph>

            <PPAccordions />
        </Main>
    )
}