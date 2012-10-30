// If JavaScript is enabled remove 'no-js' class and give 'js' classjQuery('html').removeClass('no-js').addClass('js');

// When DOM is fully loaded
jQuery(document).ready(function($) {

// $(function(){//      SyntaxHighlighter.all();
//    });
//    $(window).load(function(){
//      $('.flexslider').flexslider({
//        animation: "slide",
//        start: function(slider){
//          $('body').removeClass('loading');
//        }
//      });
//    
// $('.flexslider2').flexslider({
//    animation: "slide",
//    animationLoop: false,
//    itemWidth: 210,
//    itemMargin: 5
//  });	
//	
//});

 /* ---------------------------------------------------------------------- */
/*	Banner Slide   - Video BG & OneByOne
/* ---------------------------------------------------------------------- */

$(document).ready(function() {

videoArray = new Array('Backdrop_Video','CorporateElegance','earth-zoom-in','Paper_Cutout_Backgrounds_Preview','Prev','Preview');
videoArray.sort( randOrd );

	$('#video-background').videoBG({
		mp4:'video/' + videoArray[0] + '.mp4',
		ogv:'video/' + videoArray[0] + '.ogv',
		webm:'video/' + videoArray[0] + '.webm',
		poster:'video/CorporateElegance.jpg',
		scale:false,
		zIndex:0
	});

	$('#banner').oneByOne({
		className: 'oneByOne1',	             
		easeType: 'random',
		slideShow: true
	});  


});

function randOrd(){
return (Math.round(Math.random())-0.5); } 

	
/* end Banner Slide   - Video BG & OneByOne */
		
	
$(document).ready(function() {
    //Progres bar
	var pbarvalue 
	$(".progressbar001").each(function (index) {
		pbarvalue = $(this).attr("data-pbpercent")
		$(this).find("span:last-child").css("width",pbarvalue + "%")
		$(this).find("span:nth-child(2)").append(pbarvalue+"%")
	});
	
	//acordeon
	$(".acordeon li a:first-child").click(function(){
    	var idacordeon =  $(this).parent().parent().attr("id")
		var itsopen = $(this).next("p").css("display")
		if (itsopen=="none"){
			$("#"+idacordeon+" li p").hide()
			$("#"+idacordeon+" li a").removeClass("selected")
			$(this).addClass("selected")
			$(this).next("p").fadeIn()
		}
	});

	//tabs
	$(".tabs li").click(function(){
		var idtab =  $(this).parent().parent().attr("id")
		var showtab =  $(this).attr("data-content")
		var itsopen = $("#"+idtab+ " .contentabs p."+showtab).css("display")

		if (itsopen=="none"){
			$("#"+idtab+" .tabs li").removeClass("selected")
			$(this).addClass("selected")
			$("#"+idtab+" .contentabs p").hide();
			$("#"+idtab+ " .contentabs p."+showtab).fadeIn();
		}
	
	})
	
	
});	
	
	
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-XXXXXXXX-XX']);
  _gaq.push(['_trackPageview']);

  (function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
 })();




 /* ---------------------------------------------------------------------- */
/*	MAP GOOGLE   - GMAP 3  ;-)
/* ---------------------------------------------------------------------- */

	(function() {

		//styles for gmap3 - you can customize your own style in  http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html
		var mstyle = [ { featureType: 'administrative', elementType: 'all', stylers: [ { visibility: 'on' } ] },{ featureType: 'landscape', elementType: 'all', stylers: [ { hue: '#007fff' }, { saturation: -31 }, { lightness: 0 } ] },{ featureType: 'road', elementType: 'labels', stylers: [ { visibility: 'on' }, { saturation: 98 }, { lightness: 0 }, { hue: '#0088ff' } ] },{ featureType: 'water', elementType: 'all', stylers: [ { visibility: 'on' }, { hue: '#00a1ff' }, { saturation: -31 } ] },{ featureType: 'landscape.natural', elementType: 'all', stylers: [ { visibility: 'on' }, { hue: '#007fff' }, { saturation: -31 } ] },{ featureType: 'poi.park', elementType: 'all', stylers: [ { visibility: 'on' }, { saturation: -47 }, { hue: '#00ffe6' } ] },{ featureType: 'road.highway', elementType: 'geometry', stylers: [ { visibility: 'on' }, { hue: '#ff6e00' } ] },{ featureType: 'road.arterial', elementType: 'geometry', stylers: [ { visibility: 'on' }, { saturation: -44 }, { hue: '#ffb300' }, { lightness: 74 } ] },{ featureType: 'road.local', elementType: 'all', stylers: [ { visibility: 'on' }, { hue: '#00bbff' } ] },{ featureType: 'all', elementType: 'all', stylers: [ ] } ];
		
			
		
		var $map = $('#map');
		
		if( $map.length ) {
		
			$map.gmap3(
			// Add a style without create the map
				
					// create a new style and active it after having created the map
					{ action: 'setStyledMap',
						// implicit init - - - - -
						map:{
						center:{
						lat:42.156529,
						lng:-0.427346
						},
						zoom:13,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						mapTypeControlOptions: {
						mapTypeIds: []
						}
					},
					// - - - - - - - - - - - -
						styledmap:{
						id: 'style1',
						style: mstyle,
						options:{
						name: 'Style 1'
						}
						}
					}
			);
			
			
					$map.gmap3(
						{ action: 'addMarker',
						address: "Avd, Pirineos 15, Huesca, España",
							marker:{
								options:{
								icon:'marker.png' //Path to the image
								},
								events:{
									click: function(marker, event, data){
										var options = {};
										$("#localization1").effect( "slide", options, 500, callback );
									}
								}
							}
						}
					);
					
					 // callback function to bring a hidden box back
					function callback() {
						setTimeout(function() {
							$( this ).removeAttr( "style" ).hide().fadeIn();
						}, 1000 );
					};
					
					//animate Bounce  marker
					function startDance() {
						var i, markers = $("#map").gmap3({action:'get', name:'marker', all:true});
						for (i in markers) {
							(function(m, i){
								setTimeout(function() {
									m.setAnimation(google.maps.Animation.BOUNCE);
								}, i * 200);
							})(markers[i], i);
						}
					}

			$map.gmap3({action: 'setStyledMap', id: 'style1',callback: function(){
			startDance();
			}});
			
			
			
			
		}		

	})();

	/* end MAP GOOGLE   - GMAP 3 */

	
		/* ---------------------------------------------------------------------- */
	/*	PHP Widgets
	/* ---------------------------------------------------------------------- */

	(function() {

		function fetchFeed( url, element ) {

			element.html('<img src="img/loader.gif" height="11" width="16" alt="Loading..." />');
			
			$.ajax({
				url: url,
				dataType: 'html',
				timeout: 10000,
				type: 'GET',
				error:
					function( xhr, status, error ) {
						element.html( 'An error occured: ' + error );
					},
				success:
					function( data, status, xhr ) {
						element.html( data );
					}
			});
			
		}
				
		// Latest Tweets
		var $tweetsContainer = $('.tweets-feed');
		if( $tweetsContainer.length )
			fetchFeed( 'php/tweets.php', $tweetsContainer );

		// Latest Flickr Images
		var $flickrContainer = $('.flickr-feed');
		if( $flickrContainer.length )
			fetchFeed( 'php/flickr.php', $flickrContainer );

	})();
		
	/* end PHP Widgets */
	


});
