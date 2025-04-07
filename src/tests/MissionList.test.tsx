import React from 'react';

import { 
    render, 
    screen 
} from '@/tests/setup';

import { 
    MissionList 
} from '@/components/MissionList';

import { 
    initialMissions 
} from '@/data/missions';

describe('MissionList Component', () => {
    it('renders all missions passed as props', () => {
        render(<MissionList missions={initialMissions} />);

        initialMissions.forEach(mission => {
            expect(screen.getByText(mission.title)).toBeInTheDocument();
            expect(screen.getByText(mission.description)).toBeInTheDocument();
        });
    });

    it('displays the correct status for each mission', () => {
        render(<MissionList missions={initialMissions} />);

        initialMissions.forEach(mission => {
            const statusButton = screen.getByTestId(`mission-status-${mission.id}`);
            if (mission.status === 'completed') {
                expect(statusButton).toHaveAttribute('aria-label', 'Mark as pending');
            } else {
                expect(statusButton).toHaveAttribute('aria-label', 'Mark as completed');
            }
        });
    });

    it('renders the correct icon for each mission', () => {
        render(<MissionList missions={initialMissions} />);

        initialMissions.forEach(mission => {
            const iconContainer = screen.getByTestId(`mission-icon-${mission.id}`);
            expect(iconContainer).toHaveStyle(`background-color: ${mission.iconBg}`);
        });
    });

    it('handles empty missions array gracefully', () => {
        render(<MissionList missions={[]} />);
        expect(screen.queryByTestId('mission-card')).not.toBeInTheDocument();
    });
}); 