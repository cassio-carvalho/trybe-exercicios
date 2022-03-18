function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1:
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function Dezembro() {
  let lista = document.getElementById("days");
  for (i = 0; i < dezDaysList.length; i += 1) {
    let listaNova = document.createElement("li");
    listaNova.classList = "day";
    if (
      dezDaysList[i] === 24 ||
      dezDaysList[i] === 25 ||
      dezDaysList[i] === 31
    ) {
      listaNova.classList.add("holiday");
    }
    if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18 ||
      dezDaysList[i] === 25
    ) {
      listaNova.classList.add("friday");
    }
    listaNova.innerText = dezDaysList[i];
    lista.appendChild(listaNova);
  }
}
Dezembro();

// Exercício 2:
function Feriados(Feriados) {
  let botoes = document.querySelector("body").children[3];
  let botao = document.createElement("button");
  botao.innerText = "Feriados";
  botao.id = "btn-holiday";
  botoes.appendChild(botao);
}
Feriados();

// Exercício 3:
function mudarCor() {
  let botaoFeriado = document.querySelector("#btn-holiday");
  let corFeriados = document.querySelectorAll(".holiday");
  let corAntiga = "rgb(238,238,238)";
  let corNova = "red";

  botaoFeriado.addEventListener("click", function () {
    for (a = 0; a < corFeriados.length; a += 1) {
      if (corFeriados[a].style.backgroundColor === corNova) {
        corFeriados[a].style.backgroundColor = corAntiga;
      } else {
        corFeriados[a].style.backgroundColor = corNova;
      }
    }
  });
}
mudarCor();

// Exercício 4:
function String() {
  let containerDeBotao = document.querySelector(".buttons-container");
  let button = document.createElement("button");
  button.innerText = "Sexta-feira";
  button.id = "btn-friday";
  containerDeBotao.appendChild(button);
}
String();

// Exercício 5:
function sextaFeira(sexta_feira) {
  let botaoSexta = document.querySelector("#btn-friday");
  let textoSexta = document.querySelectorAll(".friday");
  let textoNovo = "Sextou";

  botaoSexta.addEventListener("click", function () {
    for (a = 0; a < textoSexta.length; a += 1) {
      if (textoSexta[a].innerHTML !== textoNovo) {
        textoSexta[a].innerHTML = textoNovo;
      } else {
        textoSexta[a].innerHTML = sexta_feira[a];
      }
    }
  });
}
let sexta_feiras = [4, 11, 18, 25];
sextaFeira(sexta_feiras);

// Exercício 6:

function big() {
  let lista2 = document.getElementById("days");
  lista2.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
    event.target.style.color = "green";
  });
}
function small() {
  let lista3 = document.getElementById("days");
  lista3.addEventListener("mouseout", function (event) {
    event.target.style.fontWeight = "200";
    event.target.style.fontSize = "20px";
    event.target.style.color = "#777";
  });
}
big();
small();

// Exercício 7:
function tarefa(Trabalhar) {
  let myTasks = document.querySelector(".my-tasks");
  let span = document.createElement("span");
  span.innerHTML = Trabalhar;
  myTasks.appendChild(span);
}
tarefa("Trabalho");

// Exercício 8:
function legenda(cor) {
  let myTasks = document.querySelector(".my-tasks");
  let div = document.createElement("div");
  div.classList = "task";
  div.style.backgroundColor = cor;
  myTasks.appendChild(div);
}
legenda("green");

// Exercício 9
function selecionado() {
  let task = document.querySelector(".task");
  task.addEventListener("click", function () {
    if (task.className === 'task') {
      task.classList = "task-selected";
    } else {
      task.classList = "task";
    }
  });
}
selecionado();

// Exercício 10:

