/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@animus-ui/core",
  "@animus-ui/theming",
  "@animus-ui/components",
]);
const withPlugins = require("next-compose-plugins");

const withMDX = require("@next/mdx")({
  options: { providerImportSource: "@mdx-js/react" },
  extension: /\.(md|mdx)$/,
});
module.exports = withPlugins(
  [
    withMDX({
      reactStrictMode: true,
      swcMinify: true,
      pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    }),
    withTM,
  ],
  {}
);
