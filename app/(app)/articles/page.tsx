import fs from "fs";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { Main, Subtitle, Title } from "@/components/ui/static-pages";

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
    <div className="py-2">
      <Image src={image} height={200} width={400} alt={title} />
      <div>
        <Link href={url}>
        <h3 className="font-semibold text-lg pt-2">{title}</h3>
        </Link>
        <p className="text-sm">
          By{" "}
          <Link href={author.url}>
            {author.name}
          </Link>{" "}
          on {new Date(date).toLocaleDateString()}
        </p>
        <p className="mt-1">{description}</p>
      </div>
    </div>
  );
}

function BlogCard({
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
    <div className="py-2">
      <Image src={image} height={200} width={400} alt={title} />
      <div>
        <h3 className="font-semibold text-lg pt-2">{title}</h3>
        <p className="text-sm mb-2">
          By{" "}
          <Link href={author.url}>
            {author.name}
          </Link>{" "}
          on {new Date(date).toLocaleDateString()}
        </p>
        <p>{description}</p>
        
        <Link href={url} className="bg-brand_orange-light py-2 px-4 inline-flex items-center justify-between gap-2 mt-2 text-zinc-800 text-sm">
            Read more <MoveUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
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

        <Subtitle subtitle="Latest Blogs" className="mt-12"/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((article) => (
                <BlogCard key={article.url} 
                    title={article.title}
                    image={article.thumbnail}
                    description={article.description}
                    authors={article.authors}
                    date={article.date}
                    url={article.url}
                 />
            ))}
        </div>
        </Main>
  );
}
