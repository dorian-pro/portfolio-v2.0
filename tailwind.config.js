/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      "colors": {
        "base": {
          "white": "rgba(255, 255, 255, 1)",
          "white-100": "rgba(248, 250, 252, 1)",
          "black": "rgba(0, 0, 0, 1)",
          "black-10": "rgba(24, 24, 27, 1)",
          "black-60": "rgba(24, 24, 27, 1)",
          "transparent": "rgba(255, 255, 255, 1)"
        },
        "theme-light": {
          "background": {
            "bg": "rgba(255, 255, 255, 1)",
            "bg-40": "rgba(255, 255, 255, 1)",
            "bg-50": "rgba(230, 241, 254, 1)",
            "bg-second": "rgba(246, 246, 246, 1)"
          },
          "primary": {
            "primary-100": "rgba(225, 251, 234, 1)",
            "primary-200": "rgba(170, 240, 196, 1)",
            "primary-300": "rgba(115, 226, 163, 1)",
            "primary-400": "rgba(60, 203, 127, 1)",
            "primary-500": "rgba(22, 179, 100, 1)",
            "primary-600": "rgba(9, 146, 80, 1)",
            "primary-700": "rgba(8, 116, 67, 1)",
            "primary-800": "rgba(9, 92, 55, 1)",
            "primary-900": "rgba(3, 72, 42, 1)"
          },
          "gray": {
            "gray-50": "rgba(249, 250, 251, 1)",
            "gray-100": "rgba(248, 250, 252, 1)",
            "gray-200": "rgba(234, 236, 240, 1)",
            "gray-300": "rgba(208, 213, 221, 1)",
            "gray-400": "rgba(152, 162, 179, 1)",
            "gray-500": "rgba(102, 112, 133, 1)",
            "gray-600": "rgba(71, 84, 103, 1)",
            "gray-700": "rgba(52, 64, 84, 1)",
            "gray-800": "rgba(29, 41, 57, 1)",
            "gray-900": "rgba(16, 24, 40, 1)"
          },
          "red": {
            "red-100": "rgba(255, 238, 237, 1)",
            "red-200": "rgba(254, 205, 202, 1)",
            "red-300": "rgba(253, 162, 155, 1)",
            "red-400": "rgba(249, 112, 102, 1)",
            "red-500": "rgba(240, 68, 56, 1)",
            "red-600": "rgba(217, 45, 32, 1)",
            "red-700": "rgba(180, 35, 24, 1)",
            "red-800": "rgba(145, 32, 24, 1)",
            "red-900": "rgba(96, 20, 9, 1)"
          },
          "warning": {
            "warning-100": "rgba(255, 246, 219, 1)",
            "warning-200": "rgba(254, 223, 137, 1)",
            "warning-300": "rgba(254, 200, 75, 1)",
            "warning-400": "rgba(253, 176, 34, 1)",
            "warning-500": "rgba(247, 144, 9, 1)",
            "warning-600": "rgba(220, 104, 3, 1)",
            "warning-700": "rgba(181, 71, 8, 1)",
            "warning-800": "rgba(147, 55, 13, 1)",
            "warning-900": "rgba(101, 33, 4, 1)"
          },
          "info": {
            "info-100": "rgba(219, 232, 255, 1)",
            "info-200": "rgba(178, 201, 255, 1)",
            "info-300": "rgba(133, 167, 255, 1)",
            "info-400": "rgba(82, 128, 255, 1)",
            "info-600": "rgba(21, 79, 239, 1)",
            "info-700": "rgba(0, 70, 235, 1)",
            "info-800": "rgba(0, 58, 194, 1)",
            "info-900": "rgba(2, 33, 105, 1)"
          },
          "melon": {
            "melon-100": "rgba(255, 233, 237, 1)",
            "melon-200": "rgba(254, 205, 214, 1)",
            "melon-300": "rgba(254, 163, 180, 1)",
            "melon-400": "rgba(253, 111, 142, 1)",
            "melon-500": "rgba(246, 61, 104, 1)",
            "melon-600": "rgba(227, 27, 84, 1)",
            "melon-700": "rgba(192, 16, 72, 1)",
            "melon-800": "rgba(161, 16, 67, 1)",
            "melon-900": "rgba(101, 9, 43, 1)"
          },
          "yellow": {
            "yellow-100": "rgba(255, 251, 217, 1)",
            "yellow-200": "rgba(254, 238, 149, 1)",
            "yellow-300": "rgba(253, 226, 114, 1)",
            "yellow-400": "rgba(250, 197, 21, 1)",
            "yellow-500": "rgba(234, 170, 8, 1)",
            "yellow-600": "rgba(202, 133, 4, 1)",
            "yellow-700": "rgba(161, 92, 7, 1)",
            "yellow-800": "rgba(133, 74, 14, 1)",
            "yellow-900": "rgba(85, 40, 6, 1)"
          }
        },
        "theme-dark": {
          "background": {
            "bg": "rgba(5, 15, 33, 1)",
            "bg-40": "rgba(5, 15, 33, 1)"
          },
          "primary": {
            "primary-100": "rgba(3, 72, 42, 1)",
            "primary-200": "rgba(9, 92, 55, 1)",
            "primary-300": "rgba(8, 116, 67, 1)",
            "primary-400": "rgba(9, 146, 80, 1)",
            "primary-500": "rgba(22, 179, 100, 1)",
            "primary-600": "rgba(60, 203, 127, 1)",
            "primary-700": "rgba(115, 226, 163, 1)",
            "primary-800": "rgba(170, 240, 196, 1)",
            "primary-900": "rgba(225, 251, 234, 1)"
          },
          "gray": {
            "gray-100": "rgba(16, 24, 40, 1)",
            "gray-200": "rgba(29, 41, 57, 1)",
            "gray-300": "rgba(52, 64, 84, 1)",
            "gray-400": "rgba(71, 84, 103, 1)",
            "gray-500": "rgba(102, 112, 133, 1)",
            "gray-600": "rgba(152, 162, 179, 1)",
            "gray-700": "rgba(208, 213, 221, 1)",
            "gray-800": "rgba(234, 236, 240, 1)",
            "gray-900": "rgba(248, 250, 252, 1)"
          },
          "red": {
            "red-100": "rgba(96, 20, 9, 1)",
            "red-200": "rgba(145, 32, 24, 1)",
            "red-300": "rgba(180, 35, 24, 1)",
            "red-400": "rgba(217, 45, 32, 1)",
            "red-500": "rgba(240, 68, 56, 1)",
            "red-600": "rgba(249, 112, 102, 1)",
            "red-700": "rgba(253, 162, 155, 1)",
            "red-800": "rgba(254, 205, 202, 1)",
            "red-900": "rgba(255, 238, 237, 1)"
          }
        }
      },
      fontFamily: {
        "poppins": "Poppins",
        "nunito-sans": "Nunito Sans"
      }
    },
  },
  plugins: [],
}

