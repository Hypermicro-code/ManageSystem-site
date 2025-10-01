/* ==== [BLOCK: AdminSignIn] BEGIN ==== */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../core/auth";

export default function AdminSignIn(){
  const { signIn } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <div className="pageWithWatermark">
      <div className="container" style={{maxWidth:420, margin:"0 auto"}}>
        <h1 style={{marginTop:0}}>Admin sign in</h1>
        <p style={{color:"var(--muted)"}}>
          Logg inn som administrator. Vanlige brukere logger inn via “Sign in”.
        </p>
        <div className="spacer" />
        <input className="input" placeholder="Admin e-post" value={email} onChange={e=>setEmail(e.target.value)} />
        <div className="spacer" />
        <input className="input" type="password" placeholder="Passord" value={pwd} onChange={e=>setPwd(e.target.value)} />
        <div className="spacer" />
        <button className="btn" onClick={async ()=>{
          await signIn(email, pwd);
          nav("/admin");
        }}>Logg inn</button>
        <div className="spacer" />
        <div style={{fontSize:12, color:"var(--muted)"}}>
          Tips (MVP): bruk <code>owner+admin@managesystem.no</code> med passord som starter på <code>admin#</code>
        </div>
      </div>
    </div>
  );
}
/* ==== [BLOCK: AdminSignIn] END ==== */
