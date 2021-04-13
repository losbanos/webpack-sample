module.exports = function myBabelPlugin() {
    return {
        visitor: {
            Identifier(path) {
                const name = path.node.name;
                // console.log('Identifier node Name = ', path.node);
                
                // path.node.name = name.split("").reverse().join('');
            },
            VariableDeclaration(path) {
                console.log('path kind = ', path.node.kind === 'const');
                if (path.node.kind === 'const') {
                    console.log('true:0');
                    path.node.kind = 'var';
                }
            }
        }
    }
}