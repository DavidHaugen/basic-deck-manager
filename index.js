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

// function handleDrag(){

// }




dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
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













// test drag

dragElement(document.document.querySelectorAll( ".drag" ));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}