# NEXORA

**One Contact. Any Service.** — corporate marketing site for NEXORA, a service
coordination and business solutions company. Built with Angular 20 (standalone
components, signals), full English/Arabic i18n with RTL, and no state-management
library — the site is fully static/presentational, so NgRx would be unused weight.

## Stack

- **Angular 20** — standalone components, `input()`/`signal()`, new control flow (`@if`/`@for`)
- **@ngx-translate/core + http-loader** — runtime EN/AR switching (`public/i18n/en.json`, `ar.json`)
- **@lucide/angular** — icon set, registered once in `app.config.ts` and rendered via the data-driven `<svg [lucideIcon]="name">` component
- Plain SCSS with CSS custom properties (`src/styles/_variables.scss`) — no UI framework; logical properties (`inset-inline-start`, `margin-inline`, …) throughout for automatic RTL mirroring

## Project layout

```
src/app/
├── core/
│   ├── models/       TypeScript interfaces for every content shape (NavItem, ServiceCategory, FaqItem, …)
│   ├── data/         Static content arrays (services, process steps, FAQs, form option lists…) — edit these to change site content
│   └── services/      LanguageService (current lang, RTL flag, persists to localStorage)
├── shared/
│   ├── components/   Reusable building blocks: header, footer, logo-mark, language-switcher,
│   │                 section-heading, service-card, step-card, faq-accordion, request-form, provider-form
│   └── directives/    RevealDirective — scroll-reveal animation (IntersectionObserver based)
└── pages/             One folder per route: home, services, how-it-works, about, providers,
                        request-service, contact, legal (privacy/terms), not-found
```

Every piece of page copy lives in `public/i18n/en.json` / `ar.json` (translation keys), and every
repeatable list (service categories, FAQs, nav items, form dropdown options…) lives in
`src/app/core/data/*.data.ts`. Add a new FAQ or service category by editing the data file — the
UI picks it up automatically.

## Development

```bash
npm install
ng serve
```

Open `http://localhost:4200`. The language switcher (`EN | AR`) in the header/footer toggles
`dir="rtl"` and swaps the whole translation set at runtime.

## Building

```bash
ng build              # production build, output in dist/nexora
```

## Notes

- The Request a Service, Provider application, and Contact forms are wired with Angular
  Reactive Forms and full client-side validation, but submission is currently a local
  success-state placeholder — see the `// Placeholder for the NEXORA … API` comments in
  `shared/components/request-form`, `provider-form`, and `pages/contact` for where to wire
  up the real backend endpoint.
- Contact details (email/phone/WhatsApp/addresses) in `pages/contact` and the social links in
  `shared/components/footer` are placeholders — update them with NEXORA's real details before launch.
- `pages/legal` (Privacy Policy / Terms & Conditions) is a structural template, not legal advice —
  have it reviewed before publishing.
