import fs from "fs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { Main, Subtitle, Title } from "@/components/ui/static-pages";
import { format, formatDistanceToNow } from "date-fns";

export const metadata: Metadata = {
  title: "Articles - nodebench",
  description: "The latest articles about tech, hardware, and software. We have the latest news, reviews, and guides.",
  openGraph: {
    title: "Articles - nodebench",
    description: "The latest articles about tech, hardware, and software. We have the latest news, reviews, and guides.",
    type: "website"
  }
};


const pages = fs
  .readdirSync("app/(app)/articles", { withFileTypes: true })
  .filter((file) => file.isDirectory())
  .map((folder) => folder.name)
  .filter(
    (folder) =>
      !folder.startsWith("(") && !folder.startsWith("_") && folder !== "og"
  );

function getArticlesMetadata() {
  const reviews = pages
    .map((page) => {
      try {
        const { metadata } = require(`./${page}/page.mdx`);
        const { articleInfo } = require(`./${page}/page.mdx`);

        return {
          title: metadata.title,
          url: `articles/${page}`,
          ...metadata,
          ...articleInfo,
        };
      } catch (error) {
        console.error(`Error loading metadata for ${page}:`, error);
        return null;
      }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  fs.writeFileSync(
    "public/data/articles.json",
    JSON.stringify(reviews, null, 2)
  );

  return reviews;
}

const articles = getArticlesMetadata();

function ArticleCard({
  title,
  image,
  description,
  authors,
  date,
  url,
}: {
  title: string;
  image: string;
  description: string;
  authors: {
    name: string;
    url: string;
  }[];
  date: string;
  url: string;
}) {
    const author = authors[0];
  return (
    <Link href={url} className="bg-gray-200 group">
      <Image src={image} height={200} width={400} alt={title} />
      <hr className="border-brand_orange/60 border-b-4"/>
      <div className="px-4 pt-3 pb-4">
        <h3 className="font-semibold leading-5 text-lg group-hover:text-brand_orange">{title}</h3>
        {/* <p className="text-sm mb-2">
          By {author.name} • {format(new Date(date), 'dd MMMM yyyy')}
        </p>
        <p className="leading-5">{description}</p> */}
      </div>
    </Link>
  );
}

function BlogCard({
  title,
  image,
  description,
  date,
  url,
}: {
  title: string;
  image: string;
  description: string;
  date: string;
  url: string;
}) {
  return (
    <Link href={url} className="bg-gray-200 group">
      <Image src={image} height={200} width={1000} alt={title}  />
      <hr className="border-brand_orange/60 border-b-4"/>
      <div className="px-4 pt-2 pb-4">
        <h3 className="font-semibold text-lg group-hover:text-brand_orange">{title}</h3>
        <p className="text-sm mb-2">
          {format(new Date(date), 'dd MMMM yyyy')} • {formatDistanceToNow(new Date(date)) + " ago"}
        </p>
        <p className="leading-5">{description}</p>
        {/* <Link href={url} className="bg-brand_orange/20 py-2 px-4 inline-flex items-center justify-between gap-2 text-black text-sm">
            Read <MoveUpRight className="w-4 h-4" />
        </Link> */}
      </div>
    </Link>
  );
}

export default function ArticlePage() {
  const blogs = articles.filter((article) => article.type === "blog");
  const techArticles = articles.filter((article) => article.type === "article");
  
  return (
    <Main>
        <Title title="Tech Articles" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techArticles.map((article) => (
                <ArticleCard key={article.url} 
                    title={article.title}
                    image={article.thumbnail}
                    description={article.description}
                    authors={article.authors}
                    date={article.date}
                    url={article.url}
                 />
            ))}
        </div>

        <Subtitle subtitle="Stay On the Cutting Edge" className="mt-12"/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((article) => (
                <BlogCard key={article.url} 
                    title={article.title}
                    image={article.thumbnail}
                    description={article.description}
                    date={article.date}
                    url={article.url}
                 />
            ))}
        </div>
        </Main>
  );
}
