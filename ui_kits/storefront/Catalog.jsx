const { Button, Badge, Icon, Select, Checkbox, Breadcrumbs, ProductCard, Skeleton, EmptyState, Drawer, CountdownTimer, PromoBanner, PackCard, SectionHeading } = window.MEXTASDesignSystem_3a0f0e;

const SORTS = ['Relevancia', 'Más vendidos', 'Precio menor', 'Precio mayor', 'Más recientes', 'Mejor valorados'];
const PRICE_BANDS = [['Menos de $500', 0, 500], ['$500 – $1,000', 500, 1000], ['$1,000 – $2,000', 1000, 2000], ['Más de $2,000', 2000, Infinity]];
const COLORS = ['Negro', 'Gris', 'Azul', 'Blanco'];

function useFiltered({ base, f, sort, query }) {
  return React.useMemo(() => {
    let out = base.filter((p) => {
      if (f.cats.length && !f.cats.includes(p.category)) return false;
      if (f.colors.length && !p.colors.some((c) => f.colors.includes(c.name))) return false;
      if (f.bands.length && !f.bands.some((b) => { const [, lo, hi] = PRICE_BANDS.find((x) => x[0] === b); return p.price >= lo && p.price < hi; })) return false;
      if (f.inStock && !(p.stock > 0)) return false;
      if (f.onSale && !p.compareAtPrice) return false;
      if (f.rating && p.rating < 4.5) return false;
      if (query && !(p.name + ' ' + p.category).toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
    const by = { 'Precio menor': (a, b) => a.price - b.price, 'Precio mayor': (a, b) => b.price - a.price,
      'Mejor valorados': (a, b) => b.rating - a.rating, 'Más vendidos': (a, b) => b.reviews - a.reviews,
      'Más recientes': (a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0) };
    return by[sort] ? [...out].sort(by[sort]) : out;
  }, [base, f, sort, query]);
}

function FilterPanel({ f, set, counts }) {
  const group = (title, children) => (
    <div style={{ paddingBlock: 20, borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', marginBottom: 10 }}>{title}</div>
      {children}
    </div>
  );
  const toggle = (k, v) => set({ ...f, [k]: f[k].includes(v) ? f[k].filter((x) => x !== v) : [...f[k], v] });
  return (
    <div>
      {group('Categoría', [...new Set(PRODUCTS.map((p) => p.category))].map((c) => (
        <Checkbox key={c} label={c} count={counts[c] || 0} checked={f.cats.includes(c)} onChange={() => toggle('cats', c)} />
      )))}
      {group('Precio', PRICE_BANDS.map(([l]) => <Checkbox key={l} label={l} checked={f.bands.includes(l)} onChange={() => toggle('bands', l)} />))}
      {group('Color', <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{COLORS.map((c) => {
        const on = f.colors.includes(c);
        return <button key={c} onClick={() => toggle('colors', c)} aria-pressed={on} style={{ padding: '8px 13px', cursor: 'pointer', font: 'var(--body-sm)', background: on ? 'var(--ink-1000)' : 'var(--paper)', color: on ? 'var(--paper)' : 'var(--ink-1000)', border: '1px solid ' + (on ? 'var(--ink-1000)' : 'var(--border-default)') }}>{c}</button>;
      })}</div>)}
      {group('Marca', <Checkbox label="MEXTAS" count={PRODUCTS.length} checked disabled onChange={() => {}} />)}
      {group('Otros', <div>
        <Checkbox label="Solo disponibles" checked={f.inStock} onChange={() => set({ ...f, inStock: !f.inStock })} />
        <Checkbox label="Con descuento" checked={f.onSale} onChange={() => set({ ...f, onSale: !f.onSale })} />
        <Checkbox label="4.5★ o más" checked={f.rating} onChange={() => set({ ...f, rating: !f.rating })} />
      </div>)}
    </div>
  );
}

const EMPTY_F = { cats: [], bands: [], colors: [], inStock: false, onSale: false, rating: false };

function Catalog({ title = 'Todos los productos', base = PRODUCTS, crumbs, query, intro }) {
  const s = useStore();
  const [f, setF] = React.useState({ ...EMPTY_F, cats: s.route.category && s.route.category !== 'nuevos' && s.route.category !== 'ofertas' ? [s.route.category] : [] });
  const [sort, setSort] = React.useState('Relevancia');
  const [shown, setShown] = React.useState(12);
  const [loading, setLoading] = React.useState(true);
  const [sheet, setSheet] = React.useState(false);
  React.useEffect(() => { setLoading(true); const t = setTimeout(() => setLoading(false), 420); return () => clearTimeout(t); }, [f, sort, base]);
  const items = useFiltered({ base, f, sort, query });
  const counts = React.useMemo(() => base.reduce((a, p) => ({ ...a, [p.category]: (a[p.category] || 0) + 1 }), {}), [base]);
  const active = f.cats.length + f.bands.length + f.colors.length + (f.inStock ? 1 : 0) + (f.onSale ? 1 : 0) + (f.rating ? 1 : 0);

  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-10)' }}>
      <Breadcrumbs items={crumbs || [{ label: 'Inicio' }, { label: 'Productos' }]} onNavigate={() => s.go('home')} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'flex-end', justifyContent: 'space-between', marginBlock: '18px var(--space-8)' }}>
        <div>
          <h1 style={{ margin: 0, font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>{title}</h1>
          <p style={{ margin: '10px 0 0', font: 'var(--body-sm)', color: 'var(--text-secondary)', maxWidth: '52ch' }}>{intro || `${items.length} productos disponibles${query ? ' para “' + query + '”' : ''}.`}</p>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Button variant="quiet" iconLeft="sliders-horizontal" className="mx-only-mobile" onClick={() => setSheet(true)}>Filtros{active ? ' (' + active + ')' : ''}</Button>
          <Select options={SORTS} value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Ordenar por" wrapStyle={{ minWidth: 220 }} />
        </div>
      </div>
      <div className="mx-catalog">
        <aside className="mx-filters">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ font: 'var(--heading-3)' }}>Filtros</span>
            {active > 0 && <button onClick={() => setF(EMPTY_F)} style={{ background: 'none', border: 0, cursor: 'pointer', font: 'var(--body-xs)', color: 'var(--text-muted)', textDecoration: 'underline' }}>Limpiar</button>}
          </div>
          <FilterPanel f={f} set={setF} counts={counts} />
        </aside>
        <div>
          {active > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
              {[...f.cats, ...f.bands, ...f.colors].map((t) => (
                <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 10px', background: 'var(--ink-050)', font: 'var(--body-xs)' }}>{t}
                  <button aria-label={'Quitar ' + t} onClick={() => setF({ ...f, cats: f.cats.filter((x) => x !== t), bands: f.bands.filter((x) => x !== t), colors: f.colors.filter((x) => x !== t) })} style={{ background: 'none', border: 0, cursor: 'pointer', display: 'flex' }}><Icon name="x" size={12} /></button>
                </span>
              ))}
            </div>
          )}
          {loading ? (
            <div className="mx-grid-4">{Array.from({ length: 8 }).map((_, i) => (
              <div key={i}><Skeleton height={260} /><Skeleton width="70%" height={12} style={{ marginTop: 14 }} /><Skeleton width="40%" height={12} style={{ marginTop: 8 }} /></div>
            ))}</div>
          ) : items.length === 0 ? (
            <EmptyState icon="search-x" title="Sin resultados" description="Prueba quitando algunos filtros o busca otra categoría." action={<Button variant="secondary" onClick={() => setF(EMPTY_F)}>Limpiar filtros</Button>} />
          ) : (
            <React.Fragment>
              <div className="mx-grid-4">
                {items.slice(0, shown).map((p) => (
                  <ProductCard key={p.id} product={p} onAdd={() => s.add(p)} onQuickView={s.quickView} onToggleWishlist={s.toggleWish}
                    wishlisted={s.wishlist.includes(p.id)} onOpen={() => s.go('producto', { slug: p.slug })} />
                ))}
              </div>
              {shown < items.length && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-12)' }}>
                  <Button variant="secondary" size="lg" onClick={() => setShown(shown + 8)}>Cargar más ({items.length - shown})</Button>
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
      <Drawer open={sheet} title="Filtros" side="left" width={340} onClose={() => setSheet(false)} footer={<Button fullWidth onClick={() => setSheet(false)}>Ver {items.length} productos</Button>}>
        <FilterPanel f={f} set={setF} counts={counts} />
      </Drawer>
    </div>
  );
}

function OfertasPage() {
  const s = useStore();
  const base = PRODUCTS.filter((p) => p.compareAtPrice);
  return (
    <div>
      <section style={{ background: 'var(--ink-1000)', color: 'var(--paper)' }}>
        <div className="mx-container" style={{ paddingBlock: 'var(--space-16)', display: 'grid', gap: 26, gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', alignItems: 'center' }}>
          <div>
            <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}>Ofertas de temporada</span>
            <h1 style={{ margin: '14px 0 0', font: 'var(--display-2)', letterSpacing: 'var(--track-display)' }}>Hasta 30% OFF</h1>
            <p style={{ margin: '14px 0 0', font: 'var(--body-md)', color: 'rgba(255,255,255,.7)', maxWidth: '40ch' }}>Precios especiales en mochilas, audio y accesorios seleccionados. Mientras dure el inventario.</p>
          </div>
          <div style={{ justifySelf: 'end' }}><CountdownTimer to="2026-10-15T23:59:00" label="Termina en" /></div>
        </div>
      </section>
      <div className="mx-container" style={{ paddingTop: 'var(--space-12)' }}>
        <SectionHeading title="Packs con descuento" />
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
          {PACKS.map((p) => <PackCard key={p.name} {...p} onAdd={() => s.add({ id: p.name, name: p.name, price: p.price, image: p.image, stock: 5, colors: [] })} />)}
        </div>
      </div>
      <Catalog title="Productos rebajados" base={base} crumbs={[{ label: 'Inicio' }, { label: 'Ofertas' }]} intro={`${base.length} productos con descuento activo.`} />
    </div>
  );
}

function CollectionsPage() {
  const s = useStore();
  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-10)' }}>
      <Breadcrumbs items={[{ label: 'Inicio' }, { label: 'Colecciones' }]} onNavigate={() => s.go('home')} />
      <h1 style={{ margin: '18px 0 10px', font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>Colecciones</h1>
      <p style={{ margin: '0 0 var(--space-10)', font: 'var(--body-md)', color: 'var(--text-secondary)', maxWidth: '54ch' }}>Cuatro formas de usar MEXTAS: la ciudad, el escritorio, el viaje y lo esencial.</p>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))' }}>
        {COLLECTIONS.map((c) => <CollectionTile key={c.slug} c={c} onClick={() => s.go('coleccion', { slug: c.slug })} />)}
      </div>
    </div>
  );
}

function CollectionPage({ slug }) {
  const c = COLLECTIONS.find((x) => x.slug === slug) || COLLECTIONS[0];
  const base = PRODUCTS.filter((p) => c.filter.includes(p.category));
  return (
    <div>
      <section style={{ position: 'relative', minHeight: 320, display: 'flex', alignItems: 'flex-end', background: 'var(--ink-050)' }}>
        <img src={c.image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.72))' }} />
        <div className="mx-container" style={{ position: 'relative', paddingBlock: 'var(--space-12)', color: 'var(--paper)' }}>
          <h1 style={{ margin: 0, font: 'var(--display-2)', letterSpacing: 'var(--track-display)' }}>{c.name}</h1>
          <p style={{ margin: '12px 0 0', font: 'var(--body-lg)', color: 'rgba(255,255,255,.8)', maxWidth: '42ch' }}>{c.description}</p>
        </div>
      </section>
      <Catalog title={'Productos de ' + c.name} base={base} crumbs={[{ label: 'Inicio' }, { label: 'Colecciones' }, { label: c.name }]} intro={`${base.length} productos en esta colección.`} />
    </div>
  );
}

function PacksPage() {
  const s = useStore();
  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-10)' }}>
      <Breadcrumbs items={[{ label: 'Inicio' }, { label: 'Packs' }]} onNavigate={() => s.go('home')} />
      <h1 style={{ margin: '18px 0 10px', font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>Packs exclusivos</h1>
      <p style={{ margin: '0 0 var(--space-10)', font: 'var(--body-md)', color: 'var(--text-secondary)', maxWidth: '54ch' }}>Combinaciones armadas para resolver un escenario completo — y más baratas que comprarlas por separado.</p>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
        {PACKS.map((p) => <PackCard key={p.name} {...p} onAdd={() => s.add({ id: p.name, name: p.name, price: p.price, image: p.image, stock: 5, colors: [] })} />)}
      </div>
    </div>
  );
}

Object.assign(window, { Catalog, OfertasPage, CollectionsPage, CollectionPage, PacksPage });
