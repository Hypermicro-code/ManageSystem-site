/* ==== [BLOCK: adminApi mock] BEGIN ==== */
export type User = { id:string; email:string; role:"user"|"admin"; name?:string; createdAt:number };
export type Product = { id:string; name:string; price:number; status:"draft"|"active"|"archived"; createdAt:number };

const KEY_USERS = "ms_admin_users";
const KEY_PRODUCTS = "ms_admin_products";

function uid(){ return Math.random().toString(36).slice(2,10); }
function load<T>(key:string, fallback:T):T{
  try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : fallback; }
  catch { return fallback; }
}
function save<T>(key:string, val:T){ localStorage.setItem(key, JSON.stringify(val)); }

/* seed */
(function seed(){
  const users = load<User[]>(KEY_USERS, []);
  const products = load<Product[]>(KEY_PRODUCTS, []);
  if(users.length===0){
    const now = Date.now();
    const seedUsers: User[] = [
      { id:uid(), email:"owner+admin@managesystem.no", role:"admin", name:"Owner", createdAt: now-86400000*4 },
      { id:uid(), email:"test@demo.com", role:"user", name:"Test User", createdAt: now-86400000*2 }
    ];
    save(KEY_USERS, seedUsers);
  }
  if(products.length===0){
    const now = Date.now();
    const seedProducts: Product[] = [
      { id:uid(), name:"Manage Progress", price:0, status:"draft", createdAt: now-86400000 }
    ];
    save(KEY_PRODUCTS, seedProducts);
  }
})();

/* Stats */
export async function adminStats(){
  const users = load<User[]>(KEY_USERS, []);
  const products = load<Product[]>(KEY_PRODUCTS, []);
  const week = Date.now() - 7*86400000;
  const newUsers7d = users.filter(u=>u.createdAt>=week).length;
  return { users: users.length, products: products.length, newUsers7d };
}

/* Users */
export async function listUsers(){ return load<User[]>(KEY_USERS, []).sort((a,b)=>b.createdAt-a.createdAt); }
export async function createUser(partial: Omit<User,"id"|"createdAt">){
  const u: User = { id: uid(), createdAt: Date.now(), ...partial };
  const all = load<User[]>(KEY_USERS, []); all.unshift(u); save(KEY_USERS, all); return u;
}
export async function updateUser(id:string, patch: Partial<User>){
  const all = load<User[]>(KEY_USERS, []);
  const idx = all.findIndex(u=>u.id===id); if(idx<0) throw new Error("Not found");
  all[idx] = { ...all[idx], ...patch }; save(KEY_USERS, all); return all[idx];
}
export async function deleteUser(id:string){
  const all = load<User[]>(KEY_USERS, []).filter(u=>u.id!==id); save(KEY_USERS, all);
}

/* Products */
export async function listProducts(){ return load<Product[]>(KEY_PRODUCTS, []).sort((a,b)=>b.createdAt-a.createdAt); }
export async function createProduct(partial: Omit<Product,"id"|"createdAt">){
  const p: Product = { id: uid(), createdAt: Date.now(), ...partial };
  const all = load<Product[]>(KEY_PRODUCTS, []); all.unshift(p); save(KEY_PRODUCTS, all); return p;
}
export async function updateProduct(id:string, patch: Partial<Product>){
  const all = load<Product[]>(KEY_PRODUCTS, []);
  const idx = all.findIndex(p=>p.id===id); if(idx<0) throw new Error("Not found");
  all[idx] = { ...all[idx], ...patch }; save(KEY_PRODUCTS, all); return all[idx];
}
export async function deleteProduct(id:string){
  const all = load<Product[]>(KEY_PRODUCTS, []).filter(p=>p.id!==id); save(KEY_PRODUCTS, all);
}
/* ==== [BLOCK: adminApi mock] END ==== */
