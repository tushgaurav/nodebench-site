import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "nodebench.com",
        template: "%s | nodebench",
    }
};

export default function ReviewsPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container mx-auto my-4 px-4 mb-20">
            {children}
        </div>
    );
}
