/* ==== [BLOCK: App shell] BEGIN ==== */
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { I18nProvider } from "./core/i18n";
import { AuthProvider, useAuth } from "./core/auth";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import AppDetailManageProgress from "./pages/AppDetailManageProgress";
import About from "./pages/About";
import Education from "./pages/Education";
import Feedback from "./pages/Feedback";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import AdminSignIn from "./pages/AdminSignIn";

// Admin pages
import AdminLayout from "./pages/admin/AdminLayout";
import AdminOverview from "./pages/admin/AdminOverview";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminSettings from "./pages/admin/AdminSettings";

/* ---- Protected routes helpers ---- */
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/signin" replace />;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user?.role === "admin" ? <>{children}</> : <Navigate to="/admin/signin" replace />;
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <I18nProvider>
      <AuthProvider>
        <div className="appRoot">
          <NavBar />
          <main className={`mainContent ${isHome ? "" : "pageWithWatermark"}`}>
            <Routes>
              {/* Public */}
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/apps/manage-progress" element={<AppDetailManageProgress />} />
              <Route path="/education" element={<Education />} />
              <Route path="/about" element={<About />} />
              <Route path="/feedback" element={<Feedback />} />

              {/* Auth */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/account"
                element={
                  <PrivateRoute>
                    <Account />
                  </PrivateRoute>
                }
              />

              {/* Admin auth */}
              <Route path="/admin/signin" element={<AdminSignIn />} />

              {/* Admin (nested) */}
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminLayout />
                  </AdminRoute>
                }
              >
                <Route index element={<AdminOverview />} />
                <Route path="overview" element={<AdminOverview />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </I18nProvider>
  );
}
/* ==== [BLOCK: App shell] END ==== */
