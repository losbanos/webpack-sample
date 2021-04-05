module.exports = function myBabelPlugin() {
    return {
        visitor: {
            // Identifier(path) {
            //     const name = path.node.name;
            //     path.node.name = name.split('').reverse().join('');
            // },
            VariableDeclaration(path) {
                if (path.node.kind === 'const') {
                    path.node.kind = 'var';
                }
            }
        }
    }
}