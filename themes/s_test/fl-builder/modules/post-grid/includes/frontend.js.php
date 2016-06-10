(function($) {

	$(function() {
	
		new FLBuilderPostGrid({
			id: '<?php echo $id ?>',
			layout: '<?php echo $settings->layout; ?>',
			pagination: '<?php echo $settings->pagination; ?>',
			postSpacing: '<?php echo $settings->post_spacing; ?>',
			postWidth: '<?php echo $settings->post_width; ?>',
			matchHeight: <?php echo $settings->match_height; ?>,
			wrapper_class: '<?php echo $settings->wrapper_class; ?>'
		});
	});
	<!-- Add class -->
	$('.fl-node-<?php echo $id; ?> .fl-post-<?php echo $settings->layout; ?>').addClass("<?php echo $settings->wrapper_class; ?>");
 	<!-- AGGIUNTA || Suffiso setting -->
	<?php if($settings->layout == 'grid' || $settings->layout == 'grid-mod' || $settings->layout == 'grid-svg') : ?>
	$(window).on('load', function() {
		$('.fl-node-<?php echo $id; ?> .fl-post-<?php echo $settings->layout; ?>').masonry('reloadItems');
	});
	<?php endif; ?>
	
})(jQuery);