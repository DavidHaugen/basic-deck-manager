'use strict';
/* global store, $*/

function generateHandHtml() {
  let result = store.hand.map((card) => {
    return `
    <div class="card">
      <div id="mydivheader">
        <h2>${card.name}</h2>
      </div>
      <div class="card-text">
        <p>${card.text}</p>
      </div>
      <div class="card-id">
        <p>Card ID: ${card.id}</>
      </div>
      <div class="card-button-container">
        <form class="improvement" data-id="${card.id}">
          <button type="submit"  id="improvement-button">Play as improvement</button>
        </form>
        <form class="discard-card"  id="discard-card-button" data-id="${card.id}">
            <button type="submit">Discard card</button>
        </form>
        <form class="perm-discard-card" id="perm-discard-card-button" data-id="${card.id}">
            <button type="submit">Permanently discard card</button>
        </form>
      </div>
    </div>
    `;
  });
  return result.join('');
}

function generateImprovementsHtml() {
  let result = store.improvements.map((card) => {
    return `
    <div class="card">
      <div id="mydivheader">
        <h2>${card.name}</h2>
      </div>
      <div class="card-text">
        <p>${card.text}</p>
      </div>
      <div class="card-id">
        <p>Card ID: ${card.id}</>
      </div>
      <div class="card-button-container">
        <form class="discard-card"  id="discard-card-button" data-id="${card.id}">
            <button type="submit">Discard card</button>
        </form>
        <form class="perm-discard-card" id="perm-discard-card-button" data-id="${card.id}">
            <button type="submit">Permanently discard card</button>
        </form>
      </div>
    </div>
    `;
  });
  return result.join('');
}

function render(){
  $('.hand').html(generateHandHtml());
  $('.company').html(generateImprovementsHtml());
}

function handleDrawCard(){
  $('#draw-card').on('submit', function(event){
    event.preventDefault();
    const toHand = store.deck.splice(0,1);
    store.hand.push(toHand[0]);
    render();
  });
}

function handleDrawFive(){
  $('#draw-five').on('submit', function(event){
    event.preventDefault();
    const fiveToHand = store.deck.splice(0,5);
    fiveToHand.forEach((item) => store.hand.push(item));
    render();

  });
}

function handleEndTurn(){
  $('#end-turn').on('submit', function(event){
    event.preventDefault();
    const toDiscard = store.hand.splice(0);
    store.deck.push(toDiscard);
    render();
  });
}

function handleAddCard(){
  $('.add-card').on('submit', function(event){
    event.preventDefault();
    const idToAdd = parseInt($('#card-id-input').val(), 10);
    store.deck.push(store.masterDeck.find((card) => card.id === idToAdd));
  });
}

function viewDeck(){
  $('#view-deck').on('submit', function(event){
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(store.deck);
  });
}

// to do: add a function that will discard a card with a specific ID from your deck in case you accidentally add the wrong card to your deck. 

function handleImprovement(){
  $('body').on('submit', '.improvement', function(event){
    event.preventDefault();
    const cardId = $(this).data('id');
    const toImprovement = store.hand.filter((card) => card.id === cardId);
    store.hand = store.hand.filter((card) => card.id !== cardId);
    store.improvements.push(toImprovement[0]);
    render();
  });
}

function handleDiscardFromHand(){
  $('body').on('submit', '.hand .discard-card', function(event){
    event.preventDefault();
    const cardId = $(this).data('id');
    const toDiscard = store.hand.filter((card) => card.id === cardId);
    store.hand = store.hand.filter((card) => card.id !== cardId);
    store.discard.push(toDiscard[0]);
    render();
  });
}

function handleDiscardFromImprovements(){
  $('body').on('submit', '.company .discard-card', function(event){
    event.preventDefault();
    const cardId = $(this).data('id');
    const toDiscard = store.improvements.filter((card) => card.id === cardId);
    store.improvements = store.improvements.filter((card) => card.id !== cardId);
    store.discard.push(toDiscard[0]);
    render();
  });
}

function handlePermDiscardFromHand(){
  $('body').on('submit', '.hand .perm-discard-card', function(event){
    event.preventDefault();
    const cardId = $(this).data('id');
    store.hand = store.hand.filter((card) => card.id !== cardId);
    // eslint-disable-next-line no-console
    console.log(`Permanently discarded cardID: ${cardId}`);
    render();
  });
}

function handlePermDiscardFromImprovements(){
  $('body').on('submit', '.company .perm-discard-card', function(event){
    event.preventDefault();
    const cardId = $(this).data('id');
    store.improvements = store.improvements.filter((card) => card.id !== cardId);
    // eslint-disable-next-line no-console
    console.log(`Permanently discarded cardID: ${cardId}`);
    render();
  });
}

// function shuffle(deck) {
//   var ctr = deck.length, temp, index;

// // While there are elements in the array
//   while (ctr > 0) {
// // Pick a random index
//       index = Math.floor(Math.random() * ctr);
// // Decrease ctr by 1
//       ctr--;
// // And swap the last element with it
//       temp = deck[ctr];
//       deck[ctr] = deck[index];
//       deck[index] = temp;
//   }
//   return deck;
// }
// var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(shuffle(myArray));
// expected output: [5,3,0,9,8,2,1,4,7,6]



function main(){
  handleDrawCard();
  handleDrawFive();
  handleEndTurn();
  handleImprovement();
  handlePermDiscardFromHand();
  handleAddCard();
  viewDeck();
  render();
  handleDiscardFromHand();
  handleDiscardFromImprovements();
  handlePermDiscardFromImprovements();
}

$(main);