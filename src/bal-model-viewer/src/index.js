import { registerBlockType } from '@wordpress/blocks';

import * as modelViewer from './model-viewer';

const blocks = [
    modelViewer,
];

function registerBlock( block ) {
    if ( ! block ) {
        console.log(`block with name ${name} not found.`);
        return;
    }
    const { name, settings } = block;
    registerBlockType( name, settings );
    console.log(`registered block with name: ${name}.`);
}

blocks.forEach( registerBlock );
