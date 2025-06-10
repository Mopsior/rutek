'use client'

import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "./button"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const CarouselImage = ({ src, alt, openGallery }: { src: string, alt: string, openGallery?: boolean }) => {
    const [isHovering, setIsHovering] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    return (
        <motion.div
            className={cn("group relative overflow-hidden flex min-w-[280px] min-h-[320px] bg-slate-400 rounded-xl shadow-lg justify-center items-center flex-shrink-0 px-2", {
                'animate-pulse': isLoading,
            })}
            whileHover={{ scale: 1.05 }}
            onHoverStart={openGallery ? () => setIsHovering(true) : undefined}
            onHoverEnd={openGallery ? () => setIsHovering(false) : undefined}
            onTapStart={openGallery ? () => setIsHovering(true) : undefined}
            onTapCancel={openGallery ? () => setIsHovering(false) : undefined}
        >
            {openGallery && isHovering && (
                <motion.div
                    className="bg-black/50 w-full absolute h-full inset-0 z-10 opacity-100 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <MotionLink
                        href="/about/gallery"
                        className="absolute bottom-6 w-4/5 left-1/2 transform -translate-x-1/2 z-20"
                        animate={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                    >
                        <Button variant={'outline'} className="w-full cursor-pointer hover:bg-stone-200 shadow-lg">Więcej</Button>
                    </MotionLink>
                </motion.div>
            )}
            <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} loading="lazy" onLoad={() => setIsLoading(false)} />
        </motion.div>
    )
}

const MotionLink = motion.create(Link)