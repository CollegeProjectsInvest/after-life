import { Merriweather, Open_Sans } from 'next/font/google';

export const fontMerriweather = Merriweather({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    variable: '--font-merriweather',
});

export const fontOpenSans = Open_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-opensans',
});
