import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Hero } from '../components/sections/Hero';
import { ErpCoreHighlight } from '../components/sections/ErpCoreHighlight';
import { SolutionsBento } from '../components/sections/SolutionsBento';
import { IndustriesBento } from '../components/sections/IndustriesBento';
import { CustomDevSection } from '../components/sections/CustomDevSection';
import { DsiBotPreview } from '../components/sections/DsiBotPreview';
import { RecentArticles } from '../components/sections/RecentArticles';
import { CTASection } from '../components/sections/CTASection';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="DSISAC - Fábrica de Software y Soluciones Empresariales"
        description="Desarrollamos soluciones de software y DSINet ERP Core que ayudan a las empresas en Perú a gestionar compras, almacenes, ventas y facturación electrónica."
        canonicalPath="/"
      />
      <main>
        <Hero />
        <ErpCoreHighlight />
        <SolutionsBento />
        <IndustriesBento />
        <CustomDevSection />
        <DsiBotPreview />
        <RecentArticles />
        <CTASection />
      </main>
    </>
  );
};
