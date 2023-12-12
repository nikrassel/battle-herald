import { TInfoCardDeck } from '..';

export const missionRules: TInfoCardDeck = {
  chillingRain: {
    cardType: 'mission rule',
    cardTitle: 'chilling rain',
    cardContent: [
      {
        paragraphBody: ['In this mission, no additional mission rules apply.'],
      },
    ],
  },
  hiddenSupplies: {
    cardType: 'mission rule',
    cardTitle: 'hidden supplies',
    cardContent: [
      {
        paragraphBody: [
          'In this mission, players must set up one additional objective marker in No Mans Land.',
        ],
      },
      {
        paragraphBody: [
          'Unless the Chosen Battlefield mission rule is also in effect, before setting up this new objective marker, players must first move the objective marker in the center of the battlefield 6" directly towards one of the corners of the battlefield(if No Mans Land touches any of the corners of the battlefield, you must move the objective marker towards one of those corners). Players then set up the new objective 6" from the center of the battlefield towards the diagonally opposite corner of the battlefield to the previously moved objective marker.',
        ],
      },
    ],
  },
  chosenBattlefield: {
    cardType: 'mission rule',
    cardTitle: 'chosen battlefield',
    cardContent: [
      {
        paragraphBody: [
          'In this mission, objective markers are not placed as shown on the Deployment card drawn. Instead, players roll off at the start of the Place Objective Markers step, then alternate setting up objective markers, one at a time, starting with the winner of the roll off.',
        ],
      },
    ],
  },
  scramblerFields: {
    cardType: 'mission rule',
    cardTitle: 'scrambler fields',
    cardContent: [
      {
        paragraphBody: [
          'In this mission:',
          'Players units with the Infiltrators ability cannot be set up within range of an objective marker than is either in No Mans Land or their opponents deployment zone.',
        ],
      },
    ],
  },
};
