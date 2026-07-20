const { defineConfigWithVueTs, vueTsConfigs } = require("@vue/eslint-config-typescript");

module.exports = defineConfigWithVueTs(
  {
    ignores: ["dist/**", "node_modules/**", "eslint.config.cjs"],
  },
  vueTsConfigs.recommended,
  {
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
  },
);
