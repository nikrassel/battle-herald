import { TInfoCardDeck } from '..';

export const primaryMissions: TInfoCardDeck = {
  takeAndHold: {
    cardType: 'primary mission',
    cardTitle: 'take and hold',
    cardContent: [
      {
        paragraphTitle: 'Second, third and fourth battle rounds',
        paragraphBody: [
          'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up tp 15VP per turn).',
        ],
      },
      {
        paragraphTitle: 'Fifth battle round',
        paragraphBody: [
          'The player who has the first turn scores VP as described above.',
          'The player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.',
        ],
      },
    ],
  },
  scorchedEarth: {
    cardType: 'primary mission',
    cardTitle: 'scorched earth',
    cardContent: [
      {
        paragraphBody: [
          `From the Second Battle round, in each player’s Shooting phase, the player 
          whose turn it is can select one unit from their army that is not Battle shocked and is Eligible to Shoot. Until the end of that turn, that unit is 
          not Eligible to Shoot or declare a Charge. At the start of its Controlling 
          player’s next Command phase, if that unit is within 1” of an Objective 
          marker that the player whose turn it is Controls, that Objective marker is 
          Burned and removed from the Battlefield`,
        ],
      },
      {
        paragraphTitle: 'Second, third and fourth battle rounds',
        paragraphBody: [
          'At the end of each Command phase, the player whose turn it is sxores 5VP for each objective marker they control (up tp 10VP per turn).',
        ],
      },
      {
        paragraphTitle: 'Fifth battle round',
        paragraphBody: [
          'The player who has the first turn scores VP as described above.',
          'The player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.',
        ],
      },
      {
        paragraphTitle: 'End of the battle',
        paragraphBody: [
          'Each player scores 5VP if one or more objective markers in No Mans Land were burned by a unit from their army, and 10VP if the objective marker in their opponents deployment zone was burned',
        ],
      },
    ],
  },
  purgeTheFoe: {
    cardType: 'primary mission',
    cardTitle: 'purge the foe',
    cardContent: [
      {
        paragraphTitle: 'Second, third and fourth battle rounds',
        paragraphBody: [
          'At the end of each Command phase, the player whose turn it is scores 4VP if they control one or more objective markers, and an extra 4VP if they control more objective markers than their opponent controls.',
        ],
      },
      {
        paragraphTitle: 'Fifth battle round',
        paragraphBody: [
          'The player who has the first turn scores VP as described above.',
          'The player who has the second turn scores VP as described above, but does so at the end of their turn instead of at the end of their Command phase.',
        ],
      },
      {
        paragraphTitle: 'End of the battle',
        paragraphBody: [
          'At the end of the battle round, each player scores 4VP if one or more enemy units were destroyed that battle round, and an extra 4VP if more enemy units than friendly units were destroyed that battle round',
        ],
      },
    ],
  },
  priorityTargets: {
    cardType: 'primary mission',
    cardTitle: 'priority targets',
    cardContent: [
      {
        paragraphTitle: 'Second, third and fourth battle rounds',
        paragraphBody: [
          'At the end of each Command phase, the player whose turn it is scores 5VP for each objective marker they control (up tp 10VP per turn).',
        ],
      },
      {
        paragraphTitle: 'At the end of the battle',
        paragraphBody: [
          'Each player scores 5VP for each objective marker they control (up tp 15VP per turn).',
        ],
      },
    ],
  },
  sitesOfPower: {
    cardType: 'primary mission',
    cardTitle: 'sites of power',
    cardContent: [
      {
        paragraphBody: [
          `The Objective markers in No Man’s Land are Sites of Power. At the end of 
          each Command phase, the player whose turn it is Empowers all Sites of
          Power that they Control that have one or more Character models from 
          their army within range; each Site of Power remains Empowered by that 
          player while one or more of their Character models remains within 
          range of it `,
        ],
      },
      {
        paragraphTitle: 'Second, third and fourth battle rounds',
        paragraphBody: [
          `At the end of each player’s Command phase, the player whose turn it is 
          scores VP as follows (up to 15VP per turn). 3VP for each objective marker 
          they control, 3 VP for each objective marker that they have empowered 
          Note that these are cumulative, so a player that Controls one Objective
          marker they have also Empowered will score 6VP that turn`,
        ],
      },
      {
        paragraphTitle: 'Fifth battle round',
        paragraphBody: [
          `The player who has the First turn scores VP as described above.
          The player who has the Second turn scores VP as described above, but 
          does so at the end of their turn instead of at the end of their Command
          phase.`,
        ],
      },
    ],
  },
  theRitual: {
    cardType: 'primary mission',
    cardTitle: 'the ritual',
    cardContent: [
      {
        paragraphBody: [
          `When setting up the Battlefield, remove all Objective markers in No 
          Man’s Land except the one closest to the centre of the Battlefield.`,
          `In each player’s Shooting phase, the player whose turn it is can select one 
          unit from their army that is not Battle-shocked and is Eligible to Shoot. 
          Until the end of that turn, that unit is not Eligible to Shoot or declare a 
          Charge. At the end of that turn, the player whose turn it is can Set up
          one Objective marker wholly within No Man’s Land and within 1” of that 
          unit provided it can be Set up exactly 9” from one other Objective marker
          and not within 6” of any other Objective marker.`,
        ],
      },
      {
        paragraphTitle: 'Second, third and fourth battle rounds',
        paragraphBody: [
          `At the end of each Command phase, the player whose turn it is scores 
          5VP for each Objective marker in No Man’s Land they Control (up to 
          15VP per turn).`,
        ],
      },
      {
        paragraphTitle: 'Fifth battle round',
        paragraphBody: [
          `The player who has the First turn scores VP as described above`,
          `The player who has the Second turn scores VP as described above, but 
          does so at the end of their turn instead of at the end of their Command
          phase`,
        ],
      },
    ],
  },
  deployServoSkulls: {
    cardType: 'primary mission',
    cardTitle: 'deploy servo skulls',
    cardContent: [
      {
        paragraphBody: [
          `The Objective markers that start the Battle in No Man’s Land are Servo skulls. At the end of each turn, each of these Objective markers can be 
          Moved up to 6” in any direction by the player that Controls it. When 
          Moving Objective markers, they cannot end that Move on top of any other 
          Objective marker or model, or inside Impassable parts of Terrain features
          (such as the Walls of a Ruin). `,
        ],
      },
      {
        paragraphTitle: 'Second, third, fourth and fifth battle rounds',
        paragraphBody: [
          `At the end of each turn, the player whose turn it is scores VP as 
          follows: 2VP for each Servo-skull that is wholly within 12” of their Opponent’s
          Deployment zone; 5VP for each Servo-skull that is wholly within 6” of their Opponent’s
          Deployment zone.; 8VP for each Servo-skull that is wholly within their Opponent’s
          Deployment zone.`,
          `Note that these are cumulative, so if a Servo-skull is wholly within your 
          Opponent’s Deployment zone, you would score 15VP from that Servo-skull
          at the end of your turn. `,
        ],
      },
    ],
  },
  supplyDrop: {
    cardType: 'primary mission',
    cardTitle: 'supply drop',
    cardContent: [
      {
        paragraphBody: [
          `At the start of the Battle, players randomly select two different 
          Objective markers in No Man’s Land: the first selected is the Alpha
          Objective, the second is the Omega Objective. At the start of the Fourth 
          Battle round, the Alpha Objective is removed from the Battlefield. At the 
          start of the Fifth Battle round, all Objective markers in No Man’s Land apart 
          from the Omega Objective are also removed. `,
        ],
      },
      {
        paragraphTitle: 'Second and third battle rounds',
        paragraphBody: [
          `At the end of each Command phase, the player whose turn it is scores 
          5VP for each Objective marker they Control in No Man’s Land.`,
        ],
      },
      {
        paragraphTitle: 'Fourth battle round',
        paragraphBody: [
          `At the end of each Command phase, the player whose turn it is scores 
          8VP for each Objective marker they Control in No Man’s Land.`,
        ],
      },
      {
        paragraphTitle: 'Fifth battle round',
        paragraphBody: [
          `The player who has the First turn scores 15VP at the end of their 
          Command phase if they Control the Objective marker in No Man’s Land. `,
          `The player who has the Second turn scores 15VP at the end of their 
          turn if they Control the Objective maker in No Man’s Land`,
        ],
      },
    ],
  },
  vitalGround: {
    cardType: 'primary mission',
    cardTitle: 'vital ground',
    cardContent: [
      {
        paragraphBody: [
          `If you draw this and the Hidden Supplies Mission Rule Card, discard this 
          card and draw a new Primary Mission card. After setting up the Battlefield, remove the Objective marker in No Man’s 
          Land that is closest to the centre of the Battlefield`,
        ],
      },
      {
        paragraphTitle: 'Second, third and fourth battle rounds',
        paragraphBody: [
          `At the end of each Command phase, the player whose turn it is scores 
          VP as follows:`,
          `If they Control the Objective marker in their own Deployment zone, they 
          score 2VP.`,
          `For each Objective marker in No Man’s Land they Control, they score 
          5VP.`,
          `If they Control the Objective marker in their opponent’s Deployment
          zone, they score 6VP`,
        ],
      },
      {
        paragraphTitle: 'Fifth battle round',
        paragraphBody: [
          `The player who has the First turn scores VP as described above`,
          `The player who has the Second turn scores VP as described above, but 
          does so at the end of their turn instead of at the end of their Command
          phase.`,
        ],
      },
    ],
  },
};
