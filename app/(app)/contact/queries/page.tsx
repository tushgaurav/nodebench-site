import type { Metadata } from "next";
import { Main, Title } from "@/components/ui/static-pages";
import QueryForm from "./QueryForm";

export const metadata: Metadata = {
    title: "Query Form - Contact Us",
    description: "Reach out to NodeBench for collaborations, device reviews, and partnership opportunities",
};

export default function AboutPage() {
    return (
        <>
            <Main>
                <Title title="Contact Us" />
                
                <QueryForm />
            </Main >
        </>
    )
}