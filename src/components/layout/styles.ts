import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
`;

export const Content = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;