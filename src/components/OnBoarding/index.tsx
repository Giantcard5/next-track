'use client'

import {
    useState
} from 'react';

import * as S from './styles';

import {
    ChatBubbleIcon,
    EnterIcon,
    ChatBubbleIcon as MessageIcon,
    RocketIcon,
    PaperPlaneIcon,
} from '@radix-ui/react-icons';

import {
    Mission
} from '@/types/mission';

import {
    ProgressBar
} from '@/components/ProgressBar';
import {
    MissionList
} from '@/components/MissionList';

const initialMissions: Mission[] = [
    {
        id: '1',
        icon: <ChatBubbleIcon className='h-5 w-5' />,
        iconBg: '#3B82F6',
        title: 'Entre no Grupo do WhatsApp',
        description: 'Você ficará por dentro de tudo que a Nexttrack tem para oferecer para você e suas empresas!',
        status: 'completed',
    },
    {
        id: '2',
        icon: <EnterIcon className='h-5 w-5' />,
        iconBg: '#3B82F6',
        title: 'Cadastrar WhatsApp',
        description: 'Faça a integração do seu WhatsApp através do QR CODE',
        status: 'pending',
    },
    {
        id: '3',
        icon: <MessageIcon className='h-5 w-5' />,
        iconBg: '#3B82F6',
        title: 'Verifique Suas Novas Mensagens',
        description: 'Novos leads que são cadastrados dentro do CRM',
        status: 'pending',
    },
    {
        id: '4',
        icon: <RocketIcon className='h-5 w-5' />,
        iconBg: '#3B82F6',
        title: 'Crie seu Agente de IA',
        description: 'Crie seu primeiro e único agente de IA que poderá responder a todas as suas mensagens!',
        status: 'pending',
    },
    {
        id: '5',
        icon: <PaperPlaneIcon className='h-5 w-5' />,
        iconBg: '#3B82F6',
        title: 'Aprenda a Realizar Disparos em Massa',
        description: 'Crie seu primeiro disparo em massa!',
        status: 'pending',
    },
]

export function OnBoarding() {
    const [missions, setMissions] = useState<Mission[]>(initialMissions);

    const completedMissions = missions.filter((mission) => mission.status === 'completed').length;
    const totalMissions = missions.length;
    const progress = (completedMissions / totalMissions) * 100;

    const toggleMissionStatus = (id: string) => {
        setMissions((prevMissions) =>
            prevMissions.map((mission) =>
                mission.id === id ? { ...mission, status: mission.status === "completed" ? "pending" : "completed" } : mission,
            ),
        );
    };

    return (
        <S.Container>
            <S.Wrapper>
                <S.Title>Complete suas missões</S.Title>

                <S.Breadcrumb>
                    <span>Nexttrack</span>
                    <S.BreadcrumbSeparator>{'>'}</S.BreadcrumbSeparator>
                    <S.BreadcrumbLink href='/'>Início</S.BreadcrumbLink>
                </S.Breadcrumb>

                <MissionList missions={missions} onToggleStatus={toggleMissionStatus} />

                <S.ProgressSection>
                    <S.ProgressHeader>
                        <S.ProgressLabel>Progresso</S.ProgressLabel>
                        <S.ProgressLabel>
                            {completedMissions}/{totalMissions} Completo
                        </S.ProgressLabel>
                    </S.ProgressHeader>

                    <ProgressBar progress={progress} />
                </S.ProgressSection>
            </S.Wrapper>
        </S.Container>
    )
};