import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AfterLife',
    description: 'Depois da vida', // TODO: melhorar descrição
};

export default function RootLayout({
    children,
}: PropsWithChildren): JSX.Element {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
