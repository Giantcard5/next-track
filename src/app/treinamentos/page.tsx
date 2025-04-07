'use client'

import { 
    PageUnderDevelopment 
} from '@/components/PageUnderDevelopment';

import { 
    GearIcon 
} from '@radix-ui/react-icons'

export default function TreinamentosPage() {
    return (
        <PageUnderDevelopment
            title='Treinamentos'
            description='Acesse tutoriais e materiais de treinamento para aproveitar ao máximo a plataforma.'
            icon={<GearIcon/>}
        />
    )
};