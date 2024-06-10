import { DefaultTheme } from 'styled-components';

const colors = {
  black: 'rgba(0, 0, 0, 1)',
  lightBlack: '#747775', // #747775
  white: 'rgba(255, 255, 255, 1)',
  slate: {
    50: 'rgba(0, 0, 0, 0.18)',
    100: 'rgba(241, 245, 249, 1)',
    400: 'rgba(179, 187, 205, 1)',
    500: 'rgba(85, 102, 116, 1)',
    600: 'rgba(229,245,248)', //#E5F5F8
  },
  zinc: {
    50: 'rgba(250, 250, 250, 1)',
    100: 'rgba(221, 227, 236, 1)', //#DDE3EC
    200: 'rgba(209, 213, 219, 1)', //#D1D5DB
    900: 'rgba(115, 124, 144, 1)', //#737C90
  },
  gray: {
    50: 'rgba(250, 250, 250, 1)', // #FAFAFA
    100: 'rgba(243, 244, 246, 1)',
    150: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(229, 231, 235, 1)', //#e5e7eb
    250: 'rgba(229, 229, 229, 1)', //#E5E5E5
    300: 'rgba(210, 214, 219, 1)', //#D2D6DB
    350: 'rgba(173, 179, 189, 1)', //#adb3bd
    400: 'rgba(164, 175, 183, 1)', // #a4afb7
  },
  indigo: {
    50: 'rgba(244, 246, 255, 1)',
    600: 'rgba(79, 70, 230, 1)',
    700: 'rgba(86, 74, 152, 1)', //#564A98
    800: 'rgba(118, 105, 185, 1)', //#7669B9
    900: 'rgba(58, 13, 132, 1)', //#3a0d84
  },
  neutral: {
    100: 'rgba(248, 248, 248, 1)', // #f8f8f8
    200: 'rgba(231, 231, 231, 1)',
    300: 'rgba(217, 217, 217, 1)',
    400: 'rgba(157, 157, 157, 1)', // #9d9d9d
    600: 'rgba(85, 85, 85, 1)', // #555555
    700: 'rgba(69, 69, 69, 1)', // #454545
    800: 'rgba(59, 59, 59, 1)', // #3b3b3b
  },
  stone: {
    400: 'rgba(183, 183, 183, 1)', // #b7b7b7
    500: 'rgba(134, 149, 177, 1)', //#8695b1
  },
  orange: {
    50: 'rgba(253, 250, 248, 1)', // #FDFAF8
    300: 'rgb(241, 245, 249)', //#F1F5F9
    400: 'rgba(247, 157, 101, 1)', // #f79d65
    900: 'rgba(255, 86, 48, 1)', // #FF5630
  },
  emerald: {
    50: 'rgba(235, 249, 245, 1)', // #ebf9f5
    500: 'rgba(2, 160, 134, 1)',
    600: 'rgba(2, 160, 134, 0.2)', // #02a08633
  },
  teal: {
    50: 'rgba(247, 255, 254, 1)', //#F7FFFE
    500: 'rgba(0, 178, 148, 1)', //##00B294
  },
  blue: {
    25: 'rgba(228, 242, 245, 1)', //#E4F2F5
    50: 'rgba(191, 208, 255, 1)', //#bfd0ff
    100: 'rgba(240, 249, 255, 1)', // #F0F9FF
    200: 'rgba(221, 227, 236, 1)', // #DDE3EC
    400: 'rgba(28, 149, 239, 1)', // #1C95EF
    500: 'rgba(100, 92, 232, 1)', //#645ce8
    600: 'rgba(35, 83, 220, 1)', //#2353dc
    700: 'rgba(39, 56, 105, 1)', //#273869
  },
  rose: {
    200: 'rgba(253, 242, 244, 1)', // #fdf2f4
    400: 'rgba(232, 88, 119, 1)',
    500: 'rgba(240, 60, 80, 1)', //#f03c50
  },
  yellow: {
    200: 'rgba(253, 216, 10, 0.1)', // #FDD80A12
    600: 'rgba(253, 216, 10, 1)', //#FDD80A
    700: 'rgba(235, 207, 0, 1)',
  },
  green: {
    500: 'rgba(34, 197, 94, 1)', // #22c55e
  },
};

