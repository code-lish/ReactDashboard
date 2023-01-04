export const darkTheme = {
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
    800: "#63625e",
    900: "#31312f",
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
    1000: "#00005C", //manullay adjusted
  },

  secondary: {
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
};

// function that reverses the color palette
function reverseTokens(theme) {
  const reversedTheme = {};
  Object.entries(theme).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTheme[key] = reversedObj;
  });
  return reversedTheme;
}

export const lightTheme = reverseTokens(darkTheme);

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
              light: darkTheme.primary[400],
            },
            secondary: {
              ...darkTheme.secondary,
              main: darkTheme.secondary[500],
              light: darkTheme.secondary[400],
            },
            grey: {
              ...darkTheme.grey,
              main: darkTheme.grey[500],
            },
            background: {
              default: darkTheme.primary[1000],
              alt: darkTheme.secondary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...lightTheme.primary,
              main: darkTheme.primary[500],
              light: darkTheme.primary[400],
            },
            secondary: {
              ...lightTheme.secondary,
              main: darkTheme.secondary[500],
              light: darkTheme.secondary[400],
            },
            grey: {
              ...lightTheme.grey,
              main: darkTheme.grey[500],
            },
            background: {
              default: darkTheme.grey[200],
              alt: darkTheme.secondary[500],
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
