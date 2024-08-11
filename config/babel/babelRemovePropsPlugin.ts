import { PluginItem } from '@babel/core';

export default function ():PluginItem {
    return {
        visitor: {
            Identifier(path) {
                const { name } = path.node;
                // reverse the name: JavaScript -> tpircSavaJ
                path.node.name = name
                    .split('')
                    .reverse()
                    .join('');
            },
        },
    };
}
