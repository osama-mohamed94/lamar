$(function(){
    /*Start Navbar*/
    
    var windowPage = $(window),
        navSection = $(".nav-section"),
        dropdown = $(".nav-section .dropdown"),
        search = $(".nav-section .search"),
        searchBox = $(".nav-section .search-box"),
        key = true;
    windowPage.scroll(function(){
        if(windowPage.scrollTop() > navSection.innerHeight()){
            if(key){
                navSection.addClass("when-scroll-static fixed-top").removeClass("position-relative").hide(0).slideDown(1000 * 0.4)
                .nextAll(".next").css("margin-top", "76px");
                key = false;
            }
        } else {
            if(!key){
                navSection.addClass("position-relative").removeClass("when-scroll-static fixed-top")
                .nextAll(".next").css("margin-top", 0);
                key = true;
            }
        }
    });
    dropdown.hover(function(){
        $(this).find(".dropdown-menu").stop(false, false).slideDown(1000 * 0.4);
    },
    function(){
        $(this).find(".dropdown-menu").stop(false, false).slideUp(1000 * 0.4);
    });
    search.click(function(e){
        e.preventDefault();
        searchBox.fadeToggle(1000 * 0.4);
    });
    
    /*End Navbar*/
    /*Start Menu Small*/
    
    $(".nav-section #lines, .menu-small .menu .close-icon i, .menu-small, .menu-small .menu .list .drop-down > a").click(function(e){
        if(e.currentTarget == $(".nav-section #lines")[0]){
            $(this).addClass("anim").parents(".nav-section").next(".menu-small").fadeIn(1000 * 0.4).find(".menu").animate({
                "right": 0
            }, 1000 * 0.4);
        } else if(e.currentTarget == $(".menu-small .menu .close-icon i")[0]){
            $(this).parents(".menu").animate({
                "right": "-250px"
            }, 1000 * 0.4).parent(".menu-small").fadeOut(1000 * 0.4);
            $(".nav-section #lines").removeClass("anim");
            console.log(e.target)
        } else if(e.target == $(".menu-small")[0]){
            $(this).find(".menu").animate({
                "right": "-250px"
            }, 1000 * 0.4).end()
            .fadeOut(1000 * 0.4);
            $(".nav-section #lines").removeClass("anim");
        } else if(e.currentTarget == $(".menu-small .menu .list .drop-down > a")[0]){
            e.preventDefault();
            $(this).next().slideToggle(1000 * 0.4);
        }
    });
    
    /*End Menu Small*/
    /*Start Load Page*/
    
    windowPage.on("load", function(){
        $(".load-page").fadeOut(1000 * 0.4);
    });
    
    /*End Load Page*/
});