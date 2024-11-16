import { StoryObj, Meta } from '@storybook/react';
import { Settings } from 'lucide-react';

import { Button, ButtonProps } from '@/components/Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            control: 'text',
        },
        icon: {
            control: false,
        },
    },
} as Meta<ButtonProps>;

export const Default: StoryObj<typeof Button> = {
    args: {
        children: 'Default Button',
    },
};

export const WithIcon: StoryObj<typeof Button> = {
    args: {
        children: 'Icon Button',
        icon: <Settings />,
    },
};

export const OnlyIcon: StoryObj<typeof Button> = {
    args: {
        icon: <Settings />,
    },
};
