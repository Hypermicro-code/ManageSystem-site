/* ==== [BLOCK: Feedback] BEGIN ==== */
import React, { useState } from "react";
import { useI18n } from "../core/i18n";

export default function Feedback(){
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");

  return (
    <div className="container" style={{display:"grid", gap:12, maxWidth:720}}>
      <h1 style={{margin:0}}>{t("feedback_title")}</h1>
      {!sent ? (
        <>
          <textarea
            className="textarea"
            rows={6}
            placeholder="Skriv din tilbakemelding…"
            value={msg}
            onChange={(e)=>setMsg(e.target.value)}
          />
          <button
            className="btn"
            onClick={()=>{ setSent(true); setMsg(""); }}
            disabled={!msg.trim()}
          >
            Send
          </button>
        </>
      ) : (
        <div className="container" style={{background:"#eff6ff", borderColor:"#bfdbfe"}}>
          {t("feedback_sent")}
        </div>
      )}
    </div>
  );
}
/* ==== [BLOCK: Feedback] END ==== */
