'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(function projectClick(e){
		e.preventDefault();
		//var containingProject = $(this).closest(".project");
		//containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
		var containingProject = $(this).closest(".project");
	    var description = $(containingProject).find(".project-description");
	    if (description.length == 0) {
	       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	       $(description).fadeIn();
	    } else {
	       $(description).fadeToggle();
	       //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	    }
	});
}

