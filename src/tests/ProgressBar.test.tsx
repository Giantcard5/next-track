import React from 'react';

import { 
    render, 
    screen 
} from '@/tests/setup';

import { 
    ProgressBar 
} from '@/components/ProgressBar';

describe('ProgressBar Component', () => {
    it('renders with correct progress value', () => {
        const progress = 75;
        render(<ProgressBar progress={progress} />);

        const progressBar = screen.getByTestId('progress-bar-track');
        expect(progressBar).toHaveAttribute('aria-valuenow', progress.toString());
        expect(progressBar).toHaveStyle({ width: `${progress}%` });
    });

    it('handles minimum progress value (0%)', () => {
        render(<ProgressBar progress={0} />);

        const progressBar = screen.getByTestId('progress-bar-track');
        expect(progressBar).toHaveAttribute('aria-valuenow', '0');
        expect(progressBar).toHaveStyle({ width: '0%' });
    });

    it('handles maximum progress value (100%)', () => {
        render(<ProgressBar progress={100} />);

        const progressBar = screen.getByTestId('progress-bar-track');
        expect(progressBar).toHaveAttribute('aria-valuenow', '100');
        expect(progressBar).toHaveStyle({ width: '100%' });
    });

    it('handles decimal progress values', () => {
        const progress = 33.33;
        render(<ProgressBar progress={progress} />);

        const progressBar = screen.getByTestId('progress-bar-track');
        expect(progressBar).toHaveAttribute('aria-valuenow', progress.toString());
        expect(progressBar).toHaveStyle({ width: `${progress}%` });
    });
}); 