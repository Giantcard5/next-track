import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            primaryDark: string;
            primaryLight: string;
            secondary: string;
            background: string;
            white: string;
            text: {
                primary: string;
                secondary: string;
                light: string;
            };
            border: string;
            muted: string;
            mutedForeground: string;
            accent: string;
            accentForeground: string;
            destructive: string;
            destructiveForeground: string;
        };
        fontSizes: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
        };
        fontWeights: {
            normal: number;
            medium: number;
            semibold: number;
            bold: number;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            8: string;
            10: string;
            12: string;
            16: string;
            20: string;
        };
        radii: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            full: string;
        };
        shadows: {
            sm: string;
            md: string;
            lg: string;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
    }
} 