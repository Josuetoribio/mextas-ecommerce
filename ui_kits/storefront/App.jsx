const { AnnouncementBar, SiteHeader, SiteFooter } = window.MEXTASDesignSystem_3a0f0e;

const ROUTE_NAV = { nuevos: 'nuevos', hombres: 'hombres', mujeres: 'mujeres', accesorios: 'accesorios', tecnologia: 'tecnologia', colecciones: 'colecciones', ofertas: 'ofertas', blog: 'blog' };

function Shell() {
  const s = useStore();
  const r = s.route;
  const nav = (key) => {
    if (key === 'home') return s.go('home');
    if (key === 'ofertas') return s.go('ofertas');
    if (key === 'blog') return s.go('blog');
    if (key === 'colecciones') return s.go('colecciones');
    if (key === 'nuevos') return s.go('productos', { category: 'nuevos', title: 'Nuevos' });
    if (key === 'accesorios') return s.go('productos', { category: 'Accesorios', title: 'Accesorios' });
    if (key === 'tecnologia') return s.go('productos', { category: 'Gadgets', title: 'Tecnología' });
    return s.go('productos', { title: key === 'hombres' ? 'Hombres' : 'Mujeres' });
  };
  let page = null;
  switch (r.name) {
    case 'productos': {
      const base = r.category === 'nuevos' ? PRODUCTS.filter((p) => p.isNew) : PRODUCTS;
      page = <Catalog key={r.category + (r.query || '') + (r.title || '')} title={r.title || (r.query ? 'Resultados para “' + r.query + '”' : 'Todos los productos')} base={base} query={r.query}
        crumbs={[{ label: 'Inicio' }, { label: 'Productos' }].concat(r.title ? [{ label: r.title }] : [])} />;
      break;
    }
    case 'producto': page = <ProductPage slug={r.slug} key={r.slug} />; break;
    case 'ofertas': page = <OfertasPage />; break;
    case 'packs': page = <PacksPage />; break;
    case 'colecciones': page = <CollectionsPage />; break;
    case 'coleccion': page = <CollectionPage slug={r.slug} key={r.slug} />; break;
    case 'carrito': page = <CartPage />; break;
    case 'checkout': page = <CheckoutPage />; break;
    case 'cuenta': page = <AccountPage tab="perfil" />; break;
    case 'pedidos': page = <AccountPage tab="pedidos" />; break;
    case 'favoritos': page = <WishlistPage />; break;
    case 'rastreo': page = <TrackingPage />; break;
    case 'blog': page = <BlogPage />; break;
    case 'articulo': page = <ArticlePage slug={r.slug} key={r.slug} />; break;
    case 'sobre': case 'envios': case 'devoluciones': page = <StaticPage kind={r.name} key={r.name} />; break;
    default: page = <Home />;
  }
  return (
    <div>
      <AnnouncementBar
        messages={['Envío gratis en compras mayores a $1,499 MXN', '12 meses sin intereses con tarjetas participantes', 'Cambios y devoluciones sin costo durante 30 días']}
        links={[{ label: 'México (MXN $)', caret: true }, { label: 'Ayuda', onClick: (e) => { e.preventDefault(); s.go('envios'); } }, { label: 'Rastreo de pedido', onClick: (e) => { e.preventDefault(); s.go('rastreo'); } }]} />
      <SiteHeader nav={NAV} activeNav={ROUTE_NAV[r.name] || (r.name === 'home' ? '' : r.name)} cartCount={s.totals.count} wishlistCount={s.wishlist.length}
        onSearch={s.openSearch} onCart={s.openCart} onWishlist={() => s.go('favoritos')} onAccount={() => s.go('cuenta')} onMenu={s.openMenu} onNav={nav} />
      <main key={r.name + (r.slug || '') + (r.title || '')} style={{ animation: 'mx-page var(--dur-3) var(--ease-out)' }}>{page}</main>
      <SiteFooter columns={FOOTER_COLUMNS} socials={['instagram', 'facebook', 'youtube']} onNavigate={(l) => l.key && s.go(l.key)} />
      <CartDrawer /><SearchOverlay /><QuickView /><MiniCartToast /><MobileMenu />
    </div>
  );
}

function App() { return <StoreProvider><Shell /></StoreProvider>; }
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
