import { Meta, Story } from '@storybook/react/types-6-0';
import Footer from '.';

export default {
  title: 'UI/Footer',
  component: Footer,
  args: {},
  argTypes: {}
} as Meta;

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />;
  </div>
);

Basic.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};
