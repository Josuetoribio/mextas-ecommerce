const { Button, Icon, Input, Select, RadioCard, CartLine, EmptyState, Breadcrumbs, Badge, OrderTimeline } = window.MEXTASDesignSystem_3a0f0e;

function CartPage() {
  const s = useStore();
  const [code, setCode] = React.useState('');
  const [msg, setMsg] = React.useState(null);
  if (!s.cart.length) return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-20)' }}>
      <EmptyState icon="shopping-bag" title="Tu carrito está vacío" description="Aún no has agregado productos. Explora la nueva colección." action={<Button onClick={() => s.go('productos')}>Ver productos</Button>} />
    </div>
  );
  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-10)' }}>
      <Breadcrumbs items={[{ label: 'Inicio' }, { label: 'Carrito' }]} onNavigate={() => s.go('home')} />
      <h1 style={{ margin: '18px 0 var(--space-8)', font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>Tu carrito</h1>
      <div className="mx-two-col">
        <div>
          {s.cart.map((it) => <CartLine key={it.key} item={it} onQty={(q) => s.setQty(it.key, q)} onRemove={() => s.remove(it.key)} />)}
          <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="ghost" iconLeft="arrow-left" onClick={() => s.go('productos')}>Seguir comprando</Button>
            <Button variant="ghost" iconLeft="trash-2" onClick={s.clearCart}>Vaciar carrito</Button>
          </div>
        </div>
        <aside className="mx-summary">
          <h2 style={{ margin: '0 0 18px', font: 'var(--heading-2)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>Resumen</h2>
          <div style={{ marginBottom: 18 }}>
            <div style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: 9 }}>¿Tienes un código promocional?</div>
            <form style={{ display: 'flex', gap: 8 }} onSubmit={(e) => { e.preventDefault(); setMsg(s.applyPromo(code) ? 'ok' : 'err'); }}>
              <Input placeholder="MEXTAS10" value={code} onChange={(e) => setCode(e.target.value)} wrapStyle={{ flex: 1 }} aria-label="Código promocional" />
              <Button variant="secondary" type="submit">Aplicar</Button>
            </form>
            {msg && <div style={{ marginTop: 8, font: 'var(--body-xs)', color: msg === 'ok' ? 'var(--success-600)' : 'var(--sale-500)' }}>{msg === 'ok' ? 'Código aplicado: 10% de descuento.' : 'El código no es válido.'}</div>}
          </div>
          <SummaryRows totals={s.totals} promo={s.promo} />
          <Button fullWidth size="lg" style={{ marginTop: 16 }} onClick={() => s.go('checkout')}>Proceder al pago</Button>
          <div style={{ marginTop: 14, display: 'flex', gap: 9, alignItems: 'center', font: 'var(--body-xs)', color: 'var(--text-muted)' }}><Icon name="shield-check" size={15} />Pago protegido con encriptación SSL</div>
        </aside>
      </div>
    </div>
  );
}

const STEPS = ['Contacto', 'Envío', 'Pago'];

