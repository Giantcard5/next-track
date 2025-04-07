'use client'

import * as S from './styles';

import { 
    Sidebar 
} from '../Sidebar';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <S.Container>
            <Sidebar/>
            <S.Content>{children}</S.Content>
        </S.Container>
    )
};