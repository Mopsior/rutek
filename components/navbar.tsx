import { Fan, Hammer, Menu, Speech, Users } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { ContactDialogHandler } from "./dialog"
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { DialogDescription } from "./ui/dialog"

export const Navbar = () => {
    return (
        <nav className="border rounded-xl md:w-4/5 w-11/12 fixed top-5 left-1/2 -translate-x-1/2 bg-white shadow-lg p-4 pl-8 flex justify-between items-center z-50">
            <MobileMenu />
            <Link href="/">
                <div className="flex gap-x-2 items-center">
                    <Fan className="text-primary md:inline hidden" />
                    <p className="text-lg font-semibold text-foreground md:text-primary">SEO-Instal</p>
                </div>
            </Link>
            <div className="md:flex gap-x-8 hidden">
                <Link href="/#services" className="link">Usługi</Link>
                <Link href="/#opinions" className="link">Opinie</Link>
                <Link href="/about" className="link">O nas</Link>
            </div>
            <div className="flex gap-x-4">
                <ContactDialogHandler>
                    <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}><Button className="cursor-pointer">Zadzwoń</Button></Link>
                </ContactDialogHandler>
            </div>
        </nav>
    )
}

const MobileMenu = () => (
    <Drawer>
        <DrawerTrigger asChild>
            <div className="md:hidden inline cursor-pointer" role="button" aria-label="Menu">
                <Menu className="text-primary" />
            </div>  
        </DrawerTrigger>
        <DrawerContent className="px-10 pb-4">
            <DrawerHeader>
                <DrawerTitle className="text-4xl font-extrabold tracking-tight text-primary text-center" asChild>
                    <Link href={"/"}>
                        SEO-Instal
                    </Link>
                </DrawerTitle>
                <DialogDescription></DialogDescription>
            </DrawerHeader>
            <div className="flex flex-col gap-y-2 *:text-lg *:flex *:gap-x-2">
                <Link href="/#services" className="link"><Hammer />Usługi</Link>
                <Link href="/#opinions" className="link"><Speech />Opinie</Link>
                <Link href="/about" className="link"><Users />O nas</Link>
            </div>
            <DrawerFooter className="mt-2">
                <ContactDialogHandler>
                    <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className="w-full">
                        <Button className="w-full">Zadzwoń</Button>
                    </Link>
                </ContactDialogHandler>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
)