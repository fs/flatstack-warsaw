module.exports = function (api) {
  const isStatic = api.caller((caller) => caller.target === 'node');

  return {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
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
            : {}),
        },
      ],
    ],
    plugins: [['babel-plugin-styled-components', {ssr: true}]],
  };
};
