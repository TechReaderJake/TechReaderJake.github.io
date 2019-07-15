// 50 shades of grey generator
// https://javisperez.github.io/tailwindcolorshades/#/?%233E4047=3E4047&tv=1
const theme = {
  themeBlue100: '#e4f1ff',
  themeBlue200: '#a8d3ff',
  themeBlue300: '#7cbcff',
  themeBlue400: '#54a8ff',
  themeBlue500: '#2990fc',
  themeBrown100: '#fff3e2',
  themeBrown200: '#ffd9a1',
  themeBrown300: '#ffc671',
  themeBrown400: '#ffb546',
  themeBrown500: '#ffa218',
  // Blues
  //themeRGB: rgba(228,241,255,1);
  //themeRGB: rgba(168,211,255,1);
  //themeRGB: rgba(124,188,255,1);
  //themeRGB: rgba( 84,168,255,1);
  //themeRGB: rgba( 41,144,252,1);

  // Browns
  //themeRGB: rgba(255,243,226,1);
  //themeRGB: rgba(255,217,161,1);
  //themeRGB: rgba(255,198,113,1);
  //themeRGB: rgba(255,181, 70,1);
  //themeRGB: rgba(255,162, 24,1);
}

const colors = {
  grey100: '#ECECED',
  grey200: '#CFCFD1',
  grey300: '#B2B3B5',
  grey400: '#78797E',
  grey500: '#3E4047',
  grey600: '#383A40',
  grey700: '#25262B',
  grey800: '#1C1D20',
  grey900: '#131315',

  white: '#ffffff',
}

export default {
  ...theme,
  ...colors,
  textLightest: colors.white,
  textLightestHover: colors.grey200,
  textLight: '#57595d',
  primary: colors.grey500,
  primaryAlpha: `rgba(32, 35, 42, 0.85)`,
  text: colors.grey500,
  background: '#f4f8fb',
  backgroundArticle: colors.white,
  heartFooter: 'red',
  highlight_code_oneline: '#fff9d9',
  highlight_code_bg: '#ffa7c4',
  highlight_code_marker: '#ffa7c4',
  highlight_code_linebg: '#022a4b',
}
