'use strict';

function store() {

  const masterDeck = [
    {
      id:1,
      name: 'broadband',
      text: 'Gain $100 at the start of every turn'
    },
    {
      id: 4,
      name: 'Phishing',
      text: 'Take control of another player\'s improvement card'
    },
    {
      id: 9,
      name: 'Malware',
      text: 'Destroy something'
    },
    {
      id: 11,
      name: 'Greg </3',
      text:
        'Destroy two player improvement cards, or take one improvement card and put in your hand'
    },
    {
      id: 12,
      name: 'Modem',
      text: 'Gain 200 at the start of every turn'
    },
    {
      id: 13,
      name: 'Intranet',
      text:
        'At the start of each draft, draw one extra card at the top of the deck at no cost'
    },
    {
      id: 14,
      name: 'Firewall',
      text:
        'Do not play this card until you\'re being attacked. Protects against one hacking event'
    },
    {
      id: 15,
      name: 'Cybercrime',
      text: 'Steal $500 from another player\'s assets'
    }
  ];

  const deck = [
  ];

  const improvements = [];
  
  const discard = [];
  
  const hand = [];
  
  return {
    deck,
    improvements,
    discard,
    hand
  };
}