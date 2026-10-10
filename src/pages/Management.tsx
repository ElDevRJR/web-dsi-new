import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { Button } from '../components/ui/Button';
import { Clock, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/solutions';

export const Management: React.FC = () => {
  const data = SOLUTIONS_DATA['dsi-gerencial'];

  return (
    <>
      <SEO
        title="DSI - Gerencial (Próximamente) | DSISAC"
        description="Panel de control directivo con indicadores clave de ventas, margen y cobranzas para directores y gerentes generales."
        canonicalPath="/soluciones/dsi-gerencial"
      />

      <main className="py-16 lg:py-24">
        <Container size="narrow">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>En Desarrollo · Próximamente</span>
            </div>

            <BlurText
              text="DSI - Gerencial"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight"
            />

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Cuadro de mando ejecutivo orientado a condensar indicadores de rentabilidad, rotación
              de inventarios y cobranzas para facilitar decisiones estratégicas oportunas.
            </p>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-6">
              <h2 className="text-lg font-bold text-[#10274D]">
                Tableros e indicadores en preparación:
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                {data.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#1749C7] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
                Estado: Módulo analítico en desarrollo. Enfocado en sintetizar datos consolidados de
                DSINet ERP Core sin requerir reportes extensos. Consulta con nuestro equipo para más
                detalles.
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contacto" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Consultar con ingeniería
              </Button>
              <Button to="/soluciones/dsinet-erp-core" variant="outline">
                Ver DSINet ERP Core disponible
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};
