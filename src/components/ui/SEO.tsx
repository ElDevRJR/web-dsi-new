import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  type = 'website',
  jsonLd,
}) => {
  useEffect(() => {
    const formattedTitle = title.includes('DSISAC') ? title : `${title} | DSISAC`;
    document.title = formattedTitle;

    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', type);
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://dsi-sac.com';
    const path = canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const fullUrl = `${origin}${path}`;
    setMetaTag('property', 'og:url', fullUrl);
    setMetaTag('property', 'og:site_name', 'DSISAC - Soluciones de Software Empresarial');
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    let scriptTag = document.querySelector('script#page-json-ld');
    if (jsonLd) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'page-json-ld';
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLd);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalPath, type, jsonLd]);

  return null;
};
