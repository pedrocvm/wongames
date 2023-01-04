import { Story, Meta } from '@storybook/react/types-6-0';
import CartIcon, { CartIconProps } from '.';

export default {
  title: 'Cart/CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Default: Story = () => <CartIcon />;
export const withItems: Story<CartIconProps> = (args) => <CartIcon {...args} />;

withItems.args = {
  quantity: 3
};
