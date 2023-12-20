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
      {
        paragraphBody: [
          `One Objective marker must be placed wholly within each Deployment
            zone, and the remaining Objective markers must be played wholly within 
            No Man’s Land, as shown on the Deployment card drawn. Objective 
            markers must be placed more than 6” away from any Battlefield edge and 
            more than 9” away from all other Objective markers. `,
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
      {
        paragraphBody: [
          `Players’ units with the Scout ability that make a Move before the First
            turn begins cannot end that Move within range of an Objective marker
            that is either in No Man’s Land or their Opponent’s Deployment zone.`,
        ],
      },
      {
        paragraphBody: [
          `If any rule is used to Redeploy a unit, that rule cannot be used to Set
            up that unit within range of an Objective marker in No Man’s Land`,
        ],
      },
      {
        paragraphBody: [
          `When a player’s Reserves and Strategic Reserves units are Set up on the 
            Battlefield, they cannot be Set up within range of an Objective marker
            that is either in No Man’s Land or their Opponent’s Deployment zone.`,
        ],
      },
    ],
  },
  sweepAndClear: {
    cardType: 'mission rule',
    cardTitle: 'sweep and clear',
    cardContent: [
      {
        paragraphBody: [
          'In this mission:',
          'if a player Controls an Objective marker at the end of their Command phase, that Objective marker remains under their Control, even if they have no models within range of it, unless their opponent Controls it at the end of any subsequent Command phase',
        ],
      },
    ],
  },
  minefields: {
    cardType: 'mission rule',
    cardTitle: 'minefields',
    cardContent: [
      {
        paragraphBody: [
          'In this mission:',
          'each time an Advance roll of 6 is made for a unit, that unit suffers 1 Mortal wound',
        ],
      },
    ],
  },
  targetsOfOpportunity: {
    cardType: 'mission rule',
    cardTitle: 'targets of opportunity',
    cardContent: [
      {
        paragraphBody: [
          'In this mission:',
          'if a player is using Tactical Missions, then each time that player determines which Secondary Mission cards are Active for them, if they have fewer than 3 Active Secondary Mission cards, that player draws from their Secondary Mission deck until they have 3 Secondary Mission cards. ',
        ],
      },
      {
        paragraphBody: [
          `if a player is using Fixed Missions, then in addition to
            the 2 Fixed Mission cards, that player will also draw cards from their 
            Secondary Mission deck during the Battle. At the end of the Select
            Secondary Missions step, that player should retrieve their Secondary Mission 
            deck, remove all the Fixed Mission cards they did not select at the start of 
            that step, then shuffle the remaining cards. Then, at the start of each 
            of that player’s Command phases, if that player has fewer than 3 Active
            Secondary Mission cards (including their Fixed Mission cards), they draw 
            from their Secondary Mission deck until they have 3 Secondary Mission 
            cards. That player has access to the New Orders Strategem, and can spend 
            CP to use it after drawing their Secondary Mission cards if they wish 
            (remember that Fixed Mission cards cannot be discarded for any 
            reason).`,
        ],
      },
    ],
  },
  delayedReserves: {
    cardType: 'mission rule',
    cardTitle: 'delayed reserves',
    cardContent: [
      {
        paragraphBody: [
          'In this mission:',
          `until the start of the Third Battle round, each time a 
                Reserves or Strategic Reserves unit wishes to arrive on the Battlefield, the 
                Controlling player must make a Reserves roll for it. To do so, that player 
                rolls one D6: on a 3+, that unit arrives on the Battlefield; otherwise, 
                the Reserves roll fails and that unit does not arrive this turn. `,
        ],
      },
    ],
  },
  supplyLines: {
    cardType: 'mission rule',
    cardTitle: 'supply lines',
    cardContent: [
      {
        paragraphBody: [
          'In this mission:',
          `if a player Controls the Objective marker in their own 
                Deployment zone at the start of their Command phase, they roll one D6: on 
                a 4+, that player gains 1CP.`,
        ],
      },
    ],
  },
  secretIntel: {
    cardType: 'mission rule',
    cardTitle: 'secret intel',
    cardContent: [
      {
        paragraphBody: [
          'In this mission:',
          `in each player’s Command phase, the First time that player 
                draws Secondary Mission cards that phase, that player can draw one 
                additional Secondary Mission card, and then discard one of their Active
                Secondary Mission cards`,
        ],
      },
    ],
  },
  voxStatic: {
    cardType: 'mission rule',
    cardTitle: 'vox static',
    cardContent: [
      {
        paragraphBody: [
          'In this mission:',
          `the Command Re-roll Stratagem and New Orders Stratagem
          both cost 2CP to use. 
          `,
        ],
      },
    ],
  },
};
