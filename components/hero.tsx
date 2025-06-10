import Link from "next/link";
import { ContactDialogHandler } from "./dialog";
import { Button } from "./ui/button"
import Image from "next/image";
import { H1 } from "./typo";

export const Hero = () => {
    return (
        <main className="flex justify-between lg:flex-row flex-col lg:mb-10 mb-20 website-margin">
            <div className="lg:w-1/2 w-full">
                <p className="bg-primary/20 px-4 py-1 rounded-xl border border-primary w-fit text-center text-sm lg:mx-0 mx-auto mb-10 md:mb-0">Polski serwis klimatyzacji i rekuperów</p>
                <H1 className="lg:text-start text-center mt-4">Zawsze świeże <span className="ml-1 text-primary" data-text="powietrze">powietrze</span> dla twojego biznesu</H1>
                <div className="mt-12 flex gap-x-8 items-center lg:flex-row flex-col gap-y-4">
                    <ContactDialogHandler>
                        <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
                            <Button className="text-lg !py-6 shadow-md cursor-pointer" size={'lg'}>Zadzwoń do nas</Button>
                        </Link>
                    </ContactDialogHandler>
                    <p className="text-muted-foreground text-sm">Zaufało nam <b>200+</b> klientów!</p>
                </div>
            </div>
            <div className="lg:w-1/2 lg:flex lg:justify-end justify-center lg:-mr-14 hidden" aria-hidden>
                <Image src="/klimatyzator-new.png" alt="Wentylator" height={512} width={512} className="lg:-mt-20" />
            </div>
        </main>
    )
}