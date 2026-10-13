
import React, { useState } from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { Reveal } from '../components/ui/Reveal';
import { BLOG_POSTS } from '../data/blog';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

// Convierte fechas reales a YYYY-MM-DD.
// Admite ISO, DD/MM/YYYY, DD-MM-YYYY y fechas en español.
const toISODate = (value: unknown): string | undefined => {
  if (typeof value !== 'string' || !value.trim()) {
    return undefined;
  }

  const input = value.trim();

  if (/fecha por definir/i.test(input)) {
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

  // YYYY-MM-DD o fecha ISO con hora.
  const isoMatch = input.match(/^(\d{4})-(\d{2})-(\d{2})/);

  if (isoMatch) {
    return validateDate(isoMatch[1], isoMatch[2], isoMatch[3]);
  }

  // DD/MM/YYYY o DD-MM-YYYY.
  const numericMatch = input.match(
    /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/
  );

  if (numericMatch) {
    return validateDate(
      numericMatch[3],
      numericMatch[2],
      numericMatch[1]
    );
  }

  // Ejemplo: 01 de Octubre, 2026.
  const spanishMatch = input.match(
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

// Formatea la fecha sin alterar el día por la zona horaria.
const formatDate = (isoDate: string): string => {
  const [year, month, day] = isoDate.split('-').map(Number);

  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString(
    'es-PE',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }
  );
};

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'todos',
    'Logística y Normativa',
    'Gestión Empresarial',
    'Operaciones y Almacén',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'todos' ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Blog Técnico y Recursos de Gestión Empresarial | DSISAC"
        description="Artículos sobre facturación electrónica SUNAT, guías de remisión electrónicas, gestión de inventarios y mejores prácticas para la empresa peruana."
        canonicalPath="/blog"
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Recursos &amp; Conocimiento
            </span>

            <BlurText
              text="Artículos Técnicos y de Gestión"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />

            <p className="mt-5 text-lg text-slate-600 leading-relaxed font-normal">
              Contenido editorial y guías prácticas preparadas por el equipo
              de ingeniería de DSISAC sobre normativa tributaria, logística
              de almacén y tecnología para la empresa en Perú.
            </p>
          </div>

          {/* Filtros y buscador */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-200/80">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors capitalize cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-[#10274D] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat === 'todos' ? 'Todos los temas' : cat}
                </button>
              ))}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />

              <input
                type="text"
                placeholder="Buscar en artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Buscar artículos"
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#1749C7] text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Resultados del blog */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredPosts.map((post, index) => {
                const publishedDate = toISODate(post.publishedAt);

                return (
                  <Reveal key={post.slug} delay={0.08 * index}>
                    <article className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-300 hover:shadow-lg transition-all group">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                          <span className="text-[#1749C7] font-semibold">
                            {post.category}
                          </span>

                          <span aria-hidden="true">·</span>

                          <span>{post.readTime}</span>
                        </div>

                        <h2 className="text-lg font-bold text-[#10274D] group-hover:text-[#1749C7] transition-colors leading-snug mb-3">
                          <Link
                            to={`/blog/${post.slug}`}
                            className="focus:outline-none"
                          >
                            {post.title}
                          </Link>
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                        <div className="text-slate-400">
                          {publishedDate ? (
                            <time dateTime={publishedDate}>
                              {formatDate(publishedDate)}
                            </time>
                          ) : (
                            <span aria-label="Fecha de publicación no disponible">
                              Artículo
                            </span>
                          )}
                        </div>

                        <Link
                          to={`/blog/${post.slug}`}
                          className="shrink-0 font-bold text-[#1749C7] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>Leer artículo</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <div className="py-16 text-center text-slate-500 text-sm">
              No se encontraron artículos que coincidan con la búsqueda.
            </div>
          )}
        </Container>
      </main>

      <CTASection />
    </>
  );
};
