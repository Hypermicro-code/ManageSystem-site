/* ==== [BLOCK: NavBar] BEGIN ==== */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../core/i18n";
import { useAuth } from "../core/auth";
import LanguageSwitcher from "./LanguageSwitcher";

export default function NavBar(){
  const { t } = useI18n();
  const { user, signOut } = useAuth();

  return (
    <nav className="nav">
      <div className="navInner">
        <Link to="/" className="brand" aria-label="ManageSystem">
          <div className="brandLogo" />
          <div>
            <div>ManageSystem</div>
            <div style={{fontSize:12, color:"var(--muted)"}}>{t("slogan")}</div>
          </div>
        </Link>

        <div className="navLinks">
          <NavLink to="/">{t("nav_home")}</NavLink>
          <NavLink to="/apps">{t("nav_apps")}</NavLink>
          <NavLink to="/education">{t("nav_education")}</NavLink>
          <NavLink to="/about">{t("nav_about")}</NavLink>
          <NavLink to="/feedback">{t("nav_feedback")}</NavLink>
        </div>

        <div className="navRight">
          <LanguageSwitcher />
          {!user && (
            <>
              <NavLink to="/signin" className="btn secondary">{t("cta_signin")}</NavLink>
              <NavLink to="/signup" className="btn">{t("cta_signup")}</NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink to="/account" className="btn secondary">Account</NavLink>
              {user.role === "admin" && (
                <NavLink to="/admin" className="btn secondary">Admin</NavLink>
              )}
              <button className="btn" onClick={()=>signOut()}>Sign out</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
/* ==== [BLOCK: NavBar] END ==== */
