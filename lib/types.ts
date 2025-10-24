// TypeScript interfaces for blog posts

export interface BlogPost {
  name: string;
  slug: string;
  collectionId: string;
  localeId: string;
  itemId: string;
  archived: boolean;
  draft: boolean;
  createdOn: string;
  updatedOn: string;
  publishedOn: string;
  postBody: string;
  postSummary: string;
  mainImage: string;
  thumbnailImage: string;
  featured: boolean;
  author: string;
  category: string;
  readTime: string;
  titleTag: string;
  metaDescription: string;
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  description: string;
  mainImage: string;
  category: string;
  author: string;
  publishedOn: string;
  readTime: string;
  featured: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  postCount: number;
}

export interface BlogAuthor {
  id: string;
  name: string;
  bio?: string;
  image?: string;
  postCount: number;
}

export interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  mainImage: string;
  readTime: string;
}
