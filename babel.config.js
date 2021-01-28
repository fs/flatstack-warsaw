module.exports = function (api) {
  const isStatic = api.caller((caller) => caller.target === 'node');

  if (!isStatic) {
    return {};
  }

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
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };
};
