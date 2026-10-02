const { Drawer, Modal, Toast, Button, IconButton, Input, Icon, CartLine, EmptyState, Price, Rating, SwatchGroup, QuantityStepper, Badge, Logo } = window.MEXTASDesignSystem_3a0f0e;

function CartDrawer() {
  const s = useStore();
  const [code, setCode] = React.useState('');
  const [msg, setMsg] = React.useState(null);
  const empty = s.cart.length === 0;
  return (
    <Drawer open={s.ui.cart} title={`Tu carrito (${s.totals.count})`} onClose={s.closeCart} width={460}
      footer={!empty && (
        <div style={{ display: 'grid', gap: 12 }}>
          <Rows totals={s.totals} promo={s.promo} />
          <Button fullWidth size="lg" onClick={() => { s.closeCart(); s.go('checkout'); }}>Proceder al pago</Button>
          <Button fullWidth variant="ghost" size="sm" onClick={s.closeCart}>Seguir comprando</Button>
        </div>
      )}>
      {empty ? (
        <EmptyState icon="shopping-bag" title="Tu carrito está vacío" description="Descubre la nueva colección y encuentra algo para tu día a día."
          action={<Button onClick={() => { s.closeCart(); s.go('productos'); }}>Ver productos</Button>} />
      ) : (
        <div>
          {s.cart.map((it) => <CartLine key={it.key} item={it} onQty={(q) => s.setQty(it.key, q)} onRemove={() => s.remove(it.key)} />)}
          <div style={{ paddingTop: 18 }}>
            <div style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 9 }}>¿Tienes un código promocional?</div>
            <form style={{ display: 'flex', gap: 8 }} onSubmit={(e) => { e.preventDefault(); setMsg(s.applyPromo(code) ? 'ok' : 'err'); }}>
              <Input placeholder="MEXTAS10" value={code} onChange={(e) => setCode(e.target.value)} wrapStyle={{ flex: 1 }} aria-label="Código promocional" />
              <Button variant="secondary" type="submit">Aplicar</Button>
            </form>
            {msg && <div style={{ marginTop: 8, font: 'var(--body-xs)', color: msg === 'ok' ? 'var(--success-600)' : 'var(--sale-500)' }}>
              {msg === 'ok' ? 'Código aplicado: 10% de descuento.' : 'El código no es válido.'}</div>}
          </div>
        </div>
      )}
    </Drawer>
  );
}

