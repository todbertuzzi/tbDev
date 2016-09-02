(function($) {
	
	$(function() {
		
				$('.fl-node-57c82982b6413 .fl-mosaicflow-content, .fl-node-57c82982b6413 .fl-gallery').magnificPopup({
			delegate: '.fl-photo-content a',
			closeBtnInside: false,
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
			},
			'image': {
				titleSrc: function(item) {
									}
			}
		});
				
				$('.fl-node-57c82982b6413 .fl-gallery-item').wookmark({
			align: 'center',
			autoResize: true,
			container: $('.fl-node-57c82982b6413 .fl-gallery'),
			offset: 20,
			itemWidth: 150
		});
			});
	
})(jQuery);
(function($) {
	
	$(function() {
		$('.fl-embed-video').fitVids();
	});
	
})(jQuery);