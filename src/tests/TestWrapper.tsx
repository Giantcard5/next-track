import React from 'react';

import { 
    ThemeProvider 
} from 'styled-components';

import { 
    testTheme 
} from './testTheme';

interface TestWrapperProps {
    children: React.ReactNode;
};

export const TestWrapper = ({ children }: TestWrapperProps) => {
    return (
        <ThemeProvider theme={testTheme}>
            {children}
        </ThemeProvider>
    );
}; 