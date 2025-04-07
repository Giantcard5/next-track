import styled from 'styled-components';

import Link from 'next/link';

interface SidebarContainerProps {
    $collapsed: boolean
};

export const SidebarContainer = styled.div<SidebarContainerProps>`
    width: ${(props) => (props.$collapsed ? '4.5rem' : '16rem')};
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    flex-direction: column;
    transition: width 0.3s ease;
    position: relative;
`;

export const ToggleButton = styled.button`
    position: absolute;
    top: 1rem;
    right: -.9rem;
    width: 1.6rem;
    height: 1.6rem;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.full};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    box-shadow: ${({ theme }) => theme.shadows.sm};
    
    svg {
        width: .8rem;
        height: .8rem;
        color: ${({ theme }) => theme.colors.text.secondary};
    }
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.muted};
    }
`;

export const LogoContainer = styled.div<{ $collapsed: boolean }>`
    padding: ${(props) => (props.$collapsed ? '1rem 0.5rem' : '1.5rem')};
    display: flex;
    justify-content: ${(props) => (props.$collapsed ? 'center' : 'flex-start')};
    align-items: center;
    height: 4rem;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoTextBlue = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
`;

export const LogoTextGreen = styled.span`
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
`;

export const LogoIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: ${({ theme }) => theme.radii.md};
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes.xl};
`;

interface NavProps {
    $collapsed: boolean
}

export const Nav = styled.nav<NavProps>`
    flex: 1;
    padding: ${(props) => (props.$collapsed ? '0.5rem' : `0.5rem 1rem`)};
    
    /* Hide scrollbar but allow scrolling if needed */
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
`;      

export const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.space[1]};
`;

export const NavItem = styled.li`
    margin-bottom: ${({ theme }) => theme.space[1]};
`;

interface NavLinkProps {
    $active: boolean
    $collapsed: boolean
}

export const NavLink = styled(Link) <NavLinkProps>`
    display: flex;
    align-items: center;
    justify-content: ${(props) => (props.$collapsed ? 'center' : 'flex-start')};
    padding: ${(props) => (props.$collapsed ? '0.75rem' : '0.75rem 1rem')};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    border-radius: ${({ theme }) => theme.radii.md};
    transition: background-color 0.2s, color 0.2s;
    
    background-color: ${({ $active, theme }) => ($active ? theme.colors.primaryLight : 'transparent')};
    color: ${({ $active, theme }) => ($active ? theme.colors.primaryDark : theme.colors.text.secondary)};
    
    &:hover {
      background-color: ${({ $active, theme }) => ($active ? theme.colors.primaryLight : theme.colors.muted)};
    }
`;

interface IconWrapperProps {
    $collapsed: boolean
}

export const IconWrapper = styled.span<IconWrapperProps>`
    margin-right: ${(props) => (props.$collapsed ? '0' : '0.75rem')};
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
`;

interface UserSectionProps {
    $collapsed: boolean
}

export const UserSection = styled.div<UserSectionProps>`
    padding: ${(props) => (props.$collapsed ? '1rem 0' : '1rem')};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    justify-content: ${(props) => (props.$collapsed ? 'center' : 'flex-start')};
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const UserAvatar = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: ${({ theme }) => theme.radii.full};
    background-color: ${({ theme }) => theme.colors.muted};
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      width: 1rem;
      height: 1rem;
      color: ${({ theme }) => theme.colors.text.secondary};
    }
`;

interface UserInfoProps {
    $collapsed: boolean
}

export const UserInfo = styled.div<UserInfoProps>`
    margin-left: ${({ theme }) => theme.space[3]};
    display: ${(props) => (props.$collapsed ? 'none' : 'block')};
`;

export const UserName = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const UserEmail = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.text.secondary};
`;

interface TooltipProps {
    $visible: boolean
}

export const Tooltip = styled.div<TooltipProps>`
    position: absolute;
    left: 100%;
    background-color: ${({ theme }) => theme.colors.text.primary};
    color: white;
    padding: ${({ theme }) => `${theme.space[1]} ${theme.space[2]}`};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    white-space: nowrap;
    pointer-events: none;
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    transform: translateX(8px);
    transition: opacity 0.2s;
    z-index: 20;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: transparent ${({ theme }) => theme.colors.text.primary} transparent transparent;
    }
`;