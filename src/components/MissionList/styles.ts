import styled from 'styled-components';

import { 
    CheckCircledIcon, 
    PlusCircledIcon, 
    Cross2Icon 
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
`;

const MissionContent = styled.div`
    display: flex;
    align-items: flex-start;
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
`;

const MissionInfo = styled.div`
    flex: 1;
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
`;

const StatusPlaceholder = styled.div`
    width: 4rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.colors.muted};
    border-radius: ${({ theme }) => theme.radii.md};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.border};
    };
`;

const CompletedIconWrapper = styled.div`
    width: 4rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
        .remove-icon {
            opacity: 1;
        };
        .completed-icon {
            opacity: 0;
        };
    };
`;

const RemoveIcon = styled(Cross2Icon)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.colors.destructive};
    opacity: 0;
    transition: all 0.2s;
    z-index: 1;

    ${CompletedIconWrapper}:hover & {
        opacity: 1;
    };
`;

const CompletedIcon = styled(CheckCircledIcon)`
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    transition: opacity 0.2s;
    opacity: 1;

    ${CompletedIconWrapper}:hover & {
        opacity: 0;
    };
`;

const PendingIcon = styled(PlusCircledIcon)`
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.colors.primary};
`;

const StatusText = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.mutedForeground};
    margin-top: ${({ theme }) => theme.space[1]};
    text-align: center;
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
    RemoveIcon,
    CompletedIcon,
    PendingIcon,
    StatusText,
};