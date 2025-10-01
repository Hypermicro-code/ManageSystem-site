/* ==== [BLOCK: AdminOverview] BEGIN ==== */
import React, { useEffect, useState } from "react";
import { adminStats } from "../../core/adminApi";

export default function AdminOverview(){
  const [stats, setStats] = useState<{users:number; products:number; newUsers7d:number}>({users:0,products:0,newUsers7d:0});
  useEffect(()=>{ adminStats().then(setStats); },[]);
  return (
    <div className="container">
      <h1 style={{marginTop:0}}>Oversikt</h1>
      <div className="grid" style={{gridTemplateColumns:"repeat(3, minmax(0,1fr))"}}>
        <div className="container"><strong>Brukere</strong><div style={{fontSize:28}}>{stats.users}</div></div>
        <div className="container"><strong>Produkter</strong><div style={{fontSize:28}}>{stats.products}</div></div>
        <div className="container"><strong>Nye siste 7 dager</strong><div style={{fontSize:28}}>{stats.newUsers7d}</div></div>
      </div>
    </div>
  );
}
/* ==== [BLOCK: AdminOverview] END ==== */
