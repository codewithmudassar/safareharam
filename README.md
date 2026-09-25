# Sacred Journey Suite

# Safar e Harmain — Complete Website and Admin Dashboard

## Goal

Build a production-quality, fully responsive Umrah travel experience and a complete interactive admin dashboard using the project’s supported TanStack Start architecture. The delivered frontend will use realistic centralized mock data and a replaceable service layer, so future APIs can be connected without redesigning the interface.

## Visual direction

- Establish a distinctive luxury Islamic travel identity: deep emerald, dark green, warm ivory, restrained champagne-gold accents, cinematic pilgrimage photography, subtle geometric patterning, crisp borders, and generous whitespace.

- Use elegant display typography paired with a highly readable sans-serif body face.

- Keep the public experience atmospheric and editorial; keep admin screens dense, calm, and operational.

- Use motion selectively: short branded loader, cinematic hero reveals and parallax, staggered section entrances, refined card/modal/drawer transitions, and reduced-motion fallbacks.

- Generate and bundle a cohesive set of relevant Makkah, Madinah, hotel, transport, and travel imagery rather than using placeholders or unrelated stock imagery.

## Public website

- Build shared navigation, mobile drawer, configurable WhatsApp actions, premium footer, breadcrumbs, loading/error/empty states, and reusable page composition.

- Create routes for Home, Packages, Package Details, Offers, Services, About, Contact, FAQ, Privacy Policy, and Terms & Conditions, plus branded not-found and error experiences.

- Home includes cinematic hero, clearly labeled configurable demo trust indicators, featured packages, destination experience, service overview, offers, process, demo testimonials, FAQs, final CTA, and footer.

- Packages includes search, filters, sorting, pagination, loading skeletons, error state, empty state, and responsive cards.

- Package details includes gallery and zoom, countdown support, complete travel and hotel information, inclusions/exclusions/documents/terms, FAQs, structured inquiry card, and package-aware WhatsApp messaging.

- Offers, services, about, contact, and FAQ pages receive complete responsive layouts and working interactions. Contact submission uses the mock service and provides validation and toast feedback.

## Admin dashboard

- Create a dedicated responsive admin shell with collapsible sidebar, mobile navigation, route state, top bar, quick actions, and logout.

- Implement mock authentication through an isolated auth adapter, session abstraction, protected-route shell, loading/error/success states, and no embedded credentials.

- Build dashboard metrics, inquiry analytics, recent records, activity, and quick actions using demo data clearly identified as such.

- Build complete package management: searchable/filterable/sortable/paginated list, responsive mobile cards, publish/feature actions, delete confirmation, and notifications.

- Build create/edit package forms with all requested sections, multi-step navigation, image previews, dynamic lists, validation, rich-text-ready terms field, SEO fields, and publishing controls.

- Build equivalent complete management experiences for offers, inquiries, contacts, testimonials, FAQs, and agency settings, including drawers/modals, status changes, ordering, confirmations, and feedback states.

## Data and application architecture

- Define shared domain types and one centralized realistic mock dataset; factual claims, statistics, contact details, and testimonials will be labeled configurable/demo where real information was not provided.

- Create replaceable service modules for packages, offers, inquiries, contacts, testimonials, FAQs, settings, and authentication. Components only call service interfaces—never imported mock arrays.

- Use a small shared mock persistence adapter so admin changes are immediately reflected across admin and public views during the session, while keeping the implementation swappable for `fetch` or another API client later.

- Add reusable query/filter/pagination helpers, validation schemas, formatting helpers, WhatsApp URL generation, countdown logic, and consistent async latency/error handling.

- Keep secrets and future server credentials out of browser code; document the backend security responsibilities that remain for the future real implementation.

## SEO and discoverability

- Give every public content route unique title, description, Open Graph, Twitter, and canonical metadata using TanStack Start route `head()` equivalents.

- Add semantic headings, descriptive image text, breadcrumbs, robots rules, and a generated sitemap endpoint.

- Add Organization/TravelAgency, BreadcrumbList, FAQPage, and dynamic package Offer/Product JSON-LD where appropriate.

- Use the requested Pakistan-focused search themes naturally without keyword stuffing.

## Technical implementation

- Use the existing React 19, TanStack Start, Tailwind CSS v4, Radix/shadcn primitives, Lucide icons, Recharts, and Sonner stack.

- Add Motion for React and GSAP/ScrollTrigger for the explicitly requested animation roles, loaded only where needed and guarded for reduced motion.

- Expand the semantic Tailwind design tokens first, then build reusable public and admin primitives against those tokens.

- Use route loaders/query caching for initial reads and mutations through the service layer; avoid scattered effect-based fetching.

- Ensure keyboard access, visible focus states, form labels, dialog semantics, restrained animation, responsive media, and mobile-friendly alternatives to wide admin tables.

## Delivery sequence

1. Foundation: design system, fonts, generated image set, domain types, mock repository, services, shared controls, app shell, and animation utilities.

2. Public routes: home and shared chrome, package discovery/details, offers/services/about/contact/FAQ/legal pages, states, and WhatsApp flows.

3. Admin: auth shell and dashboard, package CRUD/forms, remaining management modules, settings, dialogs, notifications, and responsive behavior.

4. SEO and finish: route metadata, structured data, sitemap/robots, branded error/loading/not-found experiences, accessibility, performance tuning, and content review.

5. Verification: build diagnostics, public and admin workflow checks, reduced-motion behavior, and Playwright screenshots at 320px, tablet, desktop, and large-desktop widths.

## Acceptance checks

- Every requested route renders intentional content and route-specific metadata.

- Public filters, pagination, galleries, accordions, countdowns, contact submission, and WhatsApp links work.

- Admin login abstraction, navigation, CRUD flows, status actions, confirmations, charts, dynamic fields, settings, and feedback states work against centralized mock services.

- No fabricated credentials, awards, guarantees, customer identities, or unqualified business statistics appear.

- The interface remains usable and visually coherent across 320px through large desktop, with no overlapping content or blank states.

- Current preview diagnostics are clean and the main user journeys pass browser verification.

## Scope boundary

This delivery implements the complete frontend and mock-backed behavior. Real authentication, persistent database storage, external APIs, file uploads, email delivery, and payment/booking processing remain intentionally unimplemented until the user connects their backend.

make this with gsap and framer motion

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d8fa4558-ccea-4e3d-9431-13f5708f3f16).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
