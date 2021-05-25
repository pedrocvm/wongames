import { Meta, Story } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy Death',
    subtitle: '<p>Play the new <strong>Crashlands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {}
} as Meta;

export const Basic: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

WithRibbon.args = {
  hasRibbon: true,
  ribbonText: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'secondary'
};
