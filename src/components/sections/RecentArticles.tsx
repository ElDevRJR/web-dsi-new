import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { BLOG_POSTS } from '../../data/blog';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

export const RecentArticles: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            kicker="Conocimiento Aplicado"
            title="Recursos y artículos técnicos de gestión"
            description="Análisis sobre normativa tributaria SUNAT, control de inventarios, despacho logístico y mejores prácticas para la empresa peruana."
          />
          <div className="shrink-0">
            <Button to="/blog" variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
              Ver todos los artículos
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <Reveal key={post.slug} delay={0.1 * index}>
              <article className="flex flex-col justify-between h-full p-6 rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 group">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 font-medium">
                    <span className="text-[#1749C7] font-semibold">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#10274D] group-hover:text-[#1749C7] transition-colors leading-snug mb-3">
                    <Link to={`/blog/${post.slug}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{post.publishedAt}</span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-bold text-[#1749C7] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Leer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
