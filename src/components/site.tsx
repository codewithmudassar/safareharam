"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  ChevronRight,
  ArrowRight,
  Clock3,
  CalendarDays,
  MapPin,
  Plane,
} from "lucide-react";
import type { Package, Faq } from "@/lib/domain";
import { AnimatePresence, motion } from "framer-motion";
import { MotionCard, PageMotion, Reveal } from "./site-motion";
import { usePathname } from "next/navigation";

export const images = {
  makkah: "/images/makkah-hero.jpg",
  madinah: "/images/madinah.jpg",
  hotel: "/images/hotel-makkah.jpg",
  transport: "/images/transport.jpg",
};
const nav = [
  ["Home", "/"],
  ["Packages", "/packages"],
  ["Services", "/services"],
  ["About", "/about"],
  ["FAQs", "/faq"],
  ["Contact", "/contact"],
];
export function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="grid size-10 place-items-center border border-gold/60 text-lg text-gold">
        ۞
      </span>
      <span>
        <strong className="block font-display text-lg leading-none">Safar e Harmain</strong>
        <small className="mt-1 block text-[9px] uppercase tracking-[.2em] text-gold">
          Journeys with purpose
        </small>
      </span>
    </Link>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-primary/95 text-primary-foreground backdrop-blur">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8">
          <Brand />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={`text-xs font-semibold uppercase tracking-wider transition hover:text-gold ${
                  pathname === href
                    ? "text-gold"
                    : "text-primary-foreground/75"
                }`}
              >
                {label}
              </Link>
            ))}

            <a
              href="https://wa.me/923000000000?text=Assalam-o-Alaikum%2C%20I%20would%20like%20help%20planning%20an%20Umrah%20journey."
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-[3px] bg-gold px-4 text-xs font-bold text-primary"
            >
              <MessageCircle size={16} />
              Enquire
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            type="button"
            className="text-primary-foreground lg:hidden"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU - OUTSIDE HEADER */}
      <AnimatePresence>
        {open && (
          <>
            {/* Full screen overlay */}
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              className="fixed inset-0 z-[9998] bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Right Drawer */}
            <motion.aside
              className="fixed inset-y-0 right-0 z-[9999] w-[min(88vw,360px)] overflow-y-auto bg-white p-6 text-foreground shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between">
                <span className="font-display text-xl text-primary">
                  Menu
                </span>

                <button
                  type="button"
                  aria-label="Close navigation"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="mt-10 grid">
                {nav.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-border py-5 font-display text-2xl ${
                      pathname === href
                        ? "text-gold"
                        : "text-primary"
                    }`}
                  >
                    {label}
                    <ChevronRight size={18} />
                  </Link>
                ))}
              </nav>
              <a
              href="https://wa.me/923000000000?text=Assalam-o-Alaikum%2C%20I%20would%20like%20help%20planning%20an%20Umrah%20journey."
              target="_blank"
              rel="noreferrer"
              className="flex h-10 items-center gap-2 rounded-[3px] mt-4 bg-gold items-center justify-center px-4 text-md font-bold text-primary"
            >
              <MessageCircle size={16} />
              Enquire
            </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Brand />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
            Thoughtfully planned Umrah journeys from Pakistan. Contact and business details shown
            are configurable demo content.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.2em] text-gold">Explore</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            {nav.slice(0, 5).map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[.2em] text-gold">Information</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms & conditions</Link>
            <Link href="/admin/login">Admin workspace</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        © 2026 Safar e Harmain · Demo experience · Confirm all travel details before booking
      </div>
    </footer>
  );
}
export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>
        <PageMotion>{children}</PageMotion>
      </main>
      <Footer />
    </>
  );
}
export function SectionHead({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[.22em] text-gold-strong">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-primary sm:text-5xl">
          {title}
        </h2>
        {copy && <p className="mt-4 leading-7 text-muted">{copy}</p>}
      </div>
    </Reveal>
  );
}
export function PackageCard({ item }: { item: Package }) {
  return (
    <MotionCard className="h-full">
      <article className="group h-full overflow-hidden border border-border bg-white">
        <Link href={`/packages/${item.slug}`} className="block overflow-hidden">
          <img
            src={images[item.image] || "/images/makkah-hero.jpg"}
            alt={item.title}
            className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="bg-ivory-deep px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gold-strong"
              >
                {t}
              </span>
            ))}
          </div>
          <h3 className="mt-4 font-display text-2xl leading-tight text-primary">
            <Link href={`/packages/${item.slug}`}>{item.title}</Link>
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-muted">
            <span className="flex items-center gap-2">
              <Clock3 size={14} />
              {item.duration} days
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays size={14} />
              {item.departure}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              {item.nightsMakkah} Makkah nights
            </span>
            <span className="flex items-center gap-2">
              <Plane size={14} />
              {item.nightsMadinah} Madinah nights
            </span>
          </div>
          <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
            <div>
              <span className="text-xs text-muted">From, per person</span>
              <strong className="block text-xl text-primary">
                PKR {item.price.toLocaleString("en-PK")}
              </strong>
            </div>
            <ArrowRight className="text-gold-strong" />
          </div>
        </div>
      </article>
    </MotionCard>
  );
}
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items
        .filter((x) => x.active)
        .map((f, i) => (
          <details key={f.id} className="group py-5" open={i === 0}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-xl text-primary">
              {f.question}
              <span className="text-gold-strong transition group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-3xl pt-4 text-sm leading-7 text-muted">{f.answer}</p>
          </details>
        ))}
    </div>
  );
}
