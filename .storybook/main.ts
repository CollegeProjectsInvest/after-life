import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    staticDirs: ['../public'],
    stories: ['../src/components/**/stories.tsx'],
    addons: [
        '@storybook/addon-onboarding',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
};

export default config;
