import Link from "next/link"
import { SquareArrowOutUpRight } from "lucide-react"
import { H2 } from "./typo"

export const HistoryCallout = () => {
    return (
        <div className="bg-primary text-background mt-20 px-[10%] py-10 flex flex-col lg:flex-row lg:gap-y-0 gap-y-16 gap-x-16">
            <div className="flex flex-col justify-center">
                <H2>Jedyni których potrzebujesz</H2>
                <p className="mt-3">Jesteśmy zespołem specjalistów z 19-letnim doświadczeniem w serwisowaniu wentylacji oraz 11-letnim w branży klimatyzacji. Od lat dbamy o sprawność i bezpieczeństwo instalacji zarówno w <span className="highlight">domach jednorodzinnych</span>, jak i w <span className="highlight">dużych obiektach przemysłowych</span>.</p>
                <Link href="/about" className="text-background font-semibold flex gap-x-2 items-center hover:underline transition-all mt-4 underline-offset-4">Dowiedz się więcej <SquareArrowOutUpRight size={16} className="mt-[2px]" /></Link>
            </div>
        </div>
    )
}