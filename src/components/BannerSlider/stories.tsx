import { Story, Meta } from '@storybook/react/types-6-0';
import BannerSlider, { BannerSliderProps } from '.';

import items from './mock';

export default {
  title: 'Slider/BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);
