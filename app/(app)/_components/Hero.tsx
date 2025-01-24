"use client"

import { motion } from "motion/react"
import SearchBar from "@/app/_components/SearchBar";
import Image from "next/image";

import heroImage from "./images/hero.png"

export default function Hero() {
    return (
        <section className="relative">
            <div className="section-container px-6">
                <div className="absolute px-4 py-16  flex flex-col justify-between h-full  ">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        className="tracking-tighter text-5xl md:text-7xl animate-text  md:bg-gradient-to-b from-orange-900 to-black bg-clip-text md:text-transparent font-semibold md:font-black"
                    >
                        Real Performance <br />
                        Real Results
                    </motion.h1>
                    <SearchBar />
                </div>
            </div>
            <Image
                src={heroImage}
                alt="bunch of single board computers at a table"
                className="object-cover w-full h-96 "
                priority
                placeholder="blur"
                quality={50}
            />
        </section>
    )
}