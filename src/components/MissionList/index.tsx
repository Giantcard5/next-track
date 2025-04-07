'use client'

import * as S from './styles';

import {
    Mission
} from '@/types/mission';

interface MissionListProps {
    missions: Mission[];
    onToggleStatus: (id: string) => void;
};

export function MissionList({ missions, onToggleStatus }: MissionListProps) {
    return (
        <S.MissionListContainer>
            {missions.map((mission) => (
                <S.MissionCard key={mission.id}>
                    <S.MissionContent>
                        <S.IconContainer $bgColor={mission.iconBg}>{mission.icon}</S.IconContainer>

                        <S.MissionInfo>
                            <S.MissionTitle>{mission.title}</S.MissionTitle>
                            <S.MissionDescription>{mission.description}</S.MissionDescription>
                        </S.MissionInfo>

                        <S.StatusButton
                            onClick={() => onToggleStatus(mission.id)}
                            aria-label={mission.status === 'completed' ? 'Mark as pending' : 'Mark as completed'}
                        >
                            {mission.status === 'completed' ? (
                                <S.CompletedIconWrapper>
                                    <S.CompletedIcon className='completed-icon' />
                                    <S.RemoveIcon className='remove-icon' />
                                </S.CompletedIconWrapper>
                            ) : (
                                <>
                                    <S.StatusPlaceholder>
                                        <S.PendingIcon />
                                    </S.StatusPlaceholder>
                                    <S.StatusText>Completar</S.StatusText>
                                </>
                            )}
                        </S.StatusButton>
                    </S.MissionContent>
                </S.MissionCard>
            ))}
        </S.MissionListContainer>
    );
};