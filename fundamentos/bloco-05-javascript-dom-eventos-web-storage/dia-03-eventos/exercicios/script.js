function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function criarDiasDoMes () {
  let ulDias = document.querySelector('#days')

  for (let index = 0; index < decemberDaysList.length; index += 1) {

    let dia = decemberDaysList[index];
    let liDias = document.createElement('li');

    if (dia === 24 || dia === 31) {
      liDias.className = 'day holiday';
      liDias.innerHTML = dia;
      ulDias.appendChild(liDias);
    } else if (dia === 4 || dia === 11 || dia === 18) {
      liDias.className = 'day friday';
      liDias.innerHTML = dia;
      ulDias.appendChild(liDias);
    } else if (dia === 25) {
      liDias.className = 'day holiday friday'
      liDias.innerHTML = dia;
      ulDias.appendChild(liDias);
    } else {
      liDias.className = 'day';
      liDias.innerHTML = dia;
      ulDias.appendChild(liDias);
    }
  }
}

criarDiasDoMes();


function criarBotaoFeriados (nomeBotao) {
  let containerBotoes = document.querySelector('.buttons-container');
  let botaoFeriado = document.createElement('button');
  let botaoFeriadoID = 'btn-holiday';

  botaoFeriado.innerHTML = nomeBotao;
  botaoFeriado.id = botaoFeriadoID;

  containerBotoes.appendChild(botaoFeriado);
}

criarBotaoFeriados('Feriados')


function trocaCorFeriado () {
  let feriadoBotao = document.querySelector('#btn-holiday');
  let feriado = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)'
  let novaCor = 'red'

  feriadoBotao.addEventListener('click', function() {
    for (let index = 0; index < feriado.length; index += 1) {
      if (feriado[index].style.backgroundColor === novaCor) {
        feriado[index].style.backgroundColor = backgroundColor;
      } else {
        feriado[index].style.backgroundColor = novaCor;
      }
    }
  });
}

trocaCorFeriado();


function criaBotaoSexta (sexta) {
  let containerBotoes = document.querySelector('.buttons-container');
  let botaoSexta = document.createElement('button');
  let botaoSextaID = 'btn-friday';

  botaoSexta.innerHTML = sexta;
  botaoSexta.id = botaoSextaID

  containerBotoes.appendChild(botaoSexta)
}

criaBotaoSexta('Sexta-Feira')

function trocarSexta (sextaArray) {
  let botaoSexta = document.querySelector('#btn-friday');
  let sexta = document.getElementsByClassName('friday');
  let novoTexto = 'SEXTOU';

  botaoSexta.addEventListener('click', function () {
    for (let index = 0; index < sexta.length; index += 1) {
      if(sexta[index].innerHTML !== novoTexto) {
        sexta[index].innerHTML = novoTexto;
      } else {
        sexta[index].innerHTML = sextaArray[index];
      }
    }
  });
}

let sextasDeDezembro = [ 4, 11, 18, 25 ];
trocarSexta(sextasDeDezembro);

function zoomIn () {
  let dias = document.querySelector('#days');
  dias.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px'
    event.target.style.fontWeight = '600'
  });
}

function zoomOf () {
  let dias = document.querySelector('#days');
  dias.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px'
    event.target.style.fontWeight = '200'
  });
}

zoomIn();
zoomOf();

function novaTarefa (tarefa) {
  let containerTarefa = document.querySelector('.my-tasks');
  let nomeTarefa = document.createElement('span');
  
  nomeTarefa.innerHTML = tarefa
  containerTarefa.appendChild(nomeTarefa);
}

novaTarefa('Projeto');

function adcCorTarefa (cor) {
  let containerTarefa = document.querySelector('.my-tasks');
  let novaTarefa = document.createElement('div');

  novaTarefa.className = 'task';
  novaTarefa.style.backgroundColor = cor;
  containerTarefa.appendChild(novaTarefa);
}

adcCorTarefa('yellow');


function selecionaClasseDaTarefa () {
  let selecionaTarefa = document.getElementsByName('task selected');
  let minhasTarefas = document.querySelector('.task')

  minhasTarefas.addEventListener('click', function(event) {
    if (selecionaTarefa.length === 0) {
      event.target.className = 'task selected'
    } else {
      event.target.className = 'task'
    }
  })
}

selecionaClasseDaTarefa();


function corDia () {
  let selecionaTarefa = document.getElementsByClassName('task selected');
  let dias = document.querySelector('#days');
  let divTarefa = document.querySelector('.task');
  let corTarefa = divTarefa.style.backgroundColor;

  dias.addEventListener('click', function(event){
    let eventoCor = event.target.style.color;
    if (selecionaTarefa.length > 0 && eventoCor !== corTarefa) {
      let color = selecionaTarefa[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventoCor === corTarefa) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

corDia();

