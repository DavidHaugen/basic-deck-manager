'use strict';
/* global store, $*/


function generateHandHtml() {
  let result = store.hand.map((card) => {
    return `
    <div class="card flex type-${card.type}">
      <div id="mydivheader">
        <div class="card-costs flex">
          <p class="card-cost">$${card.cost}<p>
          <p class="employee-cost">Employees: ${card.employee}
        </div>
        <h3>${card.name}</h3>
      </div>
      <div class="card-text">
        <p>${card.outcome}</p>
      </div>
      <div class="card-button-container">
       <p class="card-id">Card ID: ${card.id}</p>
        <form class="improvement" data-id="${card.id}">
          <button type="submit"  id="improvement-button">Play as improvement</button>
        </form>
        <form class="discard-card"  id="discard-card-button" data-id="${card.id}">
            <button type="submit">Discard card</button>
        </form>
        <form class="perm-discard-card" id="perm-discard-card-button" data-name="${card.name}"data-id="${card.id}">
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
    <div class="card flex type-${card.type}">
      <div id="mydivheader">
       <div class="card-costs flex ">
          <p class="card-cost">$${card.cost}<p>
          <p class="employee-cost">Employees: ${card.employee}
        </div>
        <h3>${card.name}</h3>
      </div>
      <div class="card-text">
        <p>${card.outcome}</p>
      </div>
      <div class="card-button-container">
        <p class="card-id">Card ID: ${card.id}</>
        <form class="discard-card"  id="discard-card-button" data-id="${card.id}">
            <button type="submit">Discard card</button>
        </form>
        <form class="perm-discard-card" id="perm-discard-card-button" data-name="${card.name}" data-id="${card.id}">
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
  $('.card-count').html(`Cards in deck: ${store.deck.length}`);
  $('.discard-count').html(`Cards in discard: ${store.discard.length}`);
}

function handleDrawCard(){
  $('#draw-card').on('submit', function(event){
    event.preventDefault();
    const toHand = store.deck.splice(0,1);
    if(toHand.length === 0){
      render();
    } else{
      store.hand.push(toHand[0]);
      render();
    }
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

function addToHand(){
  $('.add-to-hand').on('submit', function(event){
    event.preventDefault();
    const idToAdd = parseInt($('#to-hand-id-input').val(), 10);
    store.hand.push(store.masterDeck.find((card) => card.id === idToAdd));
    const cardName = store.masterDeck.find((card) => card.id === idToAdd).name;
    $('.message').html(`
    <p><span class='card-name'>${cardName}</span> was added to your hand.</p><p>card ID: <span class='card-id'>${idToAdd}</span></p>
    `);
    $('#card-id-input').val('');
    render();
  });
}

function handleEndTurn(){
  $('#end-turn').on('click', function(event){
    event.preventDefault();
    const toDiscard = store.hand.splice(0);
    toDiscard.forEach((card) => store.discard.push(card));
    const fiveToHand = store.deck.splice(0,5);
    fiveToHand.forEach((item) => store.hand.push(item));
    render();    
  });
}

function handleAddCard(){
  $('.add-card').on('submit', function(event){
    event.preventDefault();
    const idToAdd = parseInt($('#card-id-input').val(), 10);

    // if(store.masterDeck.find((card) => {
    //   card.id === idToAdd;}) === undefined){
    //   $('.message').html(`
    //       <p>card ID <span class='card-id'>${idToAdd}</span> did not match any cards in the master deck. Please double-check the ID and try again.</p>
    //     `);
    //   $('#card-id-input').val('');
    // } else{

    store.deck.push(store.masterDeck.find((card) => card.id === idToAdd));
    const cardName = store.masterDeck.find((card) => card.id === idToAdd).name;
    $('.message').html(`
    <p><span class='card-name'>${cardName}</span> was added to your deck.</p><p>card ID: <span class='card-id'>${idToAdd}</span></p>
    `);
    $('#card-id-input').val('');
    render();
  });
}

function handleRemoveCard(){
  $('.remove-card').on('submit', function(event){
    event.preventDefault();
    const idToRemove = parseInt($('#remove-card-id-input').val(), 10);
    let cardIndex = store.deck.findIndex((card) => card.id === idToRemove);

    // if(cardIndex === -1){
    //   cardIndex = null;
    //   $('.message').html(`
    // <p>card ID <span class='card-id'>${idToRemove}</span> did not match any cards in your deck. Please double-check the ID and try again.</p>
    // `);
    //   $('#remove-card-id-input').val('');
    // } else{

    const cardName = store.masterDeck.find((card) => card.id === idToRemove).name;
    $('.message').html(`
    <p><span class='card-name'>${cardName}</span> was removed from your deck.</p><p>card id: <span class='card-id'>${idToRemove}</span></p>
    `);
    $('#remove-card-id-input').val('');
    store.deck.splice(cardIndex,1);
    render();
  });
}

function viewDeck(){
  $('#view-deck').on('submit', function(event){
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(store.deck);
  });
}

function viewDiscard(){
  $('#view-discard').on('submit', function(event){
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(store.discard);
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
    const cardName = $(this).data('name');
    store.hand = store.hand.filter((card) => card.id !== cardId);
    render();
    $('.message').html(`
    <p><span class='card-name'>${cardName}</span> was permanently discarded.</p><p>card id: <span class='card-id'>${cardId}</span></p>
    `);
  });
}

function handlePermDiscardFromImprovements(){
  $('body').on('submit', '.company .perm-discard-card', function(event){
    event.preventDefault();
    const cardId = $(this).data('id');
    const cardName = $(this).data('name');
    store.improvements = store.improvements.filter((card) => card.id !== cardId);
    $('.message').html(`
    <p><span class='card-name'>${cardName}</span> was permanently discarded.</p><p>card id: <span class='card-id'>${cardId}</span></p>
    `);
    render();
  });
}

function addEmployee1(){
  $('#employee-1').on('click', function(event){
    event.preventDefault();
    store.deck.push(store.employees.find((card) => card.id === 1));
    render();
  });
}

function addEmployee3(){
  $('#employee-3').on('click', function(event){
    event.preventDefault();
    store.deck.push(store.employees.find((card) => card.id === 3));
    render();
  });
}

function addEmployee6(){
  $('#employee-6').on('click', function(event){
    event.preventDefault();
    store.deck.push(store.employees.find((card) => card.id === 6));
    render();
  });
}

function handleShuffle(){
  $('#shuffle').on('submit', function(event){
    event.preventDefault();
    shuffle(store.deck);
  });
}


function shuffle(deck) {
  var ctr = deck.length, temp, index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = deck[ctr];
    deck[ctr] = deck[index];
    deck[index] = temp;
  }
  return deck;
}

function handleClear(){
  $('.clear-form').on('submit', function(event){
    event.preventDefault();
    $('.message').html('<p></p>');
  });
}

function moveToDeck(){
  $('#move-to-deck').on('submit', function(event){
    event.preventDefault();
    const toMove = store.discard.splice(0);
    toMove.forEach((card) => store.deck.push(card));
    render();
    shuffle(store.deck);
  });
}

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
  handleShuffle();
  viewDiscard();
  handleRemoveCard();
  handleClear();
  moveToDeck();
  addEmployee1();
  addEmployee3();
  addEmployee6();
  addToHand();
}

$(main);