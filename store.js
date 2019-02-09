'use strict';

// eslint-disable-next-line no-unused-vars
let store = (function () {

  const masterDeck = [
    {
      id: 1,
      name: 'Broadband',
      outcome: 'Gain $100 at the start of every turn',
      employee: 1,
      cost: 1
    },
    {
      id: 2,
      name: 'Phishing',
      outcome:
        'Take control of another player\'s improvement card and add it to your \'base\'',
      employee: 1,
      cost: 1
    },
    {
      id: 3,
      name: 'Modem',
      outcome: 'Gain $200 at the start of every turn',
      employee: 1,
      cost: 1
    },
    {
      id: 4,
      name: 'Malware',
      outcome: 'Destroy one improvement on up to two different players',
      employee: 1,
      cost: 1
    },
    {
      id: 5,
      name: 'Intranet',
      outcome:
        'At the start of each draft, draw one extra card at the top of the deck at nocost',
      employee: 1,
      cost: 1
    },
    {
      id: 6,
      name: 'Firewall',
      outcome:
        'Do not play this card until you\'re being attacked.  Protects against one hacking event.',
      employee: 1,
      cost: 1
    },
    {
      id: 7,
      name: 'Cybercrime',
      outcome: 'Steal $500 from another player\'s assets',
      employee: 1,
      cost: 1
    },
    {
      id: 8,
      name: 'SQL Injection',
      outcome:
        'Play on an opponent\'s improvement. Until  this card is removed, gain 100 each time they draw a card. ',
      employee: 1,
      cost: 1
    },
    {
      id: 9,
      name: 'Stealing Bandidh',
      outcome:
        'The player to your left assembles their improvement cards in their hand. Choose a card at random and add it to your hand.',
      employee: 1,
      cost: 1
    },
    {
      id: 10,
      name: 'LAN Party',
      outcome:
        'Select an opponent. Remove $1000 from their account. All other players in the game receive 200$. Discard this card from the game.',
      employee: 1,
      cost: 1
    },
    {
      id: 11,
      name: 'Percent of a Percent',
      outcome:
        'Improvement- If another player were to gain more than $1000 in a single turn, the owner of this improvement would also gain $500.  ',
      employee: 1,
      cost: 1
    },
    {
      id: 12,
      name: 'Throttle Bandwitdth',
      outcome:
        'Play this card on another player\'s company. They can only play 1 card a turn while this card is in their company. That player may pay $300 to discard this card. Permanently discard this card. ',
      employee: 1,
      cost: 1
    },
    {
      id: 13,
      name: 'Let me talk to a live person.',
      outcome: 'Improvement - You get one free action this turn ',
      employee: 1,
      cost: 1
    },
    {
      id: 14,
      name: 'Big sale',
      outcome:
        'Improvement - While this card is in play, you only pay half the listedcostwhen drafting cards. If this card is later removed from play, you must pay $500',
      employee: 1,
      cost: 1
    },
    {
      id: 15,
      name: 'Email from a Nigerian prince',
      outcome:
        'Give this card to another player. They must discard one Improvement currently in play, of their choosing',
      employee: 1,
      cost: 1
    },
    {
      id: 16,
      name:
        'One of those racks of phones doing something online to make money',
      outcome:
        'Improvement - On your turn, you may discard any number of cards from your hand. Place them face-down next on this card after showing them to your opponents. These cards are not in play and you gain none of their stated affects. During the Get Money phase, you gain $100 for every card placed on this card. ',
      employee: 1,
      cost: 1
    },
    {
      id: 17,
      name: 'Bloatware',
      outcome:
        'Improvement - May be played on another player\'s company. On your turn, you must select another player. Draw the top card from their draw pile and add it to your discard pile. ',
      employee: 1,
      cost: 1
    },
    {
      id: 18,
      name: 'Smart Assistant',
      outcome: 'Improvement- Draw a card',
      employee: 1,
      cost: 1
    },
    {
      id: 19,
      name: 'Donate plasma',
      outcome: 'Gain $100',
      employee: 1,
      cost: 1
    },
    {
      id: 20,
      name: 'If this, then that',
      outcome:
        'May be played at any time. When another player draws a card, discards a card, or plays a card, you may do the same action for free. ',
      employee: 1,
      cost: 1
    },
    {
      id: 21,
      name: 'id\'t need that anyway',
      outcome: 'Discard a card. Gain $200',
      employee: 1,
      cost: 1
    },
    {
      id: 22,
      name: 'VPN',
      outcome: 'Block one attack.\n\ncost: $500\nEmployees: 0',
      employee: 1,
      cost: 1
    },
    {
      id: 23,
      name: 'Not-so-secretly an MLM',
      outcome:
        'If you purchase anemployeecard this round, gain a second copy of that card',
      employee: 1,
      cost: 1
    },
    {
      id: 24,
      name: 'Micro-transactions',
      outcome: 'Gain $1000. You may not play any other cards this round. ',
      employee: 1,
      cost: 1
    },
    {
      id: 25,
      name: 'Thief',
      outcome:
        'Discard one of your improvements. Steal one improvement from another player',
      employee: 1,
      cost: 1
    },
    {
      id: 26,
      name: 'Encryption',
      outcome:
        'You may use an asset/improvement card that typically would not work for your character/company',
      employee: 1,
      cost: 1
    },
    {
      id: 27,
      name: 'Cis Key',
      outcome:
        'Look at the player to your left\'s hand. You will play their next turn for them.',
      employee: 1,
      cost: 1
    },
    {
      id: 28,
      name: 'Net Troll',
      outcome:
        'The player with the most net worth must discard an improvement with a minimum value of $500 of their choice.',
      employee: 1,
      cost: 1
    },
    {
      id: 29,
      name: 'Ads. Everywhere. As many as you can fit. ',
      outcome: 'Discard 5 cards. Gain $700. ',
      employee: 1,
      cost: 1
    },
    {
      id: 30,
      name: 'Diidnd',
      outcome: 'Improvement: Every time you shuffle your deck, gain $200',
      employee: 1,
      cost: 1
    },
    {
      id: 31,
      name: 'Security team',
      outcome:
        'Block one attack. When played on your turn (instead of as a defense), this card grants you +2 employees for one turn.\n\ncost: $1000\nEmployees: 2 (when played as a defense) / grants 2 when played on your turn',
      employee: 1,
      cost: 1
    },
    {
      id: 32,
      name: 'New virus definitions',
      outcome:
        'Block one attack. After doing so, place this card in front of you as an improvement. The next time another player attacks you, that attack is blocked and this card is permanently discarded. \n\ncost: $1000\nEmployees: 2',
      employee: 1,
      cost: 1
    },
    {
      id: 33,
      name: 'You got funded, but your app sucked',
      outcome:
        'gain $200. When you play this card, discard it directly into the draft area. \n\nCost: $100\nEmployees: 5',
      employee: 1,
      cost: 1
    },
    {
      id: 34,
      name: 'Lean gamma five',
      outcome: 'You may permanently discard a card from your hand.',
      employee: 1,
      cost: 1
    },
    {
      id: 35,
      name: 'Recruiting team',
      outcome: 'Gain anemployee1]',
      employee: 1,
      cost: 1
    },
    {
      id: 36,
      name: 'Morning coffee',
      outcome: 'Gain $200 and +1employeethis round',
      employee: 1,
      cost: 1
    },
    {
      id: 37,
      name: 'Merger',
      outcome:
        'Your company has merged with another conglomerate. Gain 6 employees.',
      employee: 1,
      cost: 1
    },
    {
      id: 38,
      name: 'Treat your employees well',
      outcome:
        'Discard oneemployeecard and take a newemployeecard of the next highest value. ',
      employee: 1,
      cost: 1
    },
    {
      id: 39,
      name: 'We can do that, but better',
      outcome:
        'Attack: choose another player. Take the top card from their deck. You can choose to keep this card or permanently discard it. ',
      employee: 1,
      cost: 1
    },
    {
      id: 40,
      name: 'Fire Drill',
      outcome:
        'Attack. Play this card on another player\'s company. That player has 3 less employees. That player may permanently discard this card at the end of their turn. ',
      employee: 1,
      cost: 1
    },
    {
      id: 41,
      name: 'Referral bonus',
      employee: 1,
      cost: 1
    },
    {
      id: 42,
      name: 'Better Offer',
      outcome:
        'May obtain three employees from another players company, but pays $100 less ofcostto get them to that player.',
      employee: 1,
      cost: 1
    },
    {
      id: 43,
      name: 'The churn',
      outcome:
        'Permanently discard anemployeecard. Depending on the value of the employees discarded, you gain the following:\n\nEmployee[1]: $500\nEmployee[3]: $1000\nEmployee[6]: $1700',
      employee: 1,
      cost: 1
    },
    {
      id: 44,
      name: 'Dental plan',
      outcome: 'Pay $300, gain 2 employees this turn',
      employee: 1,
      cost: 1
    },
    {
      id: 45,
      name: 'BOGO',
      outcome:
        'For everyemployeeyou purchase thise round, gain another for half thecost',
      employee: 1,
      cost: 1
    },
    {
      id: 46,
      name: 'Everyone shows up on time!',
      outcome: 'Good for use to block one attack from another player',
      employee: 1,
      cost: 1
    },
    {
      id: 47,
      name: 'It\'s all about who you know',
      outcome:
        'You may choose one card from the draft area. You may pay $500 regardless of itscostto gain that card. Place it directly in your hand.',
      employee: 1,
      cost: 1
    },
    {
      id: 48,
      name: 'Downsizing',
      outcome:
        'Attack. Play this card on another player\'s company. That player cannot play any cards until they discard 3 employees.',
      employee: 1,
      cost: 1
    },
    {
      id: 49,
      name: 'Virus Detected ',
      outcome:
        'Lose a point/improvement in your defenses/security Id if this is a notch or a card though...)',
      employee: 1,
      cost: 1
    },
    {
      id: 50,
      name: 'Government shut down',
      outcome:
        'Attack. Play this card on another player\'s company. That player must pay $100 every time they play anemployeecard.',
      employee: 1,
      cost: 1
    },
    {
      id: 51,
      name: 'Sneaky Scouting',
      outcome: 'Steal three employees from another players company. ',
      employee: 1,
      cost: 1
    },
    {
      id: 52,
      name: 'The Flu',
      outcome: 'For the next two rounds you have five less employees.',
      employee: 1,
      cost: 1
    },
    {
      id: 53,
      name: 'Monday Meeting',
      outcome:
        'Improvement: Upgrade one tier of your employees to the next level. (1->3, 3->6 etc.)',
      employee: 1,
      cost: 1
    },
    {
      id: 54,
      name: 'Office Memo Re:',
      outcome:
        'Shuffle the community discard pile. Draw the top three cards. You must add one to your personal discard pile. ',
      employee: 1,
      cost: 1
    },
    {
      id: 55,
      name: 'Unnamed 1',
      outcome:
        'This improvement blocks the next 3 incoming attacks, pay 500 for each turn this card is in play \n',
      employee: 1,
      cost: 1
    },
    {
      id: 56,
      name: 'Unnamed 2',
      outcome: 'All players draw one extra card',
      employee: 1,
      cost: 1
    },
    {
      id: 57,
      name: 'Unnamed 3',
      outcome: 'Gain $300 at the start of each turn.',
      employee: 1,
      cost: 1
    },
    {
      id: 58,
      name: 'Unnamed 4',
      outcome:
        'play this on another improvement. the improvement requires an extra 3 employees to operate',
      employee: 1,
      cost: 1
    },
    {
      id: 59,
      name: 'Unnamed 5',
      outcome:
        'play this on another improvement. the improvement requires 3 fewer employees to operate (min of 1)',
      employee: 1,
      cost: 1
    },
    {
      id: 60,
      name: 'Unnamed 6',
      outcome: 'All Other players Draw one less card\n (min of 3)',
      employee: 1,
      cost: 1
    },
    {
      id: 61,
      name: 'Unnamed 7',
      outcome: 'Discard two of your improvements for 500$',
      employee: 1,
      cost: 1
    },
    {
      id: 62,
      name: 'Unnamed 8',
      outcome: 'All Other players Draw one less card\n (min of 3)',
      employee: 1,
      cost: 1
    },
    {
      id: 63,
      name: 'Unnamed 9',
      outcome:
        'Destroy two player improvement cards, or take one improvement card and put in your hand.',
      employee: 1,
      cost: 1
    },
    {
      id: 64,
      name: 'Unnamed 10',
      outcome: 'All Other players Draw one less card\n (min of 3)',
      employee: 1,
      cost: 1
    },
    {
      id: 65,
      name: 'Unnamed 11',
      outcome: 'keep one card from your discarded hand for  for next turn',
      employee: 1,
      cost: 1
    },
    {
      id: 66,
      name: 'Unnamed 12',
      outcome: 'Gainemployee6]',
      employee: 1,
      cost: 1
    },
    {
      id: 67,
      name: 'Unnamed 13',
      outcome: 'Gainemployee1].',
      employee: 1,
      cost: 1
    },
    {
      id: 68,
      name: 'Unnamed 14',
      outcome: 'Gainemployee3].',
      employee: '1',
      cost: '1'
    },
    {
      id: 69,
      name: 'Unnamed 15',
      outcome: 'Permanently discard two employees. Gain $500 each turn.',
      employee: 1,
      cost: 1
    },
    {
      id: 70,
      name: 'Unnamed 16',
      outcome: 'recruit a team of 3 from another player.',
      employee: 1,
      cost: 1
    },
    {
      id: 71,
      name: 'Unnamed 17',
      outcome: 'Draw three cards. Pay 100 to keep 1 or discard them all',
      employee: 1,
      cost: 1
    },
    {
      id: 72,
      name: 'Unnamed 18',
      outcome: 'steal $1000 from each player',
      employee: 1,
      cost: 1
    },
    {
      id: 73,
      name: 'Unnamed 19',
      outcome: 'steal $500 from each player',
      employee: 1,
      cost: 1
    },
    {
      id: 74,
      name: 'Unnamed 20',
      outcome:
        'Block all incoming attack cards played against you this round.',
      employee: 1,
      cost: 1
    },
    {
      id: 75,
      name: 'Unnamed 21',
      outcome: 'increase your work force by 1 each turn for 3 turns.',
      employee: 1,
      cost: 1
    }
  ];

  const deck = [
    {
      id: 1,
      name: 'Broadband',
      outcome: 'Gain $100 at the start of every turn',
      employee: 1,
      cost: 1
    },
    {
      id: 2,
      name: 'Phishing',
      outcome:
        'Take control of another player\'s improvement card and add it to your \'base\'',
      employee: 1,
      cost: 1
    },
    {
      id: 3,
      name: 'Modem',
      outcome: 'Gain $200 at the start of every turn',
      employee: 1,
      cost: 1
    },
    {
      id: 4,
      name: 'Malware',
      outcome: 'Destroy one improvement on up to two different players',
      employee: 1,
      cost: 1
    },
    {
      id: 5,
      name: 'Intranet',
      outcome:
        'At the start of each draft, draw one extra card at the top of the deck at nocost',
      employee: 1,
      cost: 1
    },
    {
      id: 6,
      name: 'Firewall',
      outcome:
        'Do not play this card until you\'re being attacked.  Protects against one hacking event.',
      employee: 1,
      cost: 1
    },
    {
      id: 7,
      name: 'Cybercrime',
      outcome: 'Steal $500 from another player\'s assets',
      employee: 1,
      cost: 1
    },
    {
      id: 8,
      name: 'SQL Injection',
      outcome:
        'Play on an opponent\'s improvement. Until  this card is removed, gain 100 each time they draw a card. ',
      employee: 1,
      cost: 1
    },
    {
      id: 9,
      name: 'Stealing Bandidh',
      outcome:
        'The player to your left assembles their improvement cards in their hand. Choose a card at random and add it to your hand.',
      employee: 1,
      cost: 1
    },
    {
      id: 10,
      name: 'LAN Party',
      outcome:
        'Select an opponent. Remove $1000 from their account. All other players in the game receive 200$. Discard this card from the game.',
      employee: 1,
      cost: 1
    },
    {
      id: 11,
      name: 'Percent of a Percent',
      outcome:
        'Improvement- If another player were to gain more than $1000 in a single turn, the owner of this improvement would also gain $500.  ',
      employee: 1,
      cost: 1
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
    masterDeck
  };
})();