'use client'
import { copy } from "@/lib/copy";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Clipboard } from "lucide-react";

export const ContactDialogHandler = ({ children, template }: { children: React.ReactNode, template?: string }) => (
    <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{!template ? "Zadzwoń do nas!" : "Napisz do nas!"}</DialogTitle>
                <DialogDescription>
                    Skontaktuj się z nami, aby uzyskać więcej informacji.
                </DialogDescription>
            </DialogHeader>
            <div className="flex gap-x-4">
                <Input value={process.env.NEXT_PUBLIC_PHONE_NUMBER} readOnly/>
                <Button variant={'outline'} className="cursor-pointer" onClick={() => copy(process.env.NEXT_PUBLIC_PHONE_NUMBER || '')}><Clipboard /></Button>
            </div>
            { template && (<>
                <p className="text-sm text-muted-foreground">Wiadomość możesz zacząć od:</p>
                <code className="border bg-muted/80 px-4 py-2 rounded-lg shadow-xs max-w-full overflow-x-auto">
                    <pre>{template}</pre>
                </code>
            </>)}
            <DialogFooter className="flex justify-end mt-2">
                <DialogClose asChild>
                    <Button type="submit" className="w-fit cursor-pointer">Zamknij</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
)