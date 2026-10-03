/* @ds-bundle: {"format":4,"namespace":"MEXTASDesignSystem_3a0f0e","components":[{"name":"BenefitItem","sourcePath":"components/commerce/BenefitItem.jsx"},{"name":"CartLine","sourcePath":"components/commerce/CartLine.jsx"},{"name":"CategoryTile","sourcePath":"components/commerce/CategoryTile.jsx"},{"name":"CountdownTimer","sourcePath":"components/commerce/CountdownTimer.jsx"},{"name":"OrderTimeline","sourcePath":"components/commerce/OrderTimeline.jsx"},{"name":"PackCard","sourcePath":"components/commerce/PackCard.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"PromoBanner","sourcePath":"components/commerce/PromoBanner.jsx"},{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Price","sourcePath":"components/core/Price.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"Drawer","sourcePath":"components/feedback/Drawer.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"RadioCard","sourcePath":"components/forms/RadioCard.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SwatchGroup","sourcePath":"components/forms/SwatchGroup.jsx"},{"name":"AnnouncementBar","sourcePath":"components/navigation/AnnouncementBar.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Logo","sourcePath":"components/navigation/Logo.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/commerce/BenefitItem.jsx":"bf00a2235987","components/commerce/CartLine.jsx":"2690f0ab8b48","components/commerce/CategoryTile.jsx":"bd717ebe1714","components/commerce/CountdownTimer.jsx":"238a0abe1ae1","components/commerce/OrderTimeline.jsx":"fee3ccdff3a5","components/commerce/PackCard.jsx":"5f162b0ee563","components/commerce/ProductCard.jsx":"2607b5587ad0","components/commerce/PromoBanner.jsx":"fed0401c1c1d","components/core/Accordion.jsx":"ce7e1daa0366","components/core/Badge.jsx":"bea45c1813cc","components/core/Button.jsx":"8e12ea3a635d","components/core/Icon.jsx":"cd684c0837f8","components/core/IconButton.jsx":"109d6a28c484","components/core/Price.jsx":"ca4eb21ff9d4","components/core/Rating.jsx":"3c96176fcfb1","components/core/SectionHeading.jsx":"d02fcd939a6b","components/core/Skeleton.jsx":"a09cd2ee4763","components/feedback/Drawer.jsx":"33763f8040ad","components/feedback/EmptyState.jsx":"e361a2c236b3","components/feedback/Modal.jsx":"dd943bfa8ab5","components/feedback/Toast.jsx":"e848656841b6","components/forms/Checkbox.jsx":"efb33f8bc9d3","components/forms/Input.jsx":"d89fd8e4ef74","components/forms/QuantityStepper.jsx":"fbdd9050aa15","components/forms/RadioCard.jsx":"e7f18d662c7c","components/forms/Select.jsx":"c15d3a420002","components/forms/SwatchGroup.jsx":"63557f173a29","components/navigation/AnnouncementBar.jsx":"88fa6ae27596","components/navigation/Breadcrumbs.jsx":"c78dec131af8","components/navigation/Logo.jsx":"7bf8e7478265","components/navigation/SiteFooter.jsx":"fa6b3550c51d","components/navigation/SiteHeader.jsx":"14df8bb5f4ca","ui_kits/storefront/Account.jsx":"c0821c0a83d5","ui_kits/storefront/App.jsx":"2fa4e0510e83","ui_kits/storefront/Catalog.jsx":"004c50628400","ui_kits/storefront/Checkout.jsx":"240739b9340d","ui_kits/storefront/Content.jsx":"f1a4e0bf6273","ui_kits/storefront/Home.jsx":"c2b90c8fd020","ui_kits/storefront/Overlays.jsx":"104fde9594d3","ui_kits/storefront/ProductPage.jsx":"e04436d26262","ui_kits/storefront/Store.jsx":"a9d4822b6919","ui_kits/storefront/data.jsx":"a3567525802b"},"inlinedExternals":[],"unexposedExports":[{"name":"mxn","sourcePath":"components/core/Price.jsx"}]} */

(() => {

const __ds_ns = (window.MEXTASDesignSystem_3a0f0e = window.MEXTASDesignSystem_3a0f0e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/CountdownTimer.jsx
try { (() => {
function CountdownTimer({
  to,
  label = 'Termina en',
  theme = 'dark',
  style
}) {
  const target = React.useMemo(() => new Date(to).getTime(), [to]);
  const [now, setNow] = React.useState(Date.now());
  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const d = Math.max(0, target - now);
  const parts = [{
    v: Math.floor(d / 86400000),
    l: 'Días'
  }, {
    v: Math.floor(d / 3600000) % 24,
    l: 'Horas'
  }, {
    v: Math.floor(d / 60000) % 60,
    l: 'Min'
  }, {
    v: Math.floor(d / 1000) % 60,
    l: 'Seg'
  }];
  const dark = theme === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.65)' : 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, parts.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.l,
    style: {
      minWidth: 58,
      padding: '9px 8px',
      textAlign: 'center',
      background: dark ? 'rgba(255,255,255,.08)' : 'var(--paper)',
      border: '1px solid ' + (dark ? 'rgba(255,255,255,.18)' : 'var(--border-subtle)'),
      color: dark ? 'var(--paper)' : 'var(--ink-1000)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--price-md)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(p.v).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      opacity: .6,
      marginTop: 4
    }
  }, p.l)))));
}
Object.assign(__ds_scope, { CountdownTimer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CountdownTimer.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  new: {
    background: 'var(--ink-1000)',
    color: 'var(--paper)'
  },
  sale: {
    background: 'var(--sale-500)',
    color: 'var(--paper)'
  },
  bestseller: {
    background: 'var(--paper)',
    color: 'var(--ink-1000)',
    boxShadow: 'inset 0 0 0 1px var(--ink-1000)'
  },
  neutral: {
    background: 'var(--ink-050)',
    color: 'var(--ink-600)'
  },
  success: {
    background: 'var(--success-100)',
    color: 'var(--success-600)'
  },
  warning: {
    background: 'var(--warning-100)',
    color: 'var(--warning-600)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 9px',
      borderRadius: 'var(--radius-xs)',
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      ...TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide icons, loaded from CDN (see readme → ICONOGRAPHY). React renders the SVG itself
   from lucide's icon data. lucide.createIcons() would swap the element React owns for a new
   <svg>, and React then crashes the page when it removes or updates that icon. */
const toPascalCase = s => s.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
function Icon({
  name,
  size = 20,
  strokeWidth = 1.6,
  color = 'currentColor',
  style,
  className,
  ...rest
}) {
  const [, redraw] = React.useReducer(n => n + 1, 0);
  React.useEffect(() => {
    if (window.lucide) return;
    const t = setInterval(() => {
      if (window.lucide) {
        clearInterval(t);
        redraw();
      }
    }, 120);
    return () => clearInterval(t);
  }, []);
  const node = window.lucide && window.lucide.icons[toPascalCase(name)];
  const css = {
    display: 'inline-flex',
    width: size,
    height: size,
    color,
    strokeWidth,
    ...style
  };
  if (!node) return /*#__PURE__*/React.createElement("i", _extends({
    "aria-hidden": "true",
    className: className,
    style: css
  }, rest));
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: ['lucide', 'lucide-' + name, className].filter(Boolean).join(' '),
    style: css
  }, rest), node[2].map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/BenefitItem.jsx
try { (() => {
function BenefitItem({
  icon,
  title,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    strokeWidth: 1.2
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      marginBottom: 7
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)',
      maxWidth: '26ch'
    }
  }, description)));
}
Object.assign(__ds_scope, { BenefitItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/BenefitItem.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CategoryTile.jsx
try { (() => {
function CategoryTile({
  name,
  image,
  icon,
  active,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 92,
      height: 92,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center',
      background: active ? 'var(--ink-1000)' : 'var(--ink-050)',
      color: active ? 'var(--paper)' : 'var(--ink-1000)',
      boxShadow: hover ? '0 0 0 1px var(--ink-1000)' : '0 0 0 1px transparent',
      transition: 'var(--t-base)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.07)' : 'scale(1)',
      transition: 'var(--t-media)'
    }
  }) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || 'sparkles',
    size: 30,
    strokeWidth: 1.4
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-primary)'
    }
  }, name));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/commerce/OrderTimeline.jsx
try { (() => {
const DEFAULT = ['Pedido recibido', 'Preparando', 'Enviado', 'En camino', 'Entregado'];
function OrderTimeline({
  steps = DEFAULT,
  current = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: 0,
      ...style
    }
  }, steps.map((s, i) => {
    const done = i <= current;
    return /*#__PURE__*/React.createElement("li", {
      key: s,
      style: {
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        flex: '0 0 26px',
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        background: done ? 'var(--ink-1000)' : 'var(--paper)',
        color: 'var(--paper)',
        border: '1px solid ' + (done ? 'var(--ink-1000)' : 'var(--border-default)')
      }
    }, done && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 14,
      strokeWidth: 2.4
    })), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: i < current ? 'var(--ink-1000)' : 'var(--border-default)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--body-xs)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        color: done ? 'var(--text-primary)' : 'var(--text-muted)',
        paddingRight: 10
      }
    }, s));
  }));
}
Object.assign(__ds_scope, { OrderTimeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/OrderTimeline.jsx", error: String((e && e.message) || e) }); }

// components/core/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen == null ? [] : [defaultOpen]);
  const toggle = i => setOpen(o => o.includes(i) ? o.filter(x => x !== i) : allowMultiple ? [...o, i] : [i]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '18px 0',
        background: 'none',
        border: 0,
        cursor: 'pointer',
        textAlign: 'left',
        font: 'var(--heading-3)',
        letterSpacing: 'var(--track-tight)',
        color: 'var(--text-primary)'
      }
    }, it.title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: isOpen ? 'minus' : 'plus',
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-3) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 20,
        font: 'var(--body-md)',
        color: 'var(--text-secondary)',
        maxWidth: '68ch'
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    height: 36,
    padding: '0 16px',
    font: 'var(--label-sm)'
  },
  md: {
    height: 44,
    padding: '0 24px',
    font: 'var(--label-md)'
  },
  lg: {
    height: 54,
    padding: '0 34px',
    font: 'var(--label-lg)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--ink-1000)',
    color: 'var(--paper)',
    border: '1px solid var(--ink-1000)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--ink-1000)',
    border: '1px solid var(--ink-1000)'
  },
  quiet: {
    background: 'var(--ink-050)',
    color: 'var(--ink-1000)',
    border: '1px solid transparent'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink-1000)',
    border: '1px solid transparent'
  },
  sale: {
    background: 'var(--sale-500)',
    color: 'var(--paper)',
    border: '1px solid var(--sale-500)'
  },
  inverse: {
    background: 'var(--paper)',
    color: 'var(--ink-1000)',
    border: '1px solid var(--paper)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--ink-700)',
    borderColor: 'var(--ink-700)'
  },
  secondary: {
    background: 'var(--ink-1000)',
    color: 'var(--paper)'
  },
  quiet: {
    background: 'var(--ink-100)'
  },
  ghost: {
    background: 'var(--ink-050)'
  },
  sale: {
    background: 'var(--sale-600)',
    borderColor: 'var(--sale-600)'
  },
  inverse: {
    background: 'var(--ink-050)',
    borderColor: 'var(--ink-050)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  loading,
  disabled,
  as = 'button',
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const Tag = as;
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: fullWidth ? '100%' : undefined,
    borderRadius: 'var(--radius-none)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--track-label)',
    whiteSpace: 'nowrap',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.38 : 1,
    transition: 'var(--t-base)',
    transform: down && !disabled ? 'scale(.985)' : 'scale(1)',
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled && !loading ? HOVER[variant] : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: s,
    disabled: Tag === 'button' ? disabled || loading : undefined,
    "aria-busy": loading || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    onClick: disabled || loading ? undefined : onClick
  }, rest), loading ? /*#__PURE__*/React.createElement(Spinner, null) : iconLeft ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === 'lg' ? 20 : 16
  }) : null, children, !loading && iconRight ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'lg' ? 20 : 16
  }) : null);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      animation: 'mx-spin .7s linear infinite',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes mx-spin{to{transform:rotate(360deg)}}'));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PackCard.jsx
try { (() => {
function PackCard({
  name,
  description,
  items = [],
  price,
  compareAt,
  image,
  onAdd,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const saving = compareAt ? compareAt - price : 0;
  const fmt = n => '$' + n.toLocaleString('es-MX') + ' MXN';
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--ink-025)',
      transition: 'var(--t-base)',
      boxShadow: hover ? 'var(--shadow-card)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      aspectRatio: '16 / 10',
      background: 'var(--surface-media)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'var(--t-media)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--heading-2)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, description)), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      font: 'var(--body-sm)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2
  }), it))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--price-lg)'
    }
  }, fmt(price)), compareAt && /*#__PURE__*/React.createElement("s", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-muted)'
    }
  }, fmt(compareAt)), saving > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-sale)'
    }
  }, "Ahorras ", fmt(saving))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    onClick: onAdd
  }, "Agregar pack")));
}
Object.assign(__ds_scope, { PackCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PackCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/PromoBanner.jsx
try { (() => {
function PromoBanner({
  title,
  eyebrow,
  kicker,
  highlight,
  cta,
  image,
  theme = 'dark',
  onClick,
  height = 250,
  style
}) {
  const dark = theme === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: height,
      display: 'flex',
      alignItems: 'center',
      background: dark ? 'var(--ink-1000)' : 'var(--ink-050)',
      color: dark ? 'var(--paper)' : 'var(--ink-1000)',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'right center'
    }
  }), image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: dark ? 'linear-gradient(90deg,rgba(0,0,0,.92) 18%,rgba(0,0,0,.35) 62%,rgba(0,0,0,0))' : 'linear-gradient(90deg,rgba(242,242,242,.95) 18%,rgba(242,242,242,.4) 60%,rgba(242,242,242,0))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '38px 40px',
      maxWidth: 460,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      opacity: .7
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--heading-1)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      lineHeight: 1.18
    }
  }, title), kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      opacity: .75
    }
  }, kicker), highlight && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, highlight), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'inverse' : 'primary',
    size: "sm",
    onClick: onClick,
    style: {
      marginTop: 6
    }
  }, cta)));
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  size = 40,
  variant = 'ghost',
  active,
  badge,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    ghost: {
      background: 'transparent',
      border: '1px solid transparent',
      color: 'var(--ink-1000)'
    },
    outline: {
      background: 'var(--paper)',
      border: '1px solid var(--border-default)',
      color: 'var(--ink-1000)'
    },
    solid: {
      background: 'var(--ink-1000)',
      border: '1px solid var(--ink-1000)',
      color: 'var(--paper)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    "aria-pressed": active,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      cursor: 'pointer',
      transition: 'var(--t-base)',
      ...base,
      ...(active ? {
        color: 'var(--sale-500)'
      } : null),
      ...(hover ? variant === 'solid' ? {
        background: 'var(--ink-700)'
      } : {
        background: 'var(--ink-050)'
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: active && icon === 'heart' ? 'heart' : icon,
    size: Math.round(size * 0.5),
    style: active ? {
      fill: 'var(--sale-500)'
    } : undefined
  }), badge != null && badge !== 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-1000)',
      color: 'var(--paper)',
      font: 'var(--label-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Price.jsx
