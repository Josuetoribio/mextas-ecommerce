const { Button, IconButton, Icon, SectionHeading, ProductCard, CategoryTile, PromoBanner, PackCard, BenefitItem, Badge, CountdownTimer, Input } = window.MEXTASDesignSystem_3a0f0e;

function Hero() {
  const s = useStore();
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  const go = (d) => setI((v) => (v + d + SLIDES.length) % SLIDES.length);
  return (
    <section onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative', background: 'var(--ink-050)', overflow: 'hidden', minHeight: 'min(74vh, 620px)' }} aria-roledescription="carrusel">
      {SLIDES.map((sl, n) => (
        <div key={n} aria-hidden={n !== i} style={{ position: n === i ? 'relative' : 'absolute', inset: 0, opacity: n === i ? 1 : 0, transition: 'opacity var(--dur-slide) var(--ease-out)', pointerEvents: n === i ? 'auto' : 'none' }}>
          <img src={sl.image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center', transform: n === i ? 'scale(1)' : 'scale(1.03)', transition: 'transform 1.2s var(--ease-out)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(255,255,255,.96) 0%,rgba(255,255,255,.86) 34%,rgba(255,255,255,.1) 62%,rgba(255,255,255,0) 100%)' }} />
          <div className="mx-container" style={{ position: 'relative', minHeight: 'min(74vh, 620px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22, paddingBlock: 60 }}>
            <span style={{ alignSelf: 'flex-start', background: 'var(--ink-1000)', color: 'var(--paper)', padding: '8px 14px', font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{sl.eyebrow}</span>
            <h1 style={{ margin: 0, font: 'var(--display-1)', letterSpacing: 'var(--track-display)', whiteSpace: 'pre-line', maxWidth: '13ch' }}>{sl.title}</h1>
            <p style={{ margin: 0, font: 'var(--body-lg)', color: 'var(--text-secondary)', maxWidth: '30ch' }}>{sl.sub}</p>
            <Button size="lg" style={{ alignSelf: 'flex-start' }} onClick={() => s.go(n === 2 ? 'ofertas' : 'productos')}>{sl.cta}</Button>
          </div>
        </div>
      ))}
      <div className="mx-container" style={{ position: 'absolute', left: 0, right: 0, bottom: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {SLIDES.map((_, n) => (
            <button key={n} aria-label={'Ir al slide ' + (n + 1)} onClick={() => setI(n)}
              style={{ width: n === i ? 26 : 9, height: 9, borderRadius: 'var(--radius-pill)', border: 0, cursor: 'pointer', background: n === i ? 'var(--ink-1000)' : 'var(--ink-300)', transition: 'var(--t-base)' }} />
          ))}
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          <IconButton icon="arrow-left" label="Slide anterior" variant="outline" onClick={() => go(-1)} />
          <IconButton icon="arrow-right" label="Slide siguiente" variant="outline" onClick={() => go(1)} />
        </div>
      </div>
    </section>
  );
}

function CategoryRow() {
  const s = useStore();
  return (
    <section className="mx-container" style={{ paddingBlock: 'var(--space-12)' }}>
      <div style={{ display: 'flex', gap: 18, overflowX: 'auto', justifyContent: 'space-between', paddingBottom: 6 }}>
        {CATEGORIES.map((c) => (
          <CategoryTile key={c.key} name={c.name} image={c.image} icon={c.icon} active={c.key === 'ofertas'}
            onClick={() => c.key === 'ofertas' ? s.go('ofertas') : s.go('productos', { category: c.key })} />
        ))}
      </div>
    </section>
  );
}

function Featured() {
  const s = useStore();
  const items = PRODUCTS.filter((p) => p.isFeatured).slice(0, 5);
  return (
    <section className="mx-container" style={{ paddingBottom: 'var(--space-16)' }}>
      <SectionHeading title="Productos destacados" action="Ver todos" onAction={(e) => { e.preventDefault(); s.go('productos'); }} />
      <div className="mx-grid-5">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} compact onAdd={() => s.add(p)} onQuickView={s.quickView}
            onToggleWishlist={s.toggleWish} wishlisted={s.wishlist.includes(p.id)} onOpen={() => s.go('producto', { slug: p.slug })} />
        ))}
      </div>
    </section>
  );
}

function PromoPair() {
  const s = useStore();
  return (
    <section className="mx-container" style={{ paddingBottom: 'var(--space-16)', display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}>
      <PromoBanner theme="dark" title={'Ofertas\nde temporada'} kicker="Hasta" highlight="30% OFF" cta="Comprar ofertas" image={MX_IMG.urban} onClick={() => s.go('ofertas')} />
      <PromoBanner theme="light" title={'Packs\nexclusivos'} kicker="Tecnología + estilo" highlight={<span>desde <strong>$1,699 MXN</strong></span>} cta="Ver packs" image={MX_IMG.viaje} onClick={() => s.go('packs')} />
    </section>
  );
}

function Packs() {
  const s = useStore();
  return (
    <section className="mx-container" style={{ paddingBottom: 'var(--space-16)' }}>
      <SectionHeading title="Packs exclusivos" action="Ver todos" onAction={(e) => { e.preventDefault(); s.go('packs'); }} />
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
        {PACKS.map((p) => <PackCard key={p.name} {...p} onAdd={() => s.add({ id: p.name, name: p.name, price: p.price, image: p.image, stock: 5, colors: [] })} />)}
      </div>
    </section>
  );
}

function Collections() {
  const s = useStore();
  return (
    <section className="mx-container" style={{ paddingBottom: 'var(--space-16)' }}>
      <SectionHeading title="Colecciones" action="Ver colecciones" onAction={(e) => { e.preventDefault(); s.go('colecciones'); }} />
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
        {COLLECTIONS.map((c) => <CollectionTile key={c.slug} c={c} onClick={() => s.go('coleccion', { slug: c.slug })} />)}
      </div>
    </section>
  );
}

function CollectionTile({ c, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', border: 0, padding: 0, cursor: 'pointer', overflow: 'hidden', aspectRatio: '4 / 5', background: 'var(--surface-media)', textAlign: 'left' }}>
      <img src={c.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.05)' : 'scale(1)', transition: 'var(--t-media)' }} />
      <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.78) 100%)' }} />
      <span style={{ position: 'absolute', left: 22, right: 22, bottom: 22, color: 'var(--paper)' }}>
        <span style={{ display: 'block', font: 'var(--heading-2)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{c.name}</span>
        <span style={{ display: 'block', marginTop: 8, font: 'var(--body-sm)', color: 'rgba(255,255,255,.78)' }}>{c.description}</span>
        <span style={{ display: 'inline-flex', gap: 7, alignItems: 'center', marginTop: 14, font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,.6)', paddingBottom: 3 }}>Ver colección <Icon name="arrow-right" size={14} /></span>
      </span>
    </button>
  );
}

function BestSellers() {
  const s = useStore();
  const items = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 5);
  return (
    <section className="mx-container" style={{ paddingBottom: 'var(--space-16)' }}>
      <SectionHeading title="Más vendidos" action="Ver catálogo" onAction={(e) => { e.preventDefault(); s.go('productos'); }} />
      <div className="mx-grid-5">
        {items.map((p) => <ProductCard key={p.id} product={p} compact onAdd={() => s.add(p)} onQuickView={s.quickView} onToggleWishlist={s.toggleWish} wishlisted={s.wishlist.includes(p.id)} onOpen={() => s.go('producto', { slug: p.slug })} />)}
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="mx-container" style={{ paddingBottom: 'var(--space-16)' }}>
      <div className="mx-benefits">
        {BENEFITS.map((b, i) => (
          <div key={b.title} style={{ paddingInline: i === 0 ? 0 : 24, borderLeft: i === 0 ? 0 : '1px solid var(--border-subtle)' }}>
            <BenefitItem {...b} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ background: 'var(--ink-1000)', color: 'var(--paper)' }}>
      <div className="mx-container" style={{ paddingBlock: 'var(--space-16)', display: 'grid', gap: 26, gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: 0, font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>Únete a MEXTAS</h2>
          <p style={{ margin: '12px 0 0', font: 'var(--body-md)', color: 'rgba(255,255,255,.7)', maxWidth: '44ch' }}>Recibe lanzamientos, promociones y novedades directamente en tu correo.</p>
        </div>
        {sent ? (
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', font: 'var(--body-md)' }}><Icon name="check" size={20} />Gracias. Te has suscrito correctamente.</div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', maxWidth: 460, width: '100%', justifySelf: 'end' }}>
            <Input size="lg" type="email" required placeholder="Tu correo electrónico" aria-label="Tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} wrapStyle={{ flex: 1 }} />
            <button type="submit" aria-label="Suscribirme" style={{ width: 54, flex: '0 0 54px', background: 'var(--paper)', color: 'var(--ink-1000)', border: 0, cursor: 'pointer', display: 'grid', placeItems: 'center' }}><Icon name="arrow-right" size={20} /></button>
          </form>
        )}
      </div>
    </section>
  );
}

function BlogTeaser() {
  const s = useStore();
  return (
    <section className="mx-container" style={{ paddingBlock: 'var(--space-16)' }}>
      <SectionHeading title="Del blog" action="Ver todo" onAction={(e) => { e.preventDefault(); s.go('blog'); }} />
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
        {POSTS.slice(0, 4).map((p) => <PostCard key={p.slug} post={p} onClick={() => s.go('articulo', { slug: p.slug })} />)}
      </div>
    </section>
  );
}

function PostCard({ post, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <article onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ cursor: 'pointer' }}>
      <div style={{ overflow: 'hidden', aspectRatio: '4 / 3', background: 'var(--surface-media)' }}>
        <img src={post.image} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: h ? 'scale(1.04)' : 'scale(1)', transition: 'var(--t-media)' }} />
      </div>
      <div style={{ paddingTop: 16 }}>
        <div style={{ display: 'flex', gap: 10, font: 'var(--body-xs)', color: 'var(--text-muted)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}><span>{post.category}</span><span>·</span><span>{post.date}</span></div>
        <h3 style={{ margin: '10px 0 8px', font: 'var(--heading-3)' }}>{post.title}</h3>
        <p style={{ margin: 0, font: 'var(--body-sm)', color: 'var(--text-secondary)' }}>{post.excerpt}</p>
        <span style={{ display: 'inline-block', marginTop: 12, font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', borderBottom: '1px solid var(--ink-1000)', paddingBottom: 2 }}>Leer artículo</span>
      </div>
    </article>
  );
}

function Home() {
  return (
    <div>
      <Hero /><CategoryRow /><Featured /><PromoPair /><Packs /><Collections /><BestSellers /><Benefits /><Newsletter /><BlogTeaser />
    </div>
  );
}
Object.assign(window, { Home, Hero, Benefits, Newsletter, PostCard, CollectionTile });
