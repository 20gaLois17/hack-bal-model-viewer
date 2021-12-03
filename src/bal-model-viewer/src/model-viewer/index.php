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

    echo "<h2>Blub</h1>";

    $output = ob_get_contents();
    ob_end_clean();

    return $output;
}
