import Link from "next/link";
import { ContactDialogHandler } from "./dialog";

export const Footer = () => (
    <footer className="py-10 bg-background text-muted-foreground/80 website-margin border-t mt-20">
        <div className="md:grid md:grid-cols-2">
            <div className="*:mt-0.5">
                <h3 className="text-4xl font-extrabold tracking-tight lg:text-5xl">SEO-Install</h3>
                <p className="!mt-4">SEO - instal ŁUKASZ TRZNADEL</p>
                <p>NIP: 9291641724</p>
                <p>REGON: 080089733</p>
                <p>ul. Juliusza Kossaka 27, 65-140 Zielona Góra</p>
            </div>
            <div className="md:text-end md:mt-auto mt-4 *:mt-0.5">
                <p>Telefon: <ContactDialogHandler>
                        <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className="link hover:underline underline-offset-2">
                            {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                        </Link>
                    </ContactDialogHandler>
                </p>
            </div>
        </div>
        <p className="mt-8 text-center">Strona zrobiona przez <Link href="https://github.com/mopsior" className="link underline underline-offset-3 decoration-1">@mopsior</Link></p>
    </footer>
)