const border = {
  radius: {
    xxs: '4px',
    left: { lg: '12px 0 0 12px' },
    default: '4px',
    xs: '6px',
    sm: '8px',
    md: '10px',
    lg: '12px',
    xl: '22px',
    '2xl': '30px',
    full: '9999px',
  },
  size: {
    sm: '1px',
    '2sm': '2px',
    md: '3px',
  },
};

const fontWeight = {
  bold: 'bold',
  semiBold: '600',
  normal: 'normal',
  light: '300',
};

const lineHeight = {
  sm: '1',
  '2sm': '17px',
  md: '22px',
  lg: '27px',
};

const fontSize = {
  xxs: '10px',
  xs: '12px',
  sm: '14px',
  '2sm': '15px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  xxl: '22px',
  '2xl': '24px',
  '2xxl': '26px',
  '3xl': '30px',
  '4xl': '34px',
};

const boxShadow = {
  ssm: '0px 1px 1px rgba(0, 0, 0, 0.13 )',
  default: '0px 2px 5px rgba(0, 0, 0, 0.13)',
  xss: '0px 3px 6px rgba(0, 0, 0, 0.05)', // #0000000D
  sm: '0px 3px 6px rgba(0, 0, 0, 0.16)',
  md: '0px 4px 8px rgba(79, 70, 230, 0.49)',
  lg: '0px 0px 16px rgba(0, 0, 0, 0.08)',
  xl: '-2px 16px 30px rgba(0,0,0,0.18)',
  xxl: '-6px 10px 18px rgba(0, 0, 0, 0.16)',
};

const strokeWidth = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof colors;
    border: typeof border;
    fontWeight: typeof fontWeight;
    lineHeight: typeof lineHeight;
    fontSize: typeof fontSize;
    boxShadow: typeof boxShadow;
    strokeWidth: typeof strokeWidth;
    avatarColors: { [key: number]: string };
  }
}

const avatarColors = {
  0: '#4da6ff',
  1: '#cc66ff',
  2: '#40bf80',
  3: '#bf80ff',
  4: '#ff884d',
  5: '#6699ff',
  6: '#ff8080',
  7: '#2eb8b8',
  8: '#ffb366',
  9: '#39ac73',
  10: '#ff66cc',
  11: '#66ccff',
  12: '#b366ff',
  13: '#ffcc66',
  14: '#66ffcc',
  15: '#ff6666',
  16: '#3a32a3',
  17: '#6666ff',
  18: '#ff9999',
  19: '#99ccff',
  20: '#ff99cc',
  21: '#99ff99',
  22: '#9999ff',
  23: '#ffcc99',
  24: '#99ffcc',
  25: '#cc99ff',
  26: '#ccff99',
  27: '#99cccc',
  28: '#ff99ff',
  29: '#99cc66',
  30: '#ff6699',
  31: '#669966',
  32: '#9966cc',
  33: '#cc9966',
  34: '#cc6699',
  35: '#ff4d4d',
  36: '#33cc33',
  37: '#4d4dff',
  38: '#cc33cc',
  39: '#ff9933',
  40: '#3399ff',
  41: '#66cccc',
  42: '#d15577',
  43: '#50b050',
  44: '#5050b0',
  45: '#b050b0',
  46: '#ffb050',
  47: '#50b0ff',
  48: '#b0ffb0',
  49: '#b05050',
};

export const theme: DefaultTheme = {
  colors,
  border,
  fontWeight,
  lineHeight,
  fontSize,
  boxShadow,
  strokeWidth,
  avatarColors,
};
