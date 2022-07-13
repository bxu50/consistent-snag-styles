
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
/*
  colors are grouped by color with a primary color specified with
  and different shades specified using a number from 1 to 5 where 1 is the
  lightest shade.

  If a particular color has a state specified, it should be part of the
  variable name, e.g. 'red_p_hover', and not a different color shade.
*/

const colors = {
  white: '#fff', //common.white in react
  black: '#000',
  
  // Below are ugly names from react
  // Greens
  green_p: '#0D5257',
  green_p_hover: '#08454A',
  green_1: '#EBEFEF',
  green_2: '#A6BFBF',
  green_3: '#3D7579',
  green_4: '#E0EDE8',
  green_5: '#63A68E',

  // Reds
  red_p: '#DA291C',
  red_p_hover: '#BC2318',
  red_1: '#FEF6F6',
  red_2: '#F5C3BF',
  red_3: '#FBEAE8',

  // Blues
  blue_p: '#007AC9',
  blue_p_hover: '#005C99',
  blue_1: '#E4F0F5',
  blue_2: '#79B6CB',
  blue_3: '#21285E',

  // Oranges
  orange_p: '#FFAB00',
  orange_p_hover: '#FF9700',
  orange_1: '#FEFBF5',
  orange_2: '#FBECDF',
  orange_3: '#E87E2C',

  // Magentas
  magenta_p: '#9D1CDA',
  magenta_1: '#662D91',

  // Greys
  grey_1: '#F5F5F5',
  grey_2: '#BFBFBF',
  light_grey_2: 'rgba(191, 191, 191, 0.5)',
  grey_3: '#717171',
  grey_4: '#333333',
  grey_5: '#222222',

  // White
  white: '#FFFFFF',

  // Black
  black: '#000000',
  light_black: 'rgba(0, 0, 0, 0.5)',

  // transparent
  transparent: 'rgba(0, 0, 0, 0)',

  // transparent gray
  opaque_grey: 'rgba(51, 51, 51, 0.7)',
};

module.exports = {
  content: [path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)")],
  theme: {
    extend: {},
    color: {
      common: {
        black: colors.black,
        white: colors.white
      },
      primary: {
        lightest: colors.green_3,
        light: colors.green_2,
        main: colors.green_p,
        dark: colors.green_p_hover,
        contrastText: colors.grey_1,
        black: colors.black,
        white: colors.white,
    },
    secondary: {
      main: colors.grey_4,
      opacBlack: colors.light_black,
      transparent: colors.transparent,
    },
    text: { main: colors.grey_5, light: colors.grey_3 },
    background: {
      default: colors.white,
      dark: colors.grey_5,
    },
    error: {
      main: colors.red_1,
      dark: colors.red_p,
      text: colors.grey_4,
      light: colors.red_2,
      lightest: colors.red_3,
    },
    warning: {
      lightest: colors.orange_1,
      main: colors.orange_p,
    },
    success: {
      lightest: colors.green_1,
      main: colors.green_p,
    },
    interactivePrimary: {
      main: colors.red_p,
      dark: colors.red_p_hover,
      contrastText: colors.white,
    },
    interactiveSecondary: {
      main: colors.orange_p,
      dark: colors.orange_p_hover,
      contrastText: colors.grey_4,
    },
    interactiveTertiary: {
      main: colors.white,
      contrastText: colors.grey_5,
    },
    bar: {
      main: colors.red_p,
      marketLink: { main: colors.magenta_p },
    },
    textFields: {
      primary: {
        text: { main: colors.grey_3, dark: colors.grey_5 },
        border: { main: colors.grey_3, dark: colors.grey_5 },
      },
    },
    border: {
      main: colors.grey_2,
      light: colors.light_grey_2,
    },
    checkbox: {
      text: { main: colors.grey_4 },
      border: { main: colors.grey_2 },
    },
    toastr: {
      background: { main: colors.white },
      boxshadow: { main: colors.grey_6 },
    },
    popper: {
      border: { main: colors.grey_2 },
      text: { hover: colors.grey_1 },
    },
    formFooter: {
      background: { main: colors.grey_1 },
      border: { main: colors.grey_2 },
    },
    select: {
      background: { main: colors.white, dark: colors.grey_1 },
      border: { main: colors.grey_2 },
    },
    alert: {
      success: {
        border: colors.green_2,
        background: colors.green_1,
      },
      error: {
        border: colors.red_3,
      },
    },
    tile: {
      border: { main: colors.grey_1 },
      background: { main: colors.white },
    },
    positivePrimary: {
      main: colors.green_5,
      light: colors.green_4,
    },
    warningPrimary: {
      main: colors.orange_3,
      light: colors.orange_2,
    },
    infoPrimary: {
      main: colors.blue_2,
      light: colors.blue_1,
    },
    nav: {
      border: { main: colors.green_3, dark: colors.grey_2, links: colors.green_2 },
      text: { main: colors.grey_1, background: colors.green_p_hover, background2: colors.green_p },
    },
    disabled: {
      main: colors.grey_2,
    },
    trade: {
      marketLink: colors.magenta_1,
      specialOrder: colors.blue_p,
    },
    carouselOpacity: {
      main: colors.opaque_grey,
    },
    payment: {
      openPay: colors.orange_4,
      zipPay: colors.blue_3,
    },
    headingBar: {
      main: colors.red_p,
    },
    onePass: {
      background: colors.purple_1,
      text: colors.purple_4,
    },
  }
},
  plugins: [],
};

/*
  colors are grouped by color with a primary color specified with
  and different shades specified using a number from 1 to 5 where 1 is the
  lightest shade.

  If a particular color has a state specified, it should be part of the
  variable name, e.g. 'red_p_hover', and not a different color shade.
*/

module.exports = {
    white: '#fff', //common.white in react
    black: '#000',
    
    // Below are ugly names from react
    // Greens
    green_p: '#0D5257',
    green_p_hover: '#08454A',
    green_1: '#EBEFEF',
    green_2: '#A6BFBF',
    green_3: '#3D7579',
    green_4: '#E0EDE8',
    green_5: '#63A68E',
  
    // Reds
    red_p: '#DA291C',
    red_p_hover: '#BC2318',
    red_1: '#FEF6F6',
    red_2: '#F5C3BF',
    red_3: '#FBEAE8',
  
    // Blues
    blue_p: '#007AC9',
    blue_p_hover: '#005C99',
    blue_1: '#E4F0F5',
    blue_2: '#79B6CB',
    blue_3: '#21285E',
  
    // Oranges
    orange_p: '#FFAB00',
    orange_p_hover: '#FF9700',
    orange_1: '#FEFBF5',
    orange_2: '#FBECDF',
    orange_3: '#E87E2C',
  
    // Magentas
    magenta_p: '#9D1CDA',
    magenta_1: '#662D91',
  
    // Greys
    grey_1: '#F5F5F5',
    grey_2: '#BFBFBF',
    light_grey_2: 'rgba(191, 191, 191, 0.5)',
    grey_3: '#717171',
    grey_4: '#333333',
    grey_5: '#222222',
  
    // White
    white: '#FFFFFF',
  
    // Black
    black: '#000000',
    light_black: 'rgba(0, 0, 0, 0.5)',
  
    // transparent
    transparent: 'rgba(0, 0, 0, 0)',
  
    // transparent gray
    opaque_grey: 'rgba(51, 51, 51, 0.7)',
  };
  