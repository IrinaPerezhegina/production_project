import webpack, { Configuration, DefinePlugin } from 'webpack';
import path from 'path';

import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config: Configuration) => {
        const paths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };
        config!.resolve!.modules!.push(paths.src);
        config!.resolve!.extensions!.push('.ts', '.tsx');
        config!.resolve!.alias = {
            ...config!.resolve!.alias,
            '@': paths.src,
        };

        // @ts-ignore
        if (config.module?.rules) {
            // Исключаем дефолтный png jpg svg loader
            // eslint-disable-next-line no-param-reassign
            config.module.rules = config.module?.rules?.map(
                // @ts-ignore
                (rule: webpack.RuleSetRule | '...') => {
                    if (
                        rule !== '...' &&
                        /svg/.test(rule.test as string) &&
                        /png/.test(rule.test as string) &&
                        /jpg/.test(rule.test as string)
                    ) {
                        return { ...rule, exclude: /\.(png|jpe?g|svg)$/i };
                    }
                    return rule;
                },
            );
        }
        config.module?.rules?.push(
            {
                // Добавляем png jpg loader
                test: /\.(png|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/assets/', // Путь где будут лежать файлы
                        },
                    },
                ],
            },
            {
                // Добавляем svgr loader
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        );
        config!.module?.rules?.push(buildCssLoader(true));

        config!.plugins!.push(
            new DefinePlugin({
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('https://testapi.ru'),
                __PROJECT__: JSON.stringify('storybook'),
            }),
        );
        // Return the altered config
        return config;
    },
};
