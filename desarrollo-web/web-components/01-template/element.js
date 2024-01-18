class myElement extends HTMLElement{
  constructor(){
    super()
  }

  getTemplate(){
    const template = document.createElement('template')
    template.innerHTML = `
    <section>
      <h2>Hola mundo!</h2>
      <div>
        <p>Soy un parrafo de ejemplo</p>
      </div>
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
    this.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback(){
    this.render()
  }
}

customElements.define('my-element', myElement)