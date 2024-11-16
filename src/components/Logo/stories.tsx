import { StoryObj, Meta } from '@storybook/react';

import { Logo, LogoProps } from '@/components/Logo';

export default {
    title: 'Logo',
    component: Logo,
    args: {
        hideText: false,
        size: 'medium',
    },
} as Meta<LogoProps>;

export const Default: StoryObj<typeof Logo> = {};
