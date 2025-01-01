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
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                     className="tracking-tighter text-7xl font-bold">Benchmarks <br />that matter
                    </motion.h1>
                    <SearchBar />
                </div>
            </div>
            <Image
                src={heroImage}
                alt="bunch of single board computers at a table"
                className="object-cover w-full h-96"
            />
        </section>
    )
}