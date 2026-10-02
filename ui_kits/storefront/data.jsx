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
  urban: '../../assets/product-mochila-urban-pro.png',
};

const RAW = [
  ['Mochila Urban Pro','Mochilas',1899,2299,4.7,128,'urban',['Negro','Gris','Azul'],{isNew:1,isFeatured:1,isBestSeller:1,stock:4}],
  ['Mochila Commute 22L','Mochilas',1599,null,4.5,86,'mochilas',['Negro','Gris'],{isFeatured:1,stock:18}],
  ['Mochila Rolltop Weather','Mochilas',2199,2599,4.6,64,'mochilas',['Negro'],{stock:9}],
  ['Mochila Daypack Light','Mochilas',1199,null,4.3,52,'mochilas',['Negro','Gris'],{isNew:1,stock:22}],
  ['Mochila Travel 35L','Mochilas',2699,2999,4.8,41,'mochilas',['Negro'],{isBestSeller:1,stock:7}],
  ['Backpack Sling Mini','Mochilas',899,null,4.2,73,'mochilas',['Negro','Azul'],{stock:30}],
  ['Audífonos MEXTAS Sound','Audio',1099,1299,4.5,94,'audio',['Negro'],{isFeatured:1,isBestSeller:1,stock:15}],
  ['Audífonos Studio ANC','Audio',2299,2699,4.8,212,'audio',['Negro','Gris'],{isFeatured:1,stock:6}],
  ['Earbuds Pulse Pro','Audio',1499,null,4.4,168,'audio',['Negro','Blanco'],{isNew:1,stock:25}],
  ['Earbuds Daily','Audio',699,899,4.1,241,'audio',['Negro'],{stock:40}],
  ['Bocina Portátil Cube','Audio',1299,null,4.4,57,'audio',['Negro'],{stock:12}],
  ['Bocina Loft 360','Audio',2499,2899,4.6,38,'audio',['Negro'],{stock:5}],
  ['Smartwatch One','Wearables',2499,null,4.6,76,'wearables',['Negro','Gris'],{isNew:1,isFeatured:1,stock:11}],
  ['Smartwatch One Sport','Wearables',2899,3299,4.7,49,'wearables',['Negro','Azul'],{stock:8}],
  ['Banda Fit Track','Wearables',999,1199,4.2,133,'wearables',['Negro'],{isBestSeller:1,stock:26}],
  ['Correa Silicón Pro','Wearables',399,null,4.3,61,'wearables',['Negro','Gris','Azul'],{stock:50}],
  ['Correa Piel Minimal','Wearables',599,749,4.5,34,'wearables',['Negro'],{stock:14}],
  ['Termo Insulado 750ml','Botellas',629,699,4.6,43,'botellas',['Negro','Gris'],{isFeatured:1,stock:32}],
  ['Termo Insulado 500ml','Botellas',529,null,4.5,58,'botellas',['Negro'],{stock:41}],
  ['Botella Daily 1L','Botellas',449,549,4.3,77,'botellas',['Negro','Azul'],{stock:38}],
  ['Taza Térmica Commute','Botellas',549,null,4.4,29,'botellas',['Negro'],{isNew:1,stock:20}],
  ['Organizer Tech Pouch','Accesorios',499,null,4.4,31,'accesorios',['Negro','Gris'],{isNew:1,isFeatured:1,stock:44}],
  ['Cartera Slim RFID','Accesorios',449,599,4.5,112,'accesorios',['Negro'],{isBestSeller:1,stock:36}],
  ['Estuche para Laptop 14"','Accesorios',799,null,4.6,47,'accesorios',['Negro','Gris'],{stock:19}],
  ['Estuche para Laptop 16"','Accesorios',899,1049,4.6,33,'accesorios',['Negro'],{stock:13}],
  ['Neceser de Viaje','Accesorios',649,null,4.2,26,'accesorios',['Negro'],{stock:24}],
  ['Correa para Cámara','Accesorios',389,null,4.1,18,'accesorios',['Negro'],{stock:29}],
  ['Powerbank 20 000 mAh','Gadgets',1149,1399,4.7,158,'gadgets',['Negro'],{isFeatured:1,isBestSeller:1,stock:17}],
  ['Powerbank Slim 10 000','Gadgets',749,null,4.4,96,'gadgets',['Negro'],{stock:28}],
  ['Cargador GaN 65W','Gadgets',899,1099,4.8,142,'gadgets',['Negro','Blanco'],{isNew:1,stock:21}],
  ['Hub USB-C 7 en 1','Gadgets',1049,null,4.5,64,'gadgets',['Gris'],{stock:16}],
  ['Cable Trenzado 2 m','Gadgets',249,299,4.3,203,'gadgets',['Negro'],{stock:80}],
  ['Soporte Plegable Desk','Gadgets',599,null,4.6,55,'gadgets',['Gris','Negro'],{stock:23}],
  ['Rastreador Bluetooth','Gadgets',449,549,4.2,87,'gadgets',['Negro'],{stock:34}],
  ['Organizador de Cables','Viaje',299,null,4.1,44,'viaje',['Negro'],{stock:60}],
  ['Cubos de Empaque (3)','Viaje',699,849,4.5,39,'viaje',['Negro','Gris'],{stock:15}],
  ['Almohada de Viaje Pro','Viaje',549,null,4.3,51,'viaje',['Negro'],{stock:27}],
  ['Candado TSA','Viaje',249,null,4.0,22,'viaje',['Negro'],{stock:55}],
];

