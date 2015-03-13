$(document).ready(function() {

	function highlightMenuTab(menuTabName) {
	    $("li.selected").removeClass("selected");
	    $("#" + menuTabName).addClass("selected");
	}

	$('.btn-toggle').on('click', function(){
		$('nav').toggleClass('toggle');
		$('nav ul').toggleClass('navbar');
		$('#nav-home').toggleClass('selected');
	});
});