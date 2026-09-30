import React, { useEffect } from 'react';
import { SITE_NAME, SITE_URL } from '../../config/site';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  schema?: object;
  type?: 'website' | 'article';
  robots?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath,
  schema,
  type = 'website',
  robots = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}) => {
  const normalizedPath = canonicalPath === '/' ? '' : canonicalPath.replace(/\/$/, '');
  const fullCanonicalUrl = `${SITE_URL}${normalizedPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', robots);

    // 3. Update Canonical Tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullCanonicalUrl);

    // 4. Update OpenGraph Tags
    const updateMetaProperty = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:url', fullCanonicalUrl);
    updateMetaProperty('og:type', type);
    updateMetaProperty('og:site_name', SITE_NAME);

    // 5. Update Twitter Card Tags
    const updateMetaName = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaName('twitter:title', title);
    updateMetaName('twitter:description', description);

    // 6. Inject / Update Page-Specific Schema JSON-LD
    let dynamicSchemaScript = document.getElementById('dynamic-page-schema');
    if (schema) {
      if (!dynamicSchemaScript) {
        dynamicSchemaScript = document.createElement('script');
        dynamicSchemaScript.id = 'dynamic-page-schema';
        dynamicSchemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(dynamicSchemaScript);
      }
      dynamicSchemaScript.textContent = JSON.stringify(schema);
    } else if (dynamicSchemaScript) {
      dynamicSchemaScript.remove();
    }
  }, [title, description, fullCanonicalUrl, schema, type, robots]);

  return null;
};
