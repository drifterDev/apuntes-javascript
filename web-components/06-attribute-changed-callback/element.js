class myElement extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode: 'open'})
  }

  static get observedAttributes(){
    return ['title', 'text', 'img']
  }

  attributeChangedCallback(attr, oldVal, newVal){
    if(oldVal!==newVal){
      this[attr]=newVal
    }
  }

  getTemplate(){
    const template = document.createElement('template')
    template.innerHTML = `
    <section>
      <h2>${this.title}</h2>
      <p>${this.text}</p>
      <img src="${this.img}"/>
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