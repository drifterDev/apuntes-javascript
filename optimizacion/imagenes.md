# Imágenes, Iconos y SVG

1. Las imágenes por lo general se recomienda que pesen 70Kb sin embargo cuando vamos a mirar a lo largo de la historia el tamaño de las imágenes en un sitio web ha crecido en dispositivos móviles hasta 900Kb y en el escritorio hasta 1Mb.

2. Reducir el tamaño de las imágenes es una de las mejores formas de mejorar el performance de nuestro sitio web.

3. Para reducir el peso de las imágenes podemos usar herramientas como:

**Online**

* TinyPNG

**API**

* Cloudinary
* Netlify
* TinyPNG

**Dev Flow**

* Webpack
* Grunt
* Gulp
* post-commit
---
## Formatos

### GIF
* Es un formato liviano
* 256 colores
* No degradados
* Perfecto cuando hay pocos colores, colores planos y sin transparencia

### PNG-8
* Nos da todas las ventajas de GIF + transparencias
* Perfecto para íconos y algunos logos

### PNG (24)
* PNG-8 + colores ilimitados
* imágenes con degradados o muchos colores con transparencia

### JPG o JPEG
* Nos sirve para fotografías
* Millones de colores
* Degradados
* Sin transparencia
* Tiene dos modos de progresión de carga (Progresivo - No progresivo)
* Siempre sera bueno dar un JPG progresivo

### WebP
* Es un formato de imagen moderno y eficiente.
* Ofrece compresión sin pérdida y con pérdida, proporcionando flexibilidad en la calidad de la imagen.
* Admite transparencia, animaciones y perfiles de color.
* Generalmente ofrece un mejor rendimiento y calidad de imagen en comparación con JPEG y PNG.
* Ideal para la web y aplicaciones donde se busca una combinación de calidad y tamaño de archivo optimizado.

### SVG (Scalable Vector Graphics)
* Escalable sin pérdida de calidad, ideal para iconos, logotipos y gráficos que necesitan adaptarse a diferentes tamaños de pantalla.
* Soporta animaciones e interactividad.
* Puede ser editado y creado con software de edición de texto, facilitando la manipulación directa del código SVG.
* Es bueno para Logos, ilustraciones, ilustraciones animadas (En general: gráficos de los que puedas mantener un fácil control)
---

4. Web fonts vs SVG

**Web fonts**

_Pros_
* Son prácticos
* Fáciles de usar y distribuir

_Contras_
* Un recurso más
* HTTP Request
* Bloqueantes
* No son accesibles

**SVG**

_Pros_
* Livianos
* Inline en el HTML
* Accesibilidad
* Animaciones
* Data URI

_Contras_
* Se quita facilidad
* Requiere un diseñador
* Incrementa el largo del HTML

5. Aplicar Lazy Loading a los recursos.

```html	
<img src="img/imagen.jpg" loading="lazy" alt="imagen">
```

6. La importancia del Responsive Loading.

```html
<picture>
  <source media="(min-width: 600px)" srcset="img/grande.jpg">
  <source media="(min-width: 400px)" srcset="img/mediano.jpg">
  <img src="img/pequeno.jpg" alt="imagen">
</picture>
```