import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { INDUSTRIES_DATA } from '../data/industries';
import { ArrowRight, Building, Layers, Truck, Globe, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/sections/CTASection';

export const IndustriesIndex: React.FC = () => {
  const industries = Object.values(INDUSTRIES_DATA);

  const getIcon = (id: string) => {
    switch (id) {
      case 'pequena-empresa':
        return <Building className="w-6 h-6 text-[#1749C7]" />;
      case 'mediana-empresa':
        return <Layers className="w-6 h-6 text-[#1749C7]" />;
      case 'distribuidoras':
        return <Truck className="w-6 h-6 text-[#1749C7]" />;
      case 'importadoras':
        return <Globe className="w-6 h-6 text-[#1749C7]" />;
      default:
        return <Building className="w-6 h-6 text-[#1749C7]" />;
    }
  };

  return (
    <>
      <SEO
        title="Soluciones por Tipo de Empresa | DSISAC"
        description="Descubre cómo DSINet ERP Core se adapta a los retos de pequeñas empresas, medianas empresas, distribuidoras mayoristas e importadoras en Perú."
        canonicalPath="/sectores"
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] mb-2.5 block">
              Enfoque Operativo
            </span>
            <BlurText
              text="Soluciones por Tipo de Empresa"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />
            <p className="mt-5 text-lg text-slate-600 leading-relaxed font-normal">
              Cada perfil de empresa posee dinámicas y prioridades distintas. Selecciona tu tipo de
              operación para explorar cómo nuestras soluciones resuelven tus desafíos cotidianos de
              inventario, ventas, comprobantes y logística.
            </p>
          </div>

          <div className="space-y-12 mb-20">
            {industries.map((ind, index) => (
              <Reveal key={ind.id} delay={0.08 * index}>
                <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-10 border border-slate-200/80 hover:border-blue-300 transition-all">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        {getIcon(ind.id)}
                      </div>
                      <h2 className="text-2xl font-bold text-[#10274D]">{ind.name}</h2>
                      <p className="text-sm font-medium text-[#1749C7]">{ind.tagline}</p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {ind.summary}
                      </p>
                      <div className="pt-2">
                        <Button
                          to={`/sectores/${ind.slug}`}
                          variant="primary"
                          size="sm"
                          icon={<ArrowRight className="w-4 h-4" />}
                        >
                          Ver solución para {ind.name}
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-200/80 space-y-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                        Módulos clave y procesos soportados:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {ind.erpModules.map((mod, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1749C7] shrink-0" />
                              <span className="text-xs font-bold text-slate-900">{mod.title}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 pl-3.5 leading-snug">
                              {mod.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
