import { createFileRoute } from "@tanstack/react-router";
import {
  Menu,
  Search,
  ShoppingBag,
  User,
  ArrowUpRight,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  MessageCircle,
} from "lucide-react";

const heroVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
const catWc = "https://picsum.photos/id/1025/800/800";
const catBasin = "https://picsum.photos/id/1074/800/800";
const catFaucet = "https://picsum.photos/id/1024/800/800";
const catTiles = "https://picsum.photos/id/1023/800/800";
const catChimney = "https://picsum.photos/id/1068/800/800";
const catHeater = "https://picsum.photos/id/1080/800/800";
const featureBasin = "https://picsum.photos/id/1025/1600/2000";
const featureSmart = "https://picsum.photos/id/1070/1920/1080";
const featureGreen = "https://picsum.photos/id/1080/1600/1000";
const blog1 = "https://picsum.photos/id/1074/900/600";
const blog2 = "https://picsum.photos/id/1023/900/600";
const blog3 = "https://picsum.photos/id/1068/900/600";

export const Route = createFileRoute("/")({
  component: Home,
});

const CATEGORIES = [
  { name: "Water Closets", img: catWc },
  { name: "Wash Basins", img: catBasin },
  { name: "Faucets", img: catFaucet },
  { name: "Tiles & Surfaces", img: catTiles },
  { name: "Chimneys", img: catChimney },
  { name: "Water Heaters", img: catHeater },
];

const BLOGS = [
  { title: "Designer wash basin trends for small bathrooms in 2026", tag: "Bath", img: blog1 },
  { title: "Elegant bedroom wall tile ideas to suit every style", tag: "Tiles", img: blog2 },
  { title: "Creative kitchen chimney design ideas for your home", tag: "Kitchen", img: blog3 },
];

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Categories />
        <NewArrivals />
        <SmartCallout />
        <SustainableBand />
        <Blogs />
        <BusinessGrid />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <button
          type="button"
          aria-label="Open menu"
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-soft transition-colors hover:text-ink"
        >
          <Menu className="size-4" aria-hidden />
          Menu
        </button>

        <a href="/" aria-label="Hinterra home" className="font-display text-xl tracking-[-0.04em] text-ink">
          hinterra<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-2">
          <IconBtn label="Search"><Search className="size-4" aria-hidden /></IconBtn>
          <IconBtn label="Bag"><ShoppingBag className="size-4" aria-hidden /></IconBtn>
          <IconBtn label="Account"><User className="size-4" aria-hidden /></IconBtn>
        </div>
      </div>
    </header>
  );
}

function IconBtn({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full text-ink-soft transition-all hover:bg-surface-alt hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {children}
    </button>
  );
}

