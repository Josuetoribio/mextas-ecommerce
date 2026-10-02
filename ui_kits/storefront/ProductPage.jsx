const { Button, IconButton, Icon, Badge, Rating, Price, SwatchGroup, QuantityStepper, Accordion, Breadcrumbs, ProductCard, SectionHeading, BenefitItem } = window.MEXTASDesignSystem_3a0f0e;

function Gallery({ product }) {
  const [i, setI] = React.useState(0);
  const [zoom, setZoom] = React.useState(null);
  React.useEffect(() => setI(0), [product.id]);
  return (
    <div style={{ display: 'flex', gap: 14, flexDirection: 'row-reverse' }}>
      <div style={{ flex: 1, minWidth: 0, position: 'relative', background: 'var(--surface-media)', aspectRatio: '1 / 1', overflow: 'hidden', cursor: 'zoom-in' }}
        onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setZoom([((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100]); }}
        onMouseLeave={() => setZoom(null)}>
        <img src={product.images[i]} alt={product.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: zoom ? 'scale(1.7)' : 'scale(1)', transformOrigin: zoom ? zoom[0] + '% ' + zoom[1] + '%' : 'center', transition: zoom ? 'transform var(--dur-2) var(--ease-out)' : 'var(--t-media)' }} />
        <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
          {product.isNew && <Badge tone="new">Nuevo</Badge>}
          {product.compareAtPrice && <Badge tone="sale">-{product.discount}%</Badge>}
        </div>
        <div style={{ position: 'absolute', right: 14, bottom: 14, display: 'flex', gap: 6 }}>
          <IconButton icon="arrow-left" label="Imagen anterior" variant="outline" onClick={() => setI((v) => (v - 1 + product.images.length) % product.images.length)} />
          <IconButton icon="arrow-right" label="Imagen siguiente" variant="outline" onClick={() => setI((v) => (v + 1) % product.images.length)} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {product.images.map((src, n) => (
          <button key={n} onClick={() => setI(n)} aria-label={'Ver imagen ' + (n + 1)}
            style={{ width: 74, height: 84, padding: 0, cursor: 'pointer', background: 'var(--surface-media)', border: '1px solid ' + (n === i ? 'var(--ink-1000)' : 'transparent'), overflow: 'hidden' }}>
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: n === i ? 1 : .72 }} />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductPage({ slug }) {
  const s = useStore();
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [color, setColor] = React.useState(product.colors[0]?.name);
  const [qty, setQty] = React.useState(1);
  React.useEffect(() => { setColor(product.colors[0]?.name); setQty(1); }, [product.id]);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const wished = s.wishlist.includes(product.id);
  const low = product.stock <= 5;

  return (
    <div>
      <div className="mx-container" style={{ paddingBlock: 'var(--space-8)' }}>
        <Breadcrumbs items={[{ label: 'Inicio' }, { label: 'Productos' }, { label: product.category }, { label: product.name }]} onNavigate={(c) => c.label === 'Inicio' ? s.go('home') : s.go('productos')} />
      </div>
      <div className="mx-container mx-pdp">
        <Gallery product={product} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <span style={{ font: 'var(--body-xs)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{product.brand} · {product.category}</span>
            <h1 style={{ margin: '10px 0 0', font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>{product.name}</h1>
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <Rating value={product.rating} reviews={product.reviews} size={15} showValue />
            <span style={{ font: 'var(--body-xs)', color: 'var(--text-muted)' }}>SKU {product.id}</span>
          </div>
          <Price value={product.price} compareAt={product.compareAtPrice} size="lg" />
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
            <Badge tone={low ? 'warning' : 'success'}>{low ? `Últimas ${product.stock} unidades` : 'En stock'}</Badge>
            <span style={{ font: 'var(--body-xs)', color: 'var(--text-muted)' }}>8 personas están viendo este producto</span>
          </div>
          <p style={{ margin: 0, font: 'var(--body-md)', color: 'var(--text-secondary)', maxWidth: '54ch' }}>{product.description}</p>
          <SwatchGroup label="Color" value={color} onChange={setColor} options={product.colors} />
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <QuantityStepper value={qty} max={product.stock} onChange={setQty} />
            <Button size="lg" style={{ flex: 1, minWidth: 200 }} onClick={() => s.add(product, qty, color)}>Agregar al carrito</Button>
            <IconButton icon="heart" label="Guardar en favoritos" variant="outline" size={54} active={wished} onClick={() => s.toggleWish(product)} />
          </div>
          <Button size="lg" variant="secondary" fullWidth onClick={() => { s.add(product, qty, color); s.go('checkout'); }}>Comprar ahora</Button>
          <div style={{ display: 'grid', gap: 12, padding: '18px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
            {[['truck', 'Envío gratis en compras mayores a $1,499 MXN'], ['clock', 'Entrega estimada: 2–4 días hábiles'], ['rotate-ccw', '30 días para cambios y devoluciones']].map(([ic, tx]) => (
              <div key={tx} style={{ display: 'flex', gap: 11, alignItems: 'center', font: 'var(--body-sm)', color: 'var(--text-secondary)' }}><Icon name={ic} size={17} />{tx}</div>
            ))}
          </div>
          <Accordion items={[
            { title: 'Descripción', content: <p style={{ margin: 0 }}>{product.description} Acabados mate, costuras reforzadas y una paleta pensada para combinar con todo lo demás que ya usas.</p> },
            { title: 'Características', content: <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 7 }}>{product.features.map((f) => <li key={f}>{f}</li>)}</ul> },
            { title: 'Especificaciones', content: <table style={{ borderCollapse: 'collapse', width: '100%' }}><tbody>{product.specifications.map(([k, v]) => (
                <tr key={k}><td style={{ padding: '8px 0', color: 'var(--text-muted)', width: 160 }}>{k}</td><td style={{ padding: '8px 0' }}>{v}</td></tr>))}</tbody></table> },
            { title: 'Materiales', content: <p style={{ margin: 0 }}>Exterior de poliéster reciclado 900D con recubrimiento resistente al agua, herrajes metálicos y forro interior de nylon.</p> },
            { title: 'Envíos', content: <p style={{ margin: 0 }}>Envío estándar gratis en compras mayores a $1,499 MXN (2–4 días hábiles). Envío express $149 MXN con entrega en 24 horas en CDMX, GDL y MTY.</p> },
            { title: 'Cambios y devoluciones', content: <p style={{ margin: 0 }}>Tienes 30 días naturales para solicitar un cambio o devolución sin costo, siempre que el producto conserve etiquetas y empaque original.</p> },
          ]} defaultOpen={0} />
        </div>
      </div>
      <div className="mx-container" style={{ paddingBlock: 'var(--space-16)' }}>
        <SectionHeading title="Podría interesarte" action="Ver catálogo" onAction={(e) => { e.preventDefault(); s.go('productos'); }} />
        <div className="mx-grid-4">
          {related.map((p) => <ProductCard key={p.id} product={p} onAdd={() => s.add(p)} onQuickView={s.quickView} onToggleWishlist={s.toggleWish} wishlisted={s.wishlist.includes(p.id)} onOpen={() => s.go('producto', { slug: p.slug })} />)}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { ProductPage });
