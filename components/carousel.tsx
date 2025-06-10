import { cn } from "@/lib/utils"
import { CarouselImage } from "./ui/carousel-image"

export const Carousel = ({ dataset, delayed, openGallery }: { dataset: string[], delayed?: boolean, openGallery?: boolean }) => {
    return (<>
        <div className="mx-auto lg:w-4/5 w-full overflow-hidden flex gap-x-4 h-full p-8 group carousel-gradient">
            <CarouselGroup delayed={delayed}>
                {[...dataset].map((img, index) => (
                    <CarouselImage 
                        key={`first-${index}`}
                        src={img}
                        alt={!openGallery ? `Nieprawidłowe instalacje ${index + 1}` : `Przykładowa instalcaj ${index + 1}`}
                        openGallery={openGallery}
                    />
                ))}
            </CarouselGroup>
            <CarouselGroup delayed={delayed}>
                {[...dataset].map((img, index) => (
                    <CarouselImage 
                        key={`second-${index}`}
                        src={img}
                        alt={!openGallery ? `Nieprawidłowe instalacje ${index + 1}` : `Przykładowa instalcaj ${index + 1}`}
                        openGallery={openGallery}
                        aria-hidden
                    />
                ))}
            </CarouselGroup>
        </div>
    </>)
}

const CarouselGroup = ({ children, delayed }: { children: React.ReactNode, delayed?: boolean }) => (
    <div className={cn("flex gap-x-4 will-change-transform animate-carousel group-hover:[animation-play-state:_paused]", {
        "fast-animation": delayed
    })}>
        {children}
    </div>
)