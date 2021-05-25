import { Meta, Story } from '@storybook/react/types-6-0';
import MediaMatch from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  args: {},
  argTypes: {}
} as Meta;

export const Desktop: Story = (args) => (
  <MediaMatch {...args} greaterThan="medium">
    <h1>Only on Desktop</h1>
  </MediaMatch>
);

export const Mobile: Story = (args) => (
  <MediaMatch {...args} lessThan="medium">
    <h1>Only on Mobile</h1>
  </MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};
