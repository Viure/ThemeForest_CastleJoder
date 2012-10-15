// $(function(){
//      SyntaxHighlighter.all();
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
