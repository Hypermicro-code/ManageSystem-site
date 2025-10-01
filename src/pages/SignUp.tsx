/* ==== [BLOCK: SignUp] BEGIN ==== */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../core/auth";
import { useI18n } from "../core/i18n";

export default function SignUp(){
  const { signUp } = useAuth();
  const { t } = useI18n();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <div className="container" style={{maxWidth:420, margin:"0 auto"}}>
      <h1 style={{marginTop:0}}>{t("cta_signup")}</h1>
      <div className="spacer" />
      <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <div className="spacer" />
      <input className="input" type="password" placeholder="Passord" value={pwd} onChange={e=>setPwd(e.target.value)} />
      <div className="spacer" />
      <button className="btn" onClick={async ()=>{
        await signUp(email, pwd);
        nav("/account");
      }}>Opprett konto</button>
    </div>
  );
}
/* ==== [BLOCK: SignUp] END ==== */
