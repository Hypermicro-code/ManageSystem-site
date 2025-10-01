/* ==== [BLOCK: Apps] BEGIN ==== */
import React from "react";
import { useI18n } from "../core/i18n";

export default function Apps(){
  const { t } = useI18n();

  return (
    <div className="container" style={{display:"grid", gap:12, maxWidth:820, margin:"0 auto"}}>
      <h1 style={{marginTop:0}}>{t("apps_title")}</h1>
      <p style={{color:"var(--muted)"}}>
        Foreløpig er <strong>Manage Progress</strong> tilgjengelig som testversjon (lenke fra forsiden).
        Her vil vi etter hvert liste alle apper i <em>Manage</em>-familien.
      </p>

      <div className="hr" />

      <section>
        <h3 style={{marginTop:0}}>Planlagte apper</h3>
        <ul>
          <li>Manage Calculations — beregninger og små verktøy (kommer)</li>
          <li>Manage System Suite — samlede verktøy i én pakke (kommer senere)</li>
        </ul>
        <p style={{color:"var(--muted)"}}>
          Har du behov eller innspill? Gå til <a href="/feedback">feedback</a> og gi oss beskjed.
        </p>
      </section>
    </div>
  );
}
/* ==== [BLOCK: Apps] END ==== */
