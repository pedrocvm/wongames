import { Meta, Story } from '@storybook/react/types-6-0';
import FormSignUp from '.';

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp,
  args: {},
  argTypes: {}
} as Meta;

export const Basic: Story = (args) => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp {...args} />
  </div>
);
