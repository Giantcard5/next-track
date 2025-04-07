import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.muted};
    border-radius: ${({ theme }) => theme.radii.full};
    height: 0.625rem;
    overflow: hidden;
`;

const Track = styled.div<{ width: string }>`
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 100%;
    border-radius: ${({ theme }) => theme.radii.full};
    transition: width 0.5s ease-in-out;
    width: ${(props) => props.width};
`;

export {
    Container,
    Track
};