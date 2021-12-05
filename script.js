const buttonNew = document.querySelector(".bnt--new");

let scoreboard = [];
let currentScore = 0;
let activeplayer;
let isGameRunning;
const startGame = () => {
    scoreboard = [0,0];
}

const stringNew = document.querySelector('#score--0')
const stringNew1 = document.querySelector('#score--1')
const scoreNew1 = document.querySelector('.current-score')
const scoreNew = document.querySelector('.current-score')


const startGame = () => {
    scoreboard = [0,0];
    currentScore = 0;
    activeplayer = 0;
    isGameRunning = true;
};

startGame();
buttonNew.addEventListener('click',() => {
    startGame();
});


