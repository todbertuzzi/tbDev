(function($) {
	
	$(function() {
		
				$('.fl-node-57c7fa9b2d7e1 .fl-mosaicflow-content, .fl-node-57c7fa9b2d7e1 .fl-gallery').magnificPopup({
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
				
				$('.fl-node-57c7fa9b2d7e1 .fl-gallery-item').wookmark({
			align: 'center',
			autoResize: true,
			container: $('.fl-node-57c7fa9b2d7e1 .fl-gallery'),
			offset: 20,
			itemWidth: 150
		});
			});
	
})(jQuery);