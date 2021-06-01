import { Meta, Story } from '@storybook/react/types-6-0';
import Ribbon, { RibbonProps } from '.';

export default {
  title: 'UI/Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Basic: Story<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
);

Basic.args = {
  children: 'Best Seller'
};