try { (() => {
const mxn = n => '$' + n.toLocaleString('es-MX') + ' MXN';
function Price({
  value,
  compareAt,
  size = 'md',
  currency = 'MXN',
  style
}) {
  const font = size === 'lg' ? 'var(--price-lg)' : size === 'sm' ? 'var(--label-md)' : 'var(--price-md)';
  const off = compareAt ? Math.round((1 - value / compareAt) * 100) : 0;
  const fmt = n => '$' + n.toLocaleString('es-MX') + ' ' + currency;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 8,
      flexWrap: 'wrap',
      ...style
    }
  }, compareAt && /*#__PURE__*/React.createElement("s", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-muted)',
      textDecorationThickness: 1
    }
  }, fmt(compareAt)), /*#__PURE__*/React.createElement("span", {
    style: {
      font,
      letterSpacing: 'var(--track-tight)',
      color: 'var(--text-primary)'
    }
  }, fmt(value)), off > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-sale)'
    }
  }, "-", off, "%"));
}
Object.assign(__ds_scope, { Price, mxn });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Price.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
function Rating({
  value = 0,
  reviews,
  size = 13,
  showValue = false,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / 5 * 100));
  const stars = '★★★★★';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      ...style
    },
    "aria-label": `${value} de 5 estrellas`
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      font: `700 ${size}px/1 var(--font-text)`,
      letterSpacing: '1.5px',
      color: 'var(--ink-200)'
    }
  }, stars, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      width: pct + '%',
      overflow: 'hidden',
      color: 'var(--ink-1000)',
      whiteSpace: 'nowrap'
    }
  }, stars)), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      color: 'var(--text-primary)'
    }
  }, value.toFixed(1)), reviews != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      color: 'var(--text-muted)'
    }
  }, "(", reviews, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  product,
  onAdd,
  onQuickView,
  onToggleWishlist,
  wishlisted,
  onOpen,
  compact,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const p = product || {};
  const off = p.compareAtPrice ? Math.round((1 - p.price / p.compareAtPrice) * 100) : 0;
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover ? 'var(--paper)' : 'var(--ink-025)',
      boxShadow: hover ? 'var(--shadow-card)' : 'none',
      transition: 'var(--t-base)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-media)',
      aspectRatio: '1 / 1',
      cursor: 'pointer'
    },
    onClick: onOpen
  }, p.image && /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.045)' : 'scale(1)',
      transition: 'var(--t-media)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'flex-start'
    }
  }, p.isNew && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "new"
  }, "Nuevo"), off > 0 && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "sale"
  }, "-", off, "%"), p.isBestSeller && !p.isNew && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "bestseller"
  }, "M\xE1s vendido")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": wishlisted ? 'Quitar de favoritos' : 'Guardar en favoritos',
    "aria-pressed": !!wishlisted,
    onClick: e => {
      e.stopPropagation();
      onToggleWishlist && onToggleWishlist(p);
    },
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 36,
      height: 36,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: 0,
      cursor: 'pointer',
      background: 'rgba(255,255,255,.9)',
      backdropFilter: 'blur(6px)',
      color: wishlisted ? 'var(--sale-500)' : 'var(--ink-1000)',
      opacity: hover || wishlisted ? 1 : 0,
      transform: `translateY(${hover || wishlisted ? 0 : -6}px)`,
      transition: 'var(--t-base)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart",
    size: 17,
    style: wishlisted ? {
      fill: 'var(--sale-500)'
    } : undefined
  })), onQuickView && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onQuickView(p);
    },
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 42,
      border: 0,
      cursor: 'pointer',
      background: 'rgba(255,255,255,.94)',
      backdropFilter: 'blur(6px)',
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-1000)',
      transform: `translateY(${hover ? 0 : 100}%)`,
      transition: 'transform var(--dur-3) var(--ease-out)'
    }
  }, "Vista r\xE1pida"), p.stock != null && p.stock <= 5 && p.stock > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 12,
      font: 'var(--body-xs)',
      background: 'var(--paper)',
      padding: '4px 8px',
      color: 'var(--ink-700)'
    }
  }, "\xDAltimas ", p.stock, " unidades")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: compact ? '14px 14px 16px' : '16px 16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, p.category && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.category), /*#__PURE__*/React.createElement("h3", {
    onClick: onOpen,
    style: {
      margin: 0,
      font: 'var(--body-md)',
      fontWeight: 600,
      cursor: 'pointer',
      letterSpacing: 'var(--track-tight)'
    }
  }, p.name), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    value: p.price,
    compareAt: p.compareAtPrice
  }), /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: p.rating,
    reviews: p.reviews
  }), onAdd && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    size: "sm",
    style: {
      marginTop: 'auto'
    },
    onClick: () => onAdd(p)
  }, "Agregar al carrito")));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  title,
  action,
  actionHref = '#',
  onAction,
  align = 'between',
  eyebrow,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: align === 'center' ? 'center' : 'space-between',
      gap: 24,
      marginBottom: 'var(--space-8)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align === 'center' ? 'center' : 'left'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--heading-1)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, title)), action && /*#__PURE__*/React.createElement("a", {
    href: actionHref,
    onClick: onAction,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      paddingBottom: 3,
      borderBottom: '1px solid var(--ink-1000)'
    }
  }, action, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15
  })));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
function Skeleton({
  width = '100%',
  height = 16,
  radius = 'var(--radius-none)',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width,
      height,
      borderRadius: radius,
      background: 'linear-gradient(90deg,var(--ink-050) 25%,var(--ink-100) 37%,var(--ink-050) 63%)',
      backgroundSize: '400% 100%',
      animation: 'mx-shimmer 1.4s ease infinite',
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes mx-shimmer{0%{background-position:100% 0}100%{background-position:0 0}}'));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Drawer.jsx
try { (() => {
function Drawer({
  open,
  title,
  side = 'right',
  width = 440,
  onClose,
  footer,
  children,
  style
}) {
  React.useEffect(() => {
    const k = e => e.key === 'Escape' && onClose && onClose();
    if (open) window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !open,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      pointerEvents: open ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-3) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      [side]: 0,
      width: 'min(' + width + 'px, 100%)',
      background: 'var(--paper)',
      boxShadow: 'var(--shadow-drawer)',
      display: 'flex',
      flexDirection: 'column',
      transform: open ? 'translateX(0)' : `translateX(${side === 'right' ? '' : '-'}104%)`,
      transition: 'transform var(--dur-3) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '22px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--heading-2)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 24px 24px'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      padding: '20px 24px',
      background: 'var(--paper)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'package-open',
  title,
  description,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      textAlign: 'center',
      padding: '64px 24px',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 40,
    strokeWidth: 1.1,
    color: "var(--ink-300)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--heading-2)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)',
      maxWidth: '40ch'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open,
  title,
  width = 880,
  onClose,
  children,
  style
}) {
  React.useEffect(() => {
    const k = e => e.key === 'Escape' && onClose && onClose();
    if (open) window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      display: 'grid',
      placeItems: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)',
      animation: 'mx-in var(--dur-2) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    style: {
      position: 'relative',
      width: 'min(' + width + 'px, 100%)',
      maxHeight: '88vh',
      overflowY: 'auto',
      background: 'var(--paper)',
      boxShadow: 'var(--shadow-pop)',
      animation: 'mx-pop var(--dur-3) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      zIndex: 2,
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: 0,
      cursor: 'pointer',
      background: 'var(--paper)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })), children), /*#__PURE__*/React.createElement("style", null, '@keyframes mx-in{from{opacity:0}to{opacity:1}}@keyframes mx-pop{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}'));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  open,
  title,
  product,
  actions,
  onClose,
  duration = 4200,
  style
}) {
  React.useEffect(() => {
    if (!open || !duration) return;
    const t = setTimeout(() => onClose && onClose(), duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 100,
      width: 'min(360px, calc(100vw - 32px))',
      background: 'var(--paper)',
      boxShadow: 'var(--shadow-pop)',
      border: '1px solid var(--border-subtle)',
      animation: 'mx-toast var(--dur-3) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '14px 16px',
      borderBottom: product ? '1px solid var(--border-subtle)' : 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    strokeWidth: 2.2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      display: 'flex',
      color: 'var(--ink-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  }))), product && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 72,
      flex: '0 0 64px',
      background: 'var(--surface-media)',
      overflow: 'hidden'
    }
  }, product.image && /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--body-sm)',
      fontWeight: 600
    }
  }, product.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, '$' + (product.price || 0).toLocaleString('es-MX') + ' MXN'))), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '0 16px 16px'
    }
  }, actions), /*#__PURE__*/React.createElement("style", null, '@keyframes mx-toast{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  count,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      padding: '6px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 18,
      flex: '0 0 18px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (checked ? 'var(--ink-1000)' : 'var(--border-default)'),
      background: checked ? 'var(--ink-1000)' : 'var(--paper)',
      color: 'var(--paper)',
      transition: 'var(--t-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-primary)'
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--body-xs)',
      color: 'var(--text-muted)'
    }
  }, count));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  size = 'md',
  type = 'text',
  suffix,
  style,
  wrapStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'lg' ? 54 : size === 'sm' ? 38 : 46;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: h,
      padding: '0 14px',
      background: 'var(--paper)',
      border: '1px solid ' + (error ? 'var(--sale-500)' : focus ? 'var(--ink-1000)' : 'var(--border-default)'),
      boxShadow: focus ? 'inset 0 0 0 1px var(--ink-1000)' : 'none',
      transition: 'var(--t-base)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      font: 'var(--body-md)',
      color: 'var(--text-primary)',
      ...style
    }
  }, rest)), suffix), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 7,
      font: 'var(--body-xs)',
      color: error ? 'var(--sale-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function QuantityStepper({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  size = 'md',
  style
}) {
  const h = size === 'sm' ? 34 : 46;
  const set = v => onChange && onChange(Math.min(max, Math.max(min, v)));
  const btn = {
    width: h,
    height: h,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 0,
    cursor: 'pointer',
    color: 'var(--ink-1000)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-default)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Quitar uno",
    style: {
      ...btn,
      opacity: value <= min ? .3 : 1
    },
    onClick: () => set(value - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    "aria-live": "polite",
    style: {
      minWidth: 34,
      textAlign: 'center',
      font: 'var(--price-md)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Agregar uno",
    style: {
      ...btn,
      opacity: value >= max ? .3 : 1
    },
    onClick: () => set(value + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 15
  })));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CartLine.jsx
try { (() => {
function CartLine({
  item,
  onQty,
  onRemove,
  readOnly,
  style
}) {
  const it = item || {};
  const fmt = n => '$' + n.toLocaleString('es-MX') + ' MXN';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: '18px 0',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 96,
      flex: '0 0 84px',
      background: 'var(--surface-media)',
      overflow: 'hidden'
    }
  }, it.image && /*#__PURE__*/React.createElement("img", {
    src: it.image,
    alt: it.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-sm)',
      fontWeight: 600
    }
  }, it.name), !readOnly && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Eliminar producto",
    onClick: onRemove,
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      color: 'var(--ink-400)',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  }))), it.variant && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      color: 'var(--text-muted)'
    }
  }, it.variant), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, readOnly ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, "Cantidad ", it.qty) : /*#__PURE__*/React.createElement(__ds_scope.QuantityStepper, {
    size: "sm",
    value: it.qty,
    onChange: onQty,
    max: it.stock || 99
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--price-md)'
    }
  }, fmt((it.price || 0) * (it.qty || 1))))));
}
Object.assign(__ds_scope, { CartLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CartLine.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioCard.jsx
try { (() => {
function RadioCard({
  title,
  description,
  meta,
  icon,
  selected,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "radio",
    "aria-checked": !!selected,
    onClick: onSelect,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: '100%',
      textAlign: 'left',
      padding: '16px 18px',
      cursor: 'pointer',
      background: 'var(--paper)',
      border: '1px solid ' + (selected ? 'var(--ink-1000)' : 'var(--border-subtle)'),
      boxShadow: selected ? 'inset 0 0 0 1px var(--ink-1000)' : 'none',
      transition: 'var(--t-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 17,
      height: 17,
      flex: '0 0 17px',
      borderRadius: '50%',
      border: '1px solid ' + (selected ? 'var(--ink-1000)' : 'var(--border-default)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, selected && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--ink-1000)'
    }
  })), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--heading-3)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 3,
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, description)), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--price-md)'
    }
  }, meta));
}
Object.assign(__ds_scope, { RadioCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  onChange,
  size = 'md',
  style,
  wrapStyle,
  ...rest
}) {
  const h = size === 'lg' ? 54 : size === 'sm' ? 38 : 46;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...wrapStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    onChange: onChange,
    style: {
      width: '100%',
      height: h,
      padding: '0 40px 0 14px',
      appearance: 'none',
      background: 'var(--paper)',
      border: '1px solid var(--border-default)',
      borderRadius: 0,
      font: 'var(--body-md)',
      color: 'var(--text-primary)',
      cursor: 'pointer',
      ...style
    }
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 13,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 17
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/SwatchGroup.jsx
try { (() => {
function SwatchGroup({
  label,
  options = [],
  value,
  onChange,
  type = 'color',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      color: 'var(--text-primary)'
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": label,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10
    }
  }, options.map(o => {
    const name = typeof o === 'string' ? o : o.name;
    const on = value === name;
    return type === 'color' ? /*#__PURE__*/React.createElement("button", {
      key: name,
      type: "button",
      role: "radio",
      "aria-checked": on,
      "aria-label": name,
      onClick: () => onChange && onChange(name),
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        cursor: 'pointer',
        background: typeof o === 'string' ? '#000' : o.hex,
        border: '1px solid var(--border-default)',
        boxShadow: on ? '0 0 0 2px var(--paper) inset, 0 0 0 1.5px var(--ink-1000)' : 'none',
        transition: 'var(--t-fast)'
      }
    }) : /*#__PURE__*/React.createElement("button", {
      key: name,
      type: "button",
      role: "radio",
      "aria-checked": on,
      onClick: () => onChange && onChange(name),
      style: {
        minWidth: 48,
        height: 40,
        padding: '0 14px',
        cursor: 'pointer',
        background: on ? 'var(--ink-1000)' : 'var(--paper)',
        color: on ? 'var(--paper)' : 'var(--ink-1000)',
        border: '1px solid ' + (on ? 'var(--ink-1000)' : 'var(--border-default)'),
        font: 'var(--label-md)',
        letterSpacing: 'var(--track-label)',
        transition: 'var(--t-fast)'
      }
    }, name);
  })));
}
Object.assign(__ds_scope, { SwatchGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SwatchGroup.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AnnouncementBar.jsx
try { (() => {
function AnnouncementBar({
  messages = [],
  links = [],
  interval = 5000,
  style
}) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (messages.length < 2) return;
    const t = setInterval(() => setI(v => (v + 1) % messages.length), interval);
    return () => clearInterval(t);
  }, [messages.length, interval]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-1000)',
      color: 'var(--paper)',
      height: 'var(--announce-h)',
      display: 'flex',
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      animation: 'mx-fade var(--dur-3) var(--ease-out)'
    }
  }, messages[i]), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 22,
      whiteSpace: 'nowrap'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    onClick: l.onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--body-xs)',
      color: 'rgba(255,255,255,.82)'
    }
  }, l.label, l.caret && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 13
  }))))), /*#__PURE__*/React.createElement("style", null, '@keyframes mx-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}'));
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Ruta de navegaci\xF3n",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 8,
      font: 'var(--body-xs)',
      color: 'var(--text-muted)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), i === items.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)'
    },
    "aria-current": "page"
  }, it.label) : /*#__PURE__*/React.createElement("a", {
    href: it.href || '#',
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(it);
    },
    style: {
      color: 'var(--text-muted)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  size = 34,
  color = 'var(--ink-1000)',
  as = 'div',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      font: `400 ${size}px/1 var(--font-display)`,
      letterSpacing: 'var(--track-logo)',
      textTransform: 'uppercase',
      color,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), "MEXTAS");
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Logo.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  columns = [],
  socials = ['instagram', 'facebook', 'youtube'],
  onNavigate,
  onSubscribe,
  style
}) {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-025)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 'var(--space-16)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      display: 'grid',
      gap: 'var(--space-12)',
      gridTemplateColumns: 'minmax(220px,1.3fr) repeat(auto-fit,minmax(150px,1fr))',
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    size: 28
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 22px',
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, "Tecnolog\xEDa, dise\xF1o y funcionalidad en productos creados para tu d\xEDa a d\xEDa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      border: '1px solid var(--border-default)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s,
    size: 16
  }))))), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 18px',
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href || '#',
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, l.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 18px',
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, "Suscr\xEDbete"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, "Recibe lanzamientos, promociones y novedades directamente en tu correo."), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      font: 'var(--body-sm)',
      color: 'var(--success-600)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  }), "Gracias. Te has suscrito correctamente.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      onSubscribe && onSubscribe(email);
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    placeholder: "Tu correo electr\xF3nico",
    type: "email",
    required: true,
    value: email,
    onChange: e => setEmail(e.target.value),
    wrapStyle: {
      flex: 1
    },
    "aria-label": "Tu correo electr\xF3nico"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Suscribirme",
    style: {
      width: 46,
      height: 46,
      flex: '0 0 46px',
      background: 'var(--ink-1000)',
      color: 'var(--paper)',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 MEXTAS. Todos los derechos reservados."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['VISA', 'MASTERCARD', 'AMEX', 'PAYPAL'].map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      padding: '6px 10px',
      border: '1px solid var(--border-subtle)',
      background: 'var(--paper)',
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      color: 'var(--ink-600)'
    }
  }, b))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  nav = [],
  activeNav,
  cartCount = 0,
  wishlistCount = 0,
  onSearch,
  onCart,
  onWishlist,
  onAccount,
  onNav,
  onMenu,
  compactAt = 900,
  style
}) {
  const [narrow, setNarrow] = React.useState(typeof window !== 'undefined' && window.innerWidth < compactAt);
  React.useEffect(() => {
    const r = () => setNarrow(window.innerWidth < compactAt);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, [compactAt]);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--paper)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 40,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      height: 'var(--header-h)',
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, narrow && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    label: "Abrir men\xFA",
    onClick: onMenu
  }), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    as: "a",
    href: "#",
    size: narrow ? 22 : 30,
    onClick: e => {
      e.preventDefault();
      onNav && onNav('home');
    }
  }), !narrow && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSearch,
    style: {
      flex: 1,
      maxWidth: 420,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 16px',
      cursor: 'text',
      background: 'var(--paper)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-muted)',
      font: 'var(--body-sm)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "Buscar productos, marcas y m\xE1s..."), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: narrow ? 2 : 6
    }
  }, narrow && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Buscar",
    onClick: onSearch
  }), !narrow && /*#__PURE__*/React.createElement(HeaderAction, {
    icon: "user",
    label: "Mi cuenta",
    onClick: onAccount
  }), !narrow && /*#__PURE__*/React.createElement(HeaderAction, {
    icon: "heart",
    label: "Favoritos",
    count: wishlistCount,
    onClick: onWishlist
  }), /*#__PURE__*/React.createElement(HeaderAction, {
    icon: "shopping-bag",
    label: "Carrito",
    count: cartCount,
    onClick: onCart,
    compact: narrow
  }))), !narrow && nav.length > 0 && /*#__PURE__*/React.createElement("nav", {
    className: "mx-container",
    style: {
      display: 'flex',
      gap: 30,
      paddingBottom: 14
    }
  }, nav.map(n => {
    const on = activeNav === n.key;
    return /*#__PURE__*/React.createElement("a", {
      key: n.key,
      href: n.href || '#',
      onClick: e => {
        e.preventDefault();
        onNav && onNav(n.key);
      },
      style: {
        font: 'var(--label-md)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        color: n.highlight ? 'var(--sale-500)' : 'var(--ink-1000)',
        paddingBottom: 4,
        borderBottom: '1px solid ' + (on ? 'var(--ink-1000)' : 'transparent')
      }
    }, n.label);
  })));
}
function HeaderAction({
  icon,
  label,
  count,
  onClick,
  compact
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      height: 44,
      padding: '0 12px',
      background: hover ? 'var(--ink-025)' : 'transparent',
      border: 0,
      cursor: 'pointer',
      transition: 'var(--t-fast)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 21
  }), count > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      right: -8,
      minWidth: 17,
      height: 17,
      padding: '0 4px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ink-1000)',
      color: 'var(--paper)',
      font: 'var(--label-sm)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, count)), !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-sm)'
    }
  }, label));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Account.jsx
