import { cn } from "@/lib/utils";

export function Title({ title, className }: { title: string, className?: string }) {
    return (
        <h1 className={cn(
            "text-2xl font-semibold tracking-tight mt-6 mb-4",
            className
        )}>{title}</h1>
    )
}

export function Subtitle({ subtitle, className }: { subtitle: string, className?: string }) {
    return (
        <h2 className={cn(
            "text-lg mb-2 font-semibold tracking-tight",
            className
        )}>{subtitle}</h2>
    )
}

export function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className="container max-w-7xl mx-auto px-6 mb-20 pt-2">
            {children}
        </main>
    )
}

export function Paragraph({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
        <p className={cn(
            "mb-6 max-w-[82ch]",
            className
        )}>{children}</p>
    )
}