module.exports = {
    baseUrl: '',
    lintOnSave: false,
    css: {
        loaderOptions: {
            stylus: {
                use: [
                    require('nib')(),
                    require('rupture')(),
                    require('poststylus')([
                        require('rucksack-css')({
                            autoprefixer: false,
                            fallbacks: false
                        }),
                    ]),

                ],
                import: [
                    '~nib/lib/nib/index.styl',
                    '~rupture/rupture/index.styl'
                ]
            }
        }
    }
}
