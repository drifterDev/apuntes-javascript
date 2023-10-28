import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import clases from './style.module.css'
import img from './gato.jpg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <hr/>
    <img id="img"/>
  </div>
`

setupCounter(document.querySelector('#counter'))
const btn = document.getElementById('counter');
btn.classList.add(clases.btn);

const imgCat = document.getElementById('img');
imgCat.src = img;
imgCat.classList.add(clases.gato);