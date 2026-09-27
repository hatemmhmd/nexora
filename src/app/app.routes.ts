import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'MADAD — One Contact. Any Service.',
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Services — MADAD',
  },
  {
    path: 'how-it-works',
    loadComponent: () =>
      import('./pages/how-it-works/how-it-works.component').then((m) => m.HowItWorksComponent),
    title: 'How It Works — MADAD',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'About — MADAD',
  },
  {
    path: 'providers',
    loadComponent: () => import('./pages/providers/providers.component').then((m) => m.ProvidersComponent),
    title: 'For Service Providers — MADAD',
  },
  {
    path: 'request-service',
    loadComponent: () =>
      import('./pages/request-service/request-service.component').then((m) => m.RequestServiceComponent),
    title: 'Request a Service — MADAD',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — MADAD',
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./pages/legal/legal-page.component').then((m) => m.LegalPageComponent),
    title: 'Privacy Policy — MADAD',
    data: {
      titleKey: 'legal.privacy.title',
      sectionKeys: [
        'legal.privacy.sections.collection',
        'legal.privacy.sections.use',
        'legal.privacy.sections.sharing',
        'legal.privacy.sections.security',
        'legal.privacy.sections.rights',
      ],
    },
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/legal/legal-page.component').then((m) => m.LegalPageComponent),
    title: 'Terms & Conditions — MADAD',
    data: {
      titleKey: 'legal.terms.title',
      sectionKeys: [
        'legal.terms.sections.acceptance',
        'legal.terms.sections.services',
        'legal.terms.sections.responsibilities',
        'legal.terms.sections.liability',
        'legal.terms.sections.changes',
      ],
    },
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
    title: 'Page Not Found — MADAD',
  },
];
