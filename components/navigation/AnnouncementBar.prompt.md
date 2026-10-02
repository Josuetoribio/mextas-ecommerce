One-line: the black 38px utility strip above the header; rotating promises left, locale/help links right.

```jsx
<AnnouncementBar messages={['Envío gratis en compras mayores a $1,499 MXN','12 meses sin intereses']}
  links={[{label:'México (MXN $)',caret:true},{label:'Ayuda'},{label:'Rastreo de pedido'}]} />
```
Hidden on mobile below 768px if space is tight; keep only the first message.
