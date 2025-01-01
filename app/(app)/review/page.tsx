import fs from 'fs';
import { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { Main, Title } from '@/components/ui/static-pages';

export const metadata: Metadata = {
    title: "Hardware Reviews",
    description: "Review page description",
};

const pages = fs
    .readdirSync("app/(app)/review", { withFileTypes: true })
    .filter((file) => file.isDirectory())
    .map((folder) => folder.name)
    .filter(
        (folder) =>
            !folder.startsWith("(") && !folder.startsWith("_") && folder !== "og",
    );

const reviews = pages.map((page) => {
    try {
        const { metadata } = require(`./${page}/page.mdx`);
        const { reviewInfo } = require(`./${page}/page.mdx`);

        return {
            title: metadata.title,
            url: `review/${page}`,
            ...metadata,
            ...reviewInfo
        };
    } catch (error) {
        console.error(`Error loading metadata for ${page}:`, error);
        return null;
    }
}).filter(Boolean).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


function FeaturedReviewCard({ title, image, description, author, date, link }: { title: string, image: string, description: string, author: {
    name: string, url: string
}, date: string, link: string }) {
    return (
        <div className="py-2">
            <Image
                src={image}
                height={200}
                width={400}
                alt={title}
            />
            <div>
                <h3 className='font-semibold text-lg pt-2'>{title}</h3>
                <p className='text-sm'><span className='font-semibold'>By </span>
                    <Link href={author.url}>{author.name}</Link> on {date}</p>
                <p className='text-sm py-2 max-w-[400px]'>{description}</p>
                <Link 
                href={link}
                className='
                    inline-flex
                    items-center
                    gap-2
                    pt-2
                    text-sm
                    font-semibold
                    bg-brand_orange-light
                    px-4
                    py-2
                    mt-2
                    cursor-pointer'
                >
                    Read More 
                    <MoveUpRight className='w-4 h-4'/>
                </Link>
            </div>
        </div>
    )
}

function ReviewCard({ title, image, author, description, date, link }: { title: string, image: string, author: string, description: string, date: string, link: string }) {
    return (
        <Link href={link} className="
            flex
            gap-4
            py-2
            cursor-pointer
            mb-2
        "> <Image
                src={image}
                height={200}
                width={200}
                alt={title}
            />
            <div>
                <h3 className='font-semibold pt-1'>{title}</h3>
                <p className='text-xs'><span className='font-semibold'>By </span>{author} | {date}</p>
                <p className='text-xs py-2 pr-2'>{description}</p>  
            </div>
        </Link>
    )
}


export default function ReviewPage() {
    return (
        <Main>
            <Title title="Featured Reviews" />

            <div className='
                grid
                grid-cols-1
                md:grid-cols-2
                gap-4

            '>  

                {
                    // First Review
                    reviews.length > 0 && (
                        <FeaturedReviewCard
                            title={reviews[0].title}
                            image={reviews[0].thumbnail}
                            description={reviews[0].description}
                            author={reviews[0].authors[0]}
                            date={reviews[0].date}
                            link={reviews[0].url}
                        />
                    ) 
                }
            
                <div>
                    {
                        reviews.map((review) => (
                            <ReviewCard
                                title={review.title}
                                image={review.thumbnail}
                                description={review.description}
                                author={review.authors[0].name}
                                date={review.date}
                                link={review.url}
                                key={review.url}
                            />
                        ))
                    }
                </div>
            </div>
        </Main>
    );
}