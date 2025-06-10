import { Hero } from "@/components/hero";
import { HistoryCallout } from "@/components/history-callout";
import { Services } from "@/components/services";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
    return (
        <div className="lg:mt-64 mt-36">
            <Hero />
            <Services />
            <HistoryCallout />
            <Testimonial />
        </div>
    )
}