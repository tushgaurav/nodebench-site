"use client"
import { motion } from "motion/react"
import SearchBar from "@/app/_components/SearchBar";

export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/edit.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 bottom-20 bg-gradient-to-b from-black/30 to-black/70">
                <div className="section-container px-6 h-full flex flex-col justify-center items-center">
                    <div className="md:max-w-6xl text-center space-y-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            className="tracking-tight text-4xl md:text-5xl lg:text-8xl font-black text-white drop-shadow-lg"
                        >
                            Real Performance <br />
                            <span className="text-red-500">Real Results</span>
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="w-full max-w-2xl mx-auto"
                        >
                            <SearchBar />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}