const HEX = { Negro: '#0A0A0A', Gris: '#8A8A8A', Azul: '#1F2E4A', Blanco: '#E9E9E9' };
const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const PRODUCTS = RAW.map((r, i) => {
  const [name, category, price, compareAtPrice, rating, reviews, img, colors, flags] = r;
  return {
    id: 'MX' + String(1001 + i), slug: slugify(name), name, category,
    subcategory: category, price, compareAtPrice: compareAtPrice || undefined,
    discount: compareAtPrice ? Math.round((1 - price / compareAtPrice) * 100) : 0,
    rating, reviews, image: IMG[img], images: [IMG[img], IMG.hero, IMG.urban, IMG[img]],
    colors: colors.map((c) => ({ name: c, hex: HEX[c] })),
    sizes: [], brand: 'MEXTAS', stock: flags.stock ?? 12,
    isNew: !!flags.isNew, isFeatured: !!flags.isFeatured, isBestSeller: !!flags.isBestSeller,
    tags: [category.toLowerCase(), flags.isNew ? 'nuevos' : null, compareAtPrice ? 'ofertas' : null].filter(Boolean),
    description: `${name} — diseñado para el trayecto diario: materiales resistentes, acabados mate y detalles pensados para durar. Parte de la línea ${category} de MEXTAS.`,
    features: ['Materiales resistentes al uso diario', 'Acabado mate antihuellas', 'Garantía MEXTAS de 12 meses', 'Diseñado y probado en México'],
    specifications: [['Marca', 'MEXTAS'], ['Categoría', category], ['SKU', 'MX-' + slugify(name).slice(0, 10).toUpperCase()], ['Garantía', '12 meses']],
  };
});

const CATEGORIES = [
  { key: 'nuevos', name: 'Nuevos', icon: 'sparkles' },
  { key: 'Mochilas', name: 'Mochilas', image: IMG.mochilas },
  { key: 'Accesorios', name: 'Accesorios', image: IMG.accesorios },
  { key: 'Audio', name: 'Audio', image: IMG.audio },
  { key: 'Wearables', name: 'Wearables', image: IMG.wearables },
  { key: 'Botellas', name: 'Botellas', image: IMG.botellas },
  { key: 'Gadgets', name: 'Gadgets', icon: 'cpu' },
  { key: 'ofertas', name: 'Ofertas', icon: 'percent' },
];

const NAV = [
  { key: 'nuevos', label: 'Nuevos' }, { key: 'hombres', label: 'Hombres' }, { key: 'mujeres', label: 'Mujeres' },
  { key: 'accesorios', label: 'Accesorios' }, { key: 'tecnologia', label: 'Tecnología' },
  { key: 'colecciones', label: 'Colecciones' }, { key: 'ofertas', label: 'Ofertas', highlight: true }, { key: 'blog', label: 'Blog' },
];

const SLIDES = [
  { eyebrow: 'Nueva colección', title: 'Diseño que\nte acompaña.', sub: 'Tecnología, estilo y funcionalidad en cada detalle.', cta: 'Comprar ahora', image: IMG.hero },
  { eyebrow: 'Tecnología para todos los días', title: 'Diseñada para\nmoverse contigo.', sub: 'Audio, wearables y gadgets que aguantan tu ritmo.', cta: 'Ver tecnología', image: IMG.urban },
  { eyebrow: 'Hasta 30% OFF', title: 'Descubre nuestras\nofertas de temporada.', sub: 'Precios especiales en mochilas, audio y accesorios.', cta: 'Ver ofertas', image: IMG.viaje },
];

const PACKS = [
  { name: 'Pack Work', description: 'Para la oficina y el café de la esquina.', items: ['Mochila Urban Pro', 'Termo Insulado 750ml', 'Organizer Tech Pouch'], price: 2699, compareAt: 3027, image: IMG.mochilas },
  { name: 'Pack Tech', description: 'Todo tu audio y energía en un solo lugar.', items: ['Audífonos MEXTAS Sound', 'Smartwatch One', 'Powerbank 20 000 mAh'], price: 4299, compareAt: 4747, image: IMG.audio },
  { name: 'Pack Travel', description: 'Lo esencial para salir sin pensarlo.', items: ['Mochila Travel 35L', 'Botella Daily 1L', 'Cubos de Empaque (3)'], price: 3499, compareAt: 3847, image: IMG.viaje },
];

