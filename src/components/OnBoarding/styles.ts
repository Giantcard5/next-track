import styled from 'styled-components';

import Link from 'next/link';

const Container = styled.div`
    flex: 1;
    padding: ${({ theme }) => theme.space[8]};
    background-color: ${({ theme }) => theme.colors.background};

    @media (max-width: 768px) {
        padding: ${({ theme }) => theme.space[4]};
    }
`;

const Wrapper = styled.div`
    max-width: 64rem;
    margin: 0 auto;
`;

const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    margin-bottom: ${({ theme }) => theme.space[2]};

    @media (max-width: 768px) {
        font-size: ${({ theme }) => theme.fontSizes.xl};
        text-align: center;
    }
`;

const Breadcrumb = styled.div`
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: ${({ theme }) => theme.space[8]};

    @media (max-width: 768px) {
        justify-content: center;
        margin-bottom: ${({ theme }) => theme.space[4]};
    }
`;

const BreadcrumbSeparator = styled.span`
    margin: 0 ${({ theme }) => theme.space[1]};
`;

const BreadcrumbLink = styled(Link)`
    color: ${({ theme }) => theme.colors.primary};
    
    &:hover {
        text-decoration: underline;
    };
`;

const ProgressSection = styled.div`
    margin-top: ${({ theme }) => theme.space[8]};
`;

const ProgressHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.space[2]};
`;

const ProgressLabel = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export {
    Container,
    Wrapper,
    Title,
    Breadcrumb,
    BreadcrumbSeparator,
    BreadcrumbLink,
    ProgressSection,
    ProgressHeader,
    ProgressLabel
};