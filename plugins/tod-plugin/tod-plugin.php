<?php
/*
Plugin Name: Site Tod Plugin for example.com
Description: Site specific code changes for example.com
*/
/* Start Adding Functions Below this Line */

function wpb_add_google_fonts() {

wp_enqueue_style( 'wpb-google-fonts', 'http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,400,700,300', false ); 
}

add_action( 'wp_enqueue_scripts', 'wpb_add_google_fonts' );

require_once('portfolio-type.php');

add_filter('excerpt_length', 'my_excerpt_length');
 
function my_excerpt_length($length) {
 
    return 25; 
 
}
 
add_filter('excerpt_more', 'new_excerpt_more');  
 
function new_excerpt_more($text){  
 
    return ' ';  
 
}  
 
function portfolio_thumbnail_url($pid){
    $image_id = get_post_thumbnail_id($pid);  
    $image_url = wp_get_attachment_image_src($image_id,'screen-shot');  
    return  $image_url[0];  
}

add_filter( 'template_include', 'include_template_function', 1 );

function include_template_function( $template_path ) {
    if ( get_post_type() == 'portfolio' ) {
        if ( is_single() ) {
            // checks if the file exists in the theme first,
            // otherwise serve the file from the plugin
            if ( $theme_file = locate_template( array ( 'single-portfolio.php' ) ) ) {
                $template_path = $theme_file;
            } else {
                $template_path = plugin_dir_path( __FILE__ ) . '/single-portfolio.php';
            }
        }
    }
    return $template_path;
}

/* Stop Adding Functions Below this Line */
?>