function Rows({ totals, promo }) {
  const row = (l, v, tone) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--body-sm)', color: tone || 'var(--text-secondary)' }}><span>{l}</span><span>{v}</span></div>
  );
  return (
    <div style={{ display: 'grid', gap: 7, paddingBottom: 4 }}>
      {row('Subtotal', money(totals.subtotal))}
      {promo && row('Descuento (' + promo.code + ')', '−' + money(totals.discount), 'var(--sale-500)')}
      {row('Envío', totals.shipping === 0 ? 'Gratis' : money(totals.shipping))}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid var(--border-subtle)', paddingTop: 10, marginTop: 4 }}>
        <span style={{ font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>Total</span>
        <span style={{ font: 'var(--price-lg)' }}>{money(totals.total)}</span>
      </div>
    </div>
  );
}

function SearchOverlay() {
  const s = useStore();
  const [q, setQ] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => { if (!q) return; setLoading(true); const t = setTimeout(() => setLoading(false), 260); return () => clearTimeout(t); }, [q]);
  const results = React.useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return PRODUCTS.filter((p) => (p.name + ' ' + p.category).toLowerCase().includes(t)).slice(0, 6);
  }, [q]);
  const populares = ['mochilas', 'audífonos', 'smartwatch', 'accesorios', 'tecnología'];
  if (!s.ui.search) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 95 }}>
      <div onClick={s.closeSearch} style={{ position: 'absolute', inset: 0, background: 'var(--overlay-scrim)' }} />
      <div style={{ position: 'relative', background: 'var(--paper)', boxShadow: 'var(--shadow-pop)', animation: 'mx-drop var(--dur-3) var(--ease-out)' }}>
        <div className="mx-container" style={{ paddingTop: 26, paddingBottom: 30, maxWidth: 900 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <span style={{ font: 'var(--heading-2)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>Buscar productos</span>
            <IconButton icon="x" label="Cerrar búsqueda" onClick={s.closeSearch} />
          </div>
          <Input size="lg" icon="search" autoFocus placeholder="Buscar productos, marcas y más..." value={q} onChange={(e) => setQ(e.target.value)} aria-label="Buscar productos" />
          {!q && (
            <div style={{ marginTop: 26 }}>
              <div style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Búsquedas populares</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {populares.map((p) => <button key={p} onClick={() => setQ(p)} style={{ padding: '9px 14px', border: '1px solid var(--border-default)', background: 'var(--paper)', cursor: 'pointer', font: 'var(--body-sm)' }}>{p}</button>)}
              </div>
            </div>
          )}
          {q && (
            <div style={{ marginTop: 22, display: 'grid', gap: 2 }}>
              {loading && <div style={{ font: 'var(--body-sm)', color: 'var(--text-muted)', padding: '12px 0' }}>Buscando…</div>}
              {!loading && results.length === 0 && <div style={{ font: 'var(--body-sm)', color: 'var(--text-muted)', padding: '12px 0' }}>Sin resultados para “{q}”.</div>}
              {!loading && results.map((p) => (
                <button key={p.id} onClick={() => s.go('producto', { slug: p.slug })}
                  style={{ display: 'flex', gap: 14, alignItems: 'center', padding: 10, background: 'none', border: 0, cursor: 'pointer', textAlign: 'left' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--ink-025)'} onMouseLeave={(e) => e.currentTarget.style.background = 'none'}>
                  <img src={p.image} alt="" style={{ width: 54, height: 60, objectFit: 'cover', background: 'var(--surface-media)' }} />
                  <span style={{ flex: 1 }}>
                    <span style={{ display: 'block', font: 'var(--body-sm)', fontWeight: 600 }}>{p.name}</span>
                    <span style={{ display: 'block', font: 'var(--body-xs)', color: 'var(--text-muted)', marginTop: 3 }}>{p.category}</span>
                  </span>
                  <Price value={p.price} compareAt={p.compareAtPrice} size="sm" />
                </button>
              ))}
              {!loading && results.length > 0 && (
                <button onClick={() => s.go('productos', { query: q })} style={{ marginTop: 10, background: 'none', border: 0, cursor: 'pointer', textAlign: 'left', font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', padding: '10px 0', borderTop: '1px solid var(--border-subtle)' }}>Ver todos los resultados →</button>
              )}
            </div>
          )}
        </div>
      </div>
      <style>{'@keyframes mx-drop{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:none}}'}</style>
    </div>
  );
}

function QuickView() {
  const s = useStore();
  const p = s.ui.quick;
  const [qty, setQty] = React.useState(1);
  const [color, setColor] = React.useState(p?.colors?.[0]?.name);
  React.useEffect(() => { setQty(1); setColor(p?.colors?.[0]?.name); }, [p]);
  if (!p) return null;
  return (
    <Modal open title={'Vista rápida: ' + p.name} onClose={s.closeQuick} width={860}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)' }}>
        <div style={{ background: 'var(--surface-media)', aspectRatio: '1 / 1' }}><img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
        <div style={{ padding: 30, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <span style={{ font: 'var(--body-xs)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.category}</span>
          <h2 style={{ margin: 0, font: 'var(--heading-1)' }}>{p.name}</h2>
          <Rating value={p.rating} reviews={p.reviews} />
          <Price value={p.price} compareAt={p.compareAtPrice} size="lg" />
          <p style={{ margin: 0, font: 'var(--body-sm)', color: 'var(--text-secondary)' }}>{p.description}</p>
          <SwatchGroup label="Color" value={color} onChange={setColor} options={p.colors} />
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 4 }}>
            <QuantityStepper value={qty} max={p.stock} onChange={setQty} />
            <Button style={{ flex: 1 }} onClick={() => { s.add(p, qty, color); s.closeQuick(); }}>Agregar al carrito</Button>
          </div>
          <button onClick={() => s.go('producto', { slug: p.slug })} style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: 'var(--body-sm)', textDecoration: 'underline', alignSelf: 'flex-start' }}>Ver detalles completos</button>
        </div>
      </div>
    </Modal>
  );
}

function MiniCartToast() {
  const s = useStore();
  const t = s.ui.toast;
  return (
    <Toast open={!!t} title="Producto agregado al carrito" product={t?.product} onClose={s.closeToast}
      actions={<><Button size="sm" variant="secondary" style={{ flex: 1 }} onClick={() => { s.closeToast(); s.openCart(); }}>Ver carrito</Button>
        <Button size="sm" style={{ flex: 1 }} onClick={() => { s.closeToast(); s.go('checkout'); }}>Finalizar compra</Button></>} />
  );
}

function MobileMenu() {
  const s = useStore();
  return (
    <Drawer open={s.ui.menu} title="Menú" side="left" width={330} onClose={s.closeMenu}>
      <nav style={{ display: 'grid' }}>
        {NAV.map((n) => (
          <button key={n.key} onClick={() => s.go(n.key === 'ofertas' ? 'ofertas' : n.key === 'blog' ? 'blog' : n.key === 'colecciones' ? 'colecciones' : 'productos')}
            style={{ textAlign: 'left', padding: '16px 0', background: 'none', border: 0, borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer', font: 'var(--label-lg)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: n.highlight ? 'var(--sale-500)' : 'var(--ink-1000)' }}>{n.label}</button>
        ))}
      </nav>
      <div style={{ display: 'grid', gap: 10, marginTop: 24 }}>
        <Button variant="secondary" fullWidth iconLeft="user" onClick={() => s.go('cuenta')}>Mi cuenta</Button>
        <Button variant="secondary" fullWidth iconLeft="heart" onClick={() => s.go('favoritos')}>Favoritos</Button>
        <Button variant="secondary" fullWidth iconLeft="map-pin" onClick={() => s.go('rastreo')}>Rastreo de pedido</Button>
      </div>
    </Drawer>
  );
}

Object.assign(window, { CartDrawer, SearchOverlay, QuickView, MiniCartToast, MobileMenu, SummaryRows: Rows });
