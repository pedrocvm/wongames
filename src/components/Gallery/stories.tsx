import { Story, Meta } from '@storybook/react/types-6-0';
import Gallery, { GalleryProps } from '.';
import items from './mock';

export default {
  title: 'Core/Gallery',
  component: Gallery,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
);
