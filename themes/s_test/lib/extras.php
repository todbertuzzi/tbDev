<?php

namespace Roots\Sage\Extras;

use Roots\Sage\Setup;

/**
 * Add <body> classes
 */
function body_class($classes) {
  // Add page slug if it doesn't exist
  if (is_single() || is_page() && !is_front_page()) {
    if (!in_array(basename(get_permalink()), $classes)) {
      $classes[] = basename(get_permalink());
    }
  }

  if(is_front_page()){
     $classes[] = 'tod-homepage';
  }

  // Add class if sidebar is active
  if (Setup\display_sidebar()) {
    $classes[] = 'sidebar-primary';
  }

  return $classes;
}
add_filter('body_class', __NAMESPACE__ . '\\body_class');

/**
 * Clean up the_excerpt()
 */
function excerpt_more() {
  return ' &hellip; <a href="' . get_permalink() . '">' . __('More', 'sage') . '</a>';
}
add_filter('excerpt_more', __NAMESPACE__ . '\\excerpt_more');



// SE SIDEBAR AFC SELEZIONATA MOSTRO LA SIDEBAR

function sage_sidebar_on_afc($sidebar) {
  
 // echo("<h1>".get_field( "sidebar" )."dada</h1>");
  if (get_field( "sidebar")) {
    return true;
  }
  return $sidebar;
}
add_filter('sage/display_sidebar', __NAMESPACE__ . '\\sage_sidebar_on_afc');






function load_fonts() {
            wp_register_style('et-googleFonts', 'https://fonts.googleapis.com/css?family=Roboto:400,300,900');
            wp_enqueue_style( 'et-googleFonts');

            wp_register_style('et-googleFonts2', 'https://fonts.googleapis.com/css?family=Comfortaa:400,300,700');
              wp_enqueue_style( 'et-googleFonts2');

             wp_register_style('et-googleFonts3', 'https://fonts.googleapis.com/css?family=Varela+Round');
              wp_enqueue_style( 'et-googleFonts3');


              wp_register_style('et-googleFonts4', 'https://fonts.googleapis.com/css?family=Nunito:400,300,700');
              wp_enqueue_style( 'et-googleFonts4'); 
              

              wp_register_style('et-googleFonts5', 'https://fonts.googleapis.com/css?family=Nunito:400,300,700');
              wp_enqueue_style( 'et-googleFonts5'); 

             
            
        }
add_action('wp_print_styles',__NAMESPACE__ . '\\load_fonts');


// GET AND TRIM EXCEPERT
function the_excerpt_max_charlength($charlength) {
  $excerpt = get_the_excerpt();
  $charlength++;

  if ( mb_strlen( $excerpt ) > $charlength ) {
    $subex = mb_substr( $excerpt, 0, $charlength - 5 );
    $exwords = explode( ' ', $subex );
    $excut = - ( mb_strlen( $exwords[ count( $exwords ) - 1 ] ) );
    if ( $excut < 0 ) {
      echo mb_substr( $subex, 0, $excut );
    } else {
      echo $subex;
    }
    echo '[...]';
  } else {
    echo $excerpt;
  }
}


