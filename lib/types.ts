export type Author = {
    name: string;
    url: string;
}

export type ReviewMetadata = {
    title: string;
    description: string;
    authors: Author[];
    date: string;
    url: string;
    thumbnail: string;
}

export type ArticleMetadata = {
    title: string;
    description: string;
    authors: Author[];
    date: string;
    url: string;
    thumbnail: string;
}

