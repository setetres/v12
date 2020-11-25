const autoprefixer = require('autoprefixer')
const StyleLintPlugin = require('stylelint-webpack-plugin')

export default {
    ssr: false,
    head: {
        htmlAttrs: {
            lang: 'en',
        },
        title: 'Sete Três',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, height=device-height, user-scalable=no, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'QWxzbyBLbm93biBhcyBHdWlsaGVybWUgUGFuZ25vdHRh' },

            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:title', property: 'og:title', content: 'Sete Três' },
            { hid: 'og:description', property: 'og:description', content: 'QWxzbyBLbm93biBhcyBHdWlsaGVybWUgUGFuZ25vdHRh' },
            { hid: 'og:image', property: 'og:image', content: 'https://setetres.st/images/share.png' },
            { hid: 'og:url', property: 'og:url', content: 'https://setetres.st' },

            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Sete Três' },
            { hid: 'twitter:description', name: 'twitter:description', content: 'QWxzbyBLbm93biBhcyBHdWlsaGVybWUgUGFuZ25vdHRh' },
            { hid: 'twitter:image', name: 'twitter:image', content: 'https://setetres.st/images/share.png' }
        ],
        link: [
            { rel: 'canonical', href: 'https://setetres.st' },
            { rel: 'stylesheet', href: 'https://use.typekit.net/fdw2tau.css' },
            { rel: 'icon', href: '/favicon.svg' }
        ]
    },
    css: [
        '@/node_modules/normalize.css/normalize.css',
        '@/assets/application.scss',
        '@/assets/content.scss',
        '@/assets/dark-mode.scss',
        '@/assets/embed.scss',
        '@/assets/footer.scss',
        '@/assets/header.scss',
        '@/assets/inkstarter.scss',
        '@/assets/lifestream.scss',
        '@/assets/link.scss',
        '@/assets/music.scss',
        '@/assets/newsletter.scss',
        '@/assets/web.scss'
    ],
    loading: {
        color: '#000000',
        height: '100%',
        failedColor: '#000000',
        throttle: 0
    },
    plugins: [
        {
            src: '~/plugins/ga.js',
            mode: 'client'
        }
    ],
    modules: [
        '@nuxtjs/axios'
    ],
    build: {
        postcss: {
            autoprefixer
        },
        plugins: [
            new StyleLintPlugin({
                files: [
                    '/assets/**/*.scss'
                ],
                configFile: 'stylelintrc.json'
            })
        ],
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
