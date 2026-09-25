import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { faqRepo, packageRepo } from "@/lib/repository";
import { FaqList, PackageCard, PublicLayout, SectionHead, images } from "@/components/site";
import { HeroMotion, Reveal } from "@/components/site-motion";
export default function Home() {
  const packages = packageRepo.list();
  const faqs = faqRepo.list();
  return (
    <PublicLayout>
      <HeroMotion>
        <section className="relative min-h-[760px] overflow-hidden bg-primary text-primary-foreground">
          <img
            src={"/images/makkah-hero.jpg"}
            alt="Masjid al-Haram"
            className="hero-parallax absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-24 pt-32 sm:px-8">
            <div className="max-w-3xl">
              <p className="hero-kicker text-xs font-bold uppercase tracking-[.25em] text-gold">
                Umrah journeys from Pakistan
              </p>
              <h1 className="hero-title mt-5 font-display text-5xl leading-[.98] sm:text-7xl lg:text-8xl">
                A sacred journey, thoughtfully arranged.
              </h1>
              <p className="hero-copy mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                Carefully selected stays, coordinated travel, and human support—so your attention
                stays on the purpose of the journey.
              </p>
              <div className="hero-actions mt-8 flex flex-wrap gap-3">
                <Link
                  href="/packages"
                  className="inline-flex h-12 items-center gap-2 bg-gold px-6 text-sm font-bold text-primary"
                >
                  Explore packages <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center border border-white/35 px-6 text-sm font-bold"
                >
                  Plan a custom journey
                </Link>
              </div>
            </div>
          </div>
        </section>
      </HeroMotion>
      <section className="border-b border-border bg-ivory-deep">
        <div className="mx-auto grid max-w-7xl divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
          {[
            ["Demo metric", "12+", "Curated itineraries"],
            ["Configurable claim", "24/7", "Journey support"],
            ["Demo rating", "4.9/5", "Traveler feedback"],
          ].map((x) => (
            <div key={x[0]} className="py-7 sm:px-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-strong">
                {x[0]}
              </span>
              <strong className="mt-1 block font-display text-3xl text-primary">{x[1]}</strong>
              <span className="text-xs text-muted">{x[2]}</span>
            </div>
          ))}
        </div>
      </section>
      <Reveal>
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHead
              eyebrow="Selected journeys"
              title="Travel with clarity and care"
              copy="Transparent sample itineraries designed for families, couples, and individual travelers."
            />
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              View all packages <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages
              .filter((x) => x.featured)
              .slice(0, 3)
              .map((x) => (
                <PackageCard key={x.id} item={x} />
              ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="bg-primary py-20 text-primary-foreground sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <img
              src={"/images/madinah.jpg"}
              alt="Masjid an-Nabawi"
              className="aspect-[4/3] w-full object-cover"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-gold">
                Makkah & Madinah
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl">
                Space for devotion. Support for every detail.
              </h2>
              <p className="mt-6 max-w-xl leading-7 text-white/65">
                From arrival assistance to intercity transfers and guided ziyarat, each stage is
                composed around ease, dignity, and informed choices.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  [Compass, "Considered itineraries"],
                  [ShieldCheck, "Clear documentation"],
                  [HeartHandshake, "Human support"],
                  [Sparkles, "Selected stays"],
                ].map(([Icon, text]) => (
                  <div
                    className="flex items-center gap-3 border-t border-white/15 pt-4"
                    key={String(text)}
                  >
                    <Icon className="text-gold" size={20} />
                    <span className="text-sm font-semibold">{String(text)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[.75fr_1.25fr]">
        <SectionHead
          eyebrow="Common questions"
          title="Before you travel"
          copy="Practical guidance for planning your Umrah journey."
        />
        <FaqList items={faqs.slice(0, 4)} />
      </section>
      <Reveal>
        <section className="islamic-pattern bg-ivory-deep py-20 text-center">
          <div className="mx-auto max-w-2xl px-5">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-gold-strong">
              Begin with a conversation
            </p>
            <h2 className="mt-4 font-display text-4xl text-primary sm:text-6xl">
              Your journey deserves thoughtful planning.
            </h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-12 items-center bg-primary px-7 text-sm font-bold text-primary-foreground"
            >
              Speak with our team
            </Link>
          </div>
        </section>
      </Reveal>
    </PublicLayout>
  );
}
