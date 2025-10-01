/* ==== [BLOCK: i18n provider] BEGIN ==== */
import React, { createContext, useContext, useMemo, useState } from "react";

type Lang = "no" | "en";

type Dict = Record<string, string>;
type Bundle = Record<Lang, Dict>;

const DICTS: Bundle = {
  no: {
    brand: "ManageSystem",
    slogan: "challenges → ideas → solutions",
    nav_home: "Hjem",
    nav_apps: "Apper",
    nav_education: "For skoler",
    nav_about: "Om oss",
    nav_feedback: "Feedback",
    cta_try: "Prøv gratis",
    cta_signin: "Logg inn",
    cta_signup: "Registrer deg",
    cta_buy: "Kjøp",
    hero_title: "Bygg system rundt fremdrift og beregninger",
    hero_sub:
      "Manage-familien samler små, presise verktøy som løser ekte behov. Start med Manage Progress – gratis for testbrukere.",
    apps_title: "Apper",
    mp_tagline: "Fremdriftsplanlegging gjort enkelt",
    learn_more: "Les mer",
    about_title: "Om ManageSystem",
    about_body:
      "ManageSystem er den profesjonelle plattformen fra Morning Coffee Labs for utvikling, salg og drift av Manage-appene.",
    education_title: "For skoler og læresteder",
    education_body:
      "Tilby studentene praktiske verktøy som speiler arbeidslivet. Enkelt oppsett, elevrabatter og institusjonslisens.",
    feedback_title: "Gi oss gjerne tilbakemelding",
    feedback_sent: "Takk! Vi har mottatt tilbakemeldingen.",
    account_title: "Konto",
    admin_title: "Admin",
    footer_mcl: "Besøk Morning Coffee Labs",
  },
  en: {
    brand: "ManageSystem",
    slogan: "challenges → ideas → solutions",
    nav_home: "Home",
    nav_apps: "Apps",
    nav_education: "For Schools",
    nav_about: "About",
    nav_feedback: "Feedback",
    cta_try: "Try free",
    cta_signin: "Sign in",
    cta_signup: "Sign up",
    cta_buy: "Buy",
    hero_title: "Build a system around progress and calculations",
    hero_sub:
      "The Manage family brings focused tools for real-world needs. Start with Manage Progress — free for test users.",
    apps_title: "Apps",
    mp_tagline: "Progress planning made simple",
    learn_more: "Learn more",
    about_title: "About ManageSystem",
    about_body:
      "ManageSystem is the professional platform from Morning Coffee Labs for developing, selling and running the Manage apps.",
    education_title: "For schools & institutions",
    education_body:
      "Give students practical, work-ready tools. Easy setup, student discounts and institution licensing.",
    feedback_title: "We’d love your feedback",
    feedback_sent: "Thanks! Your feedback has been received.",
    account_title: "Account",
    admin_title: "Admin",
    footer_mcl: "Visit Morning Coffee Labs",
  },
};

type Ctx = {
  lang: Lang;
  t: (key: keyof typeof DICTS["no"]) => string;
  setLang: (l: Lang) => void;
};

const I18nContext = createContext<Ctx | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("ms_lang") as Lang) || "no"
  );
  const t = useMemo(
    () => (key: keyof typeof DICTS["no"]) => DICTS[lang][key] ?? String(key),
    [lang]
  );
  const value = useMemo(() => ({ lang, t, setLang: (l: Lang) => {
    localStorage.setItem("ms_lang", l);
    setLang(l);
  }}), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
/* ==== [BLOCK: i18n provider] END ==== */
