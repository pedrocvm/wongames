import { Meta, Story } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {
    onCheck: { action: 'Checked' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Basic: Story<CheckboxProps> = (args) => (
  <div style={{ padding: 10 }}>
    <Checkbox
      name="category"
      label="Action"
      labelFor="action"
      isChecked
      {...args}
    />
  </div>
);
