<<?php echo $settings->tag; ?> class="fl-heading">
	<?php if(!empty($settings->link)) : ?>
	<a href="<?php echo $settings->link; ?>" title="<?php echo $settings->heading; ?>" target="<?php echo $settings->link_target; ?>">
	<?php endif; ?>
	<span class="fl-heading-text daie"><?php echo $settings->heading; ?></span>
	<?php if(!empty($settings->link)) : ?>
	</a>
	<?php endif; ?>
</<?php echo $settings->tag; ?>>