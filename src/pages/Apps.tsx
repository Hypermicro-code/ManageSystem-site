/* ==== [BLOCK: Apps] BEGIN ==== */
import React from "react";
import AppCard from "../components/AppCard";
import { useI18n } from "../core/i18n";

export default function Apps(){
  const { t } = useI18n();
  return (
    <div className="grid cols-3">
      <AppCard title="Manage Progress" tagline={t("mp_tagline")} badge="Beta" to="/apps/manage-progress" />
      <AppCard title="Manage Calculations" tagline="Coming soon" to="#" />
      <AppCard title="Manage System Suite" tagline="Coming later" to="#" />
    </div>
  );
}
/* ==== [BLOCK: Apps] END ==== */
