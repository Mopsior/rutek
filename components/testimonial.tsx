import { Opinions } from "./opinions"
import { H2 } from "./typo"

export const Testimonial = () => {
    return (
        <div className="website-margin mt-20" id="opinions">
            <H2 className="text-center">Co mówią o nas klienci</H2>
            <div className="mt-14 flex flex-row justify-around gap-10 lg:flex-nowrap flex-wrap">
                <Opinions name="Adrian Stasiak" stars={4} priority={2}>
                    Ceny są według mnie uczciwe, a za jakość usługi warto zapłacić. Polecam każdemu, kto szuka rzetelnej firmy do serwisu rekuperacji i wentylacji.
                </Opinions>
                <Opinions name="p. Krzysztof" stars={5} priority={1}>
                    Podczas serwisu pracownicy dokładnie sprawdzili cały system, wyczyścili filtry i wyregulowali urządzenie tak, że działa teraz znacznie ciszej i wydajniej. Zauważyłem też poprawę jakości powietrza w domu, co dla mnie jest bardzo ważne. Na plus zasługuje również to, że po zakończonej pracy wszystko zostało posprzątane.
                </Opinions>
                <Opinions name="Natalia Słowik" stars={4} priority={3}>
                    Jestem bardzo zadowolona z usług serwisu rekuperatorów oraz wentylacji, z którego ostatnio korzystałam. Fachowcy podeszli do sprawy profesjonalnie – już na etapie pierwszego kontaktu wszystko zostało mi jasno wytłumaczone, a termin wizyty został szybko ustalony.
                </Opinions>
            </div>
        </div>
    )
}