import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { BlurText } from '../components/ui/BlurText';
import { Button } from '../components/ui/Button';
import { Clock, Calculator, ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOLUTIONS_DATA } from '../data/solutions';

export const Accounting: React.FC = () => {
  const data = SOLUTIONS_DATA['dsi-contabilidad'];

  return (
    <>
      <SEO
        title="DSI - Contabilidad (Próximamente) | DSISAC"
        description="Módulo contable integrado a los flujos de compras, ventas y bancos de DSINet ERP. Actualmente en fase de ingeniería y validación normativa."
        canonicalPath="/soluciones/dsi-contabilidad"
      />

      <main className="py-16 lg:py-24">
        <Container size="narrow">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>En Desarrollo · Próximamente</span>
            </div>

            <BlurText
              text="DSI - Contabilidad"
              as="h1"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight"
            />

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Módulo contable unificado concebido para enlazar automáticamente los asientos con las
              operaciones diarias de compras, ventas y tesorería de DSINet ERP Core.
            </p>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-6">
              <h2 className="text-lg font-bold text-[#10274D]">
                Alcance y objetivos en preparación:
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
                Nota: Esta solución se encuentra en fase de validación técnica y normativa tributaria.
                Si tu empresa utiliza activamente DSINet y deseas participar en etapas de pruebas
                piloto, puedes ponerte en contacto con nuestro equipo de ingeniería.
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button to="/contacto" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Consultar sobre este módulo
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
