/** @type {import('tailwindcss').Config} */
const colors = require('./colors.js')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      default: isMarketLinkThemeEnabled && !isPageBackgroundGrey ? colors.white : colors.grey_1,
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
