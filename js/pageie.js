define(['jquery-ui', 'jquery-fullPage', 'jquery-mousewheel','coveringBad'], function () {

    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage','4rdPage','5','6','7','8','9','10','11','12'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],

        slidesNavigation: true,
        afterLoad: function(anchorLink, index, slideAnchor, slideIndex){
           if(anchorLink==9){
               $(".section11 .changeable").animate({
                   height: '600px'
               }, 1000 );
           }
		   
		   if(index==3){
               $(".bg31").fadeTo(1000,1);
			   $(".bg32").animate({
				opacity:1,
				top:0,
				left:0,
			   },1000);
           }
		    
        } ,
        onLeave: function(index, nextIndex, direction){
            if(index==9 ){
                $(".section11 .changeable").animate({
                    height: '100px'
                }, 1000 );
            }
			
			if(index==3){
               $(".bg31").fadeTo(1000,0);
			   $(".bg32").animate({
				opacity:0,
				top:0,
				left:'-800px'
			   },1000);
           }
        }
    });
    function stopEvent(){ //阻止冒泡事件
        //取消事件冒泡
        var e=arguments.callee.caller.arguments[0]||event; //若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
        if (e && e.stopPropagation) {
            // this code is for Mozilla and Opera
            e.stopPropagation();
        } else if (window.event) {
            // this code is for IE
            window.event.cancelBubble = true;
        }
    }
    var _section1 = false;
    $(".section1").mousewheel(function (e) {
        if (!_section1) {

            $(".bg12").hide("slide", { direction: "right" }, 3000, function () {
            });
            $(".bg11").hide("slide", { direction: "left"  }, 2000, function () {
                $(".bg13").show("slide", { direction: "top"  }, 500, function () {
                });
                $(".bg14").show("slide", { direction: "top"  }, 500, function () {
                });
                $(".bg15").show("shake", { direction: "top"  }, 1000, function () {
                    _section1 = true;
                });
            });
            stopEvent()
            return false;
        }
    })


    $(".section2").on("mouseover",function (e) {

        _section1 = false;
            $(".bg12").show("slide", { direction: "right" }, 3000, function () {
            });
            $(".bg11").show("slide", { direction: "left"  }, 2000, function () {

            });


    }) ;


    $('.first').coveringBad({
        marginY : 30 ,
        marginX : 30 ,
        setX  : 900,
        setY  : 200 ,
        direction   : "vertical"
    });




    // $(window).resize(function() {
        console.log($(".standard").height()+"px")
    if(document.location.href.indexOf("?visual=1")>0){

         $(".section .bg img").css({width:'100%',height:'auto'})
        $("body").css({'min-width':'200px' })
        $(".section").css("height",$(".standard").height()+"px")
        $(".fp-tableCell").css("height",$(".standard").height()+"px")

    }

   // });
})