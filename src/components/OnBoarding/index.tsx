'use client'

import { 
    useState 
} from 'react';

import * as S from './styles';

import { 
    initialMissions 
} from '@/data/missions';

import { 
    Mission 
} from '@/types/mission';

import { 
    ProgressBar 
} from '@/components/ProgressBar';
import {
    MissionList 
} from '@/components/MissionList';

export function OnBoarding() {
    const [missions, setMissions] = useState<Mission[]>(initialMissions);

    const completedMissions = missions.filter((mission) => mission.status === 'completed').length;
    const totalMissions = missions.length;
    const progress = (completedMissions / totalMissions) * 100;

    return (
        <S.Container data-testid="onboarding-container">
            <S.Wrapper>
                <S.Title data-testid="onboarding-title">Complete suas missões</S.Title>

                <S.Breadcrumb data-testid="onboarding-breadcrumb">
                    <span>Nexttrack</span>
                    <S.BreadcrumbSeparator>{'>'}</S.BreadcrumbSeparator>
                    <S.BreadcrumbLink href='/'>Início</S.BreadcrumbLink>
                </S.Breadcrumb>

                <MissionList missions={missions} />

                <S.ProgressSection data-testid="progress-section">
                    <S.ProgressHeader>
                        <S.ProgressLabel>Progresso</S.ProgressLabel>
                        <S.ProgressLabel data-testid="progress-count">
                            {completedMissions}/{totalMissions} Completo
                        </S.ProgressLabel>
                    </S.ProgressHeader>

                    <ProgressBar progress={progress} />
                </S.ProgressSection>
            </S.Wrapper>
        </S.Container>
    )
};