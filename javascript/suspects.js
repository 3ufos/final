$(document).ready(function(){

	var suspects = ["The Server", "The Mascot", "The Janitor", "The Owner"]
	var suspectImg = ["../images/server.png", "../images/blank.png", "../images/janitor.png", "../images/owner.png"]

	$(".server").click(function(){
	   $(".whomst").text(suspects[0]),
	   $(".whomstimage").attr("src",suspectImg[0]),
	   $(".sustalk").hide(),
	   $(".servertalk").show();
	});

	$(".mascot").click(function(){
	   $(".whomst").text(suspects[1]),
	   $(".whomstimage").attr("src",suspectImg[1]),
	   $(".sustalk").hide(),
	   $(".mascottalk").show();
	});

	$(".janitor").click(function(){
	   $(".whomst").text(suspects[2]),
	   $(".whomstimage").attr("src",suspectImg[2]),
	   $(".sustalk").hide(),
	   $(".janitortalk").show();
	});

	$(".owner").click(function(){
	   $(".whomst").text(suspects[3]),
	   $(".whomstimage").attr("src",suspectImg[3]),
	   $(".sustalk").hide(),
	   $(".ownertalk").show();
	});

	$(".o").click(function(){
		$(this).attr("src", "../images/o1.png"),
		$(".sus").attr("src","../images/suspects_ghost.png")
		$(".whomst").text(""),
		$(".whomstimage").attr("src",""),
		$(".sustalk").hide();
	});

	$(".mascotghost").click(function(){
	   $(".whomst").text("THE MASCOT'S GHOST...?"),
	   $(".whomstimage").attr("src","../images/mascot_ghost.png"),
	   $(".sustalk").hide(),
	   $(".ghosttalk").show();
	});


});

