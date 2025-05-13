import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export default function Home() {
    return (
        <div className="lg:mt-64 mt-32 mb-20 px-[10%]">
            <Hero />
            <Services />
        </div>
    )
}