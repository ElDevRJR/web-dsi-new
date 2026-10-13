import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { BLOG_POSTS } from '../data/blog';
import { ArrowLeft } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

// Convierte fechas conocidas a YYYY-MM-DD.
// Acepta ISO, DD/MM/YYYY, DD-MM-YYYY y fechas en español.
const toISODate = (value: unknown): string | undefined => {
  if (typeof value !== 'string' || !value.trim()) {
    return undefined;
  }

  const dateValue = value.trim();

  if (/fecha por definir/i.test(dateValue)) {
    return undefined;
  }

  const validateDate = (
    year: string,
    month: string,
    day: string
  ): string | undefined => {
    const y = Number(year);
    const m = Number(month);
    const d = Number(day);

    const date = new Date(Date.UTC(y, m - 1, d));

    if (
      date.getUTCFullYear() !== y ||
      date.getUTCMonth() !== m - 1 ||
      date.getUTCDate() !== d
    ) {
      return undefined;
    }

    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  // Formato ISO: YYYY-MM-DD o fecha y hora ISO.
  const isoMatch = dateValue.match(/^(\d{4})-(\d{2})-(\d{2})/);

  if (isoMatch) {
    return validateDate(isoMatch[1], isoMatch[2], isoMatch[3]);
  }

  // Formato DD/MM/YYYY o DD-MM-YYYY.
  const numericMatch = dateValue.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);

  if (numericMatch) {
    return validateDate(
      numericMatch[3],
      numericMatch[2],
      numericMatch[1]
    );
  }

  // Formato en español: 01 de octubre, 2026.
  const spanishMatch = dateValue.match(
    /^(\d{1,2})\s+de\s+([a-záéíóúüñ]+),?\s+(\d{4})$/i
  );

  if (spanishMatch) {
    const [, day, monthName, year] = spanishMatch;

    const months: Record<string, string> = {
      enero: '01',
      febrero: '02',
      marzo: '03',
      abril: '04',
      mayo: '05',
      junio: '06',
      julio: '07',
      agosto: '08',
      septiembre: '09',
      setiembre: '09',
      octubre: '10',
      noviembre: '11',
      diciembre: '12',
    };

    const month = months[monthName.toLocaleLowerCase('es')];

    if (!month) {
      return undefined;
    }

    return validateDate(year, month, day.padStart(2, '0'));
  }

  return undefined;
};

// Muestra las fechas en español sin depender de la zona horaria.
const formatDate = (isoDate: string): string => {
  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return date.toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
};

const SITE_URL = 'https://www.dsi-sac.com';
const SITE_LOGO = `${SITE_URL}/images/dsisac-logo.png`;

export const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = slug
    ? BLOG_POSTS.find((p) => p.slug === slug)
    : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Priorizar artículos de la misma categoría.
  const sameCategoryPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  );

  const otherCategoryPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category !== post.category
  );

  const relatedPosts = [
    ...sameCategoryPosts,
    ...otherCategoryPosts,
  ].slice(0, 2);

  const postWithDates = post as typeof post & {
    updatedAt?: string;
    modifiedAt?: string;
  };

  const publishedDate = toISODate(post.publishedAt);

  const modifiedDate = toISODate(
    postWithDates.updatedAt ?? postWithDates.modifiedAt
  );

  // Datos estructurados para buscadores.
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: 'DSISAC',
      url: `${SITE_URL}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DSISAC',
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: SITE_LOGO,
      },
    },
    ...(publishedDate ? { datePublished: publishedDate } : {}),
    ...(modifiedDate ? { dateModified: modifiedDate } : {}),
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
          {/* Volver al blog */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1749C7] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a todos los artículos</span>
            </Link>
          </div>

          {/* Encabezado del artículo */}
          <header className="mb-12 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="text-[#1749C7] font-semibold">
                {post.category}
              </span>

              <span aria-hidden="true">·</span>

              <span>{post.readTime}</span>

              <span aria-hidden="true">·</span>

              {publishedDate ? (
                <time dateTime={publishedDate}>
                  {formatDate(publishedDate)}
                </time>
              ) : (
                <span>Fecha por definir</span>
              )}
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
                <span className="font-semibold text-slate-900 block">
                  {post.author.name}
                </span>

                <span className="text-slate-500">
                  {post.author.role}
                </span>
              </div>
            </div>
          </header>

          {/* Contenido del artículo */}
          <article className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed text-base">
            {post.content.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#10274D] tracking-tight">
                  {sec.sectionTitle}
                </h2>

                {sec.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </article>

          {/* Artículos relacionados */}
          {relatedPosts.length > 0 && (
            <section
              className="mt-20 pt-12 border-t border-slate-200"
              aria-labelledby="related-articles-title"
            >
              <h2
                id="related-articles-title"
                className="text-xl font-bold text-[#10274D] mb-6"
              >
                Artículos relacionados
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.slug}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-blue-300 transition-all group"
                  >
                    <span className="text-xs font-semibold text-[#1749C7] block mb-1">
                      {rel.category}
                    </span>

                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#1749C7] transition-colors leading-snug mb-2">
                      <Link to={`/blog/${rel.slug}`}>
                        {rel.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </Container>
      </main>

      <CTASection />
    </>
  );
};
