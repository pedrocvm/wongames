import { Meta, Story } from '@storybook/react/types-6-0';
import Highlight, { HighlightProps } from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead is back',
    subtitle: '<p>Come see John’s new adventures</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/red-dead-redemption',
    backgroundImage: '/img/red-dead-img.jpg',
    floatImage: '/img/red-dead-float.png'
  },
  argTypes: {}
} as Meta;

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />;
