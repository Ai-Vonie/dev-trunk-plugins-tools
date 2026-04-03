/**
 * SVGO Configuration
 * Docs: https://svgo.dev/
 * GitHub: https://github.com/svg/svgo
 * Configuration file: https://svgo.dev/docs/preset-default/
 */

export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false, // https://github.com/svg/svgo/issues/1128
          sortAttrs: true,
          removeOffCanvasPaths: true,
        },
      },
    },
  ],
};
