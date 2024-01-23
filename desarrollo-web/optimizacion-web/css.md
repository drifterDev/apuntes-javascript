# CSS

1. Las propiedades `transform` y `opacity` son las más eficientes para animar elementos.

2. Usar las propiedades de `will-change` y la propiedad que cambiará en la animación para animar elementos.

```css
.element {
  will-change: transform;
}

.element:hover {
  transform: scale(1.5);
}
```

3. Entre menos complejo sean los selectores, mucho mejor. Para esto podemos usar la metodología BEM.

4. Nuestro código debería tener como máximo un solo selector, una sola clase y tratar de evitar los id's

5. El CSS puede bloquear recursos importantes como una imagen de un logo.

* Antes

```html
<div class="logo"></div>
```

```css
/* styles.css */
.logo {
  width: 200px;
  height: 100px;
  background-image: url(logo.png);
  background-size: cover;
  background-position: center;
}
```

* Después

```html
<div class="logo">
  <img width="200" height="100" src="logo.png" alt="Logo"/>
</div>
```

## Web Fonts

1. Las webs fonts son recursos pesados y tienen bastante costo a nivel de performance, debemos tener un límite de dos fuentes y debemos tomar en cuenta todas las estrategias que tenemos para cargarlas.

### Como estilo

* `<link>` común (i.e.: Google fonts)

* HTML parsing no continúa hasta que se descargue la fuente

* Bloqueante ⇒ Para el parsing del HTML, para descargar la fuente y una vez descargada, se continua con el parsing

### De forma alterna

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=block" rel="stylesheet">
```

* Fuente por defecto mientras carga la web Font cambiando `&display=block` por `&display=swap`

* Flash of Unstyled Text (FOUT)

* Ese cambio genera un parpadeo, el cual es perceptible para los usuarios

* Tambien podemos hacerlo con una librería open source llamada web font loader.
Esta librería nos brinda eventos de los estados de nuestras fuentes a través de clases

### Luego del HTML parsing

* No mostrar texto hasta que se descargue la fuente

* Flash of Invisible Text (FOIT)

