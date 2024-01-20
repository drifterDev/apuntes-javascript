# Web Components

1. Custom elements

```html	
<my-element></my-element>
```

```js
class myElement extends HTMLElement{
  constructor(){
    super()
    this.p = document.createElement('p')
  }

  connectedCallback(){
    this.p.textContent='Hola mundo!'
    this.appendChild(this.p)
  }
}

customElements.define('my-element', myElement)
```

2. Template

```js
class myElement extends HTMLElement{
  constructor(){
    super()
  }

  getTemplate(){
    const template = document.createElement('template')
    template.innerHTML = `
    <h2>Hola mundo!</h2>
      ${this.getStyles()}
    `
    return template
  }

  getStyles(){
    return `
      <style>
        h2{
          color:red;
        }
      </style>
    `
  }

  render(){
    this.appendChild(this.getTemplate().content.cloneNode(true))
  }

  connectedCallback(){
    this.render()
  }
}

customElements.define('my-element', myElement)
```

3. Shadow DOM

```js
class myElement extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode: 'open'})
  }

  // ...

  render(){
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
  }

  // ...
}
```

4. Slots

```html
<my-element>Hola mundo!</my-element>
```

```js
class myElement extends HTMLElement{
  // ...

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

  // ...
}
```

5. Multiple slots

```html
<my-element>
  <span slot="title">Hola mundo!</span>
  <span slot="body">Soy un parrafo</span>
</my-element>
```

```js
class myElement extends HTMLElement{
  // ...

  getTemplate(){
    const template = document.createElement('template')
    template.innerHTML = `
    <section>
      <h2>
        <slot name="title"></slot>
      </h2>
      <div>
        <p>
          <slot name="body"></slot>
        </p>
      </div>
    </section>
      ${this.getStyles()}
    `
    return template
  }

  // ...
}
```

6. Atributos

```html
<my-element title="Hola mundo!" parrafo="Soy un parrafo"></my-element>
```

```js
class myElement extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode: 'open'})
    this.title = this.getAttribute('title')
    this.parrafo = this.getAttribute('parrafo')
  }

  // ...

  getTemplate(){
    const template = document.createElement('template')
    template.innerHTML = `
    <section>
      <h2>
        ${this.title}
      </h2>
      <div>
        <p>
          ${this.parrafo}
        </p>
      </div>
    </section>
      ${this.getStyles()}
    `
    return template
  }

  // ...
}
```

7. Observar atributos

```js
class myElement extends HTMLElement{
  static get observedAttributes(){
    return ['title', 'parrafo']
  }

  attributeChangedCallback(attr, oldVal, newVal){
    if(oldVal !== newVal){
      this[attr] = newVal
    }
  }

  // ...
}
```

8. Disconnected callback

```js
class myElement extends HTMLElement{
  // ...

  disconnectedCallback(){
    console.log('Me fui')
  }
}
```

9. Host

```html
<my-element class="blue"></my-element>
<my-element yellow></my-element>
<article class="card">
  <my-element></my-element>
</article>
```


```js
class myElement extends HTMLElement{
  // ...

  getStyles(){
    return `
      <style>
        :host{
          display: inline-block;
          width: 100%;
          min-width: 300px;
          max-width: 450px;
          font-size: 16px;
          background: blue;
        }
        :host(.blue){
          background: blue;
        }

        :host([yellow]){
          background: yellow;
        }

        :host([yellow]) h2{
          color: green;
        }

        :host-context(article.card){
          display: block;
          max-width: 100%;
        }
      </style>
    `
  }

  // ...
}
```

10. Slotted

```html
<my-element>
  <span slot="title">Hola mundo!</span>
  <span slot="body" class="red">Soy un parrafo</span>
</my-element>
```

```js
class myElement extends HTMLElement{
  // ...

  getStyles(){
    return `
      <style>
        ::slotted(span){
          font-size: 30px;
        }

        ::slotted(.red){
          color: red;
        }
      </style>
    `
  }

  // ...
}
```

11. Custom properties

Se pueden cambiar los valores de las variables CSS desde el HTML

```html	
<style>
  my-element{
    --primary-color: tomato;
    --secondary-color: salmon;
  }

  .blue{
    --primary-color: blue;
    --secondary-color: lightblue;
  }
</style>
```

```html
<my-element>
  <span slot="title">Hola mundo!</span>
  <span slot="body">Soy un parrafo</span>
</my-element>

<my-element class="blue">
  <span slot="title">Hola mundo!</span>
  <span slot="body">Soy un parrafo</span>
</my-element>
```

```js
class myElement extends HTMLElement{
  // ...

  getStyles(){
    return `
      <style>
        :host{
          --primary-color: tomato;
          --secondary-color: salmon;
        }

        h2{
          color: var(--primary-color);
        }

        p{
          color: var(--secondary-color);
        }
      </style>
    `
  }

  // ...
}
```