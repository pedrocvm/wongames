import { Meta, Story } from '@storybook/react/types-6-0';
import PaymentOptions, { PaymentOptionsProps } from '.';

import cardsMock from './mock';

export default {
  title: 'Cart/PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  argTypes: {
    cards: {
      type: ''
    },
    handlePayment: { action: 'Paid' }
  },
  parameters: {
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Basic: Story<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
);
