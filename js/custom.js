define(['jquery', 'transit','touchSwipe','simpleSlider','backstretch','jquery.jrumble.1.3.min'],function(){

    var mainslider;


    var options = {
        slides: '.slide', // The name of a slide in the slidesContainer
        //  swipe: true,    // Add possibility to Swipe > note that you have to include touchSwipe for this
        slideTracker: true, // Add a UL with list items to track the current slide
        slideTrackerID: 'slideposition', // The name of the UL that tracks the slides
        slideOnInterval: false, // Slide on interval
        interval: 9000, // Interval to slide on if slideOnInterval is enabled
        animateDuration: 1000, // Duration of an animation
        //   animationEasing: 'ease', // Accepts: linear ease in out in-out snap easeOutCubic easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart easeInOutQuart easeInQuint easeOutQuint easeInOutQuint easeInSine easeOutSine easeInOutSine easeInBack easeOutBack easeInOutBack
        pauseOnHover: false // Pause when user hovers the slide container
    };

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data("simpleslider");
    /* yes, that's all! */

    $(".slider").on("beforeSliding", function(event){

        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $("#logoimg").attr("src","images/"+(newSlide+1)+"/1_1_1.png");
        $(".slider .slide[data-index='"+prevSlide+"'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='"+newSlide+"'] .slidecontent").hide();

    });

    var added={
        1:true,
        2:true,
        3:true,
        4:true

    }
    $(".slider").on("afterSliding", function(event){


        var prevSlide = event.prevSlide;
        var newSlide = event.newSlide;
        $(".slider .slide[data-index='"+newSlide+"'] .slidecontent").fadeIn();

        $(".backstretch .car ",$(".slide")[newSlide]).jrumble({
            x:2 ,
            y: 1,
            rotation: 0,
            speed: 0
        });

        $(".backstretch .car ",$(".slide")[newSlide]).trigger('startRumble');
        setTimeout(function(){$(".backstretch .car ",$(".slide")[newSlide]).trigger('stopRumble');},1000)


        /*   var img=$("<img style='width:auto;height: 100%; margin-left: -10% ' src='images/"+(parseInt(event.newSlide)+1)+"/1_1.png' />")
         if(added[newSlide]){
         $(".backstretch",$(".slide")[newSlide]).append(img);

         added[newSlide]=false;
         }
         */

        //shake(img);
    });

    $(".slide#first").backstretch("images/1/1.jpg");
    $(".slide#sec").backstretch("images/2/1.jpg");
    $(".slide#thirth").backstretch("images/3/1.jpg");
    $(".slide#fourth").backstretch("images/4/1.jpg");

    $('.slide .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

    $(".slidecontent").each(function(){
        $(this).css('margin-top', -$(this).height()/2);

    });
    $(".backstretch",$(".slide")[0]).append($("<img class='car' style='width:auto;height: 100%; margin-left: -8% ' src='images/1/1_1.png' />")) ;
    $(".backstretch",$(".slide")[1]).append($("<img  class='car' style='width:auto;height: 100%; margin-left: -8% ' src='images/2/1_1.png' />")) ;
    $(".backstretch",$(".slide")[2]).append($("<img  class='car' style='width:auto;height: 100%; margin-left: -8% ' src='images/3/1_1.png' />")) ;
    $(".backstretch",$(".slide")[3]).append($("<img  class='car'  style='width:auto;height: 100%; margin-left: -8% ' src='images/4/1_1.png' />")) ;
    $(".backstretch .car ",$(".slide")[0]).jrumble({
        x:2 ,
        y: 1,
        rotation: 0,
        speed: 0
    });
    $(function(){
         $(".backstretch .car ",$(".slide")[0]).trigger('startRumble');
        setTimeout(function(){$(".backstretch .car ",$(".slide")[0]).trigger('stopRumble');},1000)
    });
});

