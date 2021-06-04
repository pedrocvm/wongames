import { Meta, Story } from '@storybook/react/types-6-0';
import FormSignIn from '.';

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  args: {},
  argTypes: {}
} as Meta;

export const Basic: Story = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn {...args} />
  </div>
);
