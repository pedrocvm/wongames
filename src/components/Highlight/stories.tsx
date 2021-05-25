import { Meta, Story } from '@storybook/react/types-6-0';
import Highlight from '.';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    backgroundImg: '/img/red-dead-img.jpg',
    floatImg: '/img/red-dead-float.png'
  },
  argTypes: {},
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Basic: Story = (args) => <Highlight {...args} />;
