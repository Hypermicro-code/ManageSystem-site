/* ==== [BLOCK: Account] BEGIN ==== */
import React, { useState } from "react";
import { useAuth } from "../core/auth";
import { useI18n } from "../core/i18n";

export default function Account(){
  const { user } = useAuth();
  const { t } = useI18n();
  const [name, setName] = useState("");

  return (
    <div className="container" style={{maxWidth:720}}>
      <h1 style={{marginTop:0}}>{t("account_title")}</h1>
      <p style={{color:"var(--muted)"}}>E-post: {user?.email}</p>
      <div className="grid">
        <div className="container">
          <h3 style={{marginTop:0}}>Din info</h3>
          <input className="input" placeholder="Navn (placeholder)" value={name} onChange={(e)=>setName(e.target.value)} />
          <div className="spacer" />
          <button className="btn secondary" disabled>Lagre (kommer)</button>
        </div>
        <div className="container">
          <h3 style={{marginTop:0}}>Dine produkter</h3>
          <ul>
            <li>Manage Progress — Testtilgang</li>
          </ul>
          <button className="btn" disabled>Kjøp lisens (Stripe – kommer)</button>
        </div>
      </div>
    </div>
  );
}
/* ==== [BLOCK: Account] END ==== */
