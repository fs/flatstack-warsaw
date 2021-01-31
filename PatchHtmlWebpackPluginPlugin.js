// Temporary fix
// See issue: https://github.com/jantimon/html-webpack-plugin/issues/1590

const WebpackOptionsApply = require('webpack/lib/WebpackOptionsApply');
const ResolverFactory = require('webpack/lib/ResolverFactory');

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

            const optionsCopy = { ...childCompiler.options };
            optionsCopy.resolve = {
              ...optionsCopy.resolve,
            };

            optionsCopy.externalsPresets = {
              web: false,
              node: true,
              nwjs: false,
              electron: false,
              electronMain: false,
              electronPreload: false,
              electronRenderer: false,
            };
            optionsCopy.loader = {
              target: 'node',
            };
            optionsCopy.target = 'node';
            optionsCopy.node = {
              global: false,
              __filename: 'eval-only',
              __dirname: 'eval-only',
            };
            optionsCopy.output = {
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
            optionsCopy.resolve.conditionNames = [
              'webpack',
              'development',
              'node',
            ];
            optionsCopy.resolve.byDependency = {
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

            // it is needed because `resolverFactory` already exist on childCompiler and it refers to old options.resolve object
            // so we need to reinitialize resolverFactory before compilation
            childCompiler.resolverFactory = new ResolverFactory();

            // but new resolverFactory should be initialized. And it is what WebpackOptionsApply for.
            childCompiler.options = new WebpackOptionsApply().process(
              optionsCopy,
              childCompiler,
            );
          },
        );
      },
    );
  }
}

module.exports = PatchHtmlWebpackPluginPlugin;
