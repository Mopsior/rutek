import { Fan, Menu } from "lucide-react"
import { Button } from "./ui/button"

export const Navbar = () => {
    return (
        <nav className="border rounded-xl md:w-4/5 w-11/12 fixed top-5 left-1/2 -translate-x-1/2 bg-white shadow-lg p-4 pl-8 flex justify-between items-center">
            <div className="md:hidden inline">
                <Menu className="text-primary" />
            </div>
            <div className="flex gap-x-2 items-center">
                <Fan className="text-primary md:inline hidden" />
                <p className="text-lg font-semibold text-foreground md:text-primary">SEO-Install</p>
            </div>
            <div className="md:flex gap-x-8 hidden">
                <a href="/services" className="link">Usługi</a>
                <a href="/about" className="link">O firmie</a>
            </div>
            <div className="flex gap-x-4">
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}><Button variant="outline" className="cursor-pointer md:inline hidden ">Wyślij e-maila</Button></a>
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}><Button className="cursor-pointer">Zadzwoń</Button></a>
            </div>
        </nav>
    )
}