

/*
jQuery(function ($) {
 
  var $container = $('#isotope-list'); //The ID for the list with all the blog posts
  $container.isotope({ //Isotope options, 'item' matches the class in the PHP
    itemSelector : '.isotope-item', 
      layoutMode : 'packery',
       packery: {
      gutter: 10
    }
  });





 
  //Add the class selected to the item that is clicked, and remove from the others
  var $optionSets = $('#filters'),
  $optionLinks = $optionSets.find('a');
 
  $optionLinks.click(function(){
  var $this = $(this);
  // don't proceed if already selected
  if ( $this.hasClass('selected') ) {
    return false;
  }
  var $optionSet = $this.parents('#filters');
  $optionSets.find('.selected').removeClass('selected');
  $this.addClass('selected');
 
  //When an item is clicked, sort the items.
   var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
 
  return false;
  });
 
});

*/

// http://packery.metafizzy.co/packery.pkgd.js added as external resource

/*


// overwrite Packery methods
var __resetLayout = Packery.prototype._resetLayout;
Packery.prototype._resetLayout = function() {
  __resetLayout.call( this );
  // reset packer
  var parentSize = getSize( this.element.parentNode );
  var colW = this.columnWidth + this.gutter;
  this.fitWidth = Math.floor( ( parentSize.innerWidth + this.gutter ) / colW ) * colW;
  this.packer.width = this.fitWidth;
  this.packer.height = Number.POSITIVE_INFINITY;
  this.packer.reset();
};

Packery.prototype._getContainerSize = function() {
  // remove empty space from fit width
  var emptyWidth = 0;
  for ( var i=0, len = this.packer.spaces.length; i < len; i++ ) {
    var space = this.packer.spaces[i];
    if ( space.y === 0 && space.height === Number.POSITIVE_INFINITY ) {
      emptyWidth += space.width;
    }
  }

  return {
    width: this.fitWidth - this.gutter - emptyWidth,
    height: this.maxY - this.gutter
  };
};

// always resize
Packery.prototype.needsResizeLayout = function() {
  return true;
};

// init packery
 var procedo = jQuery( "#isotope-list" );
 console.log(procedo.length+" procedo");
 if(procedo.length>0){
    var container = document.querySelector('#isotope-list');
    var pckry = new Packery( container, {
      itemSelector: '.isotope-item',
      columnWidth: 150,
      gutter: 20
    });
}

*/



//var elem = document.querySelector('#isotope-list');
jQuery('#isotope-list').isotope({
  // options
  itemSelector: '.isotope-item',
  layoutMode: 'masonry',
  masonry: {
  columnWidth: 300,
  fitWidth: true,
  gutter:20
}  
});




jQuery('#filters li a').on( 'click', function() {

  var filterValue = jQuery( this ).data("filter");
  console.log(jQuery( this )+"cliccat"+filterValue);
  jQuery('#isotope-list').isotope({ filter: filterValue });
});

/*
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
*/

console.log ("test-tod.js");

    jQuery('input[name="your-name"]').attr('autocomplete', 'off');
    jQuery('input[name="your-email"]').attr('autocomplete', 'off');




function riportoMargine () {
	console.log( "ready!" );    
    
    var margineDestro;
    
    jQuery( ".fl-post-grid" ).each(function( index ) {
	
	  margineDestro=jQuery( this ).css( "margin-right" ) ;
	 

	});
     console.log(  margineDestro);
    jQuery( ".navbar-nav" ).css( "margin-right", margineDestro );
    jQuery( ".navbar-header" ).css( "margin-left", margineDestro );

    console.log( "index" + ": " + jQuery( ".navbar-nav" ).css( "margin-right"));
}

function showPortfolioGrid () {
	
	jQuery('.fl-post-grid.goliath.masonry').masonry('reloadItems');
}

