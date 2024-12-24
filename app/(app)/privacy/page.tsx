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
            <h1 className="text-4xl font-semibold mb-6">
                yes, we're complying to this GDPR thing.
            </h1>
            <Paragraph>
                Here's your superfluous notice letting you know that we're not selling your info, you're free to use our service without worry, yada yada. We're "GDPR compliant." We do this whole file uploading and sharing thing to make your life easier, not to make money off of your data or whatever... we wouldn't even know how to do such a thing.
            </Paragraph>
            <Paragraph>
                We're not lawyers, but we're pretty sure we're doing this right. If you have any questions or concerns, feel free to <a href="/contact">contact us</a>. If you want an official "privacy policy," just scroll down and read the boring stuff below. We promise it’s there.
            </Paragraph>

            <PPAccordions />
        </Main>
    )
}