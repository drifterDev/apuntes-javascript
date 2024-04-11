# Manipulación del DOM

1. Selectores

```js	
document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('tag')
document.getElementsByName('name')
document.querySelector('selector')
document.querySelectorAll('selector')
```

2. NodeList vs Array

```js	
const nodeList = document.querySelectorAll('selector')
const array = [...nodeList]
```

3. Crear elementos

```js
// Solo se ha creado, aún no se agrega al DOM
const etiquetaH1 = document.createElement("h1")
// Solo se ha creado, aún no se agrega al DOM
const texto = document.createTextNode("¡Hola, Mundo!")
```	

4. Agregar elementos

```js
const parent = document.querySelector('selector')
const child = document.createElement('element')
parent.appendChild(child)
parent.append(child, child2, child3)
parent.insertBefore(child, referenceChild)
parent.insertAdjacentElement(position, child)
```

El `insertAdjacentElement` recibe dos parámetros, el primero es la posición y el segundo es el elemento a insertar. Las posiciones son:

- beforebegin: Lo inserta antes del nodo
- afterbegin: Lo inserta despues del nodo
- beforeend: Lo inserta antes de donde finaliza el nodo
- afterend: Lo inserta después de donde finaliza el nodo

5. innerHtml y outerHtml

```js
const parent = document.querySelector('selector')
parent.innerHTML = '<p>¡Hola, Mundo!</p>'
console.log(parent.outerHTML) // <div><p>¡Hola, Mundo!</p></div>
```

6. Atributos y propiedades

```js
// Al seleccionar el nodo HTML, JavaScript lo convierte en un objeto!
const input = document.querySelector("input")

// podemos modificarlo como cualquier otro objeto de JavaScript
input.placeholder = "Escribe algo"
input.value = 2
input.type = "number"
```	

7. Eliminar nodos

```js
// Selecciono el elemento que quiero eliminar
const nodo = document.querySelector("selector")
// Selecciono a su padre directo
const parent = nodoAEliminar.parentElement
const newNodo = document.createElement("p")

parent.removeChild(nodo) // forma 1
nodo.remove() // forma 2
parent.replaceChild(newNodo, nodo) // forma 3
```

8. Operaciones en lote

```js
const parent = document.querySelector("selector")
const nodos = []
for (let i = 0; i < 10; i++) {
  const nodo = document.createElement("p")
  nodo.textContent = `Soy el nodo número ${i}`
  nodos.push(nodo)
}
parent.append(...nodos)
```

9. Añadiendo estilos

```js
const nodo = document.querySelector("selector")
nodo.style.color = "red" // Forma 1
nodo.style = "color: red;" // Forma 2
nodo.classList.add("text-red-500") // Forma 3
```

10. Eventos

```js
const button = document.querySelector("button")
button.onClick = () => {
    alert("Me has clickado")
} // Forma 1
button.addEventListener("click", miFuncion) // Forma 2
button.removeEventListener("click", miFuncion) // Se necesita que la función tenga nombre para eliminarla, entonces no funciona con funciones anónimas
```

```html
<button onclick="miFuncion">Clicame</button> <!-- Forma 3 -->
```

11. Event propagation

Si le ponemos un event listener a los 3 divs, y clicas dentro del div 3, también estás clicando el div2 (porque el div3 está dentro del div2), y a su vez estás clicando el div1 (porque estos 2 divs están dentro de div1), por tanto, el evento se va a propagar hacia los 3 divs. . La forma de deterlo es usando el método stopPropagation() que viene dentro del argumento event que cualquier evento nos provee

```html
<div id="div1">
    <div id="div2">
        <div id="div3">
            Hola
        </div>
    </div>
</div>
```

```js
div3.addEventListener("click", (event) => {
  alert("Hola")
  event.stopPropagation()
})
```

12. Event delegation

```html
<div id="div">
    <p>Hola</p>
</div>
```

```js
const div=document.getElementById("div")
const nuevoP=document.createElement("p")
nuevoP.textContent="Hola"
div.appendChild(nuevoP)

// Detectará el evento en cualquier p hijo
div.addEventListener("click", (event) => {
  if (event.target === "p") {
    alert("Hola")
  }
})
```