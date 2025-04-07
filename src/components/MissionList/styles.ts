import styled from 'styled-components';

import { 
    CheckCircledIcon, 
    PlusCircledIcon,
    UpdateIcon
} from '@radix-ui/react-icons';

const MissionListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[4]};
`;

const MissionCard = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.radii.lg};
    padding: ${({ theme }) => theme.space[6]};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    border: 1px solid ${({ theme }) => theme.colors.border};

    @media (max-width: 768px) {
        padding: ${({ theme }) => theme.space[4]};
    }
`;

const MissionContent = styled.div`
    display: flex;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space[4]};

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const IconContainer = styled.div<{ $bgColor: string }>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: ${({ theme }) => theme.radii.full};
    background-color: ${(props) => props.$bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${({ theme }) => theme.space[4]};
    flex-shrink: 0;
    
    svg {
        color: white;
    };

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: ${({ theme }) => theme.space[4]};
    }
`;

const MissionInfo = styled.div`
    flex: 1;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const MissionTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const MissionDescription = styled.p`
    color: ${({ theme }) => theme.colors.mutedForeground};
    margin-top: ${({ theme }) => theme.space[1]};
`;

const StatusButton = styled.button`
    margin-left: ${({ theme }) => theme.space[4]};
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: ${({ theme }) => theme.space[4]};
    }
`;

const StatusPlaceholder = styled.div`
    width: 6.5rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.muted};
    border-radius: ${({ theme }) => theme.radii.md};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.space[1]};
`;

const StatusText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.mutedForeground};
`;

const CompletedIconWrapper = styled.div`
    width: 4rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const CompletedIcon = styled(CheckCircledIcon)`
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
`;

const PendingIcon = styled(PlusCircledIcon)`
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.colors.primary};
`;

const LoadingIcon = styled(UpdateIcon)`
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors.primary};
`;

export {
    MissionListContainer,
    MissionCard,
    MissionContent,
    IconContainer,
    MissionInfo,
    MissionTitle,
    MissionDescription,
    StatusButton,
    StatusPlaceholder,
    CompletedIconWrapper,
    CompletedIcon,
    PendingIcon,
    LoadingIcon,
    StatusText,
};