'use client'

import { 
    PageUnderDevelopment 
} from '@/components/PageUnderDevelopment';

import { 
    RocketIcon 
} from '@radix-ui/react-icons';

export default function NextIAPage() {
    return (
        <PageUnderDevelopment
            title='NextIA'
            description='Crie agentes de IA personalizados para automatizar suas interações.'
            icon={<RocketIcon/>}
        />
    )
};