import React from 'react';

import { 
    render, 
    screen, 
    fireEvent 
} from '@/tests/setup';

import { 
    Sidebar 
} from '@/components/Sidebar';

jest.mock('next/navigation', () => ({
    usePathname: () => '/',
}));

describe('Sidebar Component', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 1024,
        });
    });

    it('renders all menu items', () => {
        render(<Sidebar />);
        
        const menuItems = ['Inicio', 'WhatsApp', 'NextIA', 'Mensagens', 'Disparo', 'Treinamentos'];
        menuItems.forEach(item => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });
    });

    it('shows tooltip on hover when collapsed', () => {
        render(<Sidebar />);
        
        const toggleButton = screen.getByRole('button');
        fireEvent.click(toggleButton);
        
        const menuItem = screen.getByText('Inicio');
        fireEvent.mouseEnter(menuItem);
        
        expect(screen.getByText('Inicio')).toBeInTheDocument();
    });

    it('toggles sidebar when clicking the toggle button', () => {
        render(<Sidebar />);
        
        const toggleButton = screen.getByRole('button');
        const sidebar = screen.getByTestId('sidebar-container');
        
        expect(sidebar).toHaveStyle({ width: '16rem' });
        
        fireEvent.click(toggleButton);
        expect(sidebar).toHaveStyle({ width: '4.5rem' });
        
        fireEvent.click(toggleButton);
        expect(sidebar).toHaveStyle({ width: '16rem' });
    });

    it('shows user information', () => {
        render(<Sidebar />);
        
        expect(screen.getByText('User name')).toBeInTheDocument();
        expect(screen.getByText('user@example.com')).toBeInTheDocument();
    });

    it('collapses automatically on small screens', () => {
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 768,
        });
        
        render(<Sidebar />);
        
        const sidebar = screen.getByTestId('sidebar-container');
        expect(sidebar).toHaveStyle({ width: '4.5rem' });
    });
}); 