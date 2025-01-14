import { promises as fs } from 'fs';
import path from 'path';

async function getSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  });
  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name)
      );
      return path.dirname(relativePath);
    })
    .map((slug) => slug.replace(/\\/g, '/'));
}

export default async function sitemap() {
  const reviewsDirectory = path.join(process.cwd(), 'app', '(app)', 'review');
  const reviewSlugs = await getSlugs(reviewsDirectory);
  const reviews = reviewSlugs.map((slug) => ({
    url: `https://www.nodebench.com/review/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const articlesDirectory = path.join(process.cwd(), 'app', '(app)', 'articles');
  const articleSlugs = await getSlugs(articlesDirectory);
    const articles = articleSlugs.map((slug) => ({
        url: `https://www.nodebench.com/articles/${slug}`,
        lastModified: new Date().toISOString(),
    }));

  const routes = ['', '/about', '/contact', '/ethics-statement',].map((route) => ({
    url: `https://nodebench.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...articles, ...reviews];
}
