import Image from "next/image";
import Link from "next/link";
import articles from "@/public/data/articles.json";
import { format } from "date-fns";

export function ArticleCard({
  url,
  title,
  description,
  image,
  date,
}: {
  url: string;
  title: string;
  description: string;
  image: string;
  date: string;
}) {
  return (
    <div className="max-w-md flex flex-col bg-brand_orange-light/20 h-full border-2 border-brand_orange/80 group">
      <Image
        src={image}
        alt={title}
        height={200}
        width={800}
        className="w-full object-cover max-h-20"
      />
      <div className="mt-4 px-4 pb-4">
        <Link href={url}>
          <h3 className="text-lg leading-5 mb-1 font-semibold">{title}</h3>
        </Link>
        <p className="text-xs">{format(new Date(date), "dd MMMM")}</p>
        <hr
          className="
            border-t-2
            border-brand_orange/50
            w-1/4
            mt-2
            mb-2 
        "
        />
        <p className="text-sm leading-5 mt-1">{description}</p>
      </div>
    </div>
  );
}

export default function LatestArticles() {
  const displayArticles = articles
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 4);

  return (
    <div className="bg-gradient-to-br from-brand_orange-light/50 to-brand_orange-light/10">
      <section className="section-container p-6">
        <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
        <div className="flex flex-wrap gap-6 flex-col md:flex-row md:mb-10">
          {displayArticles.map((review) => {
            return (
              <ArticleCard
                url={review.url}
                key={review.url}
                title={review.title}
                description={review.description}
                image={review.thumbnail}
                date={review.date}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
