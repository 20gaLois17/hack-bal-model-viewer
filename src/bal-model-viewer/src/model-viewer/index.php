<?php

register_block_type( 'bal-model-viewer/model-viewer',
    [
        'render_callback' => 'render_bal_model_viewer',
    ]
);

function render_bal_model_viewer( $attr ) {
    ob_start();
    echo "<pre>";
    print_r( $attr );
    echo "</pre>";
    /** DEBUG 
    */

    echo '<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>';
    if ( ($modelSrc = get_model_src( $attr ) ) !== '' ) {
    
        printf( '<model-viewer camera-controls src="%s"></model-viewer>', $modelSrc );
    } else {
        echo "<h2 class='blub'>Please select a model</h1>";
    }

    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}

function get_model_src( $arr ) {
    if ( empty( $arr[ 'model' ] ) ) {
        return '';
    } else {
        return $arr[ 'model' ][ 'url' ];
    } 
}
