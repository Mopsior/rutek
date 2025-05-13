import { Button } from "./ui/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "./ui/card"

export const ServiceCard = ({ title, children, template }: { title: string, children: string, template: string }) => {
    return (
        <Card className="w-96 gap-y-2">
            <CardHeader>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{children}</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-y-2 mt-4">
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=${encodeURIComponent(template)}`}className="w-full"><Button className="w-full cursor-pointer" variant={'outline'}>Napisz e-maila</Button></a>
                <a href={`sms:${process.env.NEXT_PUBLIC_PHONE_NUMBER}?body=${encodeURIComponent(template)}`}className="w-full"><Button className="w-full cursor-pointer">Napisz SMS'a</Button></a>
            </CardFooter>
        </Card>
    )
}