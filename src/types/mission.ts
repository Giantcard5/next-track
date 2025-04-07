import { 
    ReactNode 
} from 'react';

export type Mission = {
    id: string;
    icon: ReactNode;
    iconBg: string;
    title: string;
    description: string;
    status: 'pending' | 'completed';
};