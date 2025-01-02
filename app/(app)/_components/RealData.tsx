import BackgroundImageSection from "@/components/ui/background-image-section"
import background from "./images/realdata_background.png"

export default function RealData() {
    return (
        <BackgroundImageSection image={background}>
            <h2 className="text-4xl md:pt-10 font-semibold tracking-tight text-brand_orange">
                Real Data.<br />
                Real Insights.<br />
                Real Analysis. <br />
            </h2>

            <p className="max-w-[50ch] pt-10 md:py-10">
                Discover the most comprehensive and honest reviews of Single Board Computers, IoT devices, and emerging hardware technologies. Our in-depth analysis goes beyond specifications to reveal real-world performance and potential.
            </p>
        </BackgroundImageSection>
    )
}

