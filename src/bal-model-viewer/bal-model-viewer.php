<?php
/**
 * Plugin Name: Bal Model Viewer
 * Author: bits and likes (sk)
 * Description: Model Viewer Block Component
 * @package Bal Model Viewer
 * Text Domain: bal-model-viewer
 */


// Enqueue scripts and register blocks on the server
add_action( 'init', 'bal_register_custom_blocks' );

function bal_register_custom_blocks() {

    function bal_add_mime_types( $mimes ) {

        // New allowed mime types.
        $mimes['glb']  = 'model/gltf-binary';
        $mimes['gltf'] = 'model/gltf-binary';

        return $mimes;
    }

    add_filter( 'upload_mimes', 'bal_add_mime_types' );

    $asset_file = include( plugin_dir_path( __FILE__ ) . './build/index.asset.php');

    wp_register_script(
        'bal-model-viewer-script', plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
    wp_enqueue_script( 'bal-model-viewer-script' );

    // Styles for the editor only
    wp_register_script(
        'iv-custom-blocks-editor-style', plugins_url( './build/index.css', __FILE__ )
    );

    // Styles for editor and frontend
    wp_enqueue_style( 'iv-custom-blocks-style', plugins_url( './build/style-index.css', __FILE__ ) );

    // Enqueue frontend styles only in the block editor
    add_action( 'admin_enqueue_scripts', 'iv_custom_admin_scripts' );

    function iv_custom_admin_scripts() {
        wp_enqueue_style( 'iv-custom-blocks-editor-style', plugins_url( './build/index.css', __FILE__ ) );
    }

    // Register Block on the server
    include plugin_dir_path( __FILE__) . './src/model-viewer/index.php';
}

