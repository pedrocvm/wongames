import { Meta, Story } from '@storybook/react/types-6-0';
import ProfileMenu, { ProfileMenuProps } from '.';

export default {
  title: 'Profile/ProfileMenu',
  component: ProfileMenu,
  args: {
    activeLink: '/profile/me'
  },
  parameters: {
    backgrounds: {
      default: 'Won Dark'
    }
  }
} as Meta;

export const Basic: Story<ProfileMenuProps> = (args) => (
  <ProfileMenu {...args} />
);
