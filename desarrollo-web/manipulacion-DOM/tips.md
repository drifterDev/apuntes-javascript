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