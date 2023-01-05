const lightTheme = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#fdfdfb",
    200: "#fcfbf7",
    300: "#faf9f3",
    400: "#f9f7ef",
    500: "#f7f5eb",
    600: "#c6c4bc",
    700: "#94938d",
    800: "#63625e", //this is used
    900: "#31312f", //this is used
    1000: "#000000", // manually adjusted
  },
  primary: {
    100: "#e2e1fa",
    200: "#c5c2f4",
    300: "#a7a4ef",
    400: "#8a85e9",
    500: "#6d67e4",
    600: "#5752b6",
    700: "#413e89",
    800: "#2c295b",
    900: "#16152e",
    1000: "#6d67e4", // manually adjusted
  },

  black: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
    1000: "000000", //// manually adjusted it is used
  },
  light: {
    100: "#fcfcff",
    200: "#f8f9ff",
    300: "#f5f7ff",
    400: "#f1f4ff",
    500: "#eef1ff",
    600: "#bec1cc",
    700: "#8f9199",
    800: "#5f6066",
    900: "#303033",
  },
  bgColor: {
    100: "#fffffe",
    200: "#fffffd",
    300: "#fffefd",
    400: "#fffefc",
    500: "#fffefb",
    600: "#cccbc9",
    700: "#999897",
    800: "#666664",
    900: "#333332",
    1000: "#fcfafa", // manually adjusted
  },
};

const darkTheme = {
  grey: {
    0: "#31312f",
    10: "#63625e",
    50: "#94938d",
    100: "#c6c4bc",
    200: "#f7f5eb",
    300: "#f0f0f0", // manually adjusted
    400: "#f9f7ef",
    500: "#faf9f3",
    600: "#fcfbf7",
    700: "#ede8d5", // manually adjusted
    800: "#94938d", // manually adjusted this is used
    900: "#fdfdfb", //this is used
    1000: "#f6f6f6", // manually adjusted
  },
  primary: {
    100: "#fff8d6",
    200: "#fff1ad",
    300: "#ffeb84",
    400: "#ffe45b",
    500: "#ffdd32",
    600: "#ccb128",
    700: "#99851e",
    800: "#665814",
    900: "#332c0a",
    1000: "#eef1ff", // manually adjusted
  },

  black: {
    100: "#fcfcff",
    200: "#f8f9ff",
    300: "#f5f7ff",
    400: "#f1f4ff",
    500: "#eef1ff",
    600: "#bec1cc",
    700: "#8f9199",
    800: "#5f6066",
    900: "#303033",
    1000: "#ffdd32", //// manually adjusted it is used
  },
  light: {
    100: "#cecde0",
    200: "#9d9bc1",
    300: "#6d6aa3",
    400: "#3c3884",
    500: "#0b0665",
    600: "#090551",
    700: "#07043d",
    800: "#040228",
    900: "#020114",
  },
  bgColor: {
    100: "#cfcfd5",
    200: "#9e9eac",
    300: "#6e6e82",
    400: "#3d3d59",
    500: "#0d0d2f",
    600: "#0a0a26",
    700: "#08081c",
    800: "#050513",
    900: "#030309",
    1000: "#0d0b27", // manually adjusted
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...darkTheme.primary,
              main: darkTheme.primary[500],
            },

            black: {
              ...darkTheme.black,
              main: darkTheme.black[500],
            },
            light: {
              ...darkTheme.light,
              main: darkTheme.light[500],
            },
            grey: {
              ...darkTheme.grey,
              main: darkTheme.grey[500],
            },
            bgColor: {
              ...darkTheme.bgColor,
              main: darkTheme.bgColor[500],
            },
            background: {
              default: darkTheme.bgColor[500],
              alt: darkTheme.bgColor[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...lightTheme.primary,
              main: lightTheme.primary[500],
            },
            black: {
              ...lightTheme.black,
              main: lightTheme.black[500],
            },
            light: {
              ...lightTheme.light,
              main: lightTheme.light[500],
            },
            grey: {
              ...lightTheme.grey,
              main: lightTheme.grey[500],
            },
            bgColor: {
              ...lightTheme.bgColor,
              main: lightTheme.bgColor[500],
            },
            background: {
              default: lightTheme.bgColor[500],
              alt: lightTheme.bgColor[800],
            },
          }),
    },
    typography: {
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
  };
};
