const color = {
    green50: '#E1F3F2',
    green100: '#B4E1DC',
    green200: '#83CFC6',
    green300: '#52BCAF',
    green400: '#2DAC9E',
    green500: '#109D8C',
    green600: '#0E907F',
    green700: '#0B806F',
    green800: '#086F60',
    green900: '#045344 ',
    gray50: '#FAFAFA',
    gray100: '#F5F5F5',
    gray200: '#EEEEEE',
    gray300: '#E0E0E0',
    gray400: '#BDBDBD',
    gray500: '#9E9E9E',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    gray900: '#212121',
    red50: '#FEF6F7',
    red100: '#FDECEE',
    red200: '#FCDFE2',
    red300: '#F9C7CD',
    red400: '#F38794',
    red500: '#ED4F62',
    red600: '#D5162D',
    red700: '#B01225',
    red800: '#780C19',
    red900: '#3C060D',
    error: '#D32F2F'
};

const breakpoint = {
    tablet: 728,
};

const media = {
    tablet: `max-width: ${breakpoint.tablet}px`
}

const theme = {
    color,
    breakpoint,
    media
};

export default theme;