import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script src="/main.js" strategy="afterInteractive" />

      {/* Language Choice Modal */}
      <div id="language-modal" className="lang-modal">
        <div className="lang-modal__backdrop"></div>

        <div className="lang-modal__dialog">
          <div className="lang-modal__icon">🌍</div>
          <p className="lang-modal__step">STEP 1</p>

          <h2 id="language-modal-title" className="lang-modal__title">
            Choose your native language
          </h2>
          <p id="language-modal-subtitle" className="lang-modal__subtitle">
            You can change this later in the settings.
          </p>

          <div className="lang-modal__buttons">
            <button className="lang-btn" data-lang="uk">
              <span className="lang-btn__flag">🇺🇦</span>
              <span className="lang-btn__label">Українська</span>
              <span className="lang-btn__code">UA</span>
            </button>

            <button className="lang-btn" data-lang="en">
              <span className="lang-btn__flag">🇬🇧</span>
              <span className="lang-btn__label">English</span>
              <span className="lang-btn__code">GB</span>
            </button>

            <button className="lang-btn" data-lang="ar">
              <span className="lang-btn__flag">🇸🇦</span>
              <span className="lang-btn__label">العربية</span>
              <span className="lang-btn__code">AR</span>
            </button>

            <button className="lang-btn" data-lang="tr">
              <span className="lang-btn__flag">🇹🇷</span>
              <span className="lang-btn__label">Türkçe</span>
              <span className="lang-btn__code">TR</span>
            </button>

            <button className="lang-btn" data-lang="fa">
              <span className="lang-btn__flag">🇮🇷</span>
              <span className="lang-btn__label">فارسی</span>
              <span className="lang-btn__code">IR</span>
            </button>

            <button className="lang-btn" data-lang="ru">
              <span className="lang-btn__flag">🇷🇺</span>
              <span className="lang-btn__label">Русский</span>
              <span className="lang-btn__code">RU</span>
            </button>

            <button className="lang-btn" data-lang="af">
              <span className="lang-btn__flag">🇦🇫</span>
              <span className="lang-btn__label">دری / پشتو</span>
              <span className="lang-btn__code">AF</span>
            </button>
          </div>
        </div>
      </div>

      <h1 className="landing-title rainbow-title" data-i18n="title_main"></h1>

      <nav className="main-nav">
        <a href="/" className="nav-link active" data-i18n="menu_home"></a>
        <a href="/about.html" className="nav-link" data-i18n="menu_about"></a>
        <a href="/contact.html" className="nav-link" data-i18n="menu_contact"></a>
        <a href="/privacy.html" className="nav-link" data-i18n="menu_privacy"></a>
        <a href="/terms.html" className="nav-link" data-i18n="menu_terms"></a>
      </nav>

      <div className="app-shell">
        <header className="app-header">
          <div className="logo">
            <svg
              className="logo-svg"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="dh-title dh-desc"
            >
              <title id="dh-title">DeutschHero Logo</title>
              <desc id="dh-desc">Golden shield with German flag colors</desc>

              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff4c2" />
                  <stop offset="40%" stopColor="#facc15" />
                  <stop offset="70%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>

                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0
                                 0 1 0 0 0
                                 0 0 0 0 0
                                 0 0 0.4 0.8 0"
                    result="glowColor"
                  />
                  <feMerge>
                    <feMergeNode in="glowColor" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <clipPath id="shieldClip">
                  <path
                    d="M64 8
                   C 40 8, 26 20, 26 40
                   L 26 72
                   C 26 93, 42 108, 64 120
                   C 86 108, 102 93, 102 72
                   L 102 40
                   C 102 20, 88 8, 64 8 Z"
                  />
                </clipPath>
              </defs>

              <g className="shield-group" filter="url(#glow)">
                <path
                  className="shield-border"
                  fill="url(#goldGradient)"
                  d="M64 6
                 C 38 6, 22 20, 22 40
                 L 22 74
                 C 22 97, 40 112, 64 124
                 C 88 112, 106 97, 106 74
                 L 106 40
                 C 106 20, 90 6, 64 6 Z"
                />

                <path
                  className="shield-inner"
                  fill="#020617"
                  d="M64 12
                 C 42 12, 28 23, 28 41
                 L 28 71
                 C 28 90, 42 104, 64 114
                 C 86 104, 100 90, 100 71
                 L 100 41
                 C 100 23, 86 12, 64 12 Z"
                />

                <g clipPath="url(#shieldClip)">
                  <rect x="30" y="18" width="68" height="88" fill="#000000" />
                  <rect x="30" y="18" width="68" height="88" fill="#000000" />
                  <rect x="30" y="18" width="22.7" height="88" fill="#111827" />
                  <rect x="52.7" y="18" width="22.7" height="88" fill="#ef4444" />
                  <rect x="75.4" y="18" width="22.6" height="88" fill="#facc15" />
                </g>
              </g>
            </svg>

            <span className="logo-text">DeutschHero</span>
          </div>

          <div className="header-right">
            <span className="level-badge">
              <span id="current-level-label">A0</span>
            </span>

            <span id="user-chip" className="user-chip" style={{ display: "none" }}>
              <span id="user-chip-name" className="user-chip-name">
                Gast
              </span>
              <button id="user-logout-btn" className="user-logout-btn" data-i18n="logout_btn">
                خروج
              </button>
            </span>
          </div>
        </header>

        <main className="app-main">
          <div id="auth-box" className="card auth-card" style={{ marginBottom: "1.5rem", display: "none" }}>
            <div className="auth-badge" data-i18n="auth_badge_step"></div>

            <h2 className="card-title auth-title" data-i18n="auth_title"></h2>

            <p className="card-subtitle auth-subtitle" data-i18n="auth_subtitle"></p>

            <div className="auth-actions">
              <input id="auth-username" type="text" className="auth-input" data-i18n="auth_placeholder" />
              <button id="btn-register" className="btn btn-primary auth-btn-main" data-i18n="auth_btn_register"></button>
            </div>

            <div id="auth-message" className="auth-message"></div>
          </div>

          <div id="app" className="view-fade-in"></div>

          <div id="share-lesson-container" style={{ display: "none", marginTop: "1rem", textAlign: "center" }}>
            <button id="share-lesson-btn" className="btn btn-secondary btn-glow" data-i18n="share_this_lesson">
              شارك هذا الدرس
            </button>
          </div>
        </main>

        <footer className="app-footer">
          <span className="app-footer-text" data-i18n="footer_text">
            تعلم اللغة الألمانية مجاناً
          </span>

          <button id="reset-app-btn" className="reset-app-btn" type="button" data-i18n="reset_app_btn">
            إعادة ضبط الموقع
          </button>
        </footer>
      </div>
    </>
  );
}
