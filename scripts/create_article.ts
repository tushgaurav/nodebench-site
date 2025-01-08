const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const getMdxTemplate = (title: string, date: string) => `
import Topbar from '../_components/Topbar.tsx'

export const metadata = {
    title: '${title}',
    description: '',
    date: '${date}',
    authors: [{name: "Tushar Gaurav", url: "https://tushgaurav.in"}],
}

<Topbar
    thumbnail='/images/articles/placeholder.png'
    title="${title}"
    author='Tushar Gaurav'
    date='${date}'
/>

# Summary
This is a summary of the article.

# Introduction
nodebench is a tool to benchmark the performance of Node.js code. It is a simple and easy-to-use tool that can help you identify performance bottlenecks in your code.
`;


const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, '-');
};

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const createArticleTemplate = async () => {
  try {

    const title : string = await new Promise((resolve) => {
      rl.question('Article title: ', (answer: string) => {
        resolve(answer);
      });
    });

    const slug = createSlug(title);
    const date = getTodayDate();

    const reviewDir = path.join(process.cwd(), 'app', '(app)', 'articles', slug);
    const mdxPath = path.join(reviewDir, 'page.mdx'); // Change to page.mdx to match Next.js convention

    if (!fs.existsSync(reviewDir)) {
      fs.mkdirSync(reviewDir, { recursive: true });
    }

    fs.writeFileSync(mdxPath, getMdxTemplate(title, date));
    console.log(`Created MDX file: ${mdxPath}`);

    console.log('\nArticle template created successfully! 🎉');
    console.log(`Title: ${title}`);
    console.log(`Slug: ${slug}`);
    console.log(`Date: ${date}`);

  } catch (error) {
    console.error('Error creating review template:', error);
  } finally {
    rl.close();
  }
};

createArticleTemplate();