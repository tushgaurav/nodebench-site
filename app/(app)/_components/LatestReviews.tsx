import Image from "next/image";
import Link from "next/link";
import reviews from "@/public/data/reviews.json";

export function ArticleCard({
  url,
  title,
  description,
  image,
  author,
}: {
  url: string;
  title: string;
  description: string;
  image: string;
  author: string;
}) {
  return (
    <div className="flex flex-col bg-brand_orange-light/30 p-4 max-w-80 border-2 border-brand_orange/50">
      <Image
        src={image}
        alt={title}
        height={100}
        width={100}
        className="w-full border-2 border-brand_orange/50 h-40 object-cover"
      />
      <div className="mt-2">
        <Link href={url}>
          <h3 className="text-lg font-semibold">{title}</h3>
        </Link>
        <p className="text-xs">By {author}</p>
        <hr
          className="
            border-t-2
            border-brand_orange/50
            w-1/4
            mt-2
            mb-2 
        "
        />
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

export default function LatestReviews() {
  return (
    <div className="bg-gradient-to-br from-brand_orange-light/30 to-transparent">
      <section className="section-container p-6 lg:pt-8">
        <h2 className="text-xl font-semibold mb-4">Latest Reviews</h2>
        <div className="flex gap-6 flex-col md:flex-row md:mb-10">
          {reviews.map((review) => {
            return (
              <ArticleCard
                url={review.url}
                key={review.url}
                title={review.title}
                description={review.description}
                image={review.thumbnail}
                author={review.authors[0].name}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
