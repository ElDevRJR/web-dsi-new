export interface SolutionItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  type: 'producto' | 'servicio';
  status?: 'disponible' | 'proximamente';
  summary: string;
  description: string;
  features: string[];
  businessBenefits: string[];
  targetAudience: string;
  iconName: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  challenges: string[];
  erpModules: {
    title: string;
    description: string;
  }[];
  operationalFocus: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
}

export interface ContactFormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono?: string;
  tipoConsulta: 'demo' | 'erp' | 'soporte' | 'medida' | 'otro';
  mensaje: string;
}
