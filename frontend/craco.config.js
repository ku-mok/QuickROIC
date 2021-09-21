module.exports = {
  webpack: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "@mui/styled-engine": "@mui/styled-engine-sc",
      },
    },
  },
};