const COLLECTIONS = [
  { slug: 'urban-essentials', name: 'Urban Essentials', description: 'Mochilas, organizadores y accesorios para la ciudad.', image: IMG.mochilas, filter: ['Mochilas', 'Accesorios'] },
  { slug: 'tech-daily', name: 'Tech Daily', description: 'Audio, gadgets y wearables para el día a día.', image: IMG.audio, filter: ['Audio', 'Gadgets', 'Wearables'] },
  { slug: 'travel', name: 'Travel', description: 'Productos que resuelven el viaje.', image: IMG.viaje, filter: ['Viaje', 'Botellas'] },
  { slug: 'minimal', name: 'Minimal', description: 'Diseño limpio, negro mate, cero ruido.', image: IMG.botellas, filter: ['Botellas', 'Accesorios'] },
];

const POSTS = [
  { slug: 'elegir-mochila', category: 'Guías', date: '12 sep 2026', title: 'Cómo elegir la mochila adecuada para tu día a día', excerpt: 'Capacidad, compartimentos y materiales: los tres criterios que importan antes de comprar.', image: IMG.mochilas },
  { slug: 'gadgets-necesarios', category: 'Tecnología', date: '04 sep 2026', title: '5 gadgets que realmente necesitas', excerpt: 'Menos cables, más autonomía. Lo que sí vale la pena cargar contigo.', image: IMG.accesorios },
  { slug: 'setup-trabajo', category: 'Productividad', date: '28 ago 2026', title: 'Cómo organizar tu setup de trabajo', excerpt: 'Una mesa ordenada empieza por resolver el cableado y la altura de la pantalla.', image: IMG.hero },
  { slug: 'tecnologia-y-estilo', category: 'Estilo', date: '19 ago 2026', title: 'Tecnología y estilo: cómo combinarlos', excerpt: 'Paleta corta, materiales mate y piezas que no compiten entre sí.', image: IMG.wearables },
];

const FOOTER_COLUMNS = [
  { title: 'Comprar', links: [{ label: 'Nuevos', key: 'nuevos' }, { label: 'Hombres', key: 'productos' }, { label: 'Mujeres', key: 'productos' }, { label: 'Accesorios', key: 'productos' }, { label: 'Tecnología', key: 'productos' }, { label: 'Ofertas', key: 'ofertas' }] },
  { title: 'Información', links: [{ label: 'Sobre nosotros', key: 'sobre' }, { label: 'Envíos y entregas', key: 'envios' }, { label: 'Cambios y devoluciones', key: 'devoluciones' }, { label: 'Términos y condiciones', key: 'sobre' }, { label: 'Aviso de privacidad', key: 'sobre' }, { label: 'Preguntas frecuentes', key: 'envios' }] },
  { title: 'Mi cuenta', links: [{ label: 'Mi cuenta', key: 'cuenta' }, { label: 'Mis pedidos', key: 'pedidos' }, { label: 'Lista de deseos', key: 'favoritos' }, { label: 'Direcciones', key: 'cuenta' }, { label: 'Métodos de pago', key: 'cuenta' }, { label: 'Rastreo de pedido', key: 'rastreo' }] },
];

const ORDERS = [
  { id: 'MX-2026-10482', date: '18 sep 2026', status: 'En camino', step: 3, total: 3527, shipping: 'Envío estándar · Estafeta', items: [
    { id: 'MX1001', name: 'Mochila Urban Pro', variant: 'Negro', price: 1899, qty: 1, image: IMG.urban },
    { id: 'MX1007', name: 'Audífonos MEXTAS Sound', variant: 'Negro', price: 1099, qty: 1, image: IMG.audio },
    { id: 'MX1018', name: 'Termo Insulado 750ml', variant: 'Gris', price: 529, qty: 1, image: IMG.botellas }] },
  { id: 'MX-2026-10190', date: '02 ago 2026', status: 'Entregado', step: 4, total: 2499, shipping: 'Envío express · DHL', items: [
    { id: 'MX1013', name: 'Smartwatch One', variant: 'Negro', price: 2499, qty: 1, image: IMG.wearables }] },
];

const BENEFITS = [
  { icon: 'truck', title: 'Envío gratis', description: 'En compras mayores a $1,499 MXN' },
  { icon: 'rotate-ccw', title: 'Devoluciones fáciles', description: 'Tienes 30 días para devolver tu producto' },
  { icon: 'shield-check', title: 'Compra segura', description: 'Tus pagos están protegidos con encriptación SSL' },
  { icon: 'headphones', title: 'Atención personalizada', description: 'Estamos para ayudarte en lo que necesites' },
];

Object.assign(window, { MX_IMG: IMG, PRODUCTS, CATEGORIES, NAV, SLIDES, PACKS, COLLECTIONS, POSTS, FOOTER_COLUMNS, ORDERS, BENEFITS, mxSlugify: slugify });
