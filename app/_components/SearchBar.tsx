/**
 * nodebench Search
 * v0.1.1 - Using data from public route, data generated at build time.
 */

"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import reviews from "@/public/data/reviews.json"
import articles from "@/public/data/articles.json"
import type { ReviewMetadata, ArticleMetadata } from "@/lib/types"


function searchFromMetadata(searchString: string, reviews: ReviewMetadata[], articles: ArticleMetadata[]) {
    const searchResults = [...reviews, ...articles].filter((item) => {
        return item.title.toLowerCase().includes(searchString.toLowerCase())
    })

    return searchResults

}

export default function SearchBar() {
    const [searchString, setSearchString] = useState<string>("")

    return (
        <div className="flex items-center">
            <div className="relative md:w-80">
                <Input type="text" placeholder="" className="pl-8 rounded-none bg-zinc-100" value={searchString} onChange={(e) => {
                    setSearchString(e.target.value)
                }} />
                {
                    searchString.length > 0 && (
                        <div className="absolute z-10 top-9 w-80 bg-gray-100 shadow-lg">
                            {searchFromMetadata(searchString, reviews, articles).map((review) => {
                                return (
                                    <Link href={review.url} key={review.url}>
                                        <div className="p-4 hover:bg-orange-200 border-b-2">
                                        <h3 className="text-sm font-semibold">{review.title}</h3>
                                        <p className="text-xs">{review.description}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    )
                }
                <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400 dark:text-gray-600" />
            </div>
            <button className="flex items-center gap-2 bg-brand_orange px-6 py-2 hover:bg-opacity-90 transition-colors">
                <span className="text-sm font-bold text-white">Search</span>
            </button>
            {/* {searchString.length > 0 && (
                <div className="absolute top-12 w-80 bg-white rounded-lg shadow-lg">
                    {searchFromMetadata(searchString, reviews).map((review: any) => {
                        return (
                            <div key={review.url} className="p-4 border-b border-gray-200">
                                <h3 className="text-lg font-semibold">{review.title}</h3>
                                <p className="text-sm">{review.description}</p>
                            </div>
                        )
                    
                    })}
                </div>
            )} */}
        </div>
    )
}