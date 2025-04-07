'use client'

import dynamic from 'next/dynamic';

import * as S from './styles';

const MixerHorizontalIcon = dynamic(() => import('@radix-ui/react-icons').then(mod => mod.MixerHorizontalIcon), { ssr: false });

interface PageUnderDevelopmentProps {
    title: string
    description: string
    icon: React.ReactNode
};

export function PageUnderDevelopment({ title, description, icon }: PageUnderDevelopmentProps) {
    return (
        <S.PageContainer>
            <S.ContentWrapper>
                <S.IconContainer>
                    {icon}
                </S.IconContainer>
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
                <S.DevelopmentBadge>
                    <MixerHorizontalIcon />
                    Página em desenvolvimento
                </S.DevelopmentBadge>
            </S.ContentWrapper>
        </S.PageContainer>
    )
};