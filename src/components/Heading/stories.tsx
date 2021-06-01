import { Meta, Story } from '@storybook/react/types-6-0';
import Heading, { HeadingProps } from '.';

export default {
  title: 'UI/Heading',
  component: Heading,
  args: {},
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />;
Basic.args = {
  children: 'Most Populars'
};
