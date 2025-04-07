'use client'

import {
    useState
} from 'react';

import {
    usePathname
} from 'next/navigation';

import {
    HomeIcon,
    ChatBubbleIcon,
    RocketIcon,
    EnvelopeClosedIcon,
    PaperPlaneIcon,
    GearIcon,
    PersonIcon,
    HamburgerMenuIcon,
    ChevronLeftIcon,
} from '@radix-ui/react-icons';

import * as S from './styles';

const menuItems = [
    { name: 'Inicio', icon: HomeIcon, href: '/' },
    { name: 'WhatsApp', icon: ChatBubbleIcon, href: '/whatsapp' },
    { name: 'NextIA', icon: RocketIcon, href: '/nextia' },
    { name: 'Mensagens', icon: EnvelopeClosedIcon, href: '/mensagens' },
    { name: 'Disparo', icon: PaperPlaneIcon, href: '/disparo' },
    { name: 'Treinamentos', icon: GearIcon, href: '/treinamentos' },
];

export function Sidebar() {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <S.SidebarContainer $collapsed={collapsed}>
            <S.ToggleButton onClick={toggleSidebar}>{collapsed ? <HamburgerMenuIcon /> : <ChevronLeftIcon />}</S.ToggleButton>

            <S.LogoContainer $collapsed={collapsed}>
                {collapsed ? (
                    <S.LogoIcon>N</S.LogoIcon>
                ) : (
                    <S.Logo>
                        <S.LogoTextBlue>next</S.LogoTextBlue>
                        <S.LogoTextGreen>track</S.LogoTextGreen>
                    </S.Logo>
                )}
            </S.LogoContainer>

            <S.Nav $collapsed={collapsed}>
                <S.NavList>
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href
                        const Icon = item.icon

                        return (
                            <S.NavItem
                                key={item.name}
                                onMouseEnter={() => collapsed && setActiveTooltip(item.name)}
                                onMouseLeave={() => setActiveTooltip(null)}
                                style={{ position: "relative" }}
                            >
                                <S.NavLink href={item.href} $active={isActive} $collapsed={collapsed}>
                                    <S.IconWrapper $collapsed={collapsed}>
                                        <Icon />
                                    </S.IconWrapper>
                                    {!collapsed && item.name}
                                </S.NavLink>
                                {collapsed && <S.Tooltip $visible={activeTooltip === item.name}>{item.name}</S.Tooltip>}
                            </S.NavItem>
                        )
                    })}
                </S.NavList>
            </S.Nav>

            <S.UserSection $collapsed={collapsed}>
                <S.UserContainer>
                    <S.UserAvatar>
                        <PersonIcon />
                    </S.UserAvatar>
                    <S.UserInfo $collapsed={collapsed}>
                        <S.UserName>User name</S.UserName>
                        <S.UserEmail>user@example.com</S.UserEmail>
                    </S.UserInfo>
                </S.UserContainer>
            </S.UserSection>
        </S.SidebarContainer>
    )
};