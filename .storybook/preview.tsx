import React from 'react';
import type { Preview } from '@storybook/react';

import '../src/styles/globals.css';
import { fontMerriweather, fontOpenSans } from '../src/lib/fonts';

const preview: Preview = {
    decorators: [
        (Story) => (
            <div className={`${fontOpenSans.variable} ${fontMerriweather.className}`}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
