const { Button, Icon, Input, Badge, ProductCard, EmptyState, Breadcrumbs, OrderTimeline, CartLine, Accordion } = window.MEXTASDesignSystem_3a0f0e;

const TABS = [['perfil', 'Perfil', 'user'], ['pedidos', 'Mis pedidos', 'package'], ['favoritos', 'Favoritos', 'heart'], ['direcciones', 'Direcciones', 'map-pin'], ['pagos', 'Métodos de pago', 'credit-card']];

function AccountPage({ tab = 'perfil' }) {
  const s = useStore();
  const [active, setActive] = React.useState(tab);
  React.useEffect(() => setActive(tab), [tab]);
  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-10)' }}>
      <Breadcrumbs items={[{ label: 'Inicio' }, { label: 'Mi cuenta' }]} onNavigate={() => s.go('home')} />
      <h1 style={{ margin: '18px 0 var(--space-8)', font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>Hola, Kyritabb</h1>
      <div className="mx-account">
        <aside>
          <nav style={{ display: 'grid', border: '1px solid var(--border-subtle)' }}>
            {TABS.map(([k, l, ic]) => (
              <button key={k} onClick={() => setActive(k)} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '14px 16px', textAlign: 'left', cursor: 'pointer',
                background: active === k ? 'var(--ink-1000)' : 'var(--paper)', color: active === k ? 'var(--paper)' : 'var(--ink-1000)', border: 0, borderBottom: '1px solid var(--border-subtle)', font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>
                <Icon name={ic} size={17} />{l}
              </button>
            ))}
            <button onClick={() => s.go('home')} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '14px 16px', textAlign: 'left', cursor: 'pointer', background: 'var(--paper)', border: 0, color: 'var(--text-secondary)', font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>
              <Icon name="log-out" size={17} />Cerrar sesión
            </button>
          </nav>
        </aside>
        <div>
          {active === 'perfil' && <Profile />}
          {active === 'pedidos' && <Orders />}
          {active === 'favoritos' && <Wishlist />}
          {active === 'direcciones' && <Addresses />}
          {active === 'pagos' && <PayMethods />}
        </div>
      </div>
    </div>
  );
}

