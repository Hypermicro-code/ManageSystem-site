/* ==== [BLOCK: AdminSettings] BEGIN ==== */
import React from "react";

export default function AdminSettings(){
  return (
    <div className="container" style={{display:"grid", gap:12}}>
      <h1 style={{marginTop:0}}>Innstillinger</h1>
      <div className="container">
        <p style={{margin:0, color:"var(--muted)"}}>
          Plassholder for lisensnøkler (Stripe), språkvalg, roller m.m.
        </p>
      </div>
    </div>
  );
}
/* ==== [BLOCK: AdminSettings] END ==== */
