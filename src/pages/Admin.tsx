/* ==== [BLOCK: Admin] BEGIN ==== */
import React from "react";
import { useI18n } from "../core/i18n";

export default function Admin(){
  const { t } = useI18n();
  return (
    <div className="container" style={{display:"grid", gap:12}}>
      <h1 style={{marginTop:0}}>{t("admin_title")}</h1>
      <div className="grid">
        <div className="container">
          <h3 style={{marginTop:0}}>Kunder (placeholder)</h3>
          <ul>
            <li>Bruker A — user@demo.com — 0 lisenser</li>
          </ul>
        </div>
        <div className="container">
          <h3 style={{marginTop:0}}>Produkter (placeholder)</h3>
          <ul>
            <li>Manage Progress — pris TBD</li>
          </ul>
          <button className="btn secondary" disabled>Ny artikkel</button>
        </div>
      </div>
    </div>
  );
}
/* ==== [BLOCK: Admin] END ==== */
