import { StoryObj, Meta } from '@storybook/react';
import { Mail, Eye } from 'lucide-react';

import { Input, InputProps } from '@/components/Input';
import { Button } from '@/components/Button';

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        LeftElement: {
            control: false,
        },
        RightElement: {
            control: false,
        },
        id: {
            control: false,
        },
    },
    args: {
        variant: 'outlined',
    },
} as Meta<InputProps>;

export const Default: StoryObj<typeof Input> = {
    args: {
        id: 'default-input',
        label: 'Label',
        placeholder: 'Placeholder',
    },
};

export const WithElementsOnTheSide: StoryObj<typeof Input> = {
    args: {
        id: 'elements-input',
        label: 'Label',
        placeholder: 'Placeholder',
        LeftElement: <Mail className="text-red-800" size={20} />,
        RightElement: <Button Icon={Eye} />,
    },
};
