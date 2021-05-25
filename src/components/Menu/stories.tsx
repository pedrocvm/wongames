import { Meta, Story } from '@storybook/react/types-6-0';
import Menu from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {},
  argTypes: {}
} as Meta;

export const Basic: Story = (args) => <Menu {...args} />;

Basic.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  backgrounds: {
    default: 'dark'
  },
  layout: 'fullscreen'
};
