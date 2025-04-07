'use client'

import * as S from './styles';

import {
    Mission
} from '@/types/mission';

interface MissionListProps {
    missions: Mission[];
};

export function MissionList({ missions }: MissionListProps) {
    return (
        <S.MissionListContainer>
            {missions.map((mission) => (
                <S.MissionCard key={mission.id} data-testid="mission-card">
                    <S.MissionContent>
                        <S.IconContainer $bgColor={mission.iconBg} data-testid={`mission-icon-${mission.id}`}>
                            {mission.icon}
                        </S.IconContainer>

                        <S.MissionInfo>
                            <S.MissionTitle>{mission.title}</S.MissionTitle>
                            <S.MissionDescription>{mission.description}</S.MissionDescription>
                        </S.MissionInfo>

                        <S.StatusButton
                            aria-label={mission.status === 'completed' ? 'Mark as pending' : 'Mark as completed'}
                            data-testid={`mission-status-${mission.id}`}
                        >
                            {mission.status === 'completed' ? (
                                <S.CompletedIconWrapper>
                                    <S.CompletedIcon className='completed-icon' />
                                </S.CompletedIconWrapper>
                            ) : (
                                <S.StatusPlaceholder>
                                    <S.LoadingIcon />
                                    <S.StatusText>Pendente</S.StatusText>
                                </S.StatusPlaceholder>
                            )}
                        </S.StatusButton>
                    </S.MissionContent>
                </S.MissionCard>
            ))}
        </S.MissionListContainer>
    );
};