/* ==== [BLOCK: Language Switcher] BEGIN ==== */
import React from "react";
import { useI18n } from "../core/i18n";

export default function LanguageSwitcher(){
  const { lang, setLang } = useI18n();
  return (
    <select
      aria-label="Language"
      className="select"
      value={lang}
      onChange={(e)=>setLang(e.target.value as any)}
      style={{width:110}}
    >
      <option value="no">Norsk</option>
      <option value="en">English</option>
    </select>
  );
}
/* ==== [BLOCK: Language Switcher] END ==== */
