export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  arabicTitle: string;
  tagline: string;
  category: string;
  primaryKeyword: string;
  primaryKeywordArabic: string;
  secondaryKeywords: string[];
  searchIntent: 'Commercial' | 'Informational' | 'Transactional';
  metaDescription: string;
  metaDescriptionArabic?: string;
  problemStatement: string;
  solutionStatement: string;
  deliverables: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  businessBenefits: string[];
  suitableFor: string[];
  egyptianMarketRelevance: string;
  faqs: FaqItem[];
  relatedServicesSlugs: string[];
  relatedArticlesSlugs: string[];
  caseSnippet?: {
    clientType: string;
    metric: string;
    timeframe: string;
    result: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  arabicTitle?: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  modifiedDate: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  primaryKeyword: string;
  searchIntent: 'Informational' | 'Commercial Guide';
  metaDescription: string;
  contentHeadings: { id: string; title: string }[];
  sections: {
    heading: string;
    paragraphs: string[];
    callout?: string;
    bulletList?: string[];
  }[];
  relatedServicesSlugs: string[];
  relatedArticlesSlugs?: string[];
  faqs?: FaqItem[];
}

export interface PageInventoryItem {
  url: string;
  pageType: 'Homepage' | 'Service Page' | 'Services Index' | 'Blog Article' | 'Blog Post' | 'Blog Index' | 'About Page' | 'Contact Page';
  primaryTopic: string;
  primaryTopicArabic: string;
  secondaryTopics?: string[];
  secondaryKeywords?: string[];
  searchIntent: string;
  title: string;
  metaDescription: string;
  canonical: string;
  schemaType: string;
  internalLinksCount: number;
}
