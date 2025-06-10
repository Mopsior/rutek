import { toast } from "sonner"
import { catchError } from "./catch-error"

export const copy = async (content: string) => {
    const [error] = await catchError(navigator.clipboard.writeText(content))
    if (error) {
        console.error("Failed to copy text:", error)
        toast.error("Nie udało się skopiować tekstu. Spróbuj ponownie.")
        return
    }

    return toast.success("Tekst został skopiowany!")
}