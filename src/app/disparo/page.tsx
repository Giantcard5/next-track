'use client'

import { 
    PageUnderDevelopment 
} from '@/components/PageUnderDevelopment';

import { 
    PaperPlaneIcon 
} from '@radix-ui/react-icons';

export default function DisparoPage() {
  return (
    <PageUnderDevelopment
      title='Disparo'
      description='Crie e envie campanhas de mensagens em massa para seus contatos.'
      icon={<PaperPlaneIcon />}
    />
  )
};