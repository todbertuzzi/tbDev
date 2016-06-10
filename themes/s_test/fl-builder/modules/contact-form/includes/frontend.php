<form class="fl-contact-form">
  
	<?php if ($settings->name_toggle == 'show') : ?>
	<span class="fl-input-group fl-name input">
			<input class="input__field" type="text" name="fl-name" value=""  />
		<label class="input__label" for="fl-name"><span class="input__label-content"><?php _ex( 'Name', 'Contact form field label.', 'fl-builder' );?></span></label>
		<span class="fl-contact-error"><?php _e('Please enter your name.', 'fl-builder');?></span>
	</span>
	<?php endif; ?>

	<?php if ($settings->subject_toggle == 'show') : ?>
	<span class="fl-input-group fl-subject input">
		<input class="input__field"  type="text" name="fl-subject" value=""  />
		<label class="input__label"  for="fl-subject"><span class="input__label-content"><?php _e('Subject', 'fl-builder');?></span></label>
		<span class="fl-contact-error"><?php _e('Please enter a subject.', 'fl-builder');?></span>
		
	</span>
	<?php endif; ?>

	<?php if ($settings->email_toggle == 'show') : ?>
	<span class="fl-input-group fl-email input">
		<label class="input__label" for="fl-email"><span class="input__label-content"><?php _e('Email', 'fl-builder');?></span></label>
		<span class="fl-contact-error"><?php _e('Please enter a valid email.', 'fl-builder');?></span>
		<input class="input__field"  type="email" name="fl-email" value="" />
	</span>
	<?php endif; ?>

	<?php if ($settings->phone_toggle == 'show') : ?>
	<span class="fl-input-group fl-phone input">
		<label class="input__label"  for="fl-phone"><span class="input__label-content"><?php _e('Phone', 'fl-builder');?></span></label>
		<span class="fl-contact-error"><?php _e('Please enter a valid phone number.', 'fl-builder');?></span>
		<input class="input__field"  type="tel" name="fl-phone" value="" placeholder="<?php esc_attr_e( 'Your phone', 'fl-builder' ); ?>" />
	</span>
	<?php endif; ?>

	<div class="fl-input-group fl-message">
		<label for="fl-message"><?php _e('Your Message', 'fl-builder');?></label>
		<span class="fl-contact-error"><?php _e('Please enter a message.', 'fl-builder');?></span>
		<textarea name="fl-message" placeholder="<?php esc_attr_e( 'Your message', 'fl-builder' ); ?>"></textarea>
	</div>

	<input class="input__field"  type="text" value="<?php echo $settings->mailto_email; ?>" style="display: none;" class="fl-mailto">
  
	<input type="submit" value="<?php esc_attr_e( 'Send', 'fl-builder' ); ?>" class="fl-contact-form-submit" />
	<?php if ($settings->success_action == 'redirect') : ?>
		<input type="text" value="<?php echo $settings->success_url; ?>" style="display: none;" class="fl-success-url">  
	<?php elseif($settings->success_action == 'none') : ?>  
		<span class="fl-success-none" style="display:none;"><?php _e( 'Message Sent!', 'fl-builder' ); ?></span>
	<?php endif; ?>  
    
	<span class="fl-send-error" style="display:none;"><?php _e( 'Message failed. Please try again.', 'fl-builder' ); ?></span>
</form>
<?php if($settings->success_action == 'show_message') : ?>  
  <span class="fl-success-msg" style="display:none;"><?php echo $settings->success_message; ?></span>
<?php endif; ?>  

