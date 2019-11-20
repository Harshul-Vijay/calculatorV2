const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const WORKERS_DIR = 'src/global/workers/';

module.exports = {
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: 'www/scripts'
        }),
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, "node_modules"),
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleExtensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    /* options: {
        path: path.resolve(__dirname, 'webpack'),
    }, */
    entry: {
        workers: path.resolve(__dirname, "src/global/workers/web.worker.ts"),
    },
    watch: true,
    mode: "production",
    target: "webworker",
    module: {
        rules: [
            {
                /* issuer: { test, include }, */
                loader: "ts-loader",
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                ],
                sideEffects: false,
                options: {
                    allowTsInNodeModules: true,
                    context: path.resolve(__dirname, WORKERS_DIR),
                    configFile: 'workers.config.json',
                    // options for 'ts-loader'
                    compilerOptions: {
                        /* entry: {
                            workers: path.resolve(__dirname, "src/global/workers/web.worker.ts")
                        }, *
                        include: [
                            path.resolve(__dirname, WORKERS_DIR)
                        ], */
                        sourceMap: true,
                        allowSyntheticDefaultImports: true,
                        allowUnreachableCode: false,
                        declaration: false,
                        experimentalDecorators: true,
                        lib: [
                            "es6",
                            "dom",
                            "scripthost",
                            "webworker",
                            "webworker.importscripts"
                        ],
                        moduleResolution: "node",
                        module: "esnext",
                        target: "es2017",
                        noUnusedLocals: true,
                        noUnusedParameters: true,
                    }
                }
            }
        ]
    },
    output: {
        /* path: path.resolve(__dirname, 'webpack'), */
        path: path.resolve(__dirname, 'www/scripts'),
        filename: '[name].js',
        globalObject: 'window'
    },
}