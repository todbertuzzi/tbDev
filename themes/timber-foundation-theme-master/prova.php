<?php
/**
 * Template Name: Prova
 */


	$context         = Timber::get_context();
	$post            = new TimberPost();
	$context['post'] = $post;
	
	/* Dynamic Sidebar */
	
	Timber::render(  'prova.twig' , $context );
	



