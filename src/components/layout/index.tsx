'use client'

import React from 'react';

import * as S from './styles';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <S.Container>
            {/* Sidebar */}
            <S.Content>{children}</S.Content>
        </S.Container>
    )
};