import React from 'react';

import { 
    ThemeProvider 
} from '@/provider/ThemeProvider';

import { 
    Layout 
} from '@/components/layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider>
                    <Layout>{children}</Layout>
                </ThemeProvider>
            </body>
        </html>
            
    );
};