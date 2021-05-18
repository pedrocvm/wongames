import { Meta, Story } from '@storybook/react/types-6-0';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default'
  },
  argTypes: {
    color: {
      control: 'color'
    }
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

Basic.args = {
  color: '#fff000'
};
