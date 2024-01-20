class myElement extends HTMLElement{
  constructor(){
    super()
    console.log("Hola desde el constructor")
  }

  connectedCallback(){
    console.log("Hola desde el DOM")
  }

  disconnectedCallback(){
    console.log("Adios desde el DOM")
  }
}

customElements.define('my-element', myElement)

document.querySelector("my-element").remove()