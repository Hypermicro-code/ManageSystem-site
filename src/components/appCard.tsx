/* ==== [BLOCK: AppCard] BEGIN ==== */
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  tagline: string;
  badge?: string;
  to: string;
};

export default function AppCard({ title, tagline, badge, to }: Props){
  return (
    <div className="container" style={{display:"flex", flexDirection:"column", gap:8}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <h3 style={{margin:0}}>{title}</h3>
        {badge && <span className="badge">{badge}</span>}
      </div>
      <p style={{margin:"6px 0 12px", color:"var(--muted)"}}>{tagline}</p>
      <div style={{display:"flex", gap:8}}>
        <Link to={to} className="btn">Open</Link>
        <Link to="/signup" className="btn secondary">Try free</Link>
      </div>
    </div>
  );
}
/* ==== [BLOCK: AppCard] END ==== */
