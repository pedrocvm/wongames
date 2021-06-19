import { Meta, Story } from '@storybook/react/types-6-0';
import GameInfo, { GameInfoProps } from '.';
import mockGame from './mock';

export default {
  title: 'Games/GameInfo',
  component: GameInfo,
  args: mockGame,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Basic: Story<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
    <GameInfo {...args} />
  </div>
);
