/* ==== [BLOCK: NotFound] BEGIN ==== */
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <div className="container" style={{textAlign:"center"}}>
      <h1 style={{marginTop:0}}>404</h1>
      <p>Siden finnes ikke.</p>
      <Link to="/" className="btn">Til forsiden</Link>
    </div>
  );
}
/* ==== [BLOCK: NotFound] END ==== */
