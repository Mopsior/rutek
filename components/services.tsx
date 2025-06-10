import Link from "next/link"
import { ServiceCard } from "./service-card"
import { H2 } from "./typo"

export const Services = () => {
    return (
        <section className="website-margin" id="services">
            <H2 className="text-center">Usługi</H2>
            <div className="flex flex-row justify-evenly flex-wrap gap-8 mt-12">
                <ServiceCard
                    title="Serwis scen wentylacyjnych"
                    template="Temat: Serwis scen wentylacyjnych"
                >
                    Zadbaj o prawidłową wentylację w pomieszczeniach, gdzie wymagana jest szczególna kontrola przepływu powietrza. Nasz serwis obejmuje diagnostykę, czyszczenie oraz konserwację wszystkich elementów scen wentylacyjnych, zapewniając bezpieczeństwo i komfort użytkowania nawet w wymagających warunkach
                </ServiceCard>
                <ServiceCard
                    title="Serwis centralnej wentylacyji w domach i halach produkcyjnych"
                    template="Temat: Serwis centralnej wentylacyji w domach i halach produkcyjnych"
                >
                    Kompleksowa obsługa central wentylacyjnych – od przeglądów technicznych, przez czyszczenie i dezynfekcję, po naprawy i modernizację. Dzięki regularnemu serwisowi utrzymasz wysoką wydajność systemu, czyste powietrze oraz minimalizujesz ryzyko awarii – zarówno w domach, jak i dużych halach produkcyjnyc
                </ServiceCard>
                <ServiceCard
                    title="Serwis klimatyzacji VRF i tzw. domowych"
                    template="Temat: Serwis klimatyzacji VRF i tzw. domowych"
                >
                    Profesjonalny serwis nowoczesnych systemów VRF oraz tradycyjnych klimatyzacj domowych. Oferujemy przeglądy, czyszczenie, odgrzybianie, uzupełnianie czynnika chłodniczego oraz naprawy – wszystko po to, by zapewnić komfort, zdrową atmosferę i energooszczędne działanie urządzeń
                </ServiceCard>
                <ServiceCard
                    title="Serwis rekuperatorów domowych"
                    template="Temat: Serwis rekuperatorów domowych"
                >
                    Regularny serwis rekuperatorów to gwarancja świeżego powietrza i optymalnej pracy systemu odzysku ciepła. Wymieniamy filtry, czyścimy wymienniki, sprawdzamy poprawność działania automatyki oraz wykonujemy niezbędne naprawy, aby Twój dom był zdrowy i energooszczędny
                </ServiceCard>
            </div>
            <p className="text-center text-muted-foreground mt-8 lg:max-w-2/5 mx-auto"><b>Potrzebujesz czegoś innego?</b> Poradzimy sobie z każdym problemem i do każdego podchodzimy indywidualnie - <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className="link hover:underline"><b>zadzwoń do nas</b></Link></p>
        </section>
    )
}