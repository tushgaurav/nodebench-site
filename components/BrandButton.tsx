type BrandButtonProps = React.ComponentPropsWithoutRef<"button">

export default function Button({ children }: BrandButtonProps) {
    return (
        <button className="bg-brand_orange text-white px-4 py-2 rounded-md">
            {children}
        </button>
    )
}