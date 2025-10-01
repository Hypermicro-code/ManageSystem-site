/* ==== [BLOCK: AdminLayout] BEGIN ==== */
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout(){
  return (
    <div className="pageWithWatermark" style={{display:"grid", gridTemplateColumns:"260px 1fr", gap:20}}>
      <aside className="container" style={{height:"fit-content", position:"sticky", top:16}}>
        <h3 style={{marginTop:0}}>Admin</h3>
        <nav style={{display:"grid", gap:8}}>
          <NavLink to="/admin/overview">Oversikt</NavLink>
          <NavLink to="/admin/users">Brukere</NavLink>
          <NavLink to="/admin/products">Produkter</NavLink>
          <NavLink to="/admin/settings">Innstillinger</NavLink>
        </nav>
      </aside>
      <section style={{display:"grid", gap:16}}>
        <Outlet />
      </section>
    </div>
  );
}
/* ==== [BLOCK: AdminLayout] END ==== */