try { (() => {
const {
  Button,
  Icon,
  Input,
  Badge,
  ProductCard,
  EmptyState,
  Breadcrumbs,
  OrderTimeline,
  CartLine,
  Accordion
} = window.MEXTASDesignSystem_3a0f0e;
const TABS = [['perfil', 'Perfil', 'user'], ['pedidos', 'Mis pedidos', 'package'], ['favoritos', 'Favoritos', 'heart'], ['direcciones', 'Direcciones', 'map-pin'], ['pagos', 'Métodos de pago', 'credit-card']];
function AccountPage({
  tab = 'perfil'
}) {
  const s = useStore();
  const [active, setActive] = React.useState(tab);
  React.useEffect(() => setActive(tab), [tab]);
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Mi cuenta'
    }],
    onNavigate: () => s.go('home')
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 var(--space-8)',
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, "Hola, Kyritabb"), /*#__PURE__*/React.createElement("div", {
    className: "mx-account"
  }, /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'grid',
      border: '1px solid var(--border-subtle)'
    }
  }, TABS.map(([k, l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setActive(k),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '14px 16px',
      textAlign: 'left',
      cursor: 'pointer',
      background: active === k ? 'var(--ink-1000)' : 'var(--paper)',
      color: active === k ? 'var(--paper)' : 'var(--ink-1000)',
      border: 0,
      borderBottom: '1px solid var(--border-subtle)',
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17
  }), l)), /*#__PURE__*/React.createElement("button", {
    onClick: () => s.go('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '14px 16px',
      textAlign: 'left',
      cursor: 'pointer',
      background: 'var(--paper)',
      border: 0,
      color: 'var(--text-secondary)',
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 17
  }), "Cerrar sesi\xF3n"))), /*#__PURE__*/React.createElement("div", null, active === 'perfil' && /*#__PURE__*/React.createElement(Profile, null), active === 'pedidos' && /*#__PURE__*/React.createElement(Orders, null), active === 'favoritos' && /*#__PURE__*/React.createElement(Wishlist, null), active === 'direcciones' && /*#__PURE__*/React.createElement(Addresses, null), active === 'pagos' && /*#__PURE__*/React.createElement(PayMethods, null))));
}
function Panel({
  title,
  action,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      border: '1px solid var(--border-subtle)',
      padding: 26,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--heading-2)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, title), action), children);
}
function Profile() {
  const [saved, setSaved] = React.useState(false);
  return /*#__PURE__*/React.createElement(Panel, {
    title: "Datos personales",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => setSaved(true)
    }, saved ? 'Guardado' : 'Guardar cambios')
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-fields"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    defaultValue: "Kyritabb",
    onChange: () => setSaved(false)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Apellido",
    defaultValue: "Mendoza",
    onChange: () => setSaved(false)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo electr\xF3nico",
    defaultValue: "hola@mextas.mx",
    type: "email",
    onChange: () => setSaved(false)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    defaultValue: "55 1234 5678",
    onChange: () => setSaved(false)
  })));
}
function Orders() {
  const s = useStore();
  return /*#__PURE__*/React.createElement("div", null, ORDERS.map(o => /*#__PURE__*/React.createElement(Panel, {
    key: o.id,
    title: 'Pedido ' + o.id,
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => s.go('rastreo', {
        order: o.id
      })
    }, "Rastrear pedido")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    label: "Fecha",
    value: o.date
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "Estado",
    value: /*#__PURE__*/React.createElement(Badge, {
      tone: o.status === 'Entregado' ? 'success' : 'neutral'
    }, o.status)
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "Total",
    value: money(o.total)
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "Env\xEDo",
    value: o.shipping
  })), /*#__PURE__*/React.createElement(OrderTimeline, {
    current: o.step
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, o.items.map(it => /*#__PURE__*/React.createElement(CartLine, {
    key: it.id,
    item: {
      ...it,
      key: it.id
    },
    readOnly: true
  }))))));
}
function Meta({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--body-md)',
      fontWeight: 600
    }
  }, value));
}
function Wishlist() {
  const s = useStore();
  const items = PRODUCTS.filter(p => s.wishlist.includes(p.id));
  if (!items.length) return /*#__PURE__*/React.createElement(Panel, {
    title: "Tus favoritos"
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "heart",
    title: "A\xFAn no tienes favoritos",
    description: "Toca el coraz\xF3n en cualquier producto para guardarlo aqu\xED.",
    action: /*#__PURE__*/React.createElement(Button, {
      onClick: () => s.go('productos')
    }, "Ver productos")
  }));
  return /*#__PURE__*/React.createElement(Panel, {
    title: `Tus favoritos (${items.length})`
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-grid-3"
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    compact: true,
    onAdd: () => s.add(p),
    onToggleWishlist: s.toggleWish,
    wishlisted: true,
    onOpen: () => s.go('producto', {
      slug: p.slug
    })
  }))));
}
function Addresses() {
  return /*#__PURE__*/React.createElement(Panel, {
    title: "Direcciones",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: "plus"
    }, "Agregar")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))'
    }
  }, [['Casa', 'Av. Álvaro Obregón 121, Roma Norte, CDMX, 06700'], ['Oficina', 'Av. Santa Fe 495, Cruz Manca, CDMX, 05349']].map(([t, a], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      border: '1px solid ' + (i === 0 ? 'var(--ink-1000)' : 'var(--border-subtle)'),
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, t), i === 0 && /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Predeterminada")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, a)))));
}
function PayMethods() {
  return /*#__PURE__*/React.createElement(Panel, {
    title: "M\xE9todos de pago",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: "plus"
    }, "Agregar tarjeta")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))'
    }
  }, [['VISA', '•••• 4242', '09/29'], ['MASTERCARD', '•••• 8810', '03/28']].map(([b, n, e]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      border: '1px solid var(--border-subtle)',
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)'
    }
  }, b), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--price-md)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      color: 'var(--text-muted)'
    }
  }, "Vence ", e)))));
}
function TrackingPage() {
  const s = useStore();
  const [q, setQ] = React.useState(s.route.order || '');
  const [result, setResult] = React.useState(s.route.order ? ORDERS[0] : null);
  const [err, setErr] = React.useState(null);
  const search = e => {
    e.preventDefault();
    const o = ORDERS.find(x => x.id.toLowerCase() === q.trim().toLowerCase());
    setResult(o || null);
    setErr(o ? null : 'No encontramos ese número de pedido. Prueba con MX-2026-10482.');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)',
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Rastreo'
    }],
    onNavigate: () => s.go('home')
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 10px',
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, "Rastrea tu pedido"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      font: 'var(--body-md)',
      color: 'var(--text-secondary)'
    }
  }, "Ingresa tu n\xFAmero de pedido para ver el estado de tu env\xEDo."), /*#__PURE__*/React.createElement("form", {
    onSubmit: search,
    style: {
      display: 'flex',
      gap: 10,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "lg",
    placeholder: "MX-2026-10482",
    value: q,
    onChange: e => setQ(e.target.value),
    "aria-label": "N\xFAmero de pedido",
    wrapStyle: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    type: "submit"
  }, "Buscar")), err && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      font: 'var(--body-sm)',
      color: 'var(--sale-500)'
    }
  }, err), result && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      border: '1px solid var(--border-subtle)',
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Meta, {
    label: "Pedido",
    value: result.id
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "Estado",
    value: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, result.status)
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "Paqueter\xEDa",
    value: result.shipping
  }), /*#__PURE__*/React.createElement(Meta, {
    label: "Entrega estimada",
    value: "26 sep 2026"
  })), /*#__PURE__*/React.createElement(OrderTimeline, {
    current: result.step
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, result.items.map(it => /*#__PURE__*/React.createElement(CartLine, {
    key: it.id,
    item: {
      ...it,
      key: it.id
    },
    readOnly: true
  })))));
}
function WishlistPage() {
  const s = useStore();
  const items = PRODUCTS.filter(p => s.wishlist.includes(p.id));
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Favoritos'
    }],
    onNavigate: () => s.go('home')
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 var(--space-8)',
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, "Tus favoritos"), items.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "heart",
    title: "A\xFAn no tienes favoritos",
    description: "Toca el coraz\xF3n en cualquier producto para guardarlo aqu\xED.",
    action: /*#__PURE__*/React.createElement(Button, {
      onClick: () => s.go('productos')
    }, "Ver productos")
  }) : /*#__PURE__*/React.createElement("div", {
    className: "mx-grid-4"
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    onAdd: () => s.add(p),
    onQuickView: s.quickView,
    onToggleWishlist: s.toggleWish,
    wishlisted: true,
    onOpen: () => s.go('producto', {
      slug: p.slug
    })
  }))));
}
Object.assign(window, {
  AccountPage,
  TrackingPage,
  WishlistPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Account.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/App.jsx
try { (() => {
const {
  AnnouncementBar,
  SiteHeader,
  SiteFooter
} = window.MEXTASDesignSystem_3a0f0e;
const ROUTE_NAV = {
  nuevos: 'nuevos',
  hombres: 'hombres',
  mujeres: 'mujeres',
  accesorios: 'accesorios',
  tecnologia: 'tecnologia',
  colecciones: 'colecciones',
  ofertas: 'ofertas',
  blog: 'blog'
};
function Shell() {
  const s = useStore();
  const r = s.route;
  const nav = key => {
    if (key === 'home') return s.go('home');
    if (key === 'ofertas') return s.go('ofertas');
    if (key === 'blog') return s.go('blog');
    if (key === 'colecciones') return s.go('colecciones');
    if (key === 'nuevos') return s.go('productos', {
      category: 'nuevos',
      title: 'Nuevos'
    });
    if (key === 'accesorios') return s.go('productos', {
      category: 'Accesorios',
      title: 'Accesorios'
    });
    if (key === 'tecnologia') return s.go('productos', {
      category: 'Gadgets',
      title: 'Tecnología'
    });
    return s.go('productos', {
      title: key === 'hombres' ? 'Hombres' : 'Mujeres'
    });
  };
  let page = null;
  switch (r.name) {
    case 'productos':
      {
        const base = r.category === 'nuevos' ? PRODUCTS.filter(p => p.isNew) : PRODUCTS;
        page = /*#__PURE__*/React.createElement(Catalog, {
          key: r.category + (r.query || '') + (r.title || ''),
          title: r.title || (r.query ? 'Resultados para “' + r.query + '”' : 'Todos los productos'),
          base: base,
          query: r.query,
          crumbs: [{
            label: 'Inicio'
          }, {
            label: 'Productos'
          }].concat(r.title ? [{
            label: r.title
          }] : [])
        });
        break;
      }
    case 'producto':
      page = /*#__PURE__*/React.createElement(ProductPage, {
        slug: r.slug,
        key: r.slug
      });
      break;
    case 'ofertas':
      page = /*#__PURE__*/React.createElement(OfertasPage, null);
      break;
    case 'packs':
      page = /*#__PURE__*/React.createElement(PacksPage, null);
      break;
    case 'colecciones':
      page = /*#__PURE__*/React.createElement(CollectionsPage, null);
      break;
    case 'coleccion':
      page = /*#__PURE__*/React.createElement(CollectionPage, {
        slug: r.slug,
        key: r.slug
      });
      break;
    case 'carrito':
      page = /*#__PURE__*/React.createElement(CartPage, null);
      break;
    case 'checkout':
      page = /*#__PURE__*/React.createElement(CheckoutPage, null);
      break;
    case 'cuenta':
      page = /*#__PURE__*/React.createElement(AccountPage, {
        tab: "perfil"
      });
      break;
    case 'pedidos':
      page = /*#__PURE__*/React.createElement(AccountPage, {
        tab: "pedidos"
      });
      break;
    case 'favoritos':
      page = /*#__PURE__*/React.createElement(WishlistPage, null);
      break;
    case 'rastreo':
      page = /*#__PURE__*/React.createElement(TrackingPage, null);
      break;
    case 'blog':
      page = /*#__PURE__*/React.createElement(BlogPage, null);
      break;
    case 'articulo':
      page = /*#__PURE__*/React.createElement(ArticlePage, {
        slug: r.slug,
        key: r.slug
      });
      break;
    case 'sobre':
    case 'envios':
    case 'devoluciones':
      page = /*#__PURE__*/React.createElement(StaticPage, {
        kind: r.name,
        key: r.name
      });
      break;
    default:
      page = /*#__PURE__*/React.createElement(Home, null);
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AnnouncementBar, {
    messages: ['Envío gratis en compras mayores a $1,499 MXN', '12 meses sin intereses con tarjetas participantes', 'Cambios y devoluciones sin costo durante 30 días'],
    links: [{
      label: 'México (MXN $)',
      caret: true
    }, {
      label: 'Ayuda',
      onClick: e => {
        e.preventDefault();
        s.go('envios');
      }
    }, {
      label: 'Rastreo de pedido',
      onClick: e => {
        e.preventDefault();
        s.go('rastreo');
      }
    }]
  }), /*#__PURE__*/React.createElement(SiteHeader, {
    nav: NAV,
    activeNav: ROUTE_NAV[r.name] || (r.name === 'home' ? '' : r.name),
    cartCount: s.totals.count,
    wishlistCount: s.wishlist.length,
    onSearch: s.openSearch,
    onCart: s.openCart,
    onWishlist: () => s.go('favoritos'),
    onAccount: () => s.go('cuenta'),
    onMenu: s.openMenu,
    onNav: nav
  }), /*#__PURE__*/React.createElement("main", {
    key: r.name + (r.slug || '') + (r.title || ''),
    style: {
      animation: 'mx-page var(--dur-3) var(--ease-out)'
    }
  }, page), /*#__PURE__*/React.createElement(SiteFooter, {
    columns: FOOTER_COLUMNS,
    socials: ['instagram', 'facebook', 'youtube'],
    onNavigate: l => l.key && s.go(l.key)
  }), /*#__PURE__*/React.createElement(CartDrawer, null), /*#__PURE__*/React.createElement(SearchOverlay, null), /*#__PURE__*/React.createElement(QuickView, null), /*#__PURE__*/React.createElement(MiniCartToast, null), /*#__PURE__*/React.createElement(MobileMenu, null));
}
function App() {
  return /*#__PURE__*/React.createElement(StoreProvider, null, /*#__PURE__*/React.createElement(Shell, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Catalog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Icon,
  Select,
  Checkbox,
  Breadcrumbs,
  ProductCard,
  Skeleton,
  EmptyState,
  Drawer,
  CountdownTimer,
  PromoBanner,
  PackCard,
  SectionHeading
} = window.MEXTASDesignSystem_3a0f0e;
const SORTS = ['Relevancia', 'Más vendidos', 'Precio menor', 'Precio mayor', 'Más recientes', 'Mejor valorados'];
const PRICE_BANDS = [['Menos de $500', 0, 500], ['$500 – $1,000', 500, 1000], ['$1,000 – $2,000', 1000, 2000], ['Más de $2,000', 2000, Infinity]];
const COLORS = ['Negro', 'Gris', 'Azul', 'Blanco'];
function useFiltered({
  base,
  f,
  sort,
  query
}) {
  return React.useMemo(() => {
    let out = base.filter(p => {
      if (f.cats.length && !f.cats.includes(p.category)) return false;
      if (f.colors.length && !p.colors.some(c => f.colors.includes(c.name))) return false;
      if (f.bands.length && !f.bands.some(b => {
        const [, lo, hi] = PRICE_BANDS.find(x => x[0] === b);
        return p.price >= lo && p.price < hi;
      })) return false;
      if (f.inStock && !(p.stock > 0)) return false;
      if (f.onSale && !p.compareAtPrice) return false;
      if (f.rating && p.rating < 4.5) return false;
      if (query && !(p.name + ' ' + p.category).toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
    const by = {
      'Precio menor': (a, b) => a.price - b.price,
      'Precio mayor': (a, b) => b.price - a.price,
      'Mejor valorados': (a, b) => b.rating - a.rating,
      'Más vendidos': (a, b) => b.reviews - a.reviews,
      'Más recientes': (a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
    };
    return by[sort] ? [...out].sort(by[sort]) : out;
  }, [base, f, sort, query]);
}
function FilterPanel({
  f,
  set,
  counts
}) {
  const group = (title, children) => /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBlock: 20,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, title), children);
  const toggle = (k, v) => set({
    ...f,
    [k]: f[k].includes(v) ? f[k].filter(x => x !== v) : [...f[k], v]
  });
  return /*#__PURE__*/React.createElement("div", null, group('Categoría', [...new Set(PRODUCTS.map(p => p.category))].map(c => /*#__PURE__*/React.createElement(Checkbox, {
    key: c,
    label: c,
    count: counts[c] || 0,
    checked: f.cats.includes(c),
    onChange: () => toggle('cats', c)
  }))), group('Precio', PRICE_BANDS.map(([l]) => /*#__PURE__*/React.createElement(Checkbox, {
    key: l,
    label: l,
    checked: f.bands.includes(l),
    onChange: () => toggle('bands', l)
  }))), group('Color', /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, COLORS.map(c => {
    const on = f.colors.includes(c);
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => toggle('colors', c),
      "aria-pressed": on,
      style: {
        padding: '8px 13px',
        cursor: 'pointer',
        font: 'var(--body-sm)',
        background: on ? 'var(--ink-1000)' : 'var(--paper)',
        color: on ? 'var(--paper)' : 'var(--ink-1000)',
        border: '1px solid ' + (on ? 'var(--ink-1000)' : 'var(--border-default)')
      }
    }, c);
  }))), group('Marca', /*#__PURE__*/React.createElement(Checkbox, {
    label: "MEXTAS",
    count: PRODUCTS.length,
    checked: true,
    disabled: true,
    onChange: () => {}
  })), group('Otros', /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Solo disponibles",
    checked: f.inStock,
    onChange: () => set({
      ...f,
      inStock: !f.inStock
    })
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Con descuento",
    checked: f.onSale,
    onChange: () => set({
      ...f,
      onSale: !f.onSale
    })
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "4.5\u2605 o m\xE1s",
    checked: f.rating,
    onChange: () => set({
      ...f,
      rating: !f.rating
    })
  }))));
}
const EMPTY_F = {
  cats: [],
  bands: [],
  colors: [],
  inStock: false,
  onSale: false,
  rating: false
};
function Catalog({
  title = 'Todos los productos',
  base = PRODUCTS,
  crumbs,
  query,
  intro
}) {
  const s = useStore();
  const [f, setF] = React.useState({
    ...EMPTY_F,
    cats: s.route.category && s.route.category !== 'nuevos' && s.route.category !== 'ofertas' ? [s.route.category] : []
  });
  const [sort, setSort] = React.useState('Relevancia');
  const [shown, setShown] = React.useState(12);
  const [loading, setLoading] = React.useState(true);
  const [sheet, setSheet] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 420);
    return () => clearTimeout(t);
  }, [f, sort, base]);
  const items = useFiltered({
    base,
    f,
    sort,
    query
  });
  const counts = React.useMemo(() => base.reduce((a, p) => ({
    ...a,
    [p.category]: (a[p.category] || 0) + 1
  }), {}), [base]);
  const active = f.cats.length + f.bands.length + f.colors.length + (f.inStock ? 1 : 0) + (f.onSale ? 1 : 0) + (f.rating ? 1 : 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: crumbs || [{
      label: 'Inicio'
    }, {
      label: 'Productos'
    }],
    onNavigate: () => s.go('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBlock: '18px var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)',
      maxWidth: '52ch'
    }
  }, intro || `${items.length} productos disponibles${query ? ' para “' + query + '”' : ''}.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    iconLeft: "sliders-horizontal",
    className: "mx-only-mobile",
    onClick: () => setSheet(true)
  }, "Filtros", active ? ' (' + active + ')' : ''), /*#__PURE__*/React.createElement(Select, {
    options: SORTS,
    value: sort,
    onChange: e => setSort(e.target.value),
    "aria-label": "Ordenar por",
    wrapStyle: {
      minWidth: 220
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mx-catalog"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "mx-filters"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--heading-3)'
    }
  }, "Filtros"), active > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => setF(EMPTY_F),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      font: 'var(--body-xs)',
      color: 'var(--text-muted)',
      textDecoration: 'underline'
    }
  }, "Limpiar")), /*#__PURE__*/React.createElement(FilterPanel, {
    f: f,
    set: setF,
    counts: counts
  })), /*#__PURE__*/React.createElement("div", null, active > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 18
    }
  }, [...f.cats, ...f.bands, ...f.colors].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '6px 10px',
      background: 'var(--ink-050)',
      font: 'var(--body-xs)'
    }
  }, t, /*#__PURE__*/React.createElement("button", {
    "aria-label": 'Quitar ' + t,
    onClick: () => setF({
      ...f,
      cats: f.cats.filter(x => x !== t),
      bands: f.bands.filter(x => x !== t),
      colors: f.colors.filter(x => x !== t)
    }),
    style: {
      background: 'none',
      border: 0,
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 12
  }))))), loading ? /*#__PURE__*/React.createElement("div", {
    className: "mx-grid-4"
  }, Array.from({
    length: 8
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(Skeleton, {
    height: 260
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "70%",
    height: 12,
    style: {
      marginTop: 14
    }
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "40%",
    height: 12,
    style: {
      marginTop: 8
    }
  })))) : items.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "search-x",
    title: "Sin resultados",
    description: "Prueba quitando algunos filtros o busca otra categor\xEDa.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setF(EMPTY_F)
    }, "Limpiar filtros")
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "mx-grid-4"
  }, items.slice(0, shown).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    onAdd: () => s.add(p),
    onQuickView: s.quickView,
    onToggleWishlist: s.toggleWish,
    wishlisted: s.wishlist.includes(p.id),
    onOpen: () => s.go('producto', {
      slug: p.slug
    })
  }))), shown < items.length && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => setShown(shown + 8)
  }, "Cargar m\xE1s (", items.length - shown, ")"))))), /*#__PURE__*/React.createElement(Drawer, {
    open: sheet,
    title: "Filtros",
    side: "left",
    width: 340,
    onClose: () => setSheet(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => setSheet(false)
    }, "Ver ", items.length, " productos")
  }, /*#__PURE__*/React.createElement(FilterPanel, {
    f: f,
    set: setF,
    counts: counts
  })));
}
function OfertasPage() {
  const s = useStore();
  const base = PRODUCTS.filter(p => p.compareAtPrice);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-1000)',
      color: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-16)',
      display: 'grid',
      gap: 26,
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)'
    }
  }, "Ofertas de temporada"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      font: 'var(--display-2)',
      letterSpacing: 'var(--track-display)'
    }
  }, "Hasta 30% OFF"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      font: 'var(--body-md)',
      color: 'rgba(255,255,255,.7)',
      maxWidth: '40ch'
    }
  }, "Precios especiales en mochilas, audio y accesorios seleccionados. Mientras dure el inventario.")), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(CountdownTimer, {
    to: "2026-10-15T23:59:00",
    label: "Termina en"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Packs con descuento"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))'
    }
  }, PACKS.map(p => /*#__PURE__*/React.createElement(PackCard, _extends({
    key: p.name
  }, p, {
    onAdd: () => s.add({
      id: p.name,
      name: p.name,
      price: p.price,
      image: p.image,
      stock: 5,
      colors: []
    })
  }))))), /*#__PURE__*/React.createElement(Catalog, {
    title: "Productos rebajados",
    base: base,
    crumbs: [{
      label: 'Inicio'
    }, {
      label: 'Ofertas'
    }],
    intro: `${base.length} productos con descuento activo.`
  }));
}
function CollectionsPage() {
  const s = useStore();
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Colecciones'
    }],
    onNavigate: () => s.go('home')
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 10px',
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, "Colecciones"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-10)',
      font: 'var(--body-md)',
      color: 'var(--text-secondary)',
      maxWidth: '54ch'
    }
  }, "Cuatro formas de usar MEXTAS: la ciudad, el escritorio, el viaje y lo esencial."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))'
    }
  }, COLLECTIONS.map(c => /*#__PURE__*/React.createElement(CollectionTile, {
    key: c.slug,
    c: c,
    onClick: () => s.go('coleccion', {
      slug: c.slug
    })
  }))));
}
function CollectionPage({
  slug
}) {
  const c = COLLECTIONS.find(x => x.slug === slug) || COLLECTIONS[0];
  const base = PRODUCTS.filter(p => c.filter.includes(p.category));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 320,
      display: 'flex',
      alignItems: 'flex-end',
      background: 'var(--ink-050)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.72))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      position: 'relative',
      paddingBlock: 'var(--space-12)',
      color: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--display-2)',
      letterSpacing: 'var(--track-display)'
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      font: 'var(--body-lg)',
      color: 'rgba(255,255,255,.8)',
      maxWidth: '42ch'
    }
  }, c.description))), /*#__PURE__*/React.createElement(Catalog, {
    title: 'Productos de ' + c.name,
    base: base,
    crumbs: [{
      label: 'Inicio'
    }, {
      label: 'Colecciones'
    }, {
      label: c.name
    }],
    intro: `${base.length} productos en esta colección.`
  }));
}
function PacksPage() {
  const s = useStore();
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Packs'
    }],
    onNavigate: () => s.go('home')
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 10px',
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, "Packs exclusivos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-10)',
      font: 'var(--body-md)',
      color: 'var(--text-secondary)',
      maxWidth: '54ch'
    }
  }, "Combinaciones armadas para resolver un escenario completo \u2014 y m\xE1s baratas que comprarlas por separado."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))'
    }
  }, PACKS.map(p => /*#__PURE__*/React.createElement(PackCard, _extends({
    key: p.name
  }, p, {
    onAdd: () => s.add({
      id: p.name,
      name: p.name,
      price: p.price,
      image: p.image,
      stock: 5,
      colors: []
    })
  })))));
}
Object.assign(window, {
  Catalog,
  OfertasPage,
  CollectionsPage,
  CollectionPage,
  PacksPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Checkout.jsx
try { (() => {
const {
  Button,
  Icon,
  Input,
  Select,
  RadioCard,
  CartLine,
  EmptyState,
  Breadcrumbs,
  Badge,
  OrderTimeline
} = window.MEXTASDesignSystem_3a0f0e;
function CartPage() {
  const s = useStore();
  const [code, setCode] = React.useState('');
  const [msg, setMsg] = React.useState(null);
  if (!s.cart.length) return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "shopping-bag",
    title: "Tu carrito est\xE1 vac\xEDo",
    description: "A\xFAn no has agregado productos. Explora la nueva colecci\xF3n.",
    action: /*#__PURE__*/React.createElement(Button, {
      onClick: () => s.go('productos')
    }, "Ver productos")
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Carrito'
    }],
    onNavigate: () => s.go('home')
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 var(--space-8)',
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, "Tu carrito"), /*#__PURE__*/React.createElement("div", {
    className: "mx-two-col"
  }, /*#__PURE__*/React.createElement("div", null, s.cart.map(it => /*#__PURE__*/React.createElement(CartLine, {
    key: it.key,
    item: it,
    onQty: q => s.setQty(it.key, q),
    onRemove: () => s.remove(it.key)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "arrow-left",
    onClick: () => s.go('productos')
  }, "Seguir comprando"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "trash-2",
    onClick: s.clearCart
  }, "Vaciar carrito"))), /*#__PURE__*/React.createElement("aside", {
    className: "mx-summary"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 18px',
      font: 'var(--heading-2)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, "Resumen"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 9
    }
  }, "\xBFTienes un c\xF3digo promocional?"), /*#__PURE__*/React.createElement("form", {
    style: {
      display: 'flex',
      gap: 8
    },
    onSubmit: e => {
      e.preventDefault();
      setMsg(s.applyPromo(code) ? 'ok' : 'err');
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "MEXTAS10",
    value: code,
    onChange: e => setCode(e.target.value),
    wrapStyle: {
      flex: 1
    },
    "aria-label": "C\xF3digo promocional"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    type: "submit"
  }, "Aplicar")), msg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: 'var(--body-xs)',
      color: msg === 'ok' ? 'var(--success-600)' : 'var(--sale-500)'
    }
  }, msg === 'ok' ? 'Código aplicado: 10% de descuento.' : 'El código no es válido.')), /*#__PURE__*/React.createElement(SummaryRows, {
    totals: s.totals,
    promo: s.promo
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    style: {
      marginTop: 16
    },
    onClick: () => s.go('checkout')
  }, "Proceder al pago"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      font: 'var(--body-xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 15
  }), "Pago protegido con encriptaci\xF3n SSL"))));
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
  if (done) return /*#__PURE__*/React.createElement(Confirmation, {
    order: order,
    items: items,
    total: total
  });
  if (!items.length) return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "shopping-bag",
    title: "No hay nada por pagar",
    description: "Agrega productos al carrito para continuar.",
    action: /*#__PURE__*/React.createElement(Button, {
      onClick: () => s.go('productos')
    }, "Ver productos")
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center',
      marginBottom: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, STEPS.map((st, i) => /*#__PURE__*/React.createElement("div", {
    key: st,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      opacity: i <= step ? 1 : .42
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: i <= step ? 'var(--ink-1000)' : 'var(--ink-100)',
      color: i <= step ? 'var(--paper)' : 'var(--ink-500)',
      font: 'var(--label-sm)'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, st), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 1,
      background: 'var(--border-default)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mx-two-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    title: "Informaci\xF3n de contacto",
    open: step >= 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-fields"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre completo",
    defaultValue: "Kyritabb Mendoza",
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo electr\xF3nico",
    type: "email",
    defaultValue: "hola@mextas.mx",
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    defaultValue: "55 1234 5678",
    autoComplete: "tel"
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "Direcci\xF3n de env\xEDo",
    open: step >= 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-fields"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Calle y n\xFAmero",
    defaultValue: "Av. \xC1lvaro Obreg\xF3n 121",
    wrapStyle: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Colonia",
    defaultValue: "Roma Norte"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Ciudad",
    defaultValue: "Ciudad de M\xE9xico"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Estado",
    options: ['Ciudad de México', 'Jalisco', 'Nuevo León', 'Querétaro', 'Yucatán']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "C\xF3digo postal",
    defaultValue: "06700"
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "M\xE9todo de env\xEDo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(RadioCard, {
    icon: "truck",
    title: "Env\xEDo est\xE1ndar",
    description: "2\u20134 d\xEDas h\xE1biles \xB7 Estafeta",
    meta: s.totals.subtotal >= 1499 ? 'Gratis' : money(149),
    selected: ship === 'estandar',
    onSelect: () => {
      setShip('estandar');
      setStep(Math.max(step, 1));
    }
  }), /*#__PURE__*/React.createElement(RadioCard, {
    icon: "zap",
    title: "Env\xEDo express",
    description: "24 horas en CDMX, GDL y MTY \xB7 DHL",
    meta: money(149),
    selected: ship === 'express',
    onSelect: () => {
      setShip('express');
      setStep(Math.max(step, 1));
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    title: "M\xE9todo de pago"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))'
    }
  }, [['visa', 'Visa', 'credit-card'], ['mastercard', 'Mastercard', 'credit-card'], ['amex', 'American Express', 'credit-card'], ['paypal', 'PayPal', 'wallet']].map(([k, l, ic]) => /*#__PURE__*/React.createElement(RadioCard, {
    key: k,
    icon: ic,
    title: l,
    selected: pay === k,
    onSelect: () => {
      setPay(k);
      setStep(2);
    }
  }))), pay !== 'paypal' && /*#__PURE__*/React.createElement("div", {
    className: "mx-fields",
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "N\xFAmero de tarjeta",
    placeholder: "4242 4242 4242 4242",
    wrapStyle: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Vencimiento",
    placeholder: "MM/AA"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "CVV",
    placeholder: "123"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      font: 'var(--body-xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14
  }), "Demo sin procesamiento real de pagos."))), /*#__PURE__*/React.createElement("aside", {
    className: "mx-summary"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 12px',
      font: 'var(--heading-2)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, "Tu pedido"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 280,
      overflowY: 'auto',
      marginBottom: 12
    }
  }, items.map(it => /*#__PURE__*/React.createElement(CartLine, {
    key: it.key,
    item: it,
    readOnly: true
  }))), /*#__PURE__*/React.createElement(SummaryRows, {
    totals: {
      ...s.totals,
      shipping: shipCost,
      total
    },
    promo: s.promo
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    loading: busy,
    style: {
      marginTop: 16
    },
    onClick: () => {
      setBusy(true);
      setTimeout(() => {
        setBusy(false);
        setDone(true);
        s.clearCart();
        window.scrollTo({
          top: 0
        });
      }, 1400);
    }
  }, busy ? 'Procesando' : 'Pagar ' + money(total)), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "ghost",
    size: "sm",
    style: {
      marginTop: 8
    },
    onClick: () => s.go('carrito')
  }, "Volver al carrito"))));
}
function Section({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 16px',
      font: 'var(--heading-2)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, title), children);
}
function Confirmation({
  order,
  items,
  total
}) {
  const s = useStore();
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-16)',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--ink-1000)',
      color: 'var(--paper)',
      display: 'grid',
      placeItems: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 26,
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, "\xA1Pedido confirmado!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      font: 'var(--body-md)',
      color: 'var(--text-secondary)'
    }
  }, "Gracias por tu compra. Te enviamos la confirmaci\xF3n a hola@mextas.mx."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      padding: 22,
      background: 'var(--ink-025)',
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "N\xFAmero de pedido",
    value: order
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Total",
    value: money(total)
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Env\xEDo",
    value: "Est\xE1ndar \xB7 2\u20134 d\xEDas"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Entrega estimada",
    value: "26 sep 2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 12
    }
  }, items.map(it => /*#__PURE__*/React.createElement(CartLine, {
    key: it.key,
    item: it,
    readOnly: true
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(OrderTimeline, {
    current: 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => s.go('rastreo')
  }, "Rastrear pedido"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => s.go('productos')
  }, "Seguir comprando")));
}
function Field({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--price-md)'
    }
  }, value));
}
Object.assign(window, {
  CartPage,
  CheckoutPage,
  CheckoutField: Field
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Content.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Icon,
  Breadcrumbs,
  Accordion,
  SectionHeading,
  BenefitItem
} = window.MEXTASDesignSystem_3a0f0e;
function BlogPage() {
  const s = useStore();
  const [featured, ...rest] = POSTS;
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Blog'
    }],
    onNavigate: () => s.go('home')
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 var(--space-10)',
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, "Blog"), /*#__PURE__*/React.createElement("article", {
    onClick: () => s.go('articulo', {
      slug: featured.slug
    }),
    className: "mx-two-col",
    style: {
      cursor: 'pointer',
      gap: 34,
      marginBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--surface-media)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: featured.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      font: 'var(--body-xs)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, featured.category), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, featured.date)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 12px',
      font: 'var(--heading-1)'
    }
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--body-md)',
      color: 'var(--text-secondary)'
    }
  }, featured.excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginTop: 16,
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      borderBottom: '1px solid var(--ink-1000)',
      paddingBottom: 3
    }
  }, "Leer art\xEDculo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))'
    }
  }, rest.map(p => /*#__PURE__*/React.createElement(PostCard, {
    key: p.slug,
    post: p,
    onClick: () => s.go('articulo', {
      slug: p.slug
    })
  }))));
}
function ArticlePage({
  slug
}) {
  const s = useStore();
  const post = POSTS.find(p => p.slug === slug) || POSTS[0];
  return /*#__PURE__*/React.createElement("article", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Blog'
    }, {
      label: post.title
    }],
    onNavigate: c => c.label === 'Blog' ? s.go('blog') : s.go('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 20,
      font: 'var(--body-xs)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, post.category), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, post.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "4 min de lectura")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 22px',
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, post.title), /*#__PURE__*/React.createElement("img", {
    src: post.image,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '16 / 9',
      objectFit: 'cover',
      background: 'var(--surface-media)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: 'grid',
      gap: 18,
      font: 'var(--body-lg)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, post.excerpt), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Lo primero es honesto: casi nadie necesita m\xE1s capacidad, necesita mejor organizaci\xF3n. Antes de mirar litros, revisa qu\xE9 cargas todos los d\xEDas y qu\xE9 cargas \u201Cpor si acaso\u201D."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0',
      font: 'var(--heading-1)',
      color: 'var(--text-primary)'
    }
  }, "Empieza por el uso, no por el modelo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Una mochila de 22 L resuelve el trayecto diario con laptop, termo y cargador. De 30 L en adelante entras en territorio de fin de semana; por debajo de 15 L est\xE1s en el terreno del bolso ligero."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '12px 0 0',
      font: 'var(--heading-1)',
      color: 'var(--text-primary)'
    }
  }, "Materiales que envejecen bien"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Busca tejidos de alta densidad con recubrimiento resistente al agua, cierres met\xE1licos y costuras reforzadas en los puntos de carga. Es la diferencia entre dos a\xF1os y ocho.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 24,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => s.go('productos', {
      category: 'Mochilas'
    })
  }, "Ver mochilas"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => s.go('blog')
  }, "Volver al blog")));
}
function StaticPage({
  kind
}) {
  const s = useStore();
  const P = {
    sobre: {
      title: 'Sobre nosotros',
      intro: 'MEXTAS diseña productos para el trayecto diario: mochilas, audio, wearables y accesorios pensados en México.',
      blocks: [['2019', 'Arrancamos con una sola mochila y una idea simple: menos piezas, mejor hechas.'], ['+120 000', 'Pedidos entregados en toda la República.'], ['12 meses', 'De garantía en cada producto, sin letras chiquitas.']]
    },
    envios: {
      title: 'Envíos y entregas',
      intro: 'Enviamos a todo México con Estafeta y DHL. Los pedidos se procesan en menos de 24 horas hábiles.',
      faq: [['¿Cuánto cuesta el envío?', 'Es gratis en compras mayores a $1,499 MXN. Por debajo de ese monto, el envío estándar cuesta $149 MXN.'], ['¿Cuánto tarda en llegar?', 'Estándar: 2–4 días hábiles. Express: 24 horas en CDMX, Guadalajara y Monterrey.'], ['¿Puedo rastrear mi pedido?', 'Sí. Usa tu número de pedido en la sección de Rastreo o desde Mis pedidos.']]
    },
    devoluciones: {
      title: 'Cambios y devoluciones',
      intro: 'Tienes 30 días naturales desde que recibes tu pedido para solicitar un cambio o devolución sin costo.',
      faq: [['¿Qué condiciones debe cumplir el producto?', 'Debe conservar etiquetas, empaque original y no mostrar uso más allá de la prueba.'], ['¿Cómo inicio el proceso?', 'Desde Mis pedidos, selecciona el pedido y elige “Solicitar devolución”. Te enviamos la guía prepagada.'], ['¿Cuándo recibo mi reembolso?', 'Entre 5 y 10 días hábiles después de que recibimos el producto en nuestro almacén.']]
    }
  }[kind];
  return /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-10)',
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: P.title
    }],
    onNavigate: () => s.go('home')
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 12px',
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, P.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-10)',
      font: 'var(--body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '56ch'
    }
  }, P.intro), P.blocks && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      marginBottom: 'var(--space-12)'
    }
  }, P.blocks.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      borderTop: '1px solid var(--ink-1000)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, k), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, v)))), P.faq && /*#__PURE__*/React.createElement(Accordion, {
    items: P.faq.map(([q, a]) => ({
      title: q,
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, a)
    })),
    defaultOpen: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 22,
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      marginTop: 'var(--space-16)',
      paddingTop: 'var(--space-10)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, BENEFITS.map(b => /*#__PURE__*/React.createElement(BenefitItem, _extends({
    key: b.title
  }, b)))));
}
Object.assign(window, {
  BlogPage,
  ArticlePage,
  StaticPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  IconButton,
  Icon,
  SectionHeading,
  ProductCard,
  CategoryTile,
  PromoBanner,
  PackCard,
  BenefitItem,
  Badge,
  CountdownTimer,
  Input
} = window.MEXTASDesignSystem_3a0f0e;
function Hero() {
  const s = useStore();
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI(v => (v + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, [paused]);
  const go = d => setI(v => (v + d + SLIDES.length) % SLIDES.length);
  return /*#__PURE__*/React.createElement("section", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      position: 'relative',
      background: 'var(--ink-050)',
      overflow: 'hidden',
      minHeight: 'min(74vh, 620px)'
    },
    "aria-roledescription": "carrusel"
  }, SLIDES.map((sl, n) => /*#__PURE__*/React.createElement("div", {
    key: n,
    "aria-hidden": n !== i,
    style: {
      position: n === i ? 'relative' : 'absolute',
      inset: 0,
      opacity: n === i ? 1 : 0,
      transition: 'opacity var(--dur-slide) var(--ease-out)',
      pointerEvents: n === i ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: sl.image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'right center',
      transform: n === i ? 'scale(1)' : 'scale(1.03)',
      transition: 'transform 1.2s var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg,rgba(255,255,255,.96) 0%,rgba(255,255,255,.86) 34%,rgba(255,255,255,.1) 62%,rgba(255,255,255,0) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      position: 'relative',
      minHeight: 'min(74vh, 620px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 22,
      paddingBlock: 60
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'flex-start',
      background: 'var(--ink-1000)',
      color: 'var(--paper)',
      padding: '8px 14px',
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, sl.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--display-1)',
      letterSpacing: 'var(--track-display)',
      whiteSpace: 'pre-line',
      maxWidth: '13ch'
    }
  }, sl.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--body-lg)',
      color: 'var(--text-secondary)',
      maxWidth: '30ch'
    }
  }, sl.sub), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      alignSelf: 'flex-start'
    },
    onClick: () => s.go(n === 2 ? 'ofertas' : 'productos')
  }, sl.cta)))), /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 28,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, SLIDES.map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    "aria-label": 'Ir al slide ' + (n + 1),
    onClick: () => setI(n),
    style: {
      width: n === i ? 26 : 9,
      height: 9,
      borderRadius: 'var(--radius-pill)',
      border: 0,
      cursor: 'pointer',
      background: n === i ? 'var(--ink-1000)' : 'var(--ink-300)',
      transition: 'var(--t-base)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Slide anterior",
    variant: "outline",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-right",
    label: "Slide siguiente",
    variant: "outline",
    onClick: () => go(1)
  }))));
}
function CategoryRow() {
  const s = useStore();
  return /*#__PURE__*/React.createElement("section", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      overflowX: 'auto',
      justifyContent: 'space-between',
      paddingBottom: 6
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryTile, {
    key: c.key,
    name: c.name,
    image: c.image,
    icon: c.icon,
    active: c.key === 'ofertas',
    onClick: () => c.key === 'ofertas' ? s.go('ofertas') : s.go('productos', {
      category: c.key
    })
  }))));
}
function Featured() {
  const s = useStore();
  const items = PRODUCTS.filter(p => p.isFeatured).slice(0, 5);
  return /*#__PURE__*/React.createElement("section", {
    className: "mx-container",
    style: {
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Productos destacados",
    action: "Ver todos",
    onAction: e => {
      e.preventDefault();
      s.go('productos');
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-grid-5"
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    compact: true,
    onAdd: () => s.add(p),
    onQuickView: s.quickView,
    onToggleWishlist: s.toggleWish,
    wishlisted: s.wishlist.includes(p.id),
    onOpen: () => s.go('producto', {
      slug: p.slug
    })
  }))));
}
function PromoPair() {
  const s = useStore();
  return /*#__PURE__*/React.createElement("section", {
    className: "mx-container",
    style: {
      paddingBottom: 'var(--space-16)',
      display: 'grid',
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))'
    }
  }, /*#__PURE__*/React.createElement(PromoBanner, {
    theme: "dark",
    title: 'Ofertas\nde temporada',
    kicker: "Hasta",
    highlight: "30% OFF",
    cta: "Comprar ofertas",
    image: MX_IMG.urban,
    onClick: () => s.go('ofertas')
  }), /*#__PURE__*/React.createElement(PromoBanner, {
    theme: "light",
    title: 'Packs\nexclusivos',
    kicker: "Tecnolog\xEDa + estilo",
    highlight: /*#__PURE__*/React.createElement("span", null, "desde ", /*#__PURE__*/React.createElement("strong", null, "$1,699 MXN")),
    cta: "Ver packs",
    image: MX_IMG.viaje,
    onClick: () => s.go('packs')
  }));
}
function Packs() {
  const s = useStore();
  return /*#__PURE__*/React.createElement("section", {
    className: "mx-container",
    style: {
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Packs exclusivos",
    action: "Ver todos",
    onAction: e => {
      e.preventDefault();
      s.go('packs');
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))'
    }
  }, PACKS.map(p => /*#__PURE__*/React.createElement(PackCard, _extends({
    key: p.name
  }, p, {
    onAdd: () => s.add({
      id: p.name,
      name: p.name,
      price: p.price,
      image: p.image,
      stock: 5,
      colors: []
    })
  })))));
}
function Collections() {
  const s = useStore();
  return /*#__PURE__*/React.createElement("section", {
    className: "mx-container",
    style: {
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Colecciones",
    action: "Ver colecciones",
    onAction: e => {
      e.preventDefault();
      s.go('colecciones');
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))'
    }
  }, COLLECTIONS.map(c => /*#__PURE__*/React.createElement(CollectionTile, {
    key: c.slug,
    c: c,
    onClick: () => s.go('coleccion', {
      slug: c.slug
    })
  }))));
}
function CollectionTile({
  c,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      overflow: 'hidden',
      aspectRatio: '4 / 5',
      background: 'var(--surface-media)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: c.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.05)' : 'scale(1)',
      transition: 'var(--t-media)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      bottom: 22,
      color: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--heading-2)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 8,
      font: 'var(--body-sm)',
      color: 'rgba(255,255,255,.78)'
    }
  }, c.description), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 7,
      alignItems: 'center',
      marginTop: 14,
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      borderBottom: '1px solid rgba(255,255,255,.6)',
      paddingBottom: 3
    }
  }, "Ver colecci\xF3n ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  }))));
}
function BestSellers() {
  const s = useStore();
  const items = PRODUCTS.filter(p => p.isBestSeller).slice(0, 5);
  return /*#__PURE__*/React.createElement("section", {
    className: "mx-container",
    style: {
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "M\xE1s vendidos",
    action: "Ver cat\xE1logo",
    onAction: e => {
      e.preventDefault();
      s.go('productos');
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-grid-5"
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    compact: true,
    onAdd: () => s.add(p),
    onQuickView: s.quickView,
    onToggleWishlist: s.toggleWish,
    wishlisted: s.wishlist.includes(p.id),
    onOpen: () => s.go('producto', {
      slug: p.slug
    })
  }))));
}
function Benefits() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mx-container",
    style: {
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-benefits"
  }, BENEFITS.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b.title,
    style: {
      paddingInline: i === 0 ? 0 : 24,
      borderLeft: i === 0 ? 0 : '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(BenefitItem, b)))));
}
function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-1000)',
      color: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-16)',
      display: 'grid',
      gap: 26,
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, "\xDAnete a MEXTAS"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      font: 'var(--body-md)',
      color: 'rgba(255,255,255,.7)',
      maxWidth: '44ch'
    }
  }, "Recibe lanzamientos, promociones y novedades directamente en tu correo.")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      font: 'var(--body-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  }), "Gracias. Te has suscrito correctamente.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      maxWidth: 460,
      width: '100%',
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "lg",
    type: "email",
    required: true,
    placeholder: "Tu correo electr\xF3nico",
    "aria-label": "Tu correo electr\xF3nico",
    value: email,
    onChange: e => setEmail(e.target.value),
    wrapStyle: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Suscribirme",
    style: {
      width: 54,
      flex: '0 0 54px',
      background: 'var(--paper)',
      color: 'var(--ink-1000)',
      border: 0,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20
  })))));
}
function BlogTeaser() {
  const s = useStore();
  return /*#__PURE__*/React.createElement("section", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Del blog",
    action: "Ver todo",
    onAction: e => {
      e.preventDefault();
      s.go('blog');
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 20,
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))'
    }
  }, POSTS.slice(0, 4).map(p => /*#__PURE__*/React.createElement(PostCard, {
    key: p.slug,
    post: p,
    onClick: () => s.go('articulo', {
      slug: p.slug
    })
  }))));
}
function PostCard({
  post,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      aspectRatio: '4 / 3',
      background: 'var(--surface-media)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: post.image,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: h ? 'scale(1.04)' : 'scale(1)',
      transition: 'var(--t-media)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      font: 'var(--body-xs)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, post.category), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, post.date)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '10px 0 8px',
      font: 'var(--heading-3)'
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, post.excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginTop: 12,
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      borderBottom: '1px solid var(--ink-1000)',
      paddingBottom: 2
    }
  }, "Leer art\xEDculo")));
}
function Home() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(CategoryRow, null), /*#__PURE__*/React.createElement(Featured, null), /*#__PURE__*/React.createElement(PromoPair, null), /*#__PURE__*/React.createElement(Packs, null), /*#__PURE__*/React.createElement(Collections, null), /*#__PURE__*/React.createElement(BestSellers, null), /*#__PURE__*/React.createElement(Benefits, null), /*#__PURE__*/React.createElement(Newsletter, null), /*#__PURE__*/React.createElement(BlogTeaser, null));
}
Object.assign(window, {
  Home,
  Hero,
  Benefits,
  Newsletter,
  PostCard,
  CollectionTile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Overlays.jsx
try { (() => {
const {
  Drawer,
  Modal,
  Toast,
  Button,
  IconButton,
  Input,
  Icon,
  CartLine,
  EmptyState,
  Price,
  Rating,
  SwatchGroup,
  QuantityStepper,
  Badge,
  Logo
} = window.MEXTASDesignSystem_3a0f0e;
function CartDrawer() {
  const s = useStore();
  const [code, setCode] = React.useState('');
  const [msg, setMsg] = React.useState(null);
  const empty = s.cart.length === 0;
  return /*#__PURE__*/React.createElement(Drawer, {
    open: s.ui.cart,
    title: `Tu carrito (${s.totals.count})`,
    onClose: s.closeCart,
    width: 460,
    footer: !empty && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Rows, {
      totals: s.totals,
      promo: s.promo
    }), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      onClick: () => {
        s.closeCart();
        s.go('checkout');
      }
    }, "Proceder al pago"), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      variant: "ghost",
      size: "sm",
      onClick: s.closeCart
    }, "Seguir comprando"))
  }, empty ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "shopping-bag",
    title: "Tu carrito est\xE1 vac\xEDo",
    description: "Descubre la nueva colecci\xF3n y encuentra algo para tu d\xEDa a d\xEDa.",
    action: /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        s.closeCart();
        s.go('productos');
      }
    }, "Ver productos")
  }) : /*#__PURE__*/React.createElement("div", null, s.cart.map(it => /*#__PURE__*/React.createElement(CartLine, {
    key: it.key,
    item: it,
    onQty: q => s.setQty(it.key, q),
    onRemove: () => s.remove(it.key)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 9
    }
  }, "\xBFTienes un c\xF3digo promocional?"), /*#__PURE__*/React.createElement("form", {
    style: {
      display: 'flex',
      gap: 8
    },
    onSubmit: e => {
      e.preventDefault();
      setMsg(s.applyPromo(code) ? 'ok' : 'err');
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "MEXTAS10",
    value: code,
    onChange: e => setCode(e.target.value),
    wrapStyle: {
      flex: 1
    },
    "aria-label": "C\xF3digo promocional"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    type: "submit"
  }, "Aplicar")), msg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: 'var(--body-xs)',
      color: msg === 'ok' ? 'var(--success-600)' : 'var(--sale-500)'
    }
  }, msg === 'ok' ? 'Código aplicado: 10% de descuento.' : 'El código no es válido.'))));
}
function Rows({
  totals,
  promo
}) {
  const row = (l, v, tone) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--body-sm)',
      color: tone || 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", null, v));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 7,
      paddingBottom: 4
    }
  }, row('Subtotal', money(totals.subtotal)), promo && row('Descuento (' + promo.code + ')', '−' + money(totals.discount), 'var(--sale-500)'), row('Envío', totals.shipping === 0 ? 'Gratis' : money(totals.shipping)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--price-lg)'
    }
  }, money(totals.total))));
}
function SearchOverlay() {
  const s = useStore();
  const [q, setQ] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    if (!q) return;
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 260);
    return () => clearTimeout(t);
  }, [q]);
  const results = React.useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return PRODUCTS.filter(p => (p.name + ' ' + p.category).toLowerCase().includes(t)).slice(0, 6);
  }, [q]);
  const populares = ['mochilas', 'audífonos', 'smartwatch', 'accesorios', 'tecnología'];
  if (!s.ui.search) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 95
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: s.closeSearch,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--paper)',
      boxShadow: 'var(--shadow-pop)',
      animation: 'mx-drop var(--dur-3) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingTop: 26,
      paddingBottom: 30,
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--heading-2)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase'
    }
  }, "Buscar productos"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Cerrar b\xFAsqueda",
    onClick: s.closeSearch
  })), /*#__PURE__*/React.createElement(Input, {
    size: "lg",
    icon: "search",
    autoFocus: true,
    placeholder: "Buscar productos, marcas y m\xE1s...",
    value: q,
    onChange: e => setQ(e.target.value),
    "aria-label": "Buscar productos"
  }), !q && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--label-sm)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "B\xFAsquedas populares"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, populares.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setQ(p),
    style: {
      padding: '9px 14px',
      border: '1px solid var(--border-default)',
      background: 'var(--paper)',
      cursor: 'pointer',
      font: 'var(--body-sm)'
    }
  }, p)))), q && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'grid',
      gap: 2
    }
  }, loading && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-muted)',
      padding: '12px 0'
    }
  }, "Buscando\u2026"), !loading && results.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--body-sm)',
      color: 'var(--text-muted)',
      padding: '12px 0'
    }
  }, "Sin resultados para \u201C", q, "\u201D."), !loading && results.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => s.go('producto', {
      slug: p.slug
    }),
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: 10,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--ink-025)',
    onMouseLeave: e => e.currentTarget.style.background = 'none'
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: "",
    style: {
      width: 54,
      height: 60,
      objectFit: 'cover',
      background: 'var(--surface-media)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--body-sm)',
      fontWeight: 600
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--body-xs)',
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, p.category)), /*#__PURE__*/React.createElement(Price, {
    value: p.price,
    compareAt: p.compareAtPrice,
    size: "sm"
  }))), !loading && results.length > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: () => s.go('productos', {
      query: q
    }),
    style: {
      marginTop: 10,
      background: 'none',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      font: 'var(--label-md)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      padding: '10px 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, "Ver todos los resultados \u2192")))), /*#__PURE__*/React.createElement("style", null, '@keyframes mx-drop{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:none}}'));
}
function QuickView() {
  const s = useStore();
  const p = s.ui.quick;
  const [qty, setQty] = React.useState(1);
  const [color, setColor] = React.useState(p?.colors?.[0]?.name);
  React.useEffect(() => {
    setQty(1);
    setColor(p?.colors?.[0]?.name);
  }, [p]);
  if (!p) return null;
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    title: 'Vista rápida: ' + p.name,
    onClose: s.closeQuick,
    width: 860
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-media)',
      aspectRatio: '1 / 1'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, p.category), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--heading-1)'
    }
  }, p.name), /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    reviews: p.reviews
  }), /*#__PURE__*/React.createElement(Price, {
    value: p.price,
    compareAt: p.compareAtPrice,
    size: "lg"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, p.description), /*#__PURE__*/React.createElement(SwatchGroup, {
    label: "Color",
    value: color,
    onChange: setColor,
    options: p.colors
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    max: p.stock,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      flex: 1
    },
    onClick: () => {
      s.add(p, qty, color);
      s.closeQuick();
    }
  }, "Agregar al carrito")), /*#__PURE__*/React.createElement("button", {
    onClick: () => s.go('producto', {
      slug: p.slug
    }),
    style: {
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      font: 'var(--body-sm)',
      textDecoration: 'underline',
      alignSelf: 'flex-start'
    }
  }, "Ver detalles completos"))));
}
function MiniCartToast() {
  const s = useStore();
  const t = s.ui.toast;
  return /*#__PURE__*/React.createElement(Toast, {
    open: !!t,
    title: "Producto agregado al carrito",
    product: t?.product,
    onClose: s.closeToast,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      style: {
        flex: 1
      },
      onClick: () => {
        s.closeToast();
        s.openCart();
      }
    }, "Ver carrito"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      style: {
        flex: 1
      },
      onClick: () => {
        s.closeToast();
        s.go('checkout');
      }
    }, "Finalizar compra"))
  });
}
function MobileMenu() {
  const s = useStore();
  return /*#__PURE__*/React.createElement(Drawer, {
    open: s.ui.menu,
    title: "Men\xFA",
    side: "left",
    width: 330,
    onClose: s.closeMenu
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'grid'
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.key,
    onClick: () => s.go(n.key === 'ofertas' ? 'ofertas' : n.key === 'blog' ? 'blog' : n.key === 'colecciones' ? 'colecciones' : 'productos'),
    style: {
      textAlign: 'left',
      padding: '16px 0',
      background: 'none',
      border: 0,
      borderBottom: '1px solid var(--border-subtle)',
      cursor: 'pointer',
      font: 'var(--label-lg)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: n.highlight ? 'var(--sale-500)' : 'var(--ink-1000)'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconLeft: "user",
    onClick: () => s.go('cuenta')
  }, "Mi cuenta"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconLeft: "heart",
    onClick: () => s.go('favoritos')
  }, "Favoritos"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconLeft: "map-pin",
    onClick: () => s.go('rastreo')
  }, "Rastreo de pedido")));
}
Object.assign(window, {
  CartDrawer,
  SearchOverlay,
  QuickView,
  MiniCartToast,
  MobileMenu,
  SummaryRows: Rows
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Overlays.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductPage.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Badge,
  Rating,
  Price,
  SwatchGroup,
  QuantityStepper,
  Accordion,
  Breadcrumbs,
  ProductCard,
  SectionHeading,
  BenefitItem
} = window.MEXTASDesignSystem_3a0f0e;
function Gallery({
  product
}) {
  const [i, setI] = React.useState(0);
  const [zoom, setZoom] = React.useState(null);
  React.useEffect(() => setI(0), [product.id]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexDirection: 'row-reverse'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      position: 'relative',
      background: 'var(--surface-media)',
      aspectRatio: '1 / 1',
      overflow: 'hidden',
      cursor: 'zoom-in'
    },
    onMouseMove: e => {
      const r = e.currentTarget.getBoundingClientRect();
      setZoom([(e.clientX - r.left) / r.width * 100, (e.clientY - r.top) / r.height * 100]);
    },
    onMouseLeave: () => setZoom(null)
  }, /*#__PURE__*/React.createElement("img", {
    src: product.images[i],
    alt: product.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: zoom ? 'scale(1.7)' : 'scale(1)',
      transformOrigin: zoom ? zoom[0] + '% ' + zoom[1] + '%' : 'center',
      transition: zoom ? 'transform var(--dur-2) var(--ease-out)' : 'var(--t-media)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'flex-start'
    }
  }, product.isNew && /*#__PURE__*/React.createElement(Badge, {
    tone: "new"
  }, "Nuevo"), product.compareAtPrice && /*#__PURE__*/React.createElement(Badge, {
    tone: "sale"
  }, "-", product.discount, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 14,
      bottom: 14,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Imagen anterior",
    variant: "outline",
    onClick: () => setI(v => (v - 1 + product.images.length) % product.images.length)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-right",
    label: "Imagen siguiente",
    variant: "outline",
    onClick: () => setI(v => (v + 1) % product.images.length)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, product.images.map((src, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setI(n),
    "aria-label": 'Ver imagen ' + (n + 1),
    style: {
      width: 74,
      height: 84,
      padding: 0,
      cursor: 'pointer',
      background: 'var(--surface-media)',
      border: '1px solid ' + (n === i ? 'var(--ink-1000)' : 'transparent'),
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: n === i ? 1 : .72
    }
  })))));
}
function ProductPage({
  slug
}) {
  const s = useStore();
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  const [color, setColor] = React.useState(product.colors[0]?.name);
  const [qty, setQty] = React.useState(1);
  React.useEffect(() => {
    setColor(product.colors[0]?.name);
    setQty(1);
  }, [product.id]);
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const wished = s.wishlist.includes(product.id);
  const low = product.stock <= 5;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Productos'
    }, {
      label: product.category
    }, {
      label: product.name
    }],
    onNavigate: c => c.label === 'Inicio' ? s.go('home') : s.go('productos')
  })), /*#__PURE__*/React.createElement("div", {
    className: "mx-container mx-pdp"
  }, /*#__PURE__*/React.createElement(Gallery, {
    product: product
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, product.brand, " \xB7 ", product.category), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '10px 0 0',
      font: 'var(--display-3)',
      letterSpacing: 'var(--track-display)'
    }
  }, product.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: product.rating,
    reviews: product.reviews,
    size: 15,
    showValue: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      color: 'var(--text-muted)'
    }
  }, "SKU ", product.id)), /*#__PURE__*/React.createElement(Price, {
    value: product.price,
    compareAt: product.compareAtPrice,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: low ? 'warning' : 'success'
  }, low ? `Últimas ${product.stock} unidades` : 'En stock'), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--body-xs)',
      color: 'var(--text-muted)'
    }
  }, "8 personas est\xE1n viendo este producto")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--body-md)',
      color: 'var(--text-secondary)',
      maxWidth: '54ch'
    }
  }, product.description), /*#__PURE__*/React.createElement(SwatchGroup, {
    label: "Color",
    value: color,
    onChange: setColor,
    options: product.colors
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    max: product.stock,
    onChange: setQty
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      flex: 1,
      minWidth: 200
    },
    onClick: () => s.add(product, qty, color)
  }, "Agregar al carrito"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "heart",
    label: "Guardar en favoritos",
    variant: "outline",
    size: 54,
    active: wished,
    onClick: () => s.toggleWish(product)
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    fullWidth: true,
    onClick: () => {
      s.add(product, qty, color);
      s.go('checkout');
    }
  }, "Comprar ahora"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12,
      padding: '18px 0',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, [['truck', 'Envío gratis en compras mayores a $1,499 MXN'], ['clock', 'Entrega estimada: 2–4 días hábiles'], ['rotate-ccw', '30 días para cambios y devoluciones']].map(([ic, tx]) => /*#__PURE__*/React.createElement("div", {
    key: tx,
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'center',
      font: 'var(--body-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17
  }), tx))), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: 'Descripción',
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, product.description, " Acabados mate, costuras reforzadas y una paleta pensada para combinar con todo lo dem\xE1s que ya usas.")
    }, {
      title: 'Características',
      content: /*#__PURE__*/React.createElement("ul", {
        style: {
          margin: 0,
          paddingLeft: 18,
          display: 'grid',
          gap: 7
        }
      }, product.features.map(f => /*#__PURE__*/React.createElement("li", {
        key: f
      }, f)))
    }, {
      title: 'Especificaciones',
      content: /*#__PURE__*/React.createElement("table", {
        style: {
          borderCollapse: 'collapse',
          width: '100%'
        }
      }, /*#__PURE__*/React.createElement("tbody", null, product.specifications.map(([k, v]) => /*#__PURE__*/React.createElement("tr", {
        key: k
      }, /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 0',
          color: 'var(--text-muted)',
          width: 160
        }
      }, k), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 0'
        }
      }, v)))))
    }, {
      title: 'Materiales',
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "Exterior de poli\xE9ster reciclado 900D con recubrimiento resistente al agua, herrajes met\xE1licos y forro interior de nylon.")
    }, {
      title: 'Envíos',
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "Env\xEDo est\xE1ndar gratis en compras mayores a $1,499 MXN (2\u20134 d\xEDas h\xE1biles). Env\xEDo express $149 MXN con entrega en 24 horas en CDMX, GDL y MTY.")
    }, {
      title: 'Cambios y devoluciones',
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "Tienes 30 d\xEDas naturales para solicitar un cambio o devoluci\xF3n sin costo, siempre que el producto conserve etiquetas y empaque original.")
    }],
    defaultOpen: 0
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mx-container",
    style: {
      paddingBlock: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Podr\xEDa interesarte",
    action: "Ver cat\xE1logo",
    onAction: e => {
      e.preventDefault();
      s.go('productos');
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mx-grid-4"
  }, related.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    onAdd: () => s.add(p),
    onQuickView: s.quickView,
    onToggleWishlist: s.toggleWish,
    wishlisted: s.wishlist.includes(p.id),
    onOpen: () => s.go('producto', {
      slug: p.slug
    })
  })))));
}
Object.assign(window, {
  ProductPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Store.jsx
try { (() => {
/* Local-only store: cart, wishlist, toast, routing. Swap the reducer body for API
   calls and nothing above it changes. Cart + wishlist persist in localStorage. */
const StoreCtx = React.createContext(null);
const LS = 'mextas.store.v1';
function StoreProvider({
  children
}) {
  const [state, setState] = React.useState(() => {
    try {
      const s = JSON.parse(localStorage.getItem(LS));
      if (s) return {
        cart: s.cart || [],
        wishlist: s.wishlist || [],
        promo: s.promo || null
      };
    } catch (e) {}
    return {
      cart: [],
      wishlist: [],
      promo: null
    };
  });
  const [route, setRoute] = React.useState({
    name: 'home'
  });
  const [ui, setUi] = React.useState({
    cart: false,
    search: false,
    menu: false,
    quick: null,
    toast: null
  });
  React.useEffect(() => {
    try {
      localStorage.setItem(LS, JSON.stringify(state));
    } catch (e) {}
  }, [state]);
  const api = React.useMemo(() => ({
    go(name, params = {}) {
      setRoute({
        name,
        ...params
      });
      setUi(u => ({
        ...u,
        menu: false,
        search: false,
        quick: null
      }));
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    openCart: () => setUi(u => ({
      ...u,
      cart: true
    })),
    closeCart: () => setUi(u => ({
      ...u,
      cart: false
    })),
    openSearch: () => setUi(u => ({
      ...u,
      search: true
    })),
    closeSearch: () => setUi(u => ({
      ...u,
      search: false
    })),
    openMenu: () => setUi(u => ({
      ...u,
      menu: true
    })),
    closeMenu: () => setUi(u => ({
      ...u,
      menu: false
    })),
    quickView: p => setUi(u => ({
      ...u,
      quick: p
    })),
    closeQuick: () => setUi(u => ({
      ...u,
      quick: null
    })),
    closeToast: () => setUi(u => ({
      ...u,
      toast: null
    })),
    add(product, qty = 1, variant) {
      const key = product.id + '|' + (variant || product.colors?.[0]?.name || '');
      setState(s => {
        const cart = [...s.cart];
        const i = cart.findIndex(c => c.key === key);
        if (i >= 0) cart[i] = {
          ...cart[i],
          qty: Math.min((cart[i].qty || 1) + qty, product.stock || 99)
        };else cart.push({
          key,
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          variant: variant || product.colors?.[0]?.name,
          qty,
          stock: product.stock
        });
        return {
          ...s,
          cart
        };
      });
      setUi(u => ({
        ...u,
        toast: {
          product,
          at: Date.now()
        }
      }));
    },
    setQty(key, qty) {
      setState(s => ({
        ...s,
        cart: s.cart.map(c => c.key === key ? {
          ...c,
          qty
        } : c)
      }));
    },
    remove(key) {
      setState(s => ({
        ...s,
        cart: s.cart.filter(c => c.key !== key)
      }));
    },
    clearCart() {
      setState(s => ({
        ...s,
        cart: [],
        promo: null
      }));
    },
    toggleWish(p) {
      setState(s => ({
        ...s,
        wishlist: s.wishlist.includes(p.id) ? s.wishlist.filter(x => x !== p.id) : [...s.wishlist, p.id]
      }));
    },
    applyPromo(code) {
      const ok = String(code).trim().toUpperCase() === 'MEXTAS10';
      setState(s => ({
        ...s,
        promo: ok ? {
          code: 'MEXTAS10',
          rate: 0.1
        } : null
      }));
      return ok;
    }
  }), []);
  const totals = React.useMemo(() => {
    const subtotal = state.cart.reduce((a, c) => a + c.price * c.qty, 0);
    const discount = state.promo ? Math.round(subtotal * state.promo.rate) : 0;
    const shipping = subtotal === 0 || subtotal - discount >= 1499 ? 0 : 149;
    return {
      subtotal,
      discount,
      shipping,
      total: subtotal - discount + shipping,
      count: state.cart.reduce((a, c) => a + c.qty, 0)
    };
  }, [state]);
  return /*#__PURE__*/React.createElement(StoreCtx.Provider, {
    value: {
      ...state,
      ...api,
      route,
      ui,
      totals
    }
  }, children);
}
const useStore = () => React.useContext(StoreCtx);
const money = n => '$' + Number(n || 0).toLocaleString('es-MX') + ' MXN';
Object.assign(window, {
  StoreProvider,
  useStore,
  money
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Store.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.jsx
try { (() => {
/* MEXTAS mock catalogue — no backend. Shapes match the Product contract in
   components/commerce/ProductCard.d.ts so a real API can drop straight in. */
const IMG = {
  mochilas: '../../assets/cat-mochilas.png',
  audio: '../../assets/cat-audio.png',
  wearables: '../../assets/cat-wearables.png',
  botellas: '../../assets/cat-botellas.png',
  accesorios: '../../assets/cat-accesorios.png',
  gadgets: '../../assets/cat-accesorios.png',
  viaje: '../../assets/banner-packs.png',
  hero: '../../assets/hero-main.png',
  urban: '../../assets/product-mochila-urban-pro.png'
};
const RAW = [['Mochila Urban Pro', 'Mochilas', 1899, 2299, 4.7, 128, 'urban', ['Negro', 'Gris', 'Azul'], {
  isNew: 1,
  isFeatured: 1,
  isBestSeller: 1,
  stock: 4
}], ['Mochila Commute 22L', 'Mochilas', 1599, null, 4.5, 86, 'mochilas', ['Negro', 'Gris'], {
  isFeatured: 1,
  stock: 18
}], ['Mochila Rolltop Weather', 'Mochilas', 2199, 2599, 4.6, 64, 'mochilas', ['Negro'], {
  stock: 9
}], ['Mochila Daypack Light', 'Mochilas', 1199, null, 4.3, 52, 'mochilas', ['Negro', 'Gris'], {
  isNew: 1,
  stock: 22
}], ['Mochila Travel 35L', 'Mochilas', 2699, 2999, 4.8, 41, 'mochilas', ['Negro'], {
  isBestSeller: 1,
  stock: 7
}], ['Backpack Sling Mini', 'Mochilas', 899, null, 4.2, 73, 'mochilas', ['Negro', 'Azul'], {
  stock: 30
}], ['Audífonos MEXTAS Sound', 'Audio', 1099, 1299, 4.5, 94, 'audio', ['Negro'], {
  isFeatured: 1,
  isBestSeller: 1,
  stock: 15
}], ['Audífonos Studio ANC', 'Audio', 2299, 2699, 4.8, 212, 'audio', ['Negro', 'Gris'], {
  isFeatured: 1,
  stock: 6
}], ['Earbuds Pulse Pro', 'Audio', 1499, null, 4.4, 168, 'audio', ['Negro', 'Blanco'], {
  isNew: 1,
  stock: 25
}], ['Earbuds Daily', 'Audio', 699, 899, 4.1, 241, 'audio', ['Negro'], {
  stock: 40
}], ['Bocina Portátil Cube', 'Audio', 1299, null, 4.4, 57, 'audio', ['Negro'], {
  stock: 12
}], ['Bocina Loft 360', 'Audio', 2499, 2899, 4.6, 38, 'audio', ['Negro'], {
  stock: 5
}], ['Smartwatch One', 'Wearables', 2499, null, 4.6, 76, 'wearables', ['Negro', 'Gris'], {
  isNew: 1,
  isFeatured: 1,
  stock: 11
}], ['Smartwatch One Sport', 'Wearables', 2899, 3299, 4.7, 49, 'wearables', ['Negro', 'Azul'], {
  stock: 8
}], ['Banda Fit Track', 'Wearables', 999, 1199, 4.2, 133, 'wearables', ['Negro'], {
  isBestSeller: 1,
  stock: 26
}], ['Correa Silicón Pro', 'Wearables', 399, null, 4.3, 61, 'wearables', ['Negro', 'Gris', 'Azul'], {
  stock: 50
}], ['Correa Piel Minimal', 'Wearables', 599, 749, 4.5, 34, 'wearables', ['Negro'], {
  stock: 14
}], ['Termo Insulado 750ml', 'Botellas', 629, 699, 4.6, 43, 'botellas', ['Negro', 'Gris'], {
  isFeatured: 1,
  stock: 32
}], ['Termo Insulado 500ml', 'Botellas', 529, null, 4.5, 58, 'botellas', ['Negro'], {
  stock: 41
}], ['Botella Daily 1L', 'Botellas', 449, 549, 4.3, 77, 'botellas', ['Negro', 'Azul'], {
  stock: 38
}], ['Taza Térmica Commute', 'Botellas', 549, null, 4.4, 29, 'botellas', ['Negro'], {
  isNew: 1,
  stock: 20
}], ['Organizer Tech Pouch', 'Accesorios', 499, null, 4.4, 31, 'accesorios', ['Negro', 'Gris'], {
  isNew: 1,
  isFeatured: 1,
  stock: 44
}], ['Cartera Slim RFID', 'Accesorios', 449, 599, 4.5, 112, 'accesorios', ['Negro'], {
  isBestSeller: 1,
  stock: 36
}], ['Estuche para Laptop 14"', 'Accesorios', 799, null, 4.6, 47, 'accesorios', ['Negro', 'Gris'], {
  stock: 19
}], ['Estuche para Laptop 16"', 'Accesorios', 899, 1049, 4.6, 33, 'accesorios', ['Negro'], {
  stock: 13
}], ['Neceser de Viaje', 'Accesorios', 649, null, 4.2, 26, 'accesorios', ['Negro'], {
  stock: 24
}], ['Correa para Cámara', 'Accesorios', 389, null, 4.1, 18, 'accesorios', ['Negro'], {
  stock: 29
}], ['Powerbank 20 000 mAh', 'Gadgets', 1149, 1399, 4.7, 158, 'gadgets', ['Negro'], {
  isFeatured: 1,
  isBestSeller: 1,
  stock: 17
}], ['Powerbank Slim 10 000', 'Gadgets', 749, null, 4.4, 96, 'gadgets', ['Negro'], {
  stock: 28
}], ['Cargador GaN 65W', 'Gadgets', 899, 1099, 4.8, 142, 'gadgets', ['Negro', 'Blanco'], {
  isNew: 1,
  stock: 21
}], ['Hub USB-C 7 en 1', 'Gadgets', 1049, null, 4.5, 64, 'gadgets', ['Gris'], {
  stock: 16
}], ['Cable Trenzado 2 m', 'Gadgets', 249, 299, 4.3, 203, 'gadgets', ['Negro'], {
  stock: 80
}], ['Soporte Plegable Desk', 'Gadgets', 599, null, 4.6, 55, 'gadgets', ['Gris', 'Negro'], {
  stock: 23
}], ['Rastreador Bluetooth', 'Gadgets', 449, 549, 4.2, 87, 'gadgets', ['Negro'], {
  stock: 34
}], ['Organizador de Cables', 'Viaje', 299, null, 4.1, 44, 'viaje', ['Negro'], {
  stock: 60
}], ['Cubos de Empaque (3)', 'Viaje', 699, 849, 4.5, 39, 'viaje', ['Negro', 'Gris'], {
  stock: 15
}], ['Almohada de Viaje Pro', 'Viaje', 549, null, 4.3, 51, 'viaje', ['Negro'], {
  stock: 27
}], ['Candado TSA', 'Viaje', 249, null, 4.0, 22, 'viaje', ['Negro'], {
  stock: 55
}]];
const HEX = {
  Negro: '#0A0A0A',
  Gris: '#8A8A8A',
  Azul: '#1F2E4A',
  Blanco: '#E9E9E9'
};
const slugify = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const PRODUCTS = RAW.map((r, i) => {
  const [name, category, price, compareAtPrice, rating, reviews, img, colors, flags] = r;
  return {
    id: 'MX' + String(1001 + i),
    slug: slugify(name),
    name,
    category,
    subcategory: category,
    price,
    compareAtPrice: compareAtPrice || undefined,
    discount: compareAtPrice ? Math.round((1 - price / compareAtPrice) * 100) : 0,
    rating,
    reviews,
    image: IMG[img],
    images: [IMG[img], IMG.hero, IMG.urban, IMG[img]],
    colors: colors.map(c => ({
      name: c,
      hex: HEX[c]
    })),
    sizes: [],
    brand: 'MEXTAS',
    stock: flags.stock ?? 12,
    isNew: !!flags.isNew,
    isFeatured: !!flags.isFeatured,
    isBestSeller: !!flags.isBestSeller,
    tags: [category.toLowerCase(), flags.isNew ? 'nuevos' : null, compareAtPrice ? 'ofertas' : null].filter(Boolean),
    description: `${name} — diseñado para el trayecto diario: materiales resistentes, acabados mate y detalles pensados para durar. Parte de la línea ${category} de MEXTAS.`,
    features: ['Materiales resistentes al uso diario', 'Acabado mate antihuellas', 'Garantía MEXTAS de 12 meses', 'Diseñado y probado en México'],
    specifications: [['Marca', 'MEXTAS'], ['Categoría', category], ['SKU', 'MX-' + slugify(name).slice(0, 10).toUpperCase()], ['Garantía', '12 meses']]
  };
});
const CATEGORIES = [{
  key: 'nuevos',
  name: 'Nuevos',
  icon: 'sparkles'
}, {
  key: 'Mochilas',
  name: 'Mochilas',
  image: IMG.mochilas
}, {
  key: 'Accesorios',
  name: 'Accesorios',
  image: IMG.accesorios
}, {
  key: 'Audio',
  name: 'Audio',
  image: IMG.audio
}, {
  key: 'Wearables',
  name: 'Wearables',
  image: IMG.wearables
}, {
  key: 'Botellas',
  name: 'Botellas',
  image: IMG.botellas
}, {
  key: 'Gadgets',
  name: 'Gadgets',
  icon: 'cpu'
}, {
  key: 'ofertas',
  name: 'Ofertas',
  icon: 'percent'
}];
const NAV = [{
  key: 'nuevos',
  label: 'Nuevos'
}, {
  key: 'hombres',
  label: 'Hombres'
}, {
  key: 'mujeres',
  label: 'Mujeres'
}, {
  key: 'accesorios',
  label: 'Accesorios'
}, {
  key: 'tecnologia',
  label: 'Tecnología'
}, {
  key: 'colecciones',
  label: 'Colecciones'
}, {
  key: 'ofertas',
  label: 'Ofertas',
  highlight: true
}, {
  key: 'blog',
  label: 'Blog'
}];
const SLIDES = [{
  eyebrow: 'Nueva colección',
  title: 'Diseño que\nte acompaña.',
  sub: 'Tecnología, estilo y funcionalidad en cada detalle.',
  cta: 'Comprar ahora',
  image: IMG.hero
}, {
  eyebrow: 'Tecnología para todos los días',
  title: 'Diseñada para\nmoverse contigo.',
  sub: 'Audio, wearables y gadgets que aguantan tu ritmo.',
  cta: 'Ver tecnología',
  image: IMG.urban
}, {
  eyebrow: 'Hasta 30% OFF',
  title: 'Descubre nuestras\nofertas de temporada.',
  sub: 'Precios especiales en mochilas, audio y accesorios.',
  cta: 'Ver ofertas',
  image: IMG.viaje
}];
const PACKS = [{
  name: 'Pack Work',
  description: 'Para la oficina y el café de la esquina.',
  items: ['Mochila Urban Pro', 'Termo Insulado 750ml', 'Organizer Tech Pouch'],
  price: 2699,
  compareAt: 3027,
  image: IMG.mochilas
}, {
  name: 'Pack Tech',
  description: 'Todo tu audio y energía en un solo lugar.',
  items: ['Audífonos MEXTAS Sound', 'Smartwatch One', 'Powerbank 20 000 mAh'],
  price: 4299,
  compareAt: 4747,
  image: IMG.audio
}, {
  name: 'Pack Travel',
  description: 'Lo esencial para salir sin pensarlo.',
  items: ['Mochila Travel 35L', 'Botella Daily 1L', 'Cubos de Empaque (3)'],
  price: 3499,
  compareAt: 3847,
  image: IMG.viaje
}];
const COLLECTIONS = [{
  slug: 'urban-essentials',
  name: 'Urban Essentials',
  description: 'Mochilas, organizadores y accesorios para la ciudad.',
  image: IMG.mochilas,
  filter: ['Mochilas', 'Accesorios']
}, {
  slug: 'tech-daily',
  name: 'Tech Daily',
  description: 'Audio, gadgets y wearables para el día a día.',
  image: IMG.audio,
  filter: ['Audio', 'Gadgets', 'Wearables']
}, {
  slug: 'travel',
  name: 'Travel',
  description: 'Productos que resuelven el viaje.',
  image: IMG.viaje,
  filter: ['Viaje', 'Botellas']
}, {
  slug: 'minimal',
  name: 'Minimal',
  description: 'Diseño limpio, negro mate, cero ruido.',
  image: IMG.botellas,
  filter: ['Botellas', 'Accesorios']
}];
const POSTS = [{
  slug: 'elegir-mochila',
  category: 'Guías',
  date: '12 sep 2026',
  title: 'Cómo elegir la mochila adecuada para tu día a día',
  excerpt: 'Capacidad, compartimentos y materiales: los tres criterios que importan antes de comprar.',
  image: IMG.mochilas
}, {
  slug: 'gadgets-necesarios',
  category: 'Tecnología',
  date: '04 sep 2026',
  title: '5 gadgets que realmente necesitas',
  excerpt: 'Menos cables, más autonomía. Lo que sí vale la pena cargar contigo.',
  image: IMG.accesorios
}, {
  slug: 'setup-trabajo',
  category: 'Productividad',
  date: '28 ago 2026',
  title: 'Cómo organizar tu setup de trabajo',
  excerpt: 'Una mesa ordenada empieza por resolver el cableado y la altura de la pantalla.',
  image: IMG.hero
}, {
  slug: 'tecnologia-y-estilo',
  category: 'Estilo',
  date: '19 ago 2026',
  title: 'Tecnología y estilo: cómo combinarlos',
  excerpt: 'Paleta corta, materiales mate y piezas que no compiten entre sí.',
  image: IMG.wearables
}];
const FOOTER_COLUMNS = [{
  title: 'Comprar',
  links: [{
    label: 'Nuevos',
    key: 'nuevos'
  }, {
    label: 'Hombres',
    key: 'productos'
  }, {
    label: 'Mujeres',
    key: 'productos'
  }, {
    label: 'Accesorios',
    key: 'productos'
  }, {
    label: 'Tecnología',
    key: 'productos'
  }, {
    label: 'Ofertas',
    key: 'ofertas'
  }]
}, {
  title: 'Información',
  links: [{
    label: 'Sobre nosotros',
    key: 'sobre'
  }, {
    label: 'Envíos y entregas',
    key: 'envios'
  }, {
    label: 'Cambios y devoluciones',
    key: 'devoluciones'
  }, {
    label: 'Términos y condiciones',
    key: 'sobre'
  }, {
    label: 'Aviso de privacidad',
    key: 'sobre'
  }, {
    label: 'Preguntas frecuentes',
    key: 'envios'
  }]
}, {
  title: 'Mi cuenta',
  links: [{
    label: 'Mi cuenta',
    key: 'cuenta'
  }, {
    label: 'Mis pedidos',
    key: 'pedidos'
  }, {
    label: 'Lista de deseos',
    key: 'favoritos'
  }, {
    label: 'Direcciones',
    key: 'cuenta'
  }, {
    label: 'Métodos de pago',
    key: 'cuenta'
  }, {
    label: 'Rastreo de pedido',
    key: 'rastreo'
  }]
}];
const ORDERS = [{
  id: 'MX-2026-10482',
  date: '18 sep 2026',
  status: 'En camino',
  step: 3,
  total: 3527,
  shipping: 'Envío estándar · Estafeta',
  items: [{
    id: 'MX1001',
    name: 'Mochila Urban Pro',
    variant: 'Negro',
    price: 1899,
    qty: 1,
    image: IMG.urban
  }, {
    id: 'MX1007',
    name: 'Audífonos MEXTAS Sound',
    variant: 'Negro',
    price: 1099,
    qty: 1,
    image: IMG.audio
  }, {
    id: 'MX1018',
    name: 'Termo Insulado 750ml',
    variant: 'Gris',
    price: 529,
    qty: 1,
    image: IMG.botellas
  }]
}, {
  id: 'MX-2026-10190',
  date: '02 ago 2026',
  status: 'Entregado',
  step: 4,
  total: 2499,
  shipping: 'Envío express · DHL',
  items: [{
    id: 'MX1013',
    name: 'Smartwatch One',
    variant: 'Negro',
    price: 2499,
    qty: 1,
    image: IMG.wearables
  }]
}];
const BENEFITS = [{
  icon: 'truck',
  title: 'Envío gratis',
  description: 'En compras mayores a $1,499 MXN'
}, {
  icon: 'rotate-ccw',
  title: 'Devoluciones fáciles',
  description: 'Tienes 30 días para devolver tu producto'
}, {
  icon: 'shield-check',
  title: 'Compra segura',
  description: 'Tus pagos están protegidos con encriptación SSL'
}, {
  icon: 'headphones',
  title: 'Atención personalizada',
  description: 'Estamos para ayudarte en lo que necesites'
}];
Object.assign(window, {
  MX_IMG: IMG,
  PRODUCTS,
  CATEGORIES,
  NAV,
  SLIDES,
  PACKS,
  COLLECTIONS,
  POSTS,
  FOOTER_COLUMNS,
  ORDERS,
  BENEFITS,
  mxSlugify: slugify
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BenefitItem = __ds_scope.BenefitItem;

__ds_ns.CartLine = __ds_scope.CartLine;

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.CountdownTimer = __ds_scope.CountdownTimer;

__ds_ns.OrderTimeline = __ds_scope.OrderTimeline;

__ds_ns.PackCard = __ds_scope.PackCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.RadioCard = __ds_scope.RadioCard;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SwatchGroup = __ds_scope.SwatchGroup;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
