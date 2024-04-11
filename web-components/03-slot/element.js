class myElement extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode: 'open'})
  }

  getTemplate(){
    const template = document.createElement('template')
    template.innerHTML = `
    <section>
      <h2>
        <slot></slot>
      </h2>
    </section>
    ${this.getStyles()}
    `

    return template
  }

  getStyles(){
    return `
    <style>
      h2 {
        color:red;
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