import { cn } from "@/lib/utils"
import Image from "next/image"

export default function BackgroundImageSection({ image, className, children }:
    { image: string, className?: string, children: React.ReactNode }) {
    return (
        <section className={cn("relative max-h-80 min-h-60 overflow-hidden", className)}>
            <div className="section-container">
                <div className="absolute p-6 h-full flex flex-col justify-center">
                    {children}
                </div>
            </div>
            <Image src={image} alt="background image" width="1500" height="2500" className="
               object-none object-center w-full h-full 
            " />
        </section>
    )
}