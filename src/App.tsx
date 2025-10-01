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
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

/* ---- Protected routes helpers ---- */
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/signin" replace />;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user?.role === "admin" ? <>{children}</> : <Navigate to="/signin" replace />;
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
              <Route path="/" element={<Home />} />
              <Route path="/apps" element={<Apps />} />
              <Route path="/apps/manage-progress" element={<AppDetailManageProgress />} />
              <Route path="/education" element={<Education />} />
              <Route path="/about" element={<About />} />
              <Route path="/feedback" element={<Feedback />} />
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
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <Admin />
                  </AdminRoute>
                }
              />
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
