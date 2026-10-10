import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Home, Search } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Página No Encontrada | DSISAC"
        description="La página que buscas no existe o ha sido movida dentro del sitio web corporativo de DSISAC."
      />

      <main className="py-24 sm:py-32">
        <Container size="narrow">
          <div className="text-center space-y-6">
            <span className="text-sm font-mono font-bold text-[#1749C7] tracking-widest uppercase">
              Error 404
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10274D] tracking-tight">
              Página no encontrada
            </h1>
            <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              Lo sentimos, la sección o enlace que intentas consultar no está disponible. Puedes
              volver al inicio o revisar nuestras soluciones principales.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button to="/" variant="primary" icon={<Home className="w-4 h-4" />}>
                Volver a la Página de Inicio
              </Button>
              <Button to="/soluciones/dsinet-erp-core" variant="outline">
                Ver DSINet ERP Core
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};
