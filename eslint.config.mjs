import nextConfig from "eslint-config-next";

const config = [...nextConfig];

// Disable overly strict apostrophe rule — apostrophes in JSX text are valid
config.push({
  rules: {
    "react/no-unescaped-entities": "off",
  },
});

export default config;
