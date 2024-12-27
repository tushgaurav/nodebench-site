import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchBar() {
    return (
        <div className="flex items-center">
            <div className="relative w-80">
                <Input type="text" placeholder="" className="pl-8 rounded-none bg-gray-200" />
                <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400 dark:text-gray-600" />
            </div>
            <button className="flex items-center gap-2 bg-brand_orange px-4 py-2 hover:bg-opacity-90 transition-colors">
                <span className="text-sm font-bold text-white">Search</span>
            </button>
        </div>
    )
}