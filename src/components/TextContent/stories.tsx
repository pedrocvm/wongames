import { Meta, Story } from '@storybook/react/types-6-0';
import TextContent, { TextContentProps } from '.';
import textMock from './mock';

export default {
  title: 'Core/TextContent',
  component: TextContent,
  args: textMock,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Basic: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
);
