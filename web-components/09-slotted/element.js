class myElement extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode: 'open'})
  }

  getTemplate(){
    const template = document.createElement('template')
    template.innerHTML = `
    <section>
      <h1>
        <slot name="title"></slot>
      </h1>
      <p>
        <slot name="text"></slot>
      </p>
    </section>
    ${this.getStyles()}
    `

    return template
  }

  getStyles(){
    return `
    <style>
      ::slotted(span){
        font-size: 20px;
      }

      ::slotted(.red){
        color: red;
      }
    </style>
    `
  }

  render(){
    // El true sirve para clonar todas las etiquetas no solo el section
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback(){
    this.render()
  }
}

customElements.define('my-element', myElement)