module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/no-unescaped-entities": "off", // Désactive cette règle si tu veux
    "@typescript-eslint/no-unused-vars": "warn", // Change les erreurs en avertissements
    "@typescript-eslint/no-empty-object-type": "off", // Désactive pour les types vides
  },
};
