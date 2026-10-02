const { Button, Icon, Breadcrumbs, Accordion, SectionHeading, BenefitItem } = window.MEXTASDesignSystem_3a0f0e;

function BlogPage() {
  const s = useStore();
  const [featured, ...rest] = POSTS;
  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-10)' }}>
      <Breadcrumbs items={[{ label: 'Inicio' }, { label: 'Blog' }]} onNavigate={() => s.go('home')} />
      <h1 style={{ margin: '18px 0 var(--space-10)', font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>Blog</h1>
      <article onClick={() => s.go('articulo', { slug: featured.slug })} className="mx-two-col" style={{ cursor: 'pointer', gap: 34, marginBottom: 'var(--space-16)' }}>
        <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', background: 'var(--surface-media)' }}><img src={featured.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
        <div style={{ alignSelf: 'center' }}>
          <div style={{ display: 'flex', gap: 10, font: 'var(--body-xs)', color: 'var(--text-muted)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}><span>{featured.category}</span><span>·</span><span>{featured.date}</span></div>
          <h2 style={{ margin: '14px 0 12px', font: 'var(--heading-1)' }}>{featured.title}</h2>
          <p style={{ margin: 0, font: 'var(--body-md)', color: 'var(--text-secondary)' }}>{featured.excerpt}</p>
          <span style={{ display: 'inline-block', marginTop: 16, font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', borderBottom: '1px solid var(--ink-1000)', paddingBottom: 3 }}>Leer artículo</span>
        </div>
      </article>
      <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
        {rest.map((p) => <PostCard key={p.slug} post={p} onClick={() => s.go('articulo', { slug: p.slug })} />)}
      </div>
    </div>
  );
}

function ArticlePage({ slug }) {
  const s = useStore();
  const post = POSTS.find((p) => p.slug === slug) || POSTS[0];
  return (
    <article className="mx-container" style={{ paddingBlock: 'var(--space-10)', maxWidth: 820 }}>
      <Breadcrumbs items={[{ label: 'Inicio' }, { label: 'Blog' }, { label: post.title }]} onNavigate={(c) => c.label === 'Blog' ? s.go('blog') : s.go('home')} />
      <div style={{ display: 'flex', gap: 10, marginTop: 20, font: 'var(--body-xs)', color: 'var(--text-muted)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}><span>{post.category}</span><span>·</span><span>{post.date}</span><span>·</span><span>4 min de lectura</span></div>
      <h1 style={{ margin: '14px 0 22px', font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>{post.title}</h1>
      <img src={post.image} alt="" style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', background: 'var(--surface-media)' }} />
      <div style={{ marginTop: 30, display: 'grid', gap: 18, font: 'var(--body-lg)', color: 'var(--text-secondary)' }}>
        <p style={{ margin: 0, color: 'var(--text-primary)' }}>{post.excerpt}</p>
        <p style={{ margin: 0 }}>Lo primero es honesto: casi nadie necesita más capacidad, necesita mejor organización. Antes de mirar litros, revisa qué cargas todos los días y qué cargas “por si acaso”.</p>
        <h2 style={{ margin: '12px 0 0', font: 'var(--heading-1)', color: 'var(--text-primary)' }}>Empieza por el uso, no por el modelo</h2>
        <p style={{ margin: 0 }}>Una mochila de 22 L resuelve el trayecto diario con laptop, termo y cargador. De 30 L en adelante entras en territorio de fin de semana; por debajo de 15 L estás en el terreno del bolso ligero.</p>
        <h2 style={{ margin: '12px 0 0', font: 'var(--heading-1)', color: 'var(--text-primary)' }}>Materiales que envejecen bien</h2>
        <p style={{ margin: 0 }}>Busca tejidos de alta densidad con recubrimiento resistente al agua, cierres metálicos y costuras reforzadas en los puntos de carga. Es la diferencia entre dos años y ocho.</p>
      </div>
      <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button onClick={() => s.go('productos', { category: 'Mochilas' })}>Ver mochilas</Button>
        <Button variant="secondary" onClick={() => s.go('blog')}>Volver al blog</Button>
      </div>
    </article>
  );
}

function StaticPage({ kind }) {
  const s = useStore();
  const P = {
    sobre: { title: 'Sobre nosotros', intro: 'MEXTAS diseña productos para el trayecto diario: mochilas, audio, wearables y accesorios pensados en México.',
      blocks: [['2019', 'Arrancamos con una sola mochila y una idea simple: menos piezas, mejor hechas.'], ['+120 000', 'Pedidos entregados en toda la República.'], ['12 meses', 'De garantía en cada producto, sin letras chiquitas.']] },
    envios: { title: 'Envíos y entregas', intro: 'Enviamos a todo México con Estafeta y DHL. Los pedidos se procesan en menos de 24 horas hábiles.',
      faq: [['¿Cuánto cuesta el envío?', 'Es gratis en compras mayores a $1,499 MXN. Por debajo de ese monto, el envío estándar cuesta $149 MXN.'],
        ['¿Cuánto tarda en llegar?', 'Estándar: 2–4 días hábiles. Express: 24 horas en CDMX, Guadalajara y Monterrey.'],
        ['¿Puedo rastrear mi pedido?', 'Sí. Usa tu número de pedido en la sección de Rastreo o desde Mis pedidos.']] },
    devoluciones: { title: 'Cambios y devoluciones', intro: 'Tienes 30 días naturales desde que recibes tu pedido para solicitar un cambio o devolución sin costo.',
      faq: [['¿Qué condiciones debe cumplir el producto?', 'Debe conservar etiquetas, empaque original y no mostrar uso más allá de la prueba.'],
        ['¿Cómo inicio el proceso?', 'Desde Mis pedidos, selecciona el pedido y elige “Solicitar devolución”. Te enviamos la guía prepagada.'],
        ['¿Cuándo recibo mi reembolso?', 'Entre 5 y 10 días hábiles después de que recibimos el producto en nuestro almacén.']] },
  }[kind];
  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-10)', maxWidth: 860 }}>
      <Breadcrumbs items={[{ label: 'Inicio' }, { label: P.title }]} onNavigate={() => s.go('home')} />
      <h1 style={{ margin: '18px 0 12px', font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>{P.title}</h1>
      <p style={{ margin: '0 0 var(--space-10)', font: 'var(--body-lg)', color: 'var(--text-secondary)', maxWidth: '56ch' }}>{P.intro}</p>
      {P.blocks && (
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', marginBottom: 'var(--space-12)' }}>
          {P.blocks.map(([k, v]) => (
            <div key={k} style={{ borderTop: '1px solid var(--ink-1000)', paddingTop: 16 }}>
              <div style={{ font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>{k}</div>
              <p style={{ margin: '10px 0 0', font: 'var(--body-sm)', color: 'var(--text-secondary)' }}>{v}</p>
            </div>
          ))}
        </div>
      )}
      {P.faq && <Accordion items={P.faq.map(([q, a]) => ({ title: q, content: <p style={{ margin: 0 }}>{a}</p> }))} defaultOpen={0} />}
      <div style={{ display: 'grid', gap: 22, gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', marginTop: 'var(--space-16)', paddingTop: 'var(--space-10)', borderTop: '1px solid var(--border-subtle)' }}>
        {BENEFITS.map((b) => <BenefitItem key={b.title} {...b} />)}
      </div>
    </div>
  );
}

Object.assign(window, { BlogPage, ArticlePage, StaticPage });
