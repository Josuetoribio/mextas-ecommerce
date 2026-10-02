/* Local-only store: cart, wishlist, toast, routing. Swap the reducer body for API
   calls and nothing above it changes. Cart + wishlist persist in localStorage. */
const StoreCtx = React.createContext(null);
const LS = 'mextas.store.v1';

function StoreProvider({ children }) {
  const [state, setState] = React.useState(() => {
    try { const s = JSON.parse(localStorage.getItem(LS)); if (s) return { cart: s.cart || [], wishlist: s.wishlist || [], promo: s.promo || null }; } catch (e) {}
    return { cart: [], wishlist: [], promo: null };
  });
  const [route, setRoute] = React.useState({ name: 'home' });
  const [ui, setUi] = React.useState({ cart: false, search: false, menu: false, quick: null, toast: null });

  React.useEffect(() => { try { localStorage.setItem(LS, JSON.stringify(state)); } catch (e) {} }, [state]);

  const api = React.useMemo(() => ({
    go(name, params = {}) { setRoute({ name, ...params }); setUi((u) => ({ ...u, menu: false, search: false, quick: null })); window.scrollTo({ top: 0, behavior: 'smooth' }); },
    openCart: () => setUi((u) => ({ ...u, cart: true })),
    closeCart: () => setUi((u) => ({ ...u, cart: false })),
    openSearch: () => setUi((u) => ({ ...u, search: true })),
    closeSearch: () => setUi((u) => ({ ...u, search: false })),
    openMenu: () => setUi((u) => ({ ...u, menu: true })),
    closeMenu: () => setUi((u) => ({ ...u, menu: false })),
    quickView: (p) => setUi((u) => ({ ...u, quick: p })),
    closeQuick: () => setUi((u) => ({ ...u, quick: null })),
    closeToast: () => setUi((u) => ({ ...u, toast: null })),
    add(product, qty = 1, variant) {
      const key = product.id + '|' + (variant || product.colors?.[0]?.name || '');
      setState((s) => {
        const cart = [...s.cart];
        const i = cart.findIndex((c) => c.key === key);
        if (i >= 0) cart[i] = { ...cart[i], qty: Math.min((cart[i].qty || 1) + qty, product.stock || 99) };
        else cart.push({ key, id: product.id, name: product.name, image: product.image, price: product.price, variant: variant || product.colors?.[0]?.name, qty, stock: product.stock });
        return { ...s, cart };
      });
      setUi((u) => ({ ...u, toast: { product, at: Date.now() } }));
    },
    setQty(key, qty) { setState((s) => ({ ...s, cart: s.cart.map((c) => c.key === key ? { ...c, qty } : c) })); },
    remove(key) { setState((s) => ({ ...s, cart: s.cart.filter((c) => c.key !== key) })); },
    clearCart() { setState((s) => ({ ...s, cart: [], promo: null })); },
    toggleWish(p) { setState((s) => ({ ...s, wishlist: s.wishlist.includes(p.id) ? s.wishlist.filter((x) => x !== p.id) : [...s.wishlist, p.id] })); },
    applyPromo(code) {
      const ok = String(code).trim().toUpperCase() === 'MEXTAS10';
      setState((s) => ({ ...s, promo: ok ? { code: 'MEXTAS10', rate: 0.1 } : null }));
      return ok;
    },
  }), []);

  const totals = React.useMemo(() => {
    const subtotal = state.cart.reduce((a, c) => a + c.price * c.qty, 0);
    const discount = state.promo ? Math.round(subtotal * state.promo.rate) : 0;
    const shipping = subtotal === 0 || subtotal - discount >= 1499 ? 0 : 149;
    return { subtotal, discount, shipping, total: subtotal - discount + shipping, count: state.cart.reduce((a, c) => a + c.qty, 0) };
  }, [state]);

  return <StoreCtx.Provider value={{ ...state, ...api, route, ui, totals }}>{children}</StoreCtx.Provider>;
}
const useStore = () => React.useContext(StoreCtx);
const money = (n) => '$' + Number(n || 0).toLocaleString('es-MX') + ' MXN';
Object.assign(window, { StoreProvider, useStore, money });
