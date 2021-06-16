import { Meta, Story } from '@storybook/react/types-6-0';
import GameDetails, { GameDetailsProps } from '.';

import GameDetailsMock from './mock';

export default {
  title: 'Games/GameDetails',
  component: GameDetails,
  args: GameDetailsMock,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Adventure', 'Action', 'Narrative']
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Basic: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
);
