import {
  ArrowRight,
  BookOpenCheck,
  Languages,
  ShieldHalf,
  Sparkles,
  Volume2,
} from "lucide-react";
import Link from "next/link";
import Script from "next/script";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const highlights = [
  {
    title: "Mehrsprachige UI",
    description: "Wähle deine Muttersprache und passe die Oberfläche sofort an.",
    icon: Languages,
  },
  {
    title: "Adaptive Levels",
    description: "A0 bis C1 mit Progress-Tracking und Prüfungsmodus.",
    icon: BookOpenCheck,
  },
  {
    title: "Smarte Audio-Hilfen",
    description: "Deutsche Stimmen mit feinjustierter Geschwindigkeit.",
    icon: Volume2,
  },
];

const stats = [
  { label: "Aktive Kurse", value: "120+", hint: "Grammar & Exams" },
  { label: "Sprachen", value: "7", hint: "UI & Übersetzungen" },
  { label: "Community", value: "40k+", hint: "Learners worldwide" },
];

export default function Home() {
  return (
    <>
      <Script src="/main.js" strategy="afterInteractive" />

      {/* Language Choice Modal */}
      <div
        id="language-modal"
        className="lang-modal fixed inset-0 z-50 items-center justify-center bg-slate-950/80 backdrop-blur"
      >
        <div className="lang-modal__backdrop absolute inset-0"></div>

        <div className="lang-modal__dialog relative z-10 w-full max-w-xl rounded-2xl border border-amber-200/20 bg-slate-900/90 p-6 shadow-2xl shadow-amber-500/10 ring-1 ring-slate-800">
          <div className="lang-modal__icon mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-xl text-amber-200">
            🌐
          </div>
          <p className="lang-modal__step text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
            Step 1
          </p>

          <h2
            id="language-modal-title"
            className="lang-modal__title mt-2 text-2xl font-semibold text-slate-50"
          >
            Choose your native language
          </h2>
          <p
            id="language-modal-subtitle"
            className="lang-modal__subtitle mt-1 text-sm text-slate-300"
          >
            You can change this later in the settings.
          </p>

          <div className="lang-modal__buttons mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <button
              className="lang-btn group flex items-center justify-between rounded-xl border border-amber-300/30 bg-slate-900/80 p-3 text-left text-slate-100 shadow-lg shadow-black/30 ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:shadow-glow hover:ring-amber-200/30"
              data-lang="uk"
            >
              <span className="lang-btn__flag">🇺🇦</span>
              <span className="lang-btn__label">Українська</span>
              <span className="lang-btn__code">UA</span>
            </button>

            <button
              className="lang-btn group flex items-center justify-between rounded-xl border border-amber-300/30 bg-slate-900/80 p-3 text-left text-slate-100 shadow-lg shadow-black/30 ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:shadow-glow hover:ring-amber-200/30"
              data-lang="en"
            >
              <span className="lang-btn__flag">🇬🇧</span>
              <span className="lang-btn__label">English</span>
              <span className="lang-btn__code">GB</span>
            </button>

            <button
              className="lang-btn group flex items-center justify-between rounded-xl border border-amber-300/30 bg-slate-900/80 p-3 text-left text-slate-100 shadow-lg shadow-black/30 ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:shadow-glow hover:ring-amber-200/30"
              data-lang="ar"
            >
              <span className="lang-btn__flag">🇸🇦</span>
              <span className="lang-btn__label">العربية</span>
              <span className="lang-btn__code">AR</span>
            </button>

            <button
              className="lang-btn group flex items-center justify-between rounded-xl border border-amber-300/30 bg-slate-900/80 p-3 text-left text-slate-100 shadow-lg shadow-black/30 ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:shadow-glow hover:ring-amber-200/30"
              data-lang="tr"
            >
              <span className="lang-btn__flag">🇹🇷</span>
              <span className="lang-btn__label">Türkçe</span>
              <span className="lang-btn__code">TR</span>
            </button>

            <button
              className="lang-btn group flex items-center justify-between rounded-xl border border-amber-300/30 bg-slate-900/80 p-3 text-left text-slate-100 shadow-lg shadow-black/30 ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:shadow-glow hover:ring-amber-200/30"
              data-lang="fa"
            >
              <span className="lang-btn__flag">🇮🇷</span>
              <span className="lang-btn__label">فارسی</span>
              <span className="lang-btn__code">IR</span>
            </button>

            <button
              className="lang-btn group flex items-center justify-between rounded-xl border border-amber-300/30 bg-slate-900/80 p-3 text-left text-slate-100 shadow-lg shadow-black/30 ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:shadow-glow hover:ring-amber-200/30"
              data-lang="ru"
            >
              <span className="lang-btn__flag">🇷🇺</span>
              <span className="lang-btn__label">Русский</span>
              <span className="lang-btn__code">RU</span>
            </button>

            <button
              className="lang-btn group flex items-center justify-between rounded-xl border border-amber-300/30 bg-slate-900/80 p-3 text-left text-slate-100 shadow-lg shadow-black/30 ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:shadow-glow hover:ring-amber-200/30"
              data-lang="af"
            >
              <span className="lang-btn__flag">🇦🇫</span>
              <span className="lang-btn__label">افغانية</span>
              <span className="lang-btn__code">AF</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-slate-950 text-slate-50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(15,23,42,0.9),transparent_45%)]" />
        <div className="container relative z-10 space-y-10 pb-16 pt-10 lg:pt-12">
          <header className="hero-header flex flex-col gap-5 rounded-3xl border border-slate-800/60 bg-slate-900/80 p-4 shadow-xl shadow-black/35 ring-1 ring-amber-200/10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-400/10 text-lg font-semibold text-amber-100 shadow-glow">
                DH
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-200">
                  <Sparkles className="h-3.5 w-3.5" /> Modern UI
                </p>
                <p className="text-sm text-slate-100">DeutschHero</p>
                <p className="text-xs text-slate-400">Klare Navigation, schneller Einstieg, Postgres-ready.</p>
              </div>
            </div>

            <nav className="main-nav hidden items-center gap-2 rounded-full bg-slate-900/80 px-2 py-1 shadow-xl shadow-black/30 ring-1 ring-slate-800/70 md:flex">
              <Link
                href="/"
                className="nav-link rounded-full px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/80 data-[active=true]:bg-slate-800/90"
                data-i18n="menu_home"
              >
                Home
              </Link>
              <Link
                href="/about.html"
                className="nav-link rounded-full px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/80"
                data-i18n="menu_about"
              >
                Über uns
              </Link>
              <Link
                href="/contact.html"
                className="nav-link rounded-full px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/80"
                data-i18n="menu_contact"
              >
                Kontakt
              </Link>
              <Link
                href="/privacy.html"
                className="nav-link rounded-full px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/80"
                data-i18n="menu_privacy"
              >
                Datenschutz
              </Link>
              <Link
                href="/terms.html"
                className="nav-link rounded-full px-3 py-2 text-sm text-slate-200 hover:bg-slate-800/80"
                data-i18n="menu_terms"
              >
                Nutzungsbedingungen
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" className="hidden md:inline-flex" asChild>
                <Link href="/about.html" data-i18n="menu_about">
                  Mehr erfahren
                </Link>
              </Button>
              <Button size="sm" className="shadow-glow" asChild>
                <Link href="#app">Jetzt starten</Link>
              </Button>
            </div>
          </header>

          <div className="main-nav grid grid-cols-2 gap-2 rounded-xl bg-slate-900/60 p-3 shadow-lg shadow-black/30 ring-1 ring-slate-800/60 md:hidden">
            <Link href="/" className="nav-link rounded-lg px-3 py-2 text-slate-200" data-i18n="menu_home">
              Home
            </Link>
            <Link href="/about.html" className="nav-link rounded-lg px-3 py-2 text-slate-200" data-i18n="menu_about">
              Über
            </Link>
            <Link href="/contact.html" className="nav-link rounded-lg px-3 py-2 text-slate-200" data-i18n="menu_contact">
              Kontakt
            </Link>
            <Link href="/privacy.html" className="nav-link rounded-lg px-3 py-2 text-slate-200" data-i18n="menu_privacy">
              Datenschutz
            </Link>
            <Link href="/terms.html" className="nav-link rounded-lg px-3 py-2 text-slate-200" data-i18n="menu_terms">
              Nutzungsbedingungen
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <Badge className="w-fit">Neu: UI Refresh mit shadcn</Badge>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Deutsch lernen mit klarer UX, <br className="hidden sm:block" />
                schneller als dein letzter Kaffee.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200/90">
                App-Router, Postgres + Prisma, mehrsprachige Oberfläche und Audio-Hilfen.
                Alle Legacy-Übungen bleiben erhalten, jetzt in einer frischen Hülle.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="shadow-glow" asChild>
                  <Link href="#app" data-i18n="auth_btn_register">
                    Loslegen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary">
                  <Volume2 className="mr-2 h-4 w-4" />
                  Demo anhören
                </Button>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <ShieldHalf className="h-4 w-4 text-amber-300" />
                  DSGVO-ready
                </Badge>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <Card key={stat.label} className="glass-panel border-amber-200/10 bg-slate-900/70">
                    <CardHeader className="p-4">
                      <CardTitle className="text-3xl font-semibold text-amber-100">
                        {stat.value}
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        {stat.label}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 text-xs uppercase tracking-wide text-slate-400">
                      {stat.hint}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="glass-panel border-amber-400/20">
              <CardHeader className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Level</Badge>
                    <span className="level-badge inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/80 px-3 py-1 text-sm shadow-inner">
                      <span id="current-level-label">A0</span>
                    </span>
                  </div>

                  <span
                    id="user-chip"
                    className="user-chip hidden items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-100 md:flex"
                    style={{ display: "none" }}
                  >
                    <span id="user-chip-name" className="user-chip-name">
                      Gast
                    </span>
                    <Button
                      id="user-logout-btn"
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-xs"
                      data-i18n="logout_btn"
                    >
                      Abmelden
                    </Button>
                  </span>
                </div>
                <CardDescription>
                  Dein aktueller Fortschritt und neue Lektionen erscheinen automatisch,
                  sobald du im unteren Bereich interagierst.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div
                  id="auth-box"
                  className="card auth-card glass-panel border border-slate-800/80 bg-slate-900/70"
                  style={{ marginBottom: "1.5rem", display: "none" }}
                >
                  <div className="auth-badge" data-i18n="auth_badge_step"></div>

                  <h2 className="card-title auth-title text-xl font-semibold" data-i18n="auth_title"></h2>

                  <p className="card-subtitle auth-subtitle text-slate-300" data-i18n="auth_subtitle"></p>

                  <div className="auth-actions mt-4 flex flex-col gap-3 sm:flex-row">
                    <input
                      id="auth-username"
                      type="text"
                      className="auth-input w-full rounded-lg border border-slate-800/80 bg-slate-900/80 px-3 py-2 text-slate-100 outline-none ring-amber-400/40 focus:ring-2"
                      data-i18n="auth_placeholder"
                    />
                    <Button
                      id="btn-register"
                      className="btn btn-primary auth-btn-main w-full sm:w-auto"
                      data-i18n="auth_btn_register"
                    />
                  </div>

                  <div id="auth-message" className="auth-message mt-3 text-sm text-amber-200"></div>
                </div>

                <div
                  id="app"
                  className="view-fade-in min-h-[320px] rounded-xl border border-slate-800/80 bg-slate-950/70 p-4 shadow-inner"
                ></div>

                <div
                  id="share-lesson-container"
                  style={{ display: "none", marginTop: "1rem", textAlign: "center" }}
                >
                  <Button
                    id="share-lesson-btn"
                    className="btn btn-secondary btn-glow w-full justify-center"
                    variant="secondary"
                    data-i18n="share_this_lesson"
                  >
                    Teilen
                  </Button>
                </div>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldHalf className="h-4 w-4 text-amber-300" />
                  <span>Fortschritt lokal + in Postgres gespeichert.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  <span>App-Router, Prisma, Docker-ready.</span>
                </div>
              </CardFooter>
            </Card>
          </div>

          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="glass-panel border-slate-800/70 bg-slate-900/70 transition hover:-translate-y-0.5 hover:border-amber-200/30 hover:shadow-glow"
              >
                <CardHeader className="flex flex-row items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/10 text-amber-200">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription className="mt-1 text-slate-300">
                      {item.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </section>

          <footer className="app-footer hero-footer mt-10 grid gap-8 rounded-3xl border border-slate-800/70 bg-slate-900/90 p-8 text-slate-200 shadow-2xl shadow-black/30">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="flex flex-col gap-3">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-100 ring-1 ring-amber-200/30">
                  <Sparkles className="h-3.5 w-3.5" />
                  Modern Learning Stack
                </div>
                <h3 className="text-3xl font-semibold text-slate-50 leading-tight">Bereit für deinen nächsten Level?</h3>
                <p className="max-w-2xl text-slate-300">
                  Alle Inhalte bleiben offlinefähig, Fortschritt wird lokal und in Postgres gesichert. Wechsel jederzeit die Sprache oder starte neu.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="shadow-glow" asChild>
                    <Link href="#app">Lektion öffnen</Link>
                  </Button>
                  <Button id="reset-app-btn" className="reset-app-btn" type="button" variant="outline" data-i18n="reset_app_btn">
                    App zurücksetzen
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-800/60 bg-slate-900/70 p-4 text-sm shadow-inner">
                <div className="space-y-2">
                  <p className="text-slate-100">Produkt</p>
                  <Link href="/about.html" className="block hover:text-amber-200" data-i18n="menu_about">
                    Über DeutschHero
                  </Link>
                  <Link href="/contact.html" className="block hover:text-amber-200" data-i18n="menu_contact">
                    Kontakt
                  </Link>
                  <Link href="/" className="block hover:text-amber-200">
                    Changelog
                  </Link>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-100">Technik & Recht</p>
                  <span className="block text-slate-400">Next.js App Router</span>
                  <span className="block text-slate-400">Prisma + Postgres (Docker)</span>
                  <span className="block text-slate-400">shadcn/ui + Tailwind</span>
                  <Link href="/privacy.html" className="block hover:text-amber-200" data-i18n="menu_privacy">
                    Datenschutz
                  </Link>
                  <Link href="/terms.html" className="block hover:text-amber-200" data-i18n="menu_terms">
                    Nutzungsbedingungen
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
