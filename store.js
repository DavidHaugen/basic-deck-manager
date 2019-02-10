'use strict';

// eslint-disable-next-line no-unused-vars
let store = (function () {

  const masterDeck = [
    {
      id: 1,
      name: 'Broadband',
      outcome: 'Gain $100 at the start of every turn',
      employee: 1,
      cost: 100,
      type: 'Improvement'
    },
    {
      id: 2,
      name: 'Phishing',
      outcome:
        'Take control of another player\'s improvement card and add it to your Company',
      employee: 3,
      cost: 400,
      type: 'Attack'
    },
    {
      id: 3,
      name: 'Modem',
      outcome: 'Gain $200 at the start of every turn',
      employee: 2,
      cost: 300,
      type: 'Improvement'
    },
    {
      id: 4,
      name: 'Malware',
      outcome: 'Destroy one improvement on up to two different players',
      employee: 6,
      cost: 500,
      type: 'Attack'
    },
    {
      id: 5,
      name: 'Intranet',
      outcome:
        'At the start of each draft, draw one extra card at the top of the deck at nocost You may choose whether or not to keep this card',
      employee: 3,
      cost: 200,
      type: 'Improvement'
    },
    {
      id: 6,
      name: 'Firewall',
      outcome:
        'Do not play this card until you\'re being attacked.  Protects against one hacking event.',
      employee: 0,
      cost: 300,
      type: 'Defense'
    },
    {
      id: 7,
      name: 'Cybercrime',
      outcome: 'Steal $500 from another player',
      employee: 3,
      cost: 700,
      type: 'Attack'
    },
    {
      id: 8,
      name: 'SQL Injection',
      outcome:
        'Play on an opponent\'s Company. Until  this card is removed, gain 100 each time they draw a card. ',
      employee: 2,
      cost: 400,
      type: 'Attack'
    },
    {
      id: 9,
      name: 'Stealing Bandwidth',
      outcome:
        'The player to your left assembles their improvement cards in their hand. Choose a card at random and add it to your hand.',
      employee: 0,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 10,
      name: 'LAN Party',
      outcome:
        'Select an opponent. Remove $1000 from their account. All other players in the game receive 200$. Permanently discard this card.',
      employee: 7,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 11,
      name: 'Percent of a Percent',
      outcome:
        'If another player gains more than $500 in a single turn, the owner of this improvement also gains $200.  ',
      employee: 6,
      cost: 400,
      type: 'Improvement'
    },
    {
      id: 12,
      name: 'Throttle Bandwidth',
      outcome:
        'Play this card on another player\'s Company. They can only play 1 card a turn while this card is in their Company. That player may pay $300 to permanently discard this card.',
      employee: 6,
      cost: 500,
      type: 'Attack'
    },
    {
      id: 13,
      name: 'Let me talk to a live person.',
      outcome: 'You get one free action this turn.',
      employee: 0,
      cost: 0,
      type: 'Improvement'
    },
    {
      id: 14,
      name: 'Big sale',
      outcome:
        'While this card is in play, you only pay half the listedcostwhen drafting cards. If this card is later discarded, you must pay $500.',
      employee: 5,
      cost: 500,
      type: 'Improvement'
    },
    {
      id: 15,
      name: 'Email from a Nigerian prince',
      outcome:
        'Place this card in a random player\'s discard pile. They must discard one Improvement currently in play, of their choosing',
      employee: 0,
      cost: 200,
      type: 'Attack'
    },
    {
      id: 16,
      name:
        'One of those racks of phones doing something online to make money',
      outcome:
        'On your turn, you may discard any number of cards from your hand. Place them face-down on this card after showing them to your opponents. These cards are not in play and you gain none of their stated affects. During the Get Money phase, you gain $100 for every card placed on this card.',
      employee: 9,
      cost: 500,
      type: 'Improvement'
    },
    {
      id: 17,
      name: 'Bloatware',
      outcome:
        'May be played on any player\'s company. On their turn, they must select another player. Draw the top card from their draw pile and add it to your discard pile.',
      employee: 4,
      cost: 300,
      type: 'Improvement'
    },
    {
      id: 18,
      name: 'Smart Assistant',
      outcome: 'Draw a card once per turn.',
      employee: 1,
      cost: 100,
      type: 'Improvement'
    },
    {
      id: 19,
      name: 'Donate plasma',
      outcome: 'Gain $100',
      employee: 0,
      cost: 0,
      type: 'Regular'
    },
    {
      id: 20,
      name: 'If this, then that',
      outcome:
        'May be played at any time. When another player draws a card, discards a card, or plays a card, you may do the same action for free. Cards drawn this way can be kept until your next turn.',
      employee: 0,
      cost: 300,
      type: 'Regular'
    },
    {
      id: 21,
      name: 'Didn\'t need that anyway',
      outcome: 'Discard a card. Gain $200',
      employee: 1,
      cost: 300,
      type: 'Regular'
    },
    {
      id: 22,
      name: 'VPN',
      outcome: 'Block one attack.',
      employee: 1,
      cost: 200,
      type: 'Defense'
    },
    {
      id: 23,
      name: 'Not-so-secretly an MLM',
      outcome: 'If you purchase anemployeecard this round, gain a second copy of that card',
      employee: 3,
      cost: 500,
      type: 'Regular'
    },
    {
      id: 24,
      name: 'Micro-transactions',
      outcome: 'Gain $1000. You may not play any other cards this round.',
      employee: 12,
      cost: 500,
      type: 'Regular'
    },
    {
      id: 25,
      name: 'Thief',
      outcome: 'Discard one of your own improvements. Steal one improvement from another player',
      employee: 7,
      cost: 400,
      type: 'Attack'
    },
    {
      id: 26,
      name: 'Encryption',
      outcome: 'You may use an Improvement card that typically would not work for your character/company',
      employee: 0,
      cost: 100,
      type: 'Regular'
    },
    {
      id: 27,
      name: 'Cis Key',
      outcome:
        'Look at the player to your left\'s hand. You will play their next turn for them.',
      employee: 9,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 28,
      name: 'Net Troll',
      outcome: 'The player with the most net worth must discard an Improvement with a minimum value of $500 of their choice. If they do not have an Improvement worth $500, they must discard the highest value Improvement.',
      employee: 4,
      cost: 300,
      type: 'Regular'
    },
    {
      id: 29,
      name: 'Ads. Everywhere. As many as you can fit.',
      outcome: 'Discard 4 cards (this card counts as 1). Gain $700.',
      employee: 3,
      cost: 400,
      type: 'Regular'
    },
    {
      id: 30,
      name: 'Dividend',
      outcome: 'Every time you shuffle your deck, gain $200',
      employee: 2,
      cost: 300,
      type: 'Improvement'
    },
    {
      id: 31,
      name: 'Security team',
      outcome: 'Can either block one attack or be played on your turn to grant +2 employees for one turn.',
      employee: 0,
      cost: 500,
      type: 'Defense'
    },
    {
      id: 32,
      name: 'New virus definitions',
      outcome: 'Block one attack. After doing so, place this card in front of you as an improvement. The next time another player attacks you, that attack is blocked and this card is permanently discarded.',
      employee: 0,
      cost: 400,
      type: 'Defense'
    },
    {
      id: 33,
      name: 'You got funded, but your app sucked',
      outcome: 'gain $200. When you play this card, discard it directly into the draft area.',
      employee: 1,
      cost: 0,
      type: 'Regular'
    },
    {
      id: 34,
      name: 'Lean gamma five',
      outcome: 'You may permanently discard a card from your hand.',
      employee: 0,
      cost: 300,
      type: 'Regular'
    },
    {
      id: 35,
      name: 'Recruiting team',
      outcome: 'Gain an Employee[1]',
      employee: 1,
      cost: 200,
      type: 'Regular'
    },
    {
      id: 36,
      name: 'Morning coffee',
      outcome: 'Gain $200 and add 1 Employee[1] card to your hand this round.',
      employee: 0,
      cost: 400,
      type: 'Regular'
    },
    {
      id: 37,
      name: 'Merger',
      outcome: 'Your company has merged with another conglomerate. Gain 1 Employee[6].',
      employee: 3,
      cost: 800,
      type: 'Regular'
    },
    {
      id: 38,
      name: 'Treat your employees well',
      outcome: 'Permanently discard oneemployeecard and add a newemployeecard of the next highest value to your discard pile.',
      employee: 3,
      cost: 600,
      type: 'Regular'
    },
    {
      id: 39,
      name: 'We can do that, but better',
      outcome: 'Choose another player. Take the top card from their deck. You can choose to keep this card or permanently discard it.',
      employee: 6,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 40,
      name: 'Fire Drill',
      outcome: 'Play this card on another player\'s company. That player must discard 3 employees before taking any actions on their next turn. That player may permanently discard this card at the end of their turn.',
      employee: 5,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 41,
      name: 'Referral bonus',
      outcome: 'Get $300',
      employee: 2,
      cost: 100,
      type: 'Regular'
    },
    {
      id: 42,
      name: 'Better Offer',
      outcome: 'Choose another player. That player must reveal their hand. You may purchase any Employees in their hand for half price.',
      employee: 2,
      cost: 400,
      type: 'Attack'
    },
    {
      id: 43,
      name: 'The churn',
      outcome: 'Permanently discard anemployeecard. Depending on the value of the employees discarded, you gain the following: Employee[1]: $100 Employee[3]: $300 Employee[6]: $600',
      employee: 0,
      cost: 600,
      type: 'Regular'
    },
    {
      id: 44,
      name: 'Dental plan',
      outcome: 'Pay $300, add 2 Emplyee[1] cards to your hand this turn',
      employee: 1,
      cost: 200,
      type: 'Regular'
    },
    {
      id: 45,
      name: 'BOGO',
      outcome: 'For every Employee you purchase this round, gain another for half thecost',
      employee: 0,
      cost: 300,
      type: 'Regular'
    },
    {
      id: 46,
      name: 'Everyone shows up on time!',
      outcome: 'Block one attack from another player',
      employee: 0,
      cost: 400,
      type: 'Defense'
    },
    {
      id: 47,
      name: 'It\'s all about who you know',
      outcome: 'You may choose one card from the draft area. You may pay $300 regardless of itscostto gain that card. Place it directly in your hand.',
      employee: 2,
      cost: 300,
      type: 'Regular'
    },
    {
      id: 48,
      name: 'Downsizing',
      outcome: 'Play this card on another player\'s company. That player cannot play any cards until they discard 3 employees.',
      employee: 3,
      cost: 300,
      type: 'Attack'
    },
    {
      id: 49,
      name: 'Virus Detected ',
      outcome: 'Permanently discard an Improvement.',
      employee: 2,
      cost: 200,
      type: 'Regular'
    },
    {
      id: 50,
      name: 'Government shut down',
      outcome: 'Play this card on another player\'s company. That player must pay $100 every time they play anemployeecard.',
      employee: 9,
      cost: 800,
      type: 'Attack'
    },
    {
      id: 51,
      name: 'Sneaky Scouting',
      outcome: 'Choos another player. That player must reveal their hand. You may steal 1 Employee[1] or 1 Employee[3] from that player. Place that card in your discard pile.',
      employee: 0,
      cost: 300,
      type: 'Attack'
    },
    {
      id: 52,
      name: 'The Flu',
      outcome: 'Choose another player. That player must discard all Employees from their hand.',
      employee: 3,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 53,
      name: 'Monday Meeting',
      outcome: 'Upgrade one of your Employees to the next level. (1->3, 3->6 etc.)',
      employee: 3,
      cost: 700,
      type: 'Improvement'
    },
    {
      id: 54,
      name: 'Office Memo Re:',
      outcome: 'Shuffle the community discard pile. Draw the top three cards. You must add one to your personal discard pile.',
      employee: 5,
      cost: 500,
      type: 'Regular'
    },
    {
      id: 55,
      name: 'Unnamed 1',
      outcome: 'Block the next 3 incoming attacks, pay $500 for each turn this card is in play. You may discard this card at any time.',
      employee: 6,
      cost: 200,
      type: 'Improvement'
    },
    {
      id: 56,
      name: 'Unnamed 2',
      outcome: 'All players draw one extra card',
      employee: 0,
      cost: 300,
      type: 'Regular'
    },
    {
      id: 57,
      name: 'Unnamed 3',
      outcome: 'Gain $300 at the start of each turn.',
      employee: 3,
      cost: 500,
      type: 'Improvement'
    },
    {
      id: 58,
      name: 'Unnamed 4',
      outcome: 'Add this card to another player\'s Company. Any Improvementscost3 more Employees to deploy while this card is in play.',
      employee: 6,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 59,
      name: 'Unnamed 5',
      outcome: 'Play this on another Improvement. The Improvement requires 3 fewer employees to operate (min of 1)',
      employee: 1,
      cost: 100,
      type: 'Improvement'
    },
    {
      id: 60,
      name: 'Unnamed 6',
      outcome: 'All other players must discard the 2 cards at random.',
      employee: 1,
      cost: 500,
      type: 'Attack'
    },
    {
      id: 61,
      name: 'Unnamed 7',
      outcome: 'Discard two of your Improvements and gain 500$',
      employee: 3,
      cost: 200,
      type: 'Regular'
    },
    {
      id: 62,
      name: 'Unnamed 8',
      outcome: 'All Other players must discard 1 card.',
      employee: 3,
      cost: 100,
      type: 'Attack'
    },
    {
      id: 63,
      name: 'Unnamed 9',
      outcome: 'Choose any 1 Improvement cards. The owner(s) must discard those cards. Alternatively choose 1 Improvement add it to your hand.',
      employee: 1,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 64,
      name: 'Unnamed 10',
      outcome: 'All other players must draw 2 extra cards.',
      employee: 3,
      cost: 300,
      type: 'Regular'
    },
    {
      id: 65,
      name: 'Unnamed 11',
      outcome: 'keep one card from your discarded hand for the next turn',
      employee: 2,
      cost: 400,
      type: 'Regular'
    },
    {
      id: 66,
      name: 'Unnamed 12',
      outcome: 'Gain 1 Employee[6]',
      employee: 3,
      cost: 700,
      type: 'Regular'
    },
    {
      id: 67,
      name: 'Unnamed 13',
      outcome: 'Gainemployee1].',
      employee: 1,
      cost: 100,
      type: 'Regular'
    },
    {
      id: 68,
      name: 'Unnamed 14',
      outcome: 'Gainemployee3].',
      employee: '2',
      cost: '300',
      type: 'Regular'
    },
    {
      id: 69,
      name: 'Unnamed 15',
      outcome: 'Permanently discard 2 Employee cards (not counting the Employees used to play this card) from your hand when you deploy this Improvement. Gain $500 each turn.',
      employee: 9,
      cost: 700,
      type: 'Improvement'
    },
    {
      id: 70,
      name: 'Unnamed 16',
      outcome: 'Choose another player. That player must reveal their hand. If they have an Employee[1] or and Employee[3] in their hand, you may steal that card and add it to your discard pile.',
      employee: 3,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 71,
      name: 'Unnamed 17',
      outcome: 'Draw three cards. You may pay $100 to keep 1 card. Discard any cards not purchased.',
      employee: 1,
      cost: 300,
      type: 'Regular'
    },
    {
      id: 72,
      name: 'Unnamed 18',
      outcome: 'Steal $1000 from each player',
      employee: 15,
      cost: 600,
      type: 'Regular'
    },
    {
      id: 73,
      name: 'Unnamed 19',
      outcome: 'steal $500 from each player',
      employee: 12,
      cost: 800,
      type: 'Regular'
    },
    {
      id: 74,
      name: 'Unnamed 20',
      outcome: 'Block all incoming Attacks played against you this round.',
      employee: 5,
      cost: 700,
      type: 'Regular'
    },
    {
      id: 75,
      name: 'Unnamed 21',
      outcome: 'Until your next turn, all players can have a maximum of 4 cards in their hand.',
      employee: 8,
      cost: 500,
      type: 'Regular'
    },
    {
      id: 76,
      name: 'Unnamed 22',
      outcome: 'All players gain $200 each turn.',
      employee: 6,
      cost: 400,
      type: 'Regular'
    }
  ];

  const employees = [
    {
      id: 1,
      name: 'Employee[1]',
      outcome: '',
      employee: '0',
      cost: 100,
      type: 'employee'
    },
    {
      id: 3,
      name: 'Employee[3]',
      outcome: '',
      employee: '0',
      cost: 400,
      type: 'employee'
    },
    {
      id: 6,
      name: 'Employee[6]',
      outcome: '',
      employee: '0',
      cost: 800,
      type: 'employee'
    }
  ];

  const deck = [
    {
      id: 1,
      name: 'Broadband',
      outcome: 'Gain $100 at the start of every turn',
      employee: 1,
      cost: 100,
      type: 'Improvement'
    },
    {
      id: 2,
      name: 'Phishing',
      outcome:
        'Take control of another player\'s improvement card and add it to your Company',
      employee: 3,
      cost: 400,
      type: 'Attack'
    },
    {
      id: 3,
      name: 'Modem',
      outcome: 'Gain $200 at the start of every turn',
      employee: 2,
      cost: 300,
      type: 'Improvement'
    },
    {
      id: 4,
      name: 'Malware',
      outcome: 'Destroy one improvement on up to two different players',
      employee: 6,
      cost: 500,
      type: 'Attack'
    },
    {
      id: 5,
      name: 'Intranet',
      outcome:
        'At the start of each draft, draw one extra card at the top of the deck at nocost You may choose whether or not to keep this card',
      employee: 3,
      cost: 200,
      type: 'Improvement'
    },
    {
      id: 6,
      name: 'Firewall',
      outcome:
        'Do not play this card until you\'re being attacked.  Protects against one hacking event.',
      employee: 0,
      cost: 300,
      type: 'Defense'
    },
    {
      id: 7,
      name: 'Cybercrime',
      outcome: 'Steal $500 from another player',
      employee: 3,
      cost: 700,
      type: 'Attack'
    },
    {
      id: 8,
      name: 'SQL Injection',
      outcome:
        'Play on an opponent\'s Company. Until  this card is removed, gain 100 each time they draw a card. ',
      employee: 2,
      cost: 400,
      type: 'Attack'
    },
    {
      id: 9,
      name: 'Stealing Bandwidth',
      outcome:
        'The player to your left assembles their improvement cards in their hand. Choose a card at random and add it to your hand.',
      employee: 0,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 10,
      name: 'LAN Party',
      outcome:
        'Select an opponent. Remove $1000 from their account. All other players in the game receive 200$. Permanently discard this card.',
      employee: 7,
      cost: 600,
      type: 'Attack'
    },
    {
      id: 11,
      name: 'Percent of a Percent',
      outcome:
        'If another player gains more than $500 in a single turn, the owner of this improvement also gains $200.  ',
      employee: 6,
      cost: 400,
      type: 'Improvement'
    },
    {
      id: 12,
      name: 'Throttle Bandwidth',
      outcome:
        'Play this card on another player\'s Company. They can only play 1 card a turn while this card is in their Company. That player may pay $300 to permanently discard this card.',
      employee: 6,
      cost: 500,
      type: 'Attack'
    },
    {
      id: 13,
      name: 'Let me talk to a live person.',
      outcome: 'You get one free action this turn.',
      employee: 0,
      cost: 0,
      type: 'Improvement'
    },
    {
      id: 14,
      name: 'Big sale',
      outcome:
        'While this card is in play, you only pay half the listedcostwhen drafting cards. If this card is later discarded, you must pay $500.',
      employee: 5,
      cost: 500,
      type: 'Improvement'
    },
    {
      id: 15,
      name: 'Email from a Nigerian prince',
      outcome:
        'Place this card in a random player\'s discard pile. They must discard one Improvement currently in play, of their choosing',
      employee: 0,
      cost: 200,
      type: 'Attack'
    },
    {
      id: 16,
      name:
        'One of those racks of phones doing something online to make money',
      outcome:
        'On your turn, you may discard any number of cards from your hand. Place them face-down on this card after showing them to your opponents. These cards are not in play and you gain none of their stated affects. During the Get Money phase, you gain $100 for every card placed on this card.',
      employee: 9,
      cost: 500,
      type: 'Improvement'
    },
    {
      id: 17,
      name: 'Bloatware',
      outcome:
        'May be played on any player\'s company. On their turn, they must select another player. Draw the top card from their draw pile and add it to your discard pile.',
      employee: 4,
      cost: 300,
      type: 'Improvement'
    },
    {
      id: 18,
      name: 'Smart Assistant',
      outcome: 'Draw a card once per turn.',
      employee: 1,
      cost: 100,
      type: 'Improvement'
    },
    {
      id: 19,
      name: 'Donate plasma',
      outcome: 'Gain $100',
      employee: 0,
      cost: 0,
      type: 'Regular'
    },
    {
      id: 20,
      name: 'If this, then that',
      outcome:
        'May be played at any time. When another player draws a card, discards a card, or plays a card, you may do the same action for free. Cards drawn this way can be kept until your next turn.',
      employee: 0,
      cost: 300,
      type: 'Regular'
    },
  ];

  const improvements = [];
  
  const discard = [];
  
  const hand = [];
  
  return {
    deck,
    improvements,
    discard,
    hand,
    masterDeck,
    employees
  };
})();