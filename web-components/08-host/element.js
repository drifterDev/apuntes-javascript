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
    :host{
      display: inline-block;
      width: 100%;
      min-width: 300px;
      max-width: 450px;
      font-size: 20px;
      background: grey;
    }

    :host(.blue){
      background: blue;
    }

    :host([red]){
      background:red;
    }

    :host([red]) h1{
      color: white;
    }

    :host-context(article.card){
      display:block;
      max-width: 100%;
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