import '@testing-library/jest-dom';

import { 
    configure 
} from '@testing-library/react';
import { 
    render as rtlRender 
} from '@testing-library/react';

import { 
    TestWrapper 
} from './TestWrapper';

configure({
    testIdAttribute: 'data-testid',
});

const customRender = (ui: React.ReactElement, options = {}) => {
    return rtlRender(ui, {
        wrapper: TestWrapper,
        ...options,
    });
};

export * from '@testing-library/react';

export { customRender as render }; 