'use client'

import * as S from './styles';

interface ProgressBarProps {
    progress: number;
};

export function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <S.Container data-testid="progress-bar-container">
            <S.Track
                width={`${progress}%`}
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                data-testid="progress-bar-track"
            />
        </S.Container>
    );
};