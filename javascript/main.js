$(document).ready(function(){
	$(".notepadnav").hover(function(){
		$(this).css("bottom","0px")
		},function(){
    	$(this).css("bottom","-200px");
		});

	$(".o").click(function(){
		$(document).find("img", "p").toggle();
		$("body").toggleClass("ghosttime");
		$("i").toggleClass("ghosttimei");
		$(".reg").toggle();
		$(".ghostbox").toggle();
	})
});