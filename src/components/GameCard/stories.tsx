import { Meta, Story } from '@storybook/react/types-6-0';
import GameCard, { GameCardProps } from '.';

export default {
  title: 'Games/GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  parameters: {
    backgrounds: {
      default: 'Won Dark'
    }
  },
  argTypes: {
    onFav: {
      action: 'clicked'
    },
    ribbonText: {
      action: 'string'
    }
  }
} as Meta;

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
);

WithRibbon.args = {
  hasRibbon: true,
  ribbonText: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
};
