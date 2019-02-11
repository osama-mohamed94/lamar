$(function(){
    
    /*Start Navbar*/
    
    var windowPage = $(window),
        navSection = $(".nav-section"),
        dropdown = $(".nav-section .dropdown"),
        search = $(".nav-section .search"),
        searchBox = $(".nav-section .search-box");
    windowPage.scroll(function(){
        if(windowPage.scrollTop() > 0){
            navSection.addClass("when-scroll");
        } else {
            navSection.removeClass("when-scroll");
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
    /*Start Servises*/
    
    $(".owl-carousel.owl-carousel1").owlCarousel({
        items: 3,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        nav: true,
        responsive:{
            0:{
                items: 1,
                center: false,
                nav: false
            },
            768:{
                items: 2,
                center: false
            },
            992:{
                items: 3
            }
        }
    });
    
    /*Start Partners*/
    
    $(".owl-carousel.owl-carousel2").owlCarousel({
        items: 6,
        rtl: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        responsive:{
            0:{
                items: 2
            },
            300:{
                items: 3
            },
            576:{
                items: 4
            },
            768:{
                items: 5
            },
            992:{
                items: 6
            }
        }
    });
    
    /*End Partners*/
    
    $(".servises .owl-prev, .servises .owl-next, .works .owl-prev, .works .owl-next, .partners .owl-prev, .partners .owl-next").addClass("position-absolute rounded-circle d-flex justify-content-center align-items-center");
    function servises(){
        var prev = $(".servises .owl-prev, .works .owl-prev, .partners .owl-prev"),
            next = $(".servises .owl-next, .works .owl-next, .partners .owl-next"),
            servisesPrevAndNext = $(".servises .owl-prev, .servises .owl-next"),
            workPrevAndNext = $(".works .owl-prev, .works .owl-next"),
            servisesImageHeight = $(".servises .slider .space").innerHeight(),
            worksImageHeight = $(".works .slider .image").innerHeight();
        $(".servises .owl-prev, .servises .owl-next, .works .owl-prev, .works .owl-next").empty();
        prev.html("<i class=\"fas fa-angle-right fa-sm\"></i>");
        next.html("<i class=\"fas fa-angle-left fa-sm\"></i>");
        servisesPrevAndNext.css("top", (servisesImageHeight / 2) + 10);
        workPrevAndNext.css("top", (worksImageHeight / 2) + 55 + 15 );
    }
    windowPage.resize(servises);
    servises();
    
    /*End Servises*/
    /*Start Load Page*/
    
    windowPage.on("load", function(){
        $(".load-page").fadeOut(1000 * 0.4);
    });
    
    /*End Load Page*/
    
});