import { cn } from "@/lib/utils"

type BrandButtonProps = React.ComponentPropsWithoutRef<"button">

export default function Button({children, className, ...props }: BrandButtonProps) {
    return (
        <button className={cn(
            "bg-brand_orange text-white px-4 py-2",
             "hover:bg-brand_orange-light hover:text-orange-100 transition-colors",
             className)} {...props}>
            {children}
        </button>
    )
}