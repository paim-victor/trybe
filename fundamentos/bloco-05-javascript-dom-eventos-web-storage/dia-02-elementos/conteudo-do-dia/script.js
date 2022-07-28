// BUSCANDO ELEMENTOS

// const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

// const pai = elementoOndeVoceEsta.parentElement;
// pai.style.color = 'blue'

// const primeiroFilhoDoFilho = pai.firstElementChild;

// const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// const textElement = elementoOndeVoceEsta.nextSibling;

// const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// const terceiroFilho2 = elementoOndeVoceEsta.nextElementSibling;


// CRIANDO ELEMENTOS

// let quintoFilho = document.createElement('section');
// quintoFilho.id = 'quintoFilho';
// pai.appendChild(quintoFilho)

// console.log(quintoFilho)

// let terceiroFilhoDoFilho = document.createElement('section');
// terceiroFilhoDoFilho.id = 'terceiroFilhoDoFilho';
// elementoOndeVoceEsta.appendChild(terceiroFilhoDoFilho);

// console.log(terceiroFilhoDoFilho)

// const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
// let primeiroFilhoDoFilhoDoFilho = document.createElement('section');
// primeiroFilhoDoFilhoDoFilho.id = "primeiroFilhoDoFilhoDoFilho";
// primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoDoFilho);

// console.log(primeiroFilhoDoFilhoDoFilho)

// const terceiroFilho = pai.lastElementChild.previousElementSibling;
// console.log(terceiroFilho)

// REMOVENDO ELEMENTOS

const pai = document.getElementById('pai');
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')

for (let index = pai.childNodes.length - 1; index -= 1;) {
  const filho = pai.childNodes[index];
  if (filho !== elementoOndeVoceEsta) {
    filho.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();