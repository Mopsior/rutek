import { Button } from "./ui/button"
import Image from "next/image";

export const Hero = () => {
    return (
        <main className="flex justify-between lg:flex-row flex-col lg:mb-10 mb-20">
            <div className="lg:w-1/2 w-full">
                <p className="bg-primary/20 px-4 py-1 rounded-xl border border-primary w-fit text-center text-sm lg:mx-0 mx-auto">Polski serwis klimatyzacji i rekuperów</p>
                <h1 className="lg:text-6xl text-5xl lg:text-start text-center leading-[1.1] font-black text-balance mt-4">Zawsze świeże <span className="ml-1 text-primary" data-text="powietrze">powietrze</span> dla twojego biznesu</h1>
                <div className="mt-12 flex gap-x-8 items-center lg:flex-row flex-col gap-y-4">
                    <Button className="text-lg !py-6 shadow-md cursor-pointer" size={'lg'}>Zadzwoń do nas</Button>
                    <p className="text-muted-foreground text-sm">Zaufało nam ponad 200 klientów!</p>
                </div>
            </div>
            <div className="lg:w-1/2 lg:flex lg:justify-end justify-center lg:-mr-14 hidden ">
                <Image src="/klimatyzator.png" alt="Description of image" height={512} width={512} className="lg:-mt-20" />
            </div>
        </main>
    )
}