function CheckoutPage() {
  const s = useStore();
  const [step, setStep] = React.useState(0);
  const [ship, setShip] = React.useState('estandar');
  const [pay, setPay] = React.useState('visa');
  const [busy, setBusy] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const order = 'MX-2026-10482';
  const items = s.cart;
  const shipCost = ship === 'express' ? 149 : s.totals.shipping;
  const total = s.totals.subtotal - s.totals.discount + shipCost;

  if (done) return <Confirmation order={order} items={items} total={total} />;
  if (!items.length) return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-20)' }}>
      <EmptyState icon="shopping-bag" title="No hay nada por pagar" description="Agrega productos al carrito para continuar." action={<Button onClick={() => s.go('productos')}>Ver productos</Button>} />
    </div>
  );

  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-10)' }}>
      <div style={{ display: 'flex', gap: 22, alignItems: 'center', marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}>
        {STEPS.map((st, i) => (
          <div key={st} style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: i <= step ? 1 : .42 }}>
            <span style={{ width: 24, height: 24, borderRadius: '50%', display: 'grid', placeItems: 'center', background: i <= step ? 'var(--ink-1000)' : 'var(--ink-100)', color: i <= step ? 'var(--paper)' : 'var(--ink-500)', font: 'var(--label-sm)' }}>{i + 1}</span>
            <span style={{ font: 'var(--label-md)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{st}</span>
            {i < STEPS.length - 1 && <span style={{ width: 40, height: 1, background: 'var(--border-default)' }} />}
          </div>
        ))}
      </div>
      <div className="mx-two-col">
        <div style={{ display: 'grid', gap: 'var(--space-10)' }}>
          <Section title="Información de contacto" open={step >= 0}>
            <div className="mx-fields">
              <Input label="Nombre completo" defaultValue="Kyritabb Mendoza" autoComplete="name" />
              <Input label="Correo electrónico" type="email" defaultValue="hola@mextas.mx" autoComplete="email" />
              <Input label="Teléfono" defaultValue="55 1234 5678" autoComplete="tel" />
            </div>
          </Section>
          <Section title="Dirección de envío" open={step >= 0}>
            <div className="mx-fields">
              <Input label="Calle y número" defaultValue="Av. Álvaro Obregón 121" wrapStyle={{ gridColumn: '1 / -1' }} />
              <Input label="Colonia" defaultValue="Roma Norte" />
              <Input label="Ciudad" defaultValue="Ciudad de México" />
              <Select label="Estado" options={['Ciudad de México', 'Jalisco', 'Nuevo León', 'Querétaro', 'Yucatán']} />
              <Input label="Código postal" defaultValue="06700" />
            </div>
          </Section>
          <Section title="Método de envío">
            <div style={{ display: 'grid', gap: 10 }}>
              <RadioCard icon="truck" title="Envío estándar" description="2–4 días hábiles · Estafeta" meta={s.totals.subtotal >= 1499 ? 'Gratis' : money(149)} selected={ship === 'estandar'} onSelect={() => { setShip('estandar'); setStep(Math.max(step, 1)); }} />
              <RadioCard icon="zap" title="Envío express" description="24 horas en CDMX, GDL y MTY · DHL" meta={money(149)} selected={ship === 'express'} onSelect={() => { setShip('express'); setStep(Math.max(step, 1)); }} />
            </div>
          </Section>
          <Section title="Método de pago">
            <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))' }}>
              {[['visa', 'Visa', 'credit-card'], ['mastercard', 'Mastercard', 'credit-card'], ['amex', 'American Express', 'credit-card'], ['paypal', 'PayPal', 'wallet']].map(([k, l, ic]) => (
                <RadioCard key={k} icon={ic} title={l} selected={pay === k} onSelect={() => { setPay(k); setStep(2); }} />
              ))}
            </div>
            {pay !== 'paypal' && (
              <div className="mx-fields" style={{ marginTop: 16 }}>
                <Input label="Número de tarjeta" placeholder="4242 4242 4242 4242" wrapStyle={{ gridColumn: '1 / -1' }} />
                <Input label="Vencimiento" placeholder="MM/AA" />
                <Input label="CVV" placeholder="123" />
              </div>
            )}
            <div style={{ marginTop: 14, display: 'flex', gap: 9, alignItems: 'center', font: 'var(--body-xs)', color: 'var(--text-muted)' }}><Icon name="lock" size={14} />Demo sin procesamiento real de pagos.</div>
          </Section>
        </div>
        <aside className="mx-summary">
          <h2 style={{ margin: '0 0 12px', font: 'var(--heading-2)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>Tu pedido</h2>
          <div style={{ maxHeight: 280, overflowY: 'auto', marginBottom: 12 }}>
            {items.map((it) => <CartLine key={it.key} item={it} readOnly />)}
          </div>
          <SummaryRows totals={{ ...s.totals, shipping: shipCost, total }} promo={s.promo} />
          <Button fullWidth size="lg" loading={busy} style={{ marginTop: 16 }}
            onClick={() => { setBusy(true); setTimeout(() => { setBusy(false); setDone(true); s.clearCart(); window.scrollTo({ top: 0 }); }, 1400); }}>
            {busy ? 'Procesando' : 'Pagar ' + money(total)}
          </Button>
          <Button fullWidth variant="ghost" size="sm" style={{ marginTop: 8 }} onClick={() => s.go('carrito')}>Volver al carrito</Button>
        </aside>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 style={{ margin: '0 0 16px', font: 'var(--heading-2)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase' }}>{title}</h2>
      {children}
    </section>
  );
}

function Confirmation({ order, items, total }) {
  const s = useStore();
  return (
    <div className="mx-container" style={{ paddingBlock: 'var(--space-16)', maxWidth: 760 }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--ink-1000)', color: 'var(--paper)', display: 'grid', placeItems: 'center', marginBottom: 22 }}><Icon name="check" size={26} strokeWidth={2.2} /></div>
      <h1 style={{ margin: 0, font: 'var(--display-3)', letterSpacing: 'var(--track-display)' }}>¡Pedido confirmado!</h1>
      <p style={{ margin: '14px 0 0', font: 'var(--body-md)', color: 'var(--text-secondary)' }}>Gracias por tu compra. Te enviamos la confirmación a hola@mextas.mx.</p>
      <div style={{ marginTop: 26, padding: 22, background: 'var(--ink-025)', display: 'grid', gap: 16 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between' }}>
          <Field label="Número de pedido" value={order} />
          <Field label="Total" value={money(total)} />
          <Field label="Envío" value="Estándar · 2–4 días" />
          <Field label="Entrega estimada" value="26 sep 2026" />
        </div>
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 12 }}>
          {items.map((it) => <CartLine key={it.key} item={it} readOnly />)}
        </div>
      </div>
      <div style={{ marginTop: 26 }}><OrderTimeline current={0} /></div>
      <div style={{ display: 'flex', gap: 12, marginTop: 30, flexWrap: 'wrap' }}>
        <Button onClick={() => s.go('rastreo')}>Rastrear pedido</Button>
        <Button variant="secondary" onClick={() => s.go('productos')}>Seguir comprando</Button>
      </div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div><div style={{ font: 'var(--label-sm)', letterSpacing: 'var(--track-label)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>{label}</div>
      <div style={{ font: 'var(--price-md)' }}>{value}</div></div>
  );
}

Object.assign(window, { CartPage, CheckoutPage, CheckoutField: Field });
