class MyWebpackPlugin {
    apply(complier) {
        complier.hooks.done.tap('My Plugin', stats => {
            console.log('My Plugin: done');
        })

        complier.hooks.emit.tap('My Plugin', (compilation, callback) => {
            const source = compilation.assets['main.js'].source();
            compilation.assets['main.js'].source = () => {
                const date = new Date().getDate()
                const banner = [
                    '/**',
                    '* 얘는 BannerPlugin이 처리한 결과야',
                    `* Build Date: ${date}`,
                    '*/'
                ].join('\n');
                return banner + '\n\n' + source;
            }
            // callback();
        })
    }
}

module.exports = MyWebpackPlugin;