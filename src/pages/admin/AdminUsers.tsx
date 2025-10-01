/* ==== [BLOCK: AdminUsers] BEGIN ==== */
import React, { useEffect, useMemo, useState } from "react";
import { listUsers, createUser, updateUser, deleteUser, User } from "../../core/adminApi";

export default function AdminUsers(){
  const [rows, setRows] = useState<User[]>([]);
  const [q, setQ] = useState("");

  useEffect(()=>{ listUsers().then(setRows); },[]);
  const filtered = useMemo(()=>{
    const s = q.toLowerCase();
    return rows.filter(r => r.email.toLowerCase().includes(s) || (r.name||"").toLowerCase().includes(s));
  },[rows,q]);

  return (
    <div className="container" style={{display:"grid", gap:12}}>
      <h1 style={{marginTop:0}}>Brukere</h1>
      <div style={{display:"flex", gap:8}}>
        <input className="input" placeholder="Søk navn/e-post…" value={q} onChange={e=>setQ(e.target.value)} />
        <button className="btn" onClick={async ()=>{
          const u = await createUser({ email:`test${Date.now()}@demo.com`, role:"user", name:"Demo" });
          setRows(prev=>[u, ...prev]);
        }}>Ny (demo)</button>
      </div>

      <div className="container">
        <table style={{width:"100%", borderCollapse:"collapse"}}>
          <thead>
            <tr style={{textAlign:"left"}}>
              <th style={{padding:"8px 6px"}}>Navn</th>
              <th style={{padding:"8px 6px"}}>E-post</th>
              <th style={{padding:"8px 6px"}}>Rolle</th>
              <th style={{padding:"8px 6px"}}>Handling</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u=>(
              <tr key={u.id} style={{borderTop:"1px solid var(--border)"}}>
                <td style={{padding:"8px 6px"}}>{u.name||"—"}</td>
                <td style={{padding:"8px 6px"}}>{u.email}</td>
                <td style={{padding:"8px 6px"}}>
                  <select className="select" value={u.role} onChange={async (e)=>{
                    const role = e.target.value as User["role"];
                    const nu = await updateUser(u.id, { role });
                    setRows(prev=>prev.map(x=>x.id===u.id?nu:x));
                  }}>
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td style={{padding:"8px 6px"}}>
                  <button className="btn secondary" onClick={async ()=>{
                    await deleteUser(u.id);
                    setRows(prev=>prev.filter(x=>x.id!==u.id));
                  }}>Slett</button>
                </td>
              </tr>
            ))}
            {filtered.length===0 && (
              <tr><td colSpan={4} style={{padding:"12px 6px", color:"var(--muted)"}}>Ingen treff.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
/* ==== [BLOCK: AdminUsers] END ==== */
