"use client";
import { motion } from "framer-motion"
import { LampContainer } from "./ui/lamp"
import { DrLogo } from "./drlogo";
export default function Focus()
{
    return ( <div className="mt-0 flex flex-col w-full items-center justify-center text-center">
    <LampContainer>
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight md:text-7xl"
    >
      User Centric <br /> <span className="text-grey-600 text-2xl">Focuses Diseases and Symptoms</span> 
    </motion.h1>
  </LampContainer>
    </div>
    )
}