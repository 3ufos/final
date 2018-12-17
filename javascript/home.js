$(document).ready(function(){
	$(".logo").hover(function(){
		$(".help").fadeIn(500);
		// $(".file").css("background-image","url(images/cover.png)"),
		$(".softservecase").text("[ SOFT SERVE CASE ]"),
		$(".tagline").text("an ice cream parlor murder mystery"),
		$("a").css("color","#26394B"),
		$(".about").fadeIn(500);
		});
});
