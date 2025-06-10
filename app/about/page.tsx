import { Carousel } from "@/components/carousel";
import { ContactDialogHandler } from "@/components/dialog";
import { H1, H2, P } from "@/components/typo";
import { Button } from "@/components/ui/button";
import { dirtyImgDataset, imgGalleryDataset } from "@/lib/utils";
import Link from "next/link";

export default function About() {
    return (
        <main className="website-margin mt-34">
            <H1 className="text-center text-primary">O nas</H1>
            <div className="about-margins mx-auto mt-8">
                <P className="text-lg">Jesteśmy zespołem specjalistów z <b>19-letnim doświadczeniem w serwisowaniu wentylacji</b> oraz <b>11-letnim w branży klimatyzacji</b>. Od lat dbamy o sprawność i bezpieczeństwo instalacji zarówno w <span className="highlight">domach jednorodzinnych</span>, jak i w <span className="highlight">dużych obiektach przemysłowych</span>.</P>
                <P className="text-lg font-semibold">Serwisujemy między innymi:</P>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-lg">
                    <li>Centrale wentylacyjne w domach i halach produkcyjnych,</li>
                    <li>Klimatyzacje domowe typu split i multisplit</li>
                    <li>Systemy klimatyzacji VRF</li>
                    <li>Rekuperatory renomowanych firm</li>
                    <li>Urządzenia wentylacyjne i klimatyzacyjne stosowane w budynkach mieszkalnych i komercyjnych</li>
                    <li>I inne</li>
                </ul>
                <P className="text-lg">Serwisujemy wiele producentów wentylacji i klimatyzacji. Nie boimy się żadnego wyzwania i podejmiemy się nawet najbardziej skomplikowanych instalacjii.</P>
            </div>
            <div className="mx-auto about-margins mt-16">
                <H2 className="text-center text-primary">Dlaczego warto serwisować?</H2>
                <P className="text-lg">Regularny serwis to gwarancja sprawnego i bezpiecznego działania Twojej instalacji. Zaniedbane urządzenia mogą prowadzić do awarii, spadku wydajności oraz pogorszenia jakości powietrza w pomieszczeniach. To realne zagrożenia, których można uniknąć dzięki systematycznym przeglądom i czyszczeniu. Dbając o serwis, oszczędzasz na kosztownych naprawach i chronisz zdrowie swoje oraz swoich bliskich.</P>
            </div>
            <Carousel dataset={dirtyImgDataset} />
            <div className="mx-auto about-margins mt-16">
                <H2 className="text-center text-primary">Zobacz nas w akcji!</H2>
                <p className="text-lg text-center text-muted-foreground mt-2">Zobacz, jak pracujemy i jakie efekty osiągniesz dzięki naszym usługom.</p>
            </div>
            <Carousel dataset={imgGalleryDataset} openGallery delayed />
            <div className="flex w-full justify-center mt-8">
                <ContactDialogHandler>
                    <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
                        <Button className="text-lg !py-6 shadow-md cursor-pointer" size={'lg'}>Zadzwoń do nas</Button>
                    </Link>
                </ContactDialogHandler>
            </div>
        </main>
    )
}