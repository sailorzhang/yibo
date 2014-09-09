define(['jquery-ui', 'jquery-fullPage', 'jquery-mousewheel','coveringBad','head','modernizr'], function () {
var hasShow = false;
    $('#fullpage').fullpage({
        anchors: ['1', '2', '3','4','5','6','7','8','9','10','11','12'],
        navigation: true,
        navigationPosition: 'right',
        //navigationTooltips: ['firstSlide', 'secondSlide'],
        slidesNavigation: true ,
        afterLoad: function(anchorLink, index, slideAnchor, slideIndex){

            if(index==1){
                $(".bg2-11").animate({"right":"200px"},1000,function(){});
            }
			
			if(!Modernizr.csstransitions){
				if(index==2){
					$(".bg71").delay(100).animate({'bottom': '250px',left:0},1000);
					$(".bg2-22").delay(300).animate({'left': '200px'},1000);
				}
				if(index==3){
					$('.bg21').animate({top:0,right:0,'margin-left':'-608px'},1000);
					$(".bg2-32").delay(100).animate({'left': '0',top:0,opacity:1},1000);
					$(".bg2-33").delay(100).animate({'left': '40%',opacity:1},1000);
                    $(".bg2-34").delay(700).animate({'opacity':1},2000);
					$(".bg2-31_1").delay(300).animate({opacity:0},2000);	
				}
				if(index==4){
					$(".bg71").delay(100).animate({'bottom': '250px',left:0},1000);
					$(".bg2-41").delay(300).animate({'left': '300px'},1000);
				}
			}
        } ,
        onLeave: function(index, nextIndex, direction){
            if(index==1){
                $(".bg2-11").stop(true).animate({"right":"2000px"});
            }
            if(index==4){
                hasShow = false;
                $(".footer").hide(1000,function(){$('.section4 .bg img').removeAttr('style');});
                $('.tip').show();
            }
			
			if(!Modernizr.csstransitions){
                if(index==1){
                    $(".bg2-34").animate({'opacity':0});
                }
				if(index==2){
					$(".bg71").animate({left:'-800px'});
					$(".bg2-22").animate({'left': '2000px'});
				}
				if(index==3){
					$('.bg21').animate({top:0,right:'-800px'},1000);
					$(".bg2-32").animate({'left': '-2000px'},1000);
					$(".bg2-33").animate({'left': '-2000px'},1000);
                    $(".bg2-34").animate({'opacity':0});
					$(".bg2-31_1").animate({opacity:1});
				}
				if(index==4){
					$(".bg71").animate({left:'-800px'});
					$(".bg2-41").animate({'left': '2000px'});
				}
			}
        }
    });
    
    $(".section4").mousewheel(function (e) {

        if(e.deltaY < 0 && !hasShow){
            hasShow=true;

            var bg = $('.section4 .bg img');
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

      $(function(){
          $('.standard').trigger('fitbg');
          $('.tiploading').remove();
          $(".bg2-11").delay(100).animate({"right":"200px"},1000,function(){});
      })

    window.onresize=function(){
        $('.standard').delay(100).trigger('fitbg');
    };

    $('.standard').on('fitbg',function(){
        $(this).css('margin-left',-($(this).width() - $(document).width())/2);
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