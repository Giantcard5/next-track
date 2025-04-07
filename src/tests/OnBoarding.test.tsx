import React from 'react';

import { 
    render, 
    screen 
} from '@/tests/setup';

import { 
    OnBoarding 
} from '@/components/OnBoarding';

import { 
    initialMissions 
} from '@/data/missions';

describe('OnBoarding Component', () => {
    beforeEach(() => {
        render(<OnBoarding />);
    });

    it('renders the component with correct title', () => {
        expect(screen.getByTestId('onboarding-title')).toHaveTextContent('Complete suas missões');
    });

    it('renders the breadcrumb navigation', () => {
        const breadcrumb = screen.getByTestId('onboarding-breadcrumb');
        expect(breadcrumb).toHaveTextContent('Nexttrack');
        expect(breadcrumb).toHaveTextContent('Início');
    });

    it('displays the correct progress information', () => {
        const completedMissions = initialMissions.filter(mission => mission.status === 'completed').length;
        const totalMissions = initialMissions.length;
        expect(screen.getByTestId('progress-count')).toHaveTextContent(
            `${completedMissions}/${totalMissions} Completo`
        );
    });

    it('renders all missions from the initial data', () => {
        initialMissions.forEach(mission => {
            expect(screen.getByText(mission.title)).toBeInTheDocument();
            expect(screen.getByText(mission.description)).toBeInTheDocument();
        });
    });

    it('displays the correct status for each mission', () => {
        initialMissions.forEach(mission => {
            const statusButton = screen.getByTestId(`mission-status-${mission.id}`);
            if (mission.status === 'completed') {
                expect(statusButton).toHaveAttribute('aria-label', 'Mark as pending');
            } else {
                expect(statusButton).toHaveAttribute('aria-label', 'Mark as completed');
            }
        });
    });
}); 