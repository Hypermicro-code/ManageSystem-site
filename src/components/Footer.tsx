/* ==== [BLOCK: Footer] BEGIN ==== */
import React from "react";
import { useI18n } from "../core/i18n";

export default function Footer(){
  const { t } = useI18n();
  return (
    <footer style={{
      marginTop:"auto",
      borderTop:"1px solid var(--border)",
      background:"var(--panel)"
    }}>
      <div className="navInner" style={{justifyContent:"space-between"}}>
        <div>© {new Date().getFullYear()} ManageSystem</div>
        <a href="https://morningcoffeelabs.com" target="_blank" rel="noreferrer">
          {t("footer_mcl")}
        </a>
      </div>
    </footer>
  );
}
/* ==== [BLOCK: Footer] END ==== */
