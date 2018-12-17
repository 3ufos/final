$(document).ready(function(){
	
	$("button").click(function(){
		var flavor=$("#flavorname").val();
		if(flavor == "PHOENIX FROST" || flavor == "phoenix frost" || flavor == "Phoenix Frost" || flavor == "Phoenix frost"){
			$(".secret").text("That's it! But something feels wrong... Your INSTINCTS are telling you to check the upper right corner.");
		} else{
			$("#flavorname").val("");
			$(".secret").text("No, that wasn't it...");
		}
	});

	$("input").keypress(function(){
		if(event.keyCode==13){
			$("button").click();
		}
	})
});
