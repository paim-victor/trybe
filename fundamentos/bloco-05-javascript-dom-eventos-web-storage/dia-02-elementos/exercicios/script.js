// 1. 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let corpo = document.body;
let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM'
corpo.appendChild(titulo);

// 2. 🚀 Adicione a tag main com a classe main-content como filho da tag body;

let menu = document.createElement('main');
menu.className = 'main-content'
corpo.appendChild(menu);

// 3. 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sessao = document.createElement('section')
sessao.className = 'center-content'
menu.appendChild(sessao)

// 4. 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let texto = document.createElement('p')
texto.innerText = 'algum texto'
sessao.appendChild(texto)

// 5. 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let conteudoDaEsquerda = document.createElement('section')
conteudoDaEsquerda.className = 'left-content'
menu.appendChild(conteudoDaEsquerda)

// 6. 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let conteudoDaDireita = document.createElement('section')
conteudoDaDireita.className = 'right-content'
menu.appendChild(conteudoDaDireita)

// 7. 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let imagem = document.createElement('img')
imagem.className = 'small-image'
imagem.src = 'https://picsum.photos/200'
conteudoDaEsquerda.appendChild(imagem)

// 8. 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let listaNaoOrdenada = document.createElement('ul')
conteudoDaDireita.appendChild(listaNaoOrdenada)
let valoresDaLista = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
for (let numero in valoresDaLista) {
  let elementoDaLista = document.createElement('li')
  elementoDaLista.inner = valoresDaLista[numero]
  listaNaoOrdenada.appendChild(elementoDaLista)
}


// 9. 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3; index += 1){
  let elementosH3 = document.createElement('h3')
  elementosH3.innerHTML = 'Lista ' + index;
  menu.appendChild(elementosH3);
}

// SEGUNDA PARTE

// 1.🚀 Adicione a classe title na tag h1 criada;

texto.className = 'title'

// 2.🚀 Adicione a classe description nas 3 tags h3 criadas;

let elementosH3 = document.getElementsByTagName('h3')
for (let index = 0; index <= 2; index += 1){
  elementosH3[index].className = 'description'
}

// 3.🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

let sessaoConteudoDaEsquerda = document.getElementsByClassName('left-content')[0]
menu.removeChild(sessaoConteudoDaEsquerda)

// 4.🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

let sessaoConteudoDaDireita = document.getElementsByClassName('right-content')[0]
sessaoConteudoDaDireita.style.marginRight = 'auto'

// 5.🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

let corDeFundo = document.getElementsByClassName('center-content')[0]
corDeFundo.style.background = 'green'

// 6.🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

let ul = document.getElementsByTagName('ul')[0]
ul.lastChild.remove();
ul.lastChild.remove();

