<?php
//Thumbnail & Featured Image Support
if ( function_exists( 'add_theme_support' ) ) { 
   add_theme_support( 'post-thumbnails', array( 'portfolio' ) ); // Posts and Movies
    
    add_image_size( 'custom-1', 330, 200,true ); // Dimensione custom
    add_image_size( 'extra-large', 1680, 500,true ); // Dimensione custom
    set_post_thumbnail_size( 300, 210, false ); // Normal post thumbnails
}



// Registro custom post
add_action('init', 'portfolio_register');  
function portfolio_register() {  
    $args = array(  
        'label' => __('Portfolio'),  
        'singular_label' => __('Project'),  
        'public' => true,  
        'show_ui' => true,  
        'capability_type' => 'post',  
        'hierarchical' => true,  
        'has_archive' => true,
        'rewrite' => array('slug' => 'portfolio'),
        'supports' => array('title', 'editor', 'thumbnail')  
       );  
   
    register_post_type( 'portfolio' , $args );  
}


// Registro custom taxonomy
add_action( 'init', 'create_book_tax' );
function create_book_tax() {
register_taxonomy(
        'genre',
        'portfolio',
        array(
            'label' => __( 'Genre' ),
            'rewrite' => array( 'slug' => 'genre' ),
            'hierarchical' => true,
        )
    );
}
 /*
// Custom Field Box
function portfolio_meta_box(){  
    add_meta_box("projInfo-meta", "Project Options", "portfolio_meta_options", "portfolio", "side", "low");  
}  
   
 
function portfolio_meta_options(){  
        global $post;  
        if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ) return $post_id;
        $custom = get_post_custom($post->ID);  
        $link = $custom["projLink"][0];  
?>  
    <label>Link:</label><input name="projLink" value="<?php echo $link; ?>" />  
<?php  
    }

    add_action('save_post', 'save_project_link'); 
   

// Salvo i Custom Data   
function save_project_link(){  
    global $post;  
     
    if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ){ 
        return $post_id;
    }else{
        update_post_meta($post->ID, "projLink", $_POST["projLink"]); 
    } 
}


//Customizing Admin Columns
add_filter("manage_edit-portfolio_columns", "project_edit_columns");   
   
function project_edit_columns($columns){  
        $columns = array(  
            "cb" => "<input type=\"checkbox\" />",  
            "title" => "Project",  
            "description" => "Description",  
            "link" => "Link",  
            "type" => "Type of Project",  
        );  
   
        return $columns;  
}  


 
add_action("manage_posts_custom_column",  "project_custom_columns"); 
   
function project_custom_columns($column){  
        global $post;  
        switch ($column)  
        {  
            case "description":  
                the_excerpt();  
                break;  
            case "link":  
                $custom = get_post_custom();  
                echo $custom["projLink"][0];  
                break;  
            case "type":  
                echo get_the_term_list($post->ID, 'project-type', '', ', ','');  
                break;  
        }  
}
*/

?>