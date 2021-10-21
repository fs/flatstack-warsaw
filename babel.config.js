module.exports = function (api) {
  const isStatic = api.caller((caller) => caller.target === 'node');

  return {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          importSource: 'preact/compat',
        },
      ],
      [
        '@babel/preset-env',
        {
          ...(isStatic
            ? {
                targets: {
                  node: 'current',
                },
              }
            : {
                useBuiltIns: 'usage',
                corejs: { version: 3 },
              }),
        },
      ],
    ],
    plugins: ['polished', ['babel-plugin-styled-components', { ssr: true }]],
  };
};
