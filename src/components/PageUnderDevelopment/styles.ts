import styled from 'styled-components';

export const PageContainer = styled.div`
    flex: 1;
    padding: ${({ theme }) => theme.space[8]};
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const ContentWrapper = styled.div`
    max-width: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IconContainer = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: ${({ theme }) => theme.radii.full};
    background-color: ${({ theme }) => theme.colors.primaryLight};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space[6]};
    
    svg {
        width: 2.5rem;
        height: 2.5rem;
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[4]};
    color: ${({ theme }) => theme.colors.text.primary};
`

export const Description = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.space[8]};
`

export const DevelopmentBadge = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.space[2]};
    padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
    background-color: ${({ theme }) => theme.colors.muted};
    border-radius: ${({ theme }) => theme.radii.full};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text.secondary};
    
    svg {
        width: 1rem;
        height: 1rem;
    }
`