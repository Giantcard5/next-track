'use client'

import { 
    PageUnderDevelopment 
} from '@/components/PageUnderDevelopment';

import {
    EnvelopeClosedIcon 
} from '@radix-ui/react-icons';

export default function MensagensPage() {
    return (
        <PageUnderDevelopment
            title='Mensagens'
            description='Gerencie todas as suas mensagens e interações com clientes.'
            icon={<EnvelopeClosedIcon/>}
        />
    )
};