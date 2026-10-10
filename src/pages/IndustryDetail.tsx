import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { INDUSTRIES_DATA } from '../data/industries';
import {
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Building,
  Layers,
  Truck,
  Globe,
  Boxes,
  ArrowLeft,
} from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';

export const IndustryDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? INDUSTRIES_DATA[slug] : null;

  if (!industry) {
    return <Navigate to="/sectores" replace />;
  }

  const getIcon = (id: string) => {
    switch (id) {
      case 'pequena-empresa':
        return <Building className="w-8 h-8 text-[#1749C7]" />;
      case 'mediana-empresa':
        return <Layers className="w-8 h-8 text-[#1749C7]" />;
      case 'distribuidoras':
        return <Truck className="w-8 h-8 text-[#1749C7]" />;
      case 'importadoras':
        return <Globe className="w-8 h-8 text-[#1749C7]" />;
      default:
        return <Building className="w-8 h-8 text-[#1749C7]" />;
    }
  };

  return (
    <>
      <SEO
        title={`Solución ERP para ${industry.name} | DSISAC`}
        description={`${industry.summary} Módulos de compras, almacenes, ventas y facturación adaptados para ${industry.name}.`}
        canonicalPath={`/sectores/${industry.slug}`}
      />

      <main className="py-12 lg:py-20">
        <Container>
          <div className="mb-8">
            <Link
              to="/sectores"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1749C7] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver al índice de sectores</span>
            </Link>
          </div>

          <div className="max-w-4xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                {getIcon(industry.id)}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1749C7] block">
                  Sector Especializado
                </span>
                <span className="text-xs text-slate-500">{industry.tagline}</span>
              </div>
            </div>

            <BlurText
              text={`Soluciones para ${industry.name}`}
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight leading-tight"
            />

            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              {industry.summary}
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <Button to="/contacto" variant="primary" size="lg">
                Solicitar Demostración para {industry.name}
              </Button>
              <Button to="/soluciones/dsinet-erp-core" variant="outline" size="lg">
                Ver arquitectura general de DSINet
              </Button>
            </div>
          </div>

          <div className="mb-20">
            <SectionHeading
              kicker="Diagnóstico del Sector"
              title={`Retos operativos comunes en ${industry.name}`}
              description="Identificamos los puntos críticos donde habitualmente se producen cuellos de botella e ineficiencias de control."
              className="mb-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.challenges.map((c, i) => (
                <Reveal key={i} delay={0.07 * i}>
                  <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/60 h-full flex items-start gap-3.5">
                    <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <h2 className="text-sm font-bold text-slate-900 mb-1">
                        Punto de fricción #{i + 1}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{c}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <SectionHeading
              kicker="Respuesta Tecnológica"
              title="Módulos de DSINet adaptados a tu operación"
              description="Cómo cada funcionalidad de nuestro software responde directamente a las necesidades del sector."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.erpModules.map((mod, index) => (
                <Reveal key={index} delay={0.06 * index}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm h-full flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1749C7] flex items-center justify-center font-bold text-xs mb-4">
                        0{index + 1}
                      </div>
                      <h3 className="text-base font-bold text-[#10274D] mb-2">{mod.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white mb-20">
            <div className="max-w-3xl space-y-3 mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Puesta en Marcha
              </span>
              <h2 className="text-2xl font-bold">Enfoque de adopción recomendado</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.operationalFocus.map((f, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-2">
                  <div className="text-blue-400 font-bold text-sm">Pilar #{i + 1}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{f}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                ¿Deseas una demostración con datos de prueba adaptados a tu sector?
              </span>
              <Button to="/contacto" variant="primary" size="md">
                Coordinar reunión personalizada
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <CTASection />
    </>
  );
};
