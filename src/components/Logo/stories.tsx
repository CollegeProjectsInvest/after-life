import { StoryObj, Meta } from '@storybook/react';

import { Logo } from '@/components/Logo';

export default {
    title: 'Logo',
    component: Logo,
} as Meta;

export const Default: StoryObj<typeof Logo> = {};
