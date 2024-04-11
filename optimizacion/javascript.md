# Javascript

1. Analizar el bundle cuando se hace un build de producción. (Utilizar el tree shaking cuando las dependencias lo permitan)

**Antes**
```js	
import lodash from 'lodash'
```

**Después**
```js
import lodash from 'lodash' // Por si no se puede utilizar el tree shaking
import { get } from 'lodash'
import get from 'lodash/get' // Otra forma de hacerlo
```

2. Code splitting (Dividir el bundle en varios archivos)

3. Lazy Module Loading (Cargar módulos cuando se necesiten)

```js	
// En webpack:
button.addEventListener('click', () => {
  import(/* webpackChunkName: "text" */ './text.js').then(text => {
    text.default()
  })
})
```

4. Event delegation.

Aprovechando el flujo de eventos burbuja podemos utilizar la delegación de eventos, que consiste en escuchar un evento en un elemento padre para después poder delegarlo algunos de sus hijos, esto ayuda a optimizar mucho el código porque sólo estaríamos escuchando por un evento en el padre, y no en todos los hijos.

5. Client side rendering vs Server side rendering

**Client side rendering**

* Cada vez que entramos a un sitio web el servidor responde un archivo JS
* La página comienza a renderizar HTML a partir del JS recibido
* Todo nuestro contenido principal sucede dentro del cliente [Navegador o Browser]

**Server side rendering**

* Nuestra página se conecta al servidor, pero este le envía un HTML ya renderizado, es decir que se salta el proceso de esperar el JS para mostrar el contenido
* El JS seguirá siendo usado, pero lo separaremos para la interactividad

6. Static Site Generation

Static Site Generation nos renderiza y busca los datos una sola vez, pero nos da la ventaja de tener todo listo, pero solo se debe usar cuando los datos no cambien en tiempo real.

Por ejemplo si nuestra app tiene una llamada a una API externa, entonces si se conectan dos usuarios al mismo tiempo, se generará dos llamados a la API, lo que puede generar un problema de rendimiento. Entonces en este caso es mejor usar Static Site Generation para que solo se haga una llamada a la API y se genere el contenido.

7. Los Service workers actúan esencialmente como proxy servers asentados entre las aplicaciones web, el navegador y la red (cuando está accesible). Se pueden utilizar para:

* Generar cache
* Pre-fetching
* Offline experiences
* Background services