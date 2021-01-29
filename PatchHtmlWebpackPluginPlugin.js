// Temporary fix
// See issue: https://github.com/jantimon/html-webpack-plugin/issues/1590

class PatchHtmlWebpackPluginPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(
      'PatchHtmlWebpackPluginPlugin',
      (compilation) => {
        compilation.hooks.childCompiler.tap(
          'PatchHtmlWebpackPluginPlugin',
          (childCompiler, compilerName) => {
            if (compilerName !== 'HtmlWebpackCompiler') {
              return;
            }

            childCompiler.options.externalsPresets = {
              web: false,
              node: true,
              nwjs: false,
              electron: false,
              electronMain: false,
              electronPreload: false,
              electronRenderer: false,
            };
            childCompiler.options.loader = {
              target: 'node',
            };
            childCompiler.options.target = 'node';
            childCompiler.options.node = {
              global: false,
              __filename: 'eval-only',
              __dirname: 'eval-only',
            };
            childCompiler.options.output = {
              ...childCompiler.options.output,
              chunkFormat: 'commonjs',
              chunkLoading: 'require',
              enabledChunkLoadingTypes: ['require'],
              enabledWasmLoadingTypes: ['async-node'],
              globalObject: 'global',
              wasmLoading: 'async-node',
              workerChunkLoading: 'require',
              workerWasmLoading: 'async-node',
            };
            childCompiler.options.resolve.conditionNames = [
              'webpack',
              'development',
              'node',
            ];
            childCompiler.options.resolve.byDependency = {
              wasm: {
                conditionNames: ['import', 'module', '...'],
                aliasFields: [],
                mainFields: ['module', '...'],
              },
              esm: {
                conditionNames: ['import', 'module', '...'],
                aliasFields: [],
                mainFields: ['module', '...'],
              },
              worker: {
                conditionNames: ['import', 'module', '...'],
                aliasFields: [],
                mainFields: ['module', '...'],
                preferRelative: true,
              },
              commonjs: {
                conditionNames: ['require', 'module', '...'],
                aliasFields: [],
                mainFields: ['module', '...'],
              },
              amd: {
                conditionNames: ['require', 'module', '...'],
                aliasFields: [],
                mainFields: ['module', '...'],
              },
              loader: {
                conditionNames: ['require', 'module', '...'],
                aliasFields: [],
                mainFields: ['module', '...'],
              },
              unknown: {
                conditionNames: ['require', 'module', '...'],
                aliasFields: [],
                mainFields: ['module', '...'],
              },
              undefined: {
                conditionNames: ['require', 'module', '...'],
                aliasFields: [],
                mainFields: ['module', '...'],
              },
              url: {
                preferRelative: true,
              },
            };
          },
        );
      },
    );
  }
}

module.exports = PatchHtmlWebpackPluginPlugin;
