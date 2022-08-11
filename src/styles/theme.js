const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    colorContrastLow: '#d3d3d4',
    colorWhite : '#fff',
    switchColorPrimary: '#302C40',
    switchAnimationDuraction: '0.2s',
    gradient: 'linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)',
    colorGreen: '#5DC399',
    colorGray: '#adadad',
}

export const lightTheme = {
    primary: '#fff',
    secondary: '#F8F8F8',
    textColor: '#585280',
    header: '#585280',
    headerNumber: '#fff',
    activeMenu: '#582880',
    ...globalTheme
}

export const darkTheme = {
    primary: '#302C40',
    secondary: '#2C2839',
    textColor: '#fff',
    header: '#fff',
    headerNumber: '#582880',
    activeMenu: '#FFF',
    ...globalTheme
}