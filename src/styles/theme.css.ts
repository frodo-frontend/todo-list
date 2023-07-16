import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    white_100: "#ffffff",
    white_200: "#dddddd",
    gray_100: "#808080",
    green_100: "#359f35",
  },
});