function Panel({ title, action, children }) {
  return (
    <section style={{ border: '1px solid var(--border-subtle)', padding: 26, marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 20 }}>
        <h2 style={{ margin: 0, font: 'var(--heading-2)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function Profile() {
  const [saved, setSaved] = React.useState(false);
  return (
    <Panel title="Datos personales" action={<Button size="sm" variant="secondary" onClick={() => setSaved(true)}>{saved ? 'Guardado' : 'Guardar cambios'}</Button>}>
      <div className="mx-fields">
        <Input label="Nombre" defaultValue="Kyritabb" onChange={() => setSaved(false)} />
        <Input label="Apellido" defaultValue="Mendoza" onChange={() => setSaved(false)} />
        <Input label="Correo electrónico" defaultValue="hola@mextas.mx" type="email" onChange={() => setSaved(false)} />
        <Input label="Teléfono" defaultValue="55 1234 5678" onChange={() => setSaved(false)} />
      </div>
    </Panel>
  );
}

function Orders() {
  const s = useStore();
  return (
    <div>
      {ORDERS.map((o) => (
        <Panel key={o.id} title={'Pedido ' + o.id}
          action={<Button size="sm" variant="secondary" onClick={() => s.go('rastreo', { order: o.id })}>Rastrear pedido</Button>}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 20 }}>
            <Meta label="Fecha" value={o.date} />
            <Meta label="Estado" value={<Badge tone={o.status === 'Entregado' ? 'success' : 'neutral'}>{o.status}</Badge>} />
            <Meta label="Total" value={money(o.total)} />
            <Meta label="Envío" value={o.shipping} />
          </div>
          <OrderTimeline current={o.step} />
          <div style={{ marginTop: 22 }}>{o.items.map((it) => <CartLine key={it.id} item={{ ...it, key: it.id }} readOnly />)}</div>
        </Panel>
      ))}
    </div>
  );
}

function Meta({ label, value }) {
  return <div><div style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>{label}</div><div style={{ font: 'var(--body-md)', fontWeight: 600 }}>{value}</div></div>;
}

function Wishlist() {
  const s = useStore();
  const items = PRODUCTS.filter((p) => s.wishlist.includes(p.id));
  if (!items.length) return <Panel title="Tus favoritos"><EmptyState icon="heart" title="Aún no tienes favoritos" description="Toca el corazón en cualquier producto para guardarlo aquí." action={<Button onClick={() => s.go('productos')}>Ver productos</Button>} /></Panel>;
  return (
    <Panel title={`Tus favoritos (${items.length})`}>
      <div className="mx-grid-3">
        {items.map((p) => <ProductCard key={p.id} product={p} compact onAdd={() => s.add(p)} onToggleWishlist={s.toggleWish} wishlisted onOpen={() => s.go('producto', { slug: p.slug })} />)}
      </div>
    </Panel>
  );
}

function Addresses() {
  return (
    <Panel title="Direcciones" action={<Button size="sm" variant="secondary" iconLeft="plus">Agregar</Button>}>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
        {[['Casa', 'Av. Álvaro Obregón 121, Roma Norte, CDMX, 06700'], ['Oficina', 'Av. Santa Fe 495, Cruz Manca, CDMX, 05349']].map(([t, a], i) => (
          <div key={t} style={{ border: '1px solid ' + (i === 0 ? 'var(--ink-1000)' : 'var(--border-subtle)'), padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{t}</span>
              {i === 0 && <Badge tone="neutral">Predeterminada</Badge>}
            </div>
            <p style={{ margin: 0, font: 'var(--body-sm)', color: 'var(--text-secondary)' }}>{a}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function PayMethods() {
  return (
    <Panel title="Métodos de pago" action={<Button size="sm" variant="secondary" iconLeft="plus">Agregar tarjeta</Button>}>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
        {[['VISA', '•••• 4242', '09/29'], ['MASTERCARD', '•••• 8810', '03/28']].map(([b, n, e]) => (
          <div key={n} style={{ border: '1px solid var(--border-subtle)', padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span style={{ font: 'var(--label-md)', letterSpacing: 'var(--track-label)' }}>{b}</span>
            <span style={{ font: 'var(--price-md)' }}>{n}</span>
            <span style={{ font: 'var(--body-xs)', color: 'var(--text-muted)' }}>Vence {e}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function TrackingPage() {
  const s = useStore();
  const [q, setQ] = React.useState(s.route.order || '');
  const [result, setResult] = React.useState(s.route.order ? ORDERS[0] : null);
  const [err, setErr] = React.useState(null);
  const search = (e) => {
    e.preventDefault();
    const o = ORDERS.find((x) => x.id.toLowerCase() === q.trim().toLowerCase());
    setResult(o || null); setErr(o ? null : 'No encontramos ese número de pedido. Prueba con MX-2026-10482.');
  };
  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-10)', maxWidth: 860 }}>
      <Breadcrumbs items={[{ label: 'Inicio' }, { label: 'Rastreo' }]} onNavigate={() => s.go('home')} />
      <h1 style={{ margin: '18px 0 10px', font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>Rastrea tu pedido</h1>
      <p style={{ margin: '0 0 24px', font: 'var(--body-md)', color: 'var(--text-secondary)' }}>Ingresa tu número de pedido para ver el estado de tu envío.</p>
      <form onSubmit={search} style={{ display: 'flex', gap: 10, maxWidth: 520 }}>
        <Input size="lg" placeholder="MX-2026-10482" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Número de pedido" wrapStyle={{ flex: 1 }} />
        <Button size="lg" type="submit">Buscar</Button>
      </form>
      {err && <div style={{ marginTop: 14, font: 'var(--body-sm)', color: 'var(--sale-500)' }}>{err}</div>}
      {result && (
        <div style={{ marginTop: 34, border: '1px solid var(--border-subtle)', padding: 26 }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 26 }}>
            <Meta label="Pedido" value={result.id} />
            <Meta label="Estado" value={<Badge tone="neutral">{result.status}</Badge>} />
            <Meta label="Paquetería" value={result.shipping} />
            <Meta label="Entrega estimada" value="26 sep 2026" />
          </div>
          <OrderTimeline current={result.step} />
          <div style={{ marginTop: 26 }}>{result.items.map((it) => <CartLine key={it.id} item={{ ...it, key: it.id }} readOnly />)}</div>
        </div>
      )}
    </div>
  );
}

function WishlistPage() {
  const s = useStore();
  const items = PRODUCTS.filter((p) => s.wishlist.includes(p.id));
  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-10)' }}>
      <Breadcrumbs items={[{ label: 'Inicio' }, { label: 'Favoritos' }]} onNavigate={() => s.go('home')} />
      <h1 style={{ margin: '18px 0 var(--space-8)', font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>Tus favoritos</h1>
      {items.length === 0
        ? <EmptyState icon="heart" title="Aún no tienes favoritos" description="Toca el corazón en cualquier producto para guardarlo aquí." action={<Button onClick={() => s.go('productos')}>Ver productos</Button>} />
        : <div className="mx-grid-4">{items.map((p) => <ProductCard key={p.id} product={p} onAdd={() => s.add(p)} onQuickView={s.quickView} onToggleWishlist={s.toggleWish} wishlisted onOpen={() => s.go('producto', { slug: p.slug })} />)}</div>}
    </div>
  );
}

Object.assign(window, { AccountPage, TrackingPage, WishlistPage });
