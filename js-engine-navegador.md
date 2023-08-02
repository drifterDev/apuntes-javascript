## Conceptos de JavaScript

### JS Engine

El motor de JavaScript (JS Engine) es un programa que interpreta y ejecuta código JavaScript. Es responsable de analizar, compilar y ejecutar el código para que pueda ser comprendido y ejecutado por la máquina. Ejemplos populares de motores de JavaScript son V8, SpiderMonkey y JavaScriptCore.

### V8

V8 es un motor de JavaScript de código abierto creado por Google. Es utilizado en el navegador Google Chrome y en Node.js. V8 es conocido por ser rápido y eficiente, y se encarga de convertir el código JavaScript en un lenguaje de bajo nivel que la máquina puede entender y ejecutar.

### Objeto global (window / this)

El objeto global en JavaScript se refiere al objeto principal que se crea al principio de cada script. Hace referencia al window del navegador y también se puede acceder a el con this. Este objeto tiene múltiples métodos útiles para la interactividad del frontend.

### Hoisting

El hoisting es un comportamiento de JavaScript en el que las declaraciones de variables y funciones se mueven automáticamente hacia arriba (hasta el inicio) de su alcance actual durante la fase de compilación. Esto significa que puedes usar una variable o función antes de declararla explícitamente en el código, pero se le asignará el valor de undefined.

### Memory Heap

El memory heap es una región de la memoria donde se asignan y almacenan los objetos y variables que se crean en un programa de JavaScript. Es donde se guarda la información dinámica durante la ejecución del código y se organiza en forma de estructuras de datos, como objetos y arreglos.

### Call Stack

La call stack (pila de llamadas) es una estructura de datos que registra y rastrea las funciones que se están ejecutando en un programa en un momento dado. Cada vez que se llama a una función, se agrega un marco de función a la parte superior de la pila, y cuando se completa la ejecución de una función, su marco se elimina de la pila.

### Garbage Collection

El recolector de basura es un algoritmo interno del entorno de ejecución de JavaScript que se encarga de identificar y liberar la memoria ocupada por objetos o variables que ya no son accesibles ni utilizados por el programa.

### Stack Overflow

Un stack overflow (desbordamiento de pila) ocurre cuando la pila de llamadas se llena y no puede acomodar más marcos de función. Esto sucede cuando una función se llama recursivamente sin una condición de terminación, lo que lleva a un crecimiento infinito de la pila. Como resultado, se produce un error y el programa se detiene.

### Runtime Engine

El runtime engine (motor de tiempo de ejecución) es un entorno de ejecución que proporciona todas las herramientas y recursos necesarios para ejecutar y gestionar un programa de JavaScript. Incluye el motor de JavaScript, el objeto global, la memoria heap, la pila de llamadas, el recolector de basura y otras funcionalidades necesarias para ejecutar el código de manera eficiente.
