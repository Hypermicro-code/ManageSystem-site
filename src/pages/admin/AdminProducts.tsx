/* ==== [BLOCK: AdminProducts] BEGIN ==== */
import React, { useEffect, useState } from "react";
import { listProducts, createProduct, updateProduct, deleteProduct, Product } from "../../core/adminApi";

export default function AdminProducts(){
  const [rows, setRows] = useState<Product[]>([]);
  const [name, setName] = useState("");

  useEffect(()=>{ listProducts().then(setRows); },[]);

  return (
    <div className="container" style={{display:"grid", gap:12}}>
      <h1 style={{marginTop:0}}>Produkter</h1>
      <div style={{display:"flex", gap:8}}>
        <input className="input" placeholder="Produktnavn…" value={name} onChange={e=>setName(e.target.value)} />
        <button className="btn" onClick={async ()=>{
          if(!name.trim()) return;
          const p = await createProduct({ name, price: 0, status: "draft" });
          setRows(prev=>[p, ...prev]);
          setName("");
        }}>Legg til</button>
      </div>

      <div className="container">
        <table style={{width:"100%", borderCollapse:"collapse"}}>
          <thead>
            <tr style={{textAlign:"left"}}>
              <th style={{padding:"8px 6px"}}>Navn</th>
              <th style={{padding:"8px 6px"}}>Pris</th>
              <th style={{padding:"8px 6px"}}>Status</th>
              <th style={{padding:"8px 6px"}}>Handling</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(p=>(
              <tr key={p.id} style={{borderTop:"1px solid var(--border)"}}>
                <td style={{padding:"8px 6px"}}>{p.name}</td>
                <td style={{padding:"8px 6px"}}>
                  <input className="input" style={{maxWidth:120}} type="number" value={p.price}
                    onChange={async (e)=>{
                      const nu = await updateProduct(p.id, { price: Number(e.target.value) });
                      setRows(prev=>prev.map(x=>x.id===p.id?nu:x));
                    }} />
                </td>
                <td style={{padding:"8px 6px"}}>
                  <select className="select" value={p.status} onChange={async (e)=>{
                    const nu = await updateProduct(p.id, { status: e.target.value as Product["status"] });
                    setRows(prev=>prev.map(x=>x.id===p.id?nu:x));
                  }}>
                    <option value="draft">draft</option>
                    <option value="active">active</option>
                    <option value="archived">archived</option>
                  </select>
                </td>
                <td style={{padding:"8px 6px"}}>
                  <button className="btn secondary" onClick={async ()=>{
                    await deleteProduct(p.id);
                    setRows(prev=>prev.filter(x=>x.id!==p.id));
                  }}>Slett</button>
                </td>
              </tr>
            ))}
            {rows.length===0 && (
              <tr><td colSpan={4} style={{padding:"12px 6px", color:"var(--muted)"}}>Ingen produkter enda.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
/* ==== [BLOCK: AdminProducts] END ==== */
