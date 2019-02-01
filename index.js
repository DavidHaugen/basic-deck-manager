'use strict';

/*global $ */

function render(){
  // do a bunch
}

function handleDrawCard(){
  $('#draw-card').on('submit', function(event){
    event.preventDefault();
    console.log('draw');
    // remove first card in deck, push it to hand array
    // render()
  });
}

function handleDrawFive(){
  $('#draw-five').on('submit', function(event){
    event.preventDefault();
    console.log('draw 5');

  });
}
function handleEndTurn(){
  $('#end-turn').on('submit', function(event){
    event.preventDefault();
    console.log('end turn');
  
  });
}
function handleImprovement(){
  $('.improvement').on('submit', function(event){
    event.preventDefault();
    console.log('play as improvement');

  });
}

function handleDiscard(){
  $('.discard-card').on('submit', function(event){
    event.preventDefault();
    console.log('discard');
 
  });
}

function handlePermDiscard(){
  $('.perm-discard-card').on('submit', function(event){
    event.preventDefault();
    console.log('permanently discard');
  
  });
}


function main(){
  handleDrawCard();
  handleDrawFive();
  handleEndTurn();
  handleImprovement();
  handleDiscard();
  handlePermDiscard();
}

$(main);