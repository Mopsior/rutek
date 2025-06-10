'use client'

import { H1 } from "@/components/typo";
import { imgGalleryDataset } from "@/lib/utils";
import { Undo } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ITEMS_PER_PAGE = 3;

export default function AboutGallery() {
    const [displayedImages, setDisplayedImages] = useState<string[]>([]);
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView();

    useEffect(() => {
        const endIndex = page * ITEMS_PER_PAGE;
        setDisplayedImages(imgGalleryDataset.slice(0, endIndex));
    }, [page]);

    useEffect(() => {
        if (inView && displayedImages.length < imgGalleryDataset.length) {
            setPage(prev => prev + 1);
        }
    }, [inView, displayedImages.length]);

    return (
        <main className="website-margin mt-34">
            <Link href={'/about'}>
                <div className="text-muted-foreground flex gap-x-2 items-center justify-center w-fit px-4 py-2 transition-all hover:bg-gray-200 hover:text-foreground rounded-lg mb-2 cursor-pointer">
                    <Undo size={16} />
                    <p>Powrót</p>
                </div>
            </Link>
            <H1 className="!text-4xl text-primary">Galeria</H1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedImages.map((img, index) => (
                    <div key={index} className="w-full relative bg-slate-400 h-fit">
                        <Image 
                            src={img} 
                            alt={`Galeria ${index + 1}`} 
                            loading="lazy" 
                            width={1600} 
                            height={1200}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
            {displayedImages.length < imgGalleryDataset.length && (
                <div ref={ref} className="w-full h-10 mt-4" />
            )}
        </main>
    )
}