import { Meta, Story } from '@storybook/react/types-6-0';
import ExploreSidebar, { ExploreSidebarProps } from '.';

import itemsMock from './mock';

export default {
  title: 'Core/ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items: itemsMock
  },
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
);

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
);
