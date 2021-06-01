import { Meta, Story } from '@storybook/react/types-6-0';
import Highlight, { HighlightProps } from '.';
import item from './mock';

export default {
  title: 'Core/Highlight',
  component: Highlight,
  args: { ...item },
  argTypes: {}
} as Meta;

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />;
