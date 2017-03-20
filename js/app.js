$(document).ready(function(){
    
/* hamburger menu */
    
    var ul = document.querySelector(".navbar ul");
    var icon = document.getElementById("nav-icon");
  
        if (window.matchMedia("(max-width:650px)")) {
            icon.addEventListener("click", function() {
                ul.classList.toggle("visible");
            });
        }

    $('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
        
    window.addEventListener("resize", function(){
        
        if(window.matchMedia("(min-width:651px)").matches) {
            ul.classList.remove("visible");
        }    
    });

});

