(() => {
  const MAIN_URL = "/public/translations.json" // adjust path if needed
  const EXTRAS = ["/public/translations-extra.json","/public/common.json"] // adjust path if needed

  const alias = {
    // Map backend locale codes to our JSON locales (customize freely)
    en: "en-ww",
    "en-ww": "en-ww",
    "en-au": "en-au",

    es: "es-mx",
    "es-mx": "es-mx",

    pt: "pt-br",
    "pt-br": "pt-br",

    id: "en-id",
    "en-id": "en-id",

    vi: "iv-vn",
    "iv-vn": "iv-vn",

    tr: "tr-tr",
    "tr-tr": "tr-tr",

    ar: "ar-ar",
    "ar-ar": "ar-ar",

    th: "th-th",
    "th-th": "th-th",

    az: "az-az",
    "az-az": "az-az",

    uz: "uz-uz",
    "uz-uz": "uz-uz",

    ko: "ko-kr",
    kr: "ko-kr",
    "ko-kr": "ko-kr",

    ru: "ru-ru",
    "ru-ru": "ru-ru",

    hi: "hi-in",
    "hi-in": "hi-in",

    bn: "bn-bd",
    "bn-bd": "bn-bd",
  }

  const state = {
    locales: {},
    current: null,
    defaultLocale: "en-ww", // use a valid default present in your JSON
  }

  function get(obj, path, fallback = "") {
    return path.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), obj) ?? fallback
  }

  function setHtmlLangDir(localeObj, localeCode) {
    const code = String(localeCode || "").toLowerCase()
    const dir = (localeObj && localeObj._dir) || (/^(ar|fa|he|ur)/.test(code) ? "rtl" : "ltr")

    document.documentElement.setAttribute("lang", localeCode)
    document.documentElement.setAttribute("dir", dir)
  }

  function normalizeLocale(code) {
    if (!code) return state.defaultLocale
    const lower = String(code).toLowerCase()
    return alias[lower] || lower
  }

  function applyTranslations(root = document) {
    const cur = state.locales[state.current] || {}
    // Replace text in elements marked with data-i18n="namespace.key"
    const nodes = root.querySelectorAll("[data-i18n]")
    nodes.forEach((el) => {
      const key = el.getAttribute("data-i18n")
      const value = get(cur, key)
      if (value) el.textContent = value
    })

    // Optional: placeholders like data-i18n-placeholder
    const placeholders = root.querySelectorAll("[data-i18n-placeholder]")
    placeholders.forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder")
      const value = get(cur, key)
      if (value) el.setAttribute("placeholder", value)
    })

    // Optional: titles like data-i18n-title
    const titles = root.querySelectorAll("[data-i18n-title]")
    titles.forEach((el) => {
      const key = el.getAttribute("data-i18n-title")
      const value = get(cur, key)
      if (value) el.setAttribute("title", value)
    })
  }

  function mergeDeep(target, source) {
    if (!source || typeof source !== "object") return target
    for (const key of Object.keys(source)) {
      const sv = source[key]
      if (sv && typeof sv === "object" && !Array.isArray(sv)) {
        if (!target[key] || typeof target[key] !== "object") target[key] = {}
        mergeDeep(target[key], sv)
      } else {
        target[key] = sv
      }
    }
    return target
  }

  async function loadTranslations() {
    if (Object.keys(state.locales).length) return
    const results = await Promise.allSettled([
      fetch(MAIN_URL, { cache: "no-cache" }).then((r) => r.json()),
      ...EXTRAS.map((u) =>
        fetch(u, { cache: "no-cache" })
          .then((r) => (r.ok ? r.json() : {}))
          .catch(() => ({})),
      ),
    ])

    const bags = results.map((res) => (res.status === "fulfilled" ? res.value : {})).filter(Boolean)

    const merged = bags.reduce((acc, cur) => mergeDeep(acc, cur), {})
    state.locales = merged
    state.defaultLocale = merged._meta?.defaultLocale || state.defaultLocale
  }

  async function setLanguage(locale, options = {}) {
    const {
      syncBackend = true,
      apiUrl = "/api/language", // change to your backend endpoint
      method = "POST",
      bodyKey = "language", // backend body key
      headers = { "Content-Type": "application/json" },
    } = options

    const code = normalizeLocale(locale)
    await loadTranslations()

    if (!state.locales[code]) {
      console.warn("[i18n] Missing locale in translations.json:", code)
    }

    state.current = state.locales[code] ? code : state.defaultLocale
    localStorage.setItem("locale", state.current)

    // Update <html lang dir="...">
    setHtmlLangDir(state.locales[state.current], state.current)

    // Apply on current page
    applyTranslations()

    // Optionally inform backend
    if (syncBackend && apiUrl) {
      try {
        await fetch(apiUrl, {
          method,
          headers,
          body: JSON.stringify({ [bodyKey]: locale }),
        })
        // If you use toasts on plain HTML, you can hook here
        // showToast(get(state.locales[state.current], "toasts.language_updated_success", "Language updated"));
      } catch (e) {
        console.error("[i18n] Backend language update failed:", e)
        // showToast(get(state.locales[state.current], "toasts.language_update_failed", "Failed to update language"));
      }
    }
  }

  async function init() {
    await loadTranslations()
    const saved = normalizeLocale(localStorage.getItem("locale"))
    const start = state.locales[saved] ? saved : state.defaultLocale
    state.current = start
    setHtmlLangDir(state.locales[start], start)
    applyTranslations()

    // Auto-bind any buttons/links with data-lang attribute
    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-lang]")
      if (!el) return
      const next = el.getAttribute("data-lang")
      if (next) setLanguage(next)
    })

    // Auto-bind selects with id="language" or data-i18n-select
    const selects = Array.from(document.querySelectorAll("#language, [data-i18n-select]"))
    selects.forEach((sel) => {
      sel.value = state.current
      sel.addEventListener("change", (ev) => {
        const value = ev.target.value
        setLanguage(value)
      })
    })
  }

  // Expose a tiny API
  window.I18N = {
    t: (key) => get(state.locales[state.current] || {}, key, key),
    setLanguage,
    apply: applyTranslations,
    getCurrent: () => state.current,
  }

  document.addEventListener("DOMContentLoaded", init)
})()
