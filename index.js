let player = {
    name : "Michael",
    chips: 200
}

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;
function startGame(){
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

//draws a random card
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if(randomNumber >10){
        return 10;
    }else if(randomNumber === 1){
        return 11;
    }

    return randomNumber;
}

//Renders the whole match
function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    }else{
        message = "You're out of the game ";
        isAlive = false;
    }

    messageEl.textContent = message;
}

//draws the cards
function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
