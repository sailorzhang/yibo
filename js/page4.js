define(['jquery-ui', 'jquery-fullPage', 'jquery-mousewheel','coveringBad','head','jquery.easing.1.3','modernizr'], function () {
    var hasShow = false;
    $('#fullpage').fullpage({
        anchors: ['1', '2', '3','4','5','6','7','8','9','10','11','12'],
        navigation: true,
        navigationPosition: 'right',
        //navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true,
        afterLoad: function(anchorLink, index, slideAnchor, slideIndex){
            if(index==1){
                    $(".bg4-1").delay(100).animate({'opacity': 1,top:'220px',right:'100px'},1000);
                }
            if(index==3){
            /*    $(".bg4-31").css({"opacity":"0"}).delay(10).animate({"opacity":"0"},1000, 'easeInCirc', function(){  });*/
            }
            if(index==4){
                $('.bg4-41').animate({ "top":"400px","right":"450px"},10,function(){
                    $('.bg4-41').animate( {"top": "220px","right": "40px"}, 1000, 'easeInCirc', function(){  });
                });
                $(".bg4-42").delay(300).animate({'top': '150px',left:'370px'},1000);
              //$(".bg4-41").css({ "top":"400px","right":"450px"}).delay(10).animate( {"top": "220px","right": "40px"}, 1000, 'easeInCirc', function(){  });
            }

            if(!Modernizr.csstransitions){
                
                if(index==2){
                   $(".bg71").delay(100).animate({'bottom': '250px',left:0},1000);
                    //left: 100px; opacity: 1; transition-delay: 0.7s;
                    $('.bg4-21').delay(300).animate({left:'18%'});
                }
                if(index==3){
                     $(".bg4-31").animate({opacity:0},4000);
                     $(".bg4-32").delay(1000).animate({top:'100px',right:'200px'},1000);
                }
                if(index==4){
                    $(".bg71").delay(100).animate({'bottom': '250px',left:0},1000);
                     //$(".bg4-42").delay(1000).animate({'top': '150px',left:'370px'},1000);
                }
                if(index==5){
                    $('.bg21').animate({top:0,right:0},1000);
                    $('.bg4-51').delay(300).animate({top:'150px',right:'400px'},1000);
                }
                if(index==6){
                    $(".bg71").delay(100).animate({'bottom': '250px',left:0},1000);
                    $(".bg4-61").delay(300).animate({'top': '150px',left:'190px'},1000);
                }
            }
        } ,
        onLeave: function(index, nextIndex, direction){
            if(index==1){
                    $(".bg4-1").animate({'opacity': 0,top:'2000px',right:'100px'});
                }
            if(index==6){
                hasShow = false;
                $(".footer").hide(1000,function(){$('.section6 .bg img').removeAttr('style');});
                $('.tip').show();
            }
            if(index==4){
                $(".bg4-42").animate({'top': '150px',left:'2000px'});
            }
            if(!Modernizr.csstransitions){
                
                if(index==2){
                    $(".bg71").animate({left:'-800px'});
                    $('.bg4-21').animate({left:'2000px'});
                }
                if(index==3){
                    $(".bg4-31").animate({opacity:1},1000);
                    $(".bg4-32").animate({top:'0',right:'2000px'});
                }
                if(index==4){
                    $(".bg71").animate({left:'-800px'});
                    //$(".bg4-41").animate({'top': '400px',right:'450px'});
                    //$(".bg4-42").animate({'top': '150px',left:'2000px'});
                }
                if(index==5){
                    $('.bg21').animate({top:0,right:'-800px'},1000);
                    $('.bg4-51').animate({top:'200px',right:'2000px'},1000);
                }
                if(index==6){
                    $(".bg71").animate({left:'-800px'});
                    $(".bg4-61").animate({'top': '200px',left:'2000px'},1000);
                }
            }
        }
    });

    $(".section6").mousewheel(function (e) {
        if(e.deltaY < 0 && !hasShow){
            hasShow=true;
            $(".footer").show(1000);
            var bg = $('.section6 .bg img');
            bg.animate({'top':'-360px'},500).css({'position':'absolute'});
            $(".footer").delay(100).show(1000);
            $('.tip').hide();
            stopEvent();
            return false;
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

    window.onresize=function(){
        $('.standard').delay(100).trigger('fitbg');
    };

    $('.standard').on('fitbg',function(){
        $(this).css('margin-left',-($(this).width() - $(document).width())/2);
    });

$(function(){
        $('.standard').delay(100).trigger('fitbg');
        $('.tiploading').remove();
        $(".bg4-1").delay(100).animate({'opacity': 1,top:'220px',right:'100px'},1000);
});
    // $(window).resize(function() {

    if(document.location.href.indexOf("?visual=1")>0){

        $(".section .bg img").css({width:'100%',height:'auto'})
        $("body").css({'min-width':'200px' })
        $(".section").css("height",$(".standard").height()+"px")
        $(".fp-tableCell").css("height",$(".standard").height()+"px")

    }

   // });
})