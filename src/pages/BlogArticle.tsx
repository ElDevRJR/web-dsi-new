import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { BLOG_POSTS } from '../data/blog';
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? BLOG_POSTS.find((p) => p.slug === slug) : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'DSISAC',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DSISAC',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dsi-sac.com/logo.png',
      },
    },
    datePublished: '2024-11-01',
    dateModified: '2024-12-01',
  };

  return (
    <>
      <SEO
        title={`${post.title} | Blog DSISAC`}
        description={post.excerpt}
        type="article"
        canonicalPath={`/blog/${post.slug}`}
        jsonLd={articleJsonLd}
      />

      <main className="py-12 lg:py-20">
        <Container size="narrow">
          {/* Back link */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1749C7] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a todos los artículos</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="text-[#1749C7] font-semibold">{post.category}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
              <span aria-hidden="true">·</span>
              <span>{post.publishedAt}</span>
            </div>

            <BlurText
              text={post.title}
              as="h1"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-2 border-b border-slate-100 pb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-600">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1749C7] flex items-center justify-center font-bold">
                DSI
              </div>
              <div>
                <span className="font-semibold text-slate-900 block">{post.author.name}</span>
                <span className="text-slate-500">{post.author.role}</span>
              </div>
            </div>
          </header>

          {/* Article Body Content */}
          <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed text-base">
            {post.content.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#10274D] tracking-tight">
                  {sec.sectionTitle}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Related Articles */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h3 className="text-xl font-bold text-[#10274D] mb-6">Otros artículos recomendados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 transition-all group"
                >
                  <span className="text-xs font-semibold text-[#1749C7] block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#1749C7] transition-colors leading-snug mb-2">
                    <Link to={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{rel.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