jQuery(document).ready(function() {
    function animate() {
      
if(jQuery('body').hasClass("home")){

      jQuery('.logoNav').velocity({ translateY: -60 }, { duration: 0, delay: 0 } );

      jQuery('.barra_dx_logo').velocity({ rotateX: 90 }, {duration: 0, delay: 0});
      jQuery('.barra_sx_logo').velocity({ rotateX: 90 }, {duration: 0, delay: 0});
      jQuery('.barra_dx_logo').velocity({ rotateX: 0 }, {duration: 300, delay: 2000});
      jQuery('.barra_sx_logo').velocity({ rotateX: 0 }, {duration: 300, delay: 2000});
      
      jQuery('.barra_sx_logo').velocity({ translateX: 40 }, {duration: 300, delay: 100});
      jQuery('.barra_dx_logo').velocity({ translateX: -39 }, {duration: 300, delay: 100});
      
      jQuery('.studio-logo').velocity({ opacity: 1 }, {duration: 800, delay: 2800});
      jQuery('.macchinette-logo').velocity({ opacity: 1 }, {duration: 800, delay: 3200});

     jQuery('.resistor').velocity({ opacity: 1 }, {duration: 800, delay: 400});
     jQuery('.pathLogo').velocity({ 'stroke-dashoffset': 0 }, { duration: 2000, delay: 1200 } );

      
      jQuery('.logo-center').velocity({ 'opacity': 0 }, { duration: 1000, delay: 4200 } );

     jQuery('html:not(.fl-builder-edit) .home header.navbar').velocity({ 'opacity': 1 }, { duration: 1000, delay: 5200 } );
    
     jQuery('.logoNav').velocity({ translateY: -20 }, { duration: 500, delay: 5200 , ease:'easeOutQuad'} );
     jQuery('#Capa_1').velocity({ opacity:1}, { duration: 500, delay: 5200 , ease:'easeOutQuad'} );
   
   // jQuery('#Capa_1').velocity({ translateY:-80}, {loop:true, duration: 500, delay: 0 , ease:'easeOutQuad'} );
   
    jQuery('#Capa_1').velocity({ translateY:-30}, {loop:true, duration: 500, delay: 0 , ease:'easeOutQuad'} );
      

   }else{
  jQuery('.logoNav').velocity({ translateY: -20 }, { duration: 0, delay: 0 , ease:'easeOutQuad'} );
  jQuery('.studio-logo').velocity({ opacity: 1 }, { duration: 0, delay: 0 , ease:'easeOutQuad'} );
  jQuery('.macchinette-logo').velocity({ opacity: 1 }, { duration: 0, delay: 0 , ease:'easeOutQuad'} );
     
 } 



  }

  
  animate();
  });



jQuery( window ).resize(function() {
  console.log( "resize!" );
 // setTimeout( riportoMargine, 200);
// jQuery('.fl-post-grid.goliath.masonry').masonry('reloadItems');
	
});



jQuery(document).ready(function () {
       var trigger = jQuery('.hamburger'),
      overlay = jQuery('.overlay'),
     isClosed = false;

     function hamburger_cross() {

      if (isClosed === true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }


    trigger.click(function () {
      hamburger_cross();      
    });

   
  
  jQuery('[data-toggle="offcanvas"]').click(function () {
        jQuery('#wrapper').toggleClass('toggled');
  });  

  /*
    jQuery(function(){ 
      var p = jQuery('.p_prj p'); 
      var words = p.text().split(' '); 
      var text = ''; 
      jQuery.each(words, function(i, w){
                       if(jQuery.trim(w)){
                         text = text + '<span>' + w + '</span> ' ;
                       }
                     }
            ); //each word 
      p.html(text); 
      jQuery(window).resize(function(){ 

        var line = 0; 
        var prevTop = -15; 
        jQuery('span', p).each(function(){ 
          var word = jQuery(this); 
          var top = word.offset().top; 
          if(top!==prevTop){ 
            prevTop=top; 
            line++; 
          } 
          word.attr('class', 'line' + line); 
        });//each 

      });//resize 

      jQuery(window).resize(); //first one
    });
*/

});

// JS SLIDING PANEL - BOURBON|REFILL
jQuery(document).ready(function(){
  jQuery('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close, .icon_scheda').on('click touchstart',function (e) {
    jQuery('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
    if (jQuery('.sliding-panel-content').hasClass('is-visible')){
      
      setTimeout(function(){
        jQuery('.sliding-panel-button').addClass("open");
      }, 400);

       jQuery( ".sliding-panel-button" ).animate({
          left: "+=208"
        }, 100, function() { });
    }else{
      
      jQuery('.sliding-panel-button').removeClass("open");

      jQuery( ".sliding-panel-button" ).animate({
          left: "-=208"
        }, 100, function() {
          // Animation complete.
        });
    }
  });
  
});