function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden pt-16">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/45" />

      <div className="container-x relative z-10 flex h-full flex-col justify-end pb-24 md:pb-28">
        <div className="fade-up max-w-2xl text-white">
          <p className="eyebrow text-white/75">Italian Collection</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl">
            Faucets, refined for living spaces
          </h1>
          <a
            href="#categories"
            className="mt-8 inline-flex items-center gap-3 rounded-pill border border-white/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition-all hover:bg-white hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore Faucets
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="border-b border-line bg-surface py-24 md:py-32">
      <div className="container-x">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Explore the catalogue</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight tracking-[-0.02em] md:text-5xl">
              Six categories. <span className="text-ink-soft">Endless considered choices.</span>
            </h2>
          </div>
          <a href="#" className="link-underline hidden text-ink hover:text-accent md:inline-flex">
            View all <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-3">
          {CATEGORIES.map((c) => (
            <li key={c.name}>
              <a href="#" className="group block">
                <div className="aspect-square overflow-hidden bg-surface-alt">
                  <img
                    src={c.img}
                    alt={c.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-center text-sm tracking-tight text-ink transition-colors group-hover:text-accent">
                  {c.name}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NewArrivals() {
  const items = [
    { title: "Stone Wash Basins", eyebrow: "New Arrivals", img: featureBasin, alt: "Stone wash basin on dark vanity" },
    { title: "Adris Wash Basin", eyebrow: "New Arrivals", img: featureGreen, alt: "Sustainable bathware with plants" },
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-x grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-10">
        {items.map((it) => (
          <article key={it.title} className="group relative overflow-hidden">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={it.img}
                alt={it.alt}
                width={1600}
                height={1000}
                loading="lazy"
                className="size-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-8 md:p-10">
              <p className="eyebrow text-white/80">{it.eyebrow}</p>
              <h3 className="mt-2 font-display text-3xl text-white md:text-4xl">{it.title}</h3>
              <a
                href="#"
                className="link-underline mt-5 text-white hover:text-white/80"
              >
                Discover <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SmartCallout() {
  return (
    <section className="relative overflow-hidden bg-ink text-background">
      <img
        src={featureSmart}
        alt=""
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="container-x relative grid gap-10 py-28 md:grid-cols-2 md:py-36">
        <div className="max-w-lg">
          <p className="eyebrow text-background/70">Smart Essentials</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Smart products for smart homes
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-background/75">
            Designed for those who seek the finest details — redefining comfort,
            convenience and hygiene with sensor-driven precision.
          </p>
          <a
            href="#"
            className="mt-9 inline-flex items-center gap-3 rounded-pill bg-background px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-ink transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
          >
            Explore Smart Products
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

function SustainableBand() {
  return (
    <section className="bg-surface-alt">
      <div className="container-x grid items-center gap-0 md:grid-cols-12">
        <div className="relative md:col-span-7">
          <img
            src={featureGreen}
            alt="Sustainable bathware among plants"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[16/10] size-full object-cover"
          />
        </div>
        <div className="px-2 py-16 md:col-span-5 md:px-12 md:py-24">
          <p className="eyebrow">Sustainable Living</p>
          <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.02em] md:text-5xl">
            Go green with sustainable products
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
            Water-efficient fixtures and star-rated appliances designed to lower
            consumption without compromising performance.
          </p>
          <a href="#" className="link-underline mt-8 text-ink hover:text-accent">
            Explore star-rated collection <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

function Blogs() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-x">
        <div className="mb-12 flex items-end justify-between gap-8">
          <h2 className="font-display text-3xl tracking-[-0.02em] md:text-5xl">
            Journal
          </h2>
          <a href="#" className="link-underline text-ink hover:text-accent">
            View all <ArrowRight className="size-3.5" aria-hidden />
          </a>
        </div>

        <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
          {BLOGS.map((b) => (
            <li key={b.title}>
              <a href="#" className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-surface-alt">
                  <img
                    src={b.img}
                    alt={b.title}
                    width={900}
                    height={600}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-5">{b.tag}</p>
                <h3 className="mt-2 font-display text-xl leading-snug tracking-[-0.01em] text-ink group-hover:text-accent">
                  {b.title}
                </h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BusinessGrid() {
  const cards = [
    { title: "Institutional Business", body: "Explore projects for institutional and business customers.", cta: "Know more" },
    { title: "International Business", body: "Explore the countries we operate in.", cta: "Know more" },
    { title: "Service & Support", body: "Connect with us for installation and service requests.", cta: "Connect now" },
    { title: "Hinterra Service App", body: "Get faster support on the go. Download our service app.", cta: "Download now" },
  ];
  return (
    <section className="border-t border-line bg-surface">
      <div className="container-x grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <article key={c.title} className="group bg-surface p-10 transition-colors hover:bg-surface-alt">
            <h3 className="font-display text-xl tracking-[-0.01em]">{c.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            <a href="#" className="link-underline mt-8 text-ink group-hover:text-accent">
              {c.cta} <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Bath", l: ["Water Closets", "Wash Basins", "Faucets", "Showers", "Bathtubs"] },
    { h: "Kitchen", l: ["Chimneys", "Hobs", "Built-in Ovens", "Sinks"] },
    { h: "Appliances", l: ["Water Heaters", "Air Coolers", "Fans"] },
    { h: "Company", l: ["About", "Sustainability", "Careers", "Press", "Contact"] },
  ];
  return (
    <footer className="bg-ink text-background">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <a href="/" className="font-display text-2xl tracking-[-0.04em] text-background">
              hinterra<span className="text-accent">.</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-background/65">
              Premium bathware, smart appliances and designer tiles — crafted for
              modern living.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Youtube, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-background/15 text-background/70 transition-all hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.h}>
                <p className="eyebrow text-background/60">{c.h}</p>
                <ul className="mt-5 space-y-3">
                  {c.l.map((i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-background/80 transition-colors hover:text-accent">
                        {i}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/10 pt-8 text-xs text-background/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Hinterra. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
            <a href="#" className="hover:text-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}