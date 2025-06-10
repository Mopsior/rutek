import { H1 } from "@/components/typo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex items-center justify-center flex-col gap-4">
            <H1 className="text-primary !text-9xl">404</H1>
            <h3>Nie znaleziono strony</h3>
            <Link href="/" className="mt-4">
                <Button variant="outline" className="cursor-pointer" size={'lg'}>Powrót do strony głównej</Button>
            </Link>
        </div>
    )
}