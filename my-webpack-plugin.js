module.exports = class MyWebpackPlugin {
    apply(complier) {
        complier.hooks.done.tap('MyWebpackPlugin', stats => {
            console.log('My Plugin done ::');
        })
        
        // https://webpack.js.org/contribute/writing-a-plugin/
        complier.hooks.emit.tapAsync('MyWebpackPlugin', (compliation, callback) => {
            const source = compliation.assets['main.js'].source()
            compliation.assets['main.js'].source = () => {
                const banner = [
                    '/**',
                    '* 얘는 Banner Plugin 으로 처리한 결과야',
                    '* Build Version: 2021-03-29',
                    '*/'
                ].join('\n');
                return banner + '\n\n' + source;
            };
            callback();
        })
    }
}
