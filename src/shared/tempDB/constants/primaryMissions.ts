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
          'From the second battle round, in each players Shooting phase, the player whose turn it is can select one unit from their army that is not Battle-shocked and is eligible to shoot. Until the end of that turn, that unit is not eligeble to shoot or declare a charge. At the start of its controlling player next Command phase, if that unit is within 1 of an objective marker that the player whose turn it is control, that objective marker is burned and removed from the battlefield.',
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
};
