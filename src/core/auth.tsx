/* ==== [BLOCK: mock auth provider] BEGIN ==== */
import React, { createContext, useContext, useEffect, useState } from "react";

type Role = "user" | "admin";
type User = { id: string; email: string; role: Role; name?: string } | null;

type AuthCtx = {
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthCtx | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const raw = localStorage.getItem("ms_user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const signIn = async (email: string, _password: string) => {
    // MOCK: admin if email ends with +admin
    const role: Role = email.includes("+admin") ? "admin" : "user";
    const u = { id: "local", email, role };
    localStorage.setItem("ms_user", JSON.stringify(u));
    setUser(u);
  };

  const signUp = async (email: string, _password: string) => {
    const u = { id: "local", email, role: "user" as Role };
    localStorage.setItem("ms_user", JSON.stringify(u));
    setUser(u);
  };

  const signOut = async () => {
    localStorage.removeItem("ms_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
/* ==== [BLOCK: mock auth provider] END ==== */
