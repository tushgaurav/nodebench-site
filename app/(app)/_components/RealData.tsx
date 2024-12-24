import BackgroundImageSection from "@/components/ui/background-image-section"

export default function RealData() {
    return (
        <BackgroundImageSection image="/images/realdata_background.png">
            <h2 className="text-3xl font-semibold tracking-tight text-brand_orange">
                Real Data.<br />
                Real Insights.<br />
                Real Analysis. <br />
            </h2>

            <p className="max-w-[50ch] mt-6">
                Discover the most comprehensive and honest reviews of Single Board Computers, IoT devices, and emerging hardware technologies. Our in-depth analysis goes beyond specifications to reveal real-world performance and potential.
            </p>
        </BackgroundImageSection>
    )
}

