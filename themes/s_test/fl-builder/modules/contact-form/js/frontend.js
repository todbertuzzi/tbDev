(function($) {

	FLBuilderContactForm = function( settings )
	{
		this.settings	= settings;
		this.nodeClass	= '.fl-node-' + settings.id;
		this._init();
	};

	FLBuilderContactForm.prototype = {
	
		settings	: {},
		nodeClass	: '',
		
		_init: function()
		{
			$( this.nodeClass + ' .fl-contact-form-submit' ).click( $.proxy( this._submit, this ) );
		},
		
		_submit: function( e )
		{
			var theForm	  	= $(this.nodeClass + ' .fl-contact-form'),
				submit	  	= $(this.nodeClass + ' .fl-contact-form-submit'),
				name	  	= $(this.nodeClass + ' .fl-name input'),
				email		= $(this.nodeClass + ' .fl-email input'),
				phone		= $(this.nodeClass + ' .fl-phone input'),
				subject	  	= $(this.nodeClass + ' .fl-subject input'),
				message	  	= $(this.nodeClass + ' .fl-message textarea'),
				mailto	  	= $(this.nodeClass + ' .fl-mailto'),
				ajaxurl	  	= FLBuilderLayoutConfig.paths.wpAjaxUrl,
				email_regex = /\S+@\S+\.\S+/,
				isValid	  	= true;
		  
			e.preventDefault();
			
			// End if button is disabled (sent already)
			if (submit.hasClass('fl-disabled')) {
				return;
			}
			
			// validate the name
			if(name.length) {
				if (name.val() === '') {
					isValid = false;
					name.parent().addClass('fl-error');
				} 
				else if (name.parent().hasClass('fl-error')) {
					name.parent().removeClass('fl-error');
				}
			}
			
			// validate the email
			if(email.length) {
				if (email.val() === '' || !email_regex.test(email.val())) {
					isValid = false;
					email.parent().addClass('fl-error');
				} 
				else if (email.parent().hasClass('fl-error')) {
					email.parent().removeClass('fl-error');
				}
			}
			
			// validate the subject..just make sure it's there
			if(subject.length) {
				if (subject.val() === '') {
					isValid = false;
					subject.parent().addClass('fl-error');
				} 
				else if (subject.parent().hasClass('fl-error')) {
					subject.parent().removeClass('fl-error');
				}
			}
			
			// validate the phone..just make sure it's there
			if(phone.length) {
				if (phone.val() === '') {
					isValid = false;
					phone.parent().addClass('fl-error');
				} 
				else if (phone.parent().hasClass('fl-error')) {
					phone.parent().removeClass('fl-error');
				}
			}
			
			// validate the message..just make sure it's there
			if (message.val() === '') {
				isValid = false;
				message.parent().addClass('fl-error');
			} 
			else if (message.parent().hasClass('fl-error')) {
				message.parent().removeClass('fl-error');
			}
			
			// end if we're invalid, otherwise go on..
			if (!isValid) {
				return false;
			} 
			else {
			
				// disable send button
				submit.addClass('fl-disabled');
				
				// post the form data
				$.post(ajaxurl, {
					action	: 'fl_builder_email',
					name	: name.val(),
					subject	: subject.val(),
					email	: email.val(),
					phone	: phone.val(),
					mailto	: mailto.val(),
					message	: message.val()
				}, $.proxy( this._submitComplete, this ) );
			}
		},
		
		_submitComplete: function( response )
		{
			var urlField 	= $( this.nodeClass + ' .fl-success-url' ),
				noMessage 	= $( this.nodeClass + ' .fl-success-none' );
			
			// On success show the success message
			if (response === '1') {
				
				$( this.nodeClass + ' .fl-send-error' ).fadeOut();
				
				if ( urlField.length > 0 ) {
					window.location.href = urlField.val();
				} 
				else if ( noMessage.length > 0 ) {
					noMessage.fadeIn();
				}
				else {
					$( this.nodeClass + ' .fl-contact-form' ).hide();
					$( this.nodeClass + ' .fl-success-msg' ).fadeIn();
				}
			} 
			// On failure show fail message and re-enable the send button
			else {
				$(this.nodeClass + ' .fl-contact-form-submit').removeClass('fl-disabled');
				$(this.nodeClass + ' .fl-send-error').fadeIn();
				return false;
			}
		}
	};
	
})(jQuery);