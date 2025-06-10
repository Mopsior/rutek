import Link from "next/link"
import { Button } from "./ui/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "./ui/card"
import { ContactDialogHandler } from "./dialog"

export const ServiceCard = ({ title, children, template }: { title: string, children: string, template: string }) => {
    return (
        <Card className="w-96 gap-y-2 flex justify-between">
            <div>
                <CardHeader>
                    <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{children}</p>
                </CardContent>
            </div>
            <CardFooter className="flex flex-col gap-y-2 mt-4">
                <ContactDialogHandler template={template}>
                    <Link href={`sms:${process.env.NEXT_PUBLIC_PHONE_NUMBER}?body=${encodeURIComponent(template)}`}className="w-full"><Button className="w-full cursor-pointer">Napisz SMS'a</Button></Link>
                </ContactDialogHandler>
            </CardFooter>
        </Card>
    )
}