import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PageWrapper } from './components/layout/PageWrapper';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ErpCore } from './pages/ErpCore';
import { Accounting } from './pages/Accounting';
import { Orders } from './pages/Orders';
import { Management } from './pages/Management';
import { CustomSoftware } from './pages/CustomSoftware';
import { Support } from './pages/Support';
import { DigitalCertificates } from './pages/DigitalCertificates';
import { Nubefact } from './pages/Nubefact';
import { CloudServer } from './pages/CloudServer';
import { SystemModifications } from './pages/SystemModifications';
import { IndustriesIndex } from './pages/IndustriesIndex';
import { IndustryDetail } from './pages/IndustryDetail';
import { HelpDesk } from './pages/HelpDesk';
import { Blog } from './pages/Blog';
import { BlogArticle } from './pages/BlogArticle';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#1749C7]/15 selection:text-[#1749C7]">
        <Navbar />
        <div className="flex-1">
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/soluciones/dsinet-erp-core" element={<ErpCore />} />
              <Route path="/soluciones/dsi-contabilidad" element={<Accounting />} />
              <Route path="/soluciones/dsi-pedidos" element={<Orders />} />
              <Route path="/soluciones/dsi-gerencial" element={<Management />} />
              <Route path="/soluciones/software-a-medida" element={<CustomSoftware />} />
              <Route path="/servicios/soporte" element={<Support />} />
              <Route path="/servicios/certificados-digitales" element={<DigitalCertificates />} />
              <Route path="/servicios/nubefact-ose" element={<Nubefact />} />
              <Route path="/servicios/servidor-vps" element={<CloudServer />} />
              <Route path="/servicios/modificacion-sistema" element={<SystemModifications />} />
              <Route path="/sectores" element={<IndustriesIndex />} />
              <Route path="/sectores/:slug" element={<IndustryDetail />} />
              <Route path="/mesa-de-ayuda" element={<HelpDesk />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageWrapper>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
