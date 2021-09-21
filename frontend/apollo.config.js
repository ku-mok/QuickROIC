module.exports = {
  client: {
    service: {
      name: "server",
      url: "http://backend:8000/",
    },
    includes: ["./src/**/*.tsx", "./src/**/*.ts"],
    excludes: ["**/__tests__/**"],
  },
};
