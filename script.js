$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow 
            case 37:
                $('img').animate({left: "-=10px"}, 'fast');
                break;
            // Up Arrow 
            case 38:
                $('img').animate({top: "-=10px"}, 'fast');
                break;
            // Right Arrow 
            case 39:
                $('img').animate({left: "+=10px"}, 'fast');
                break;
        }
    });
});