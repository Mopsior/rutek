import { cn } from "@/lib/utils"
import { ClassNameValue } from "tailwind-merge"

export const H1 = ({ children, className, ...props }: { children: React.ReactNode, className?: string }) => (
    <h1 className={cn("lg:text-6xl text-5xl leading-[1.1] font-black text-balance tracking-tight", className)} {...props}>{children}</h1>
)

export const H2 = ({ children, className, ...props }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-4xl font-bold tracking-tight", className)} {...props}>{children}</h2>
)

export const P = ({ children, className, ...props }: { children: React.ReactNode, className?: string }) => (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props}>{children}</p>
)