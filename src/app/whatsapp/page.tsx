'use client'

import { 
    PageUnderDevelopment 
} from '@/components/PageUnderDevelopment';

import {
    ChatBubbleIcon 
} from '@radix-ui/react-icons'

export default function WhatsAppPage() {
    return (
        <PageUnderDevelopment
            title='WhatsApp'
            description='Integre seu WhatsApp e gerencie suas conversas em um só lugar.'
            icon={<ChatBubbleIcon/>}
        />
    )
};