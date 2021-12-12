const buttonNew = document.querySelector(".bnt--new");

let scoreboard = [];
let currentScore = 0;
let activeplayer;
let isGameRunning;
const startGame = () => {
    scoreboard = [0,0];
}

const stringNew = document.querySelector('#score--0');
const stringNew1 = document.querySelector('#score--1');
const scoreNew1 = document.querySelector('.current-score');
const scoreNew = document.querySelector('.current-score');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0 ');
const player2 = document.querySelector('.player--1 ');
const butonRollDice = document.querySelector('.wbutton--roll');
const buttonHold = document.querySelector('.button--hold');

const startGame = () => {
    scoreboard = [0,0];
    currentScore = 0;
    activeplayer = 0;
    isGameRunning = true;
    dice.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--Active');
    player2.classList.remove('player--Active');
  
};

const holdMyScore = () => {

};
const rollMyDice = () => {

};
const switchplayer = () => {

}
startGame();
buttonNew.addEventListener('click',() => {
    startGame();
});

buttonRollDice.addEventListener('click',()=> {
    rollMyDice();
});

buttonHold.addEventListener('click',()=> {
    holdMyScore();
});

