import { Story, Meta } from '@storybook/react/types-6-0';
import Dropdown, { DropdownProps } from '.';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />;

Default.args = {
  title: 'Click here',
  children: 'content'
};
