define(['ieextend','jquery-ui', 'jquery-fullPage', 'jquery-mousewheel','coveringBad','head','modernizr'], function (extend) {
     var times=1;
      var _section1 = false;
    var hasShow = false;
    $(function(){
        $('.standard').trigger('fitbg');
        $('.tiploading').remove();
        $(".section13 .bg img").attr("src","images/1/slide131.jpg");
        $(".bg131").animate({'left': '-2000px','top': '2000px'},0);
        $(".bg132").animate({'left': '2000px','top': '-2000px'},0);
        $(".bg141").animate({'left': '-2000px','top': '2000px'},0);
        $(".bg142").animate({'left': '2000px','top': '-2000px'},0);
        $(".section13 .bg img").attr("src","images/1/slide131.jpg");
        $(".bg133").hide();
    });
    $('#fullpage').fullpage({
        anchors: ['1', '2', '3','4','5','6','7','8','9','10','11','12'],
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        afterLoad: function(anchorLink, index, slideAnchor, slideIndex){
            if(index==13){
                $(".footer").show();
            }
            if(index==12){
                times=1;
                $(".bg131").animate({'left': '0px','top': '0px'},1000);
                $(".bg132").animate({'left': '0px','top': '0px'},1000);
                $(".bg141").animate({'left': '0px',top:'0px'},1000);
                $(".bg142").animate({'left': '-100px','top':'0px'},1000);
               $(".bg133").animate({'left': '-2000px'},0,function(){ });
                //$(".bg133").css("background-image","url(images/1/flag135.png)")
            }
            if(index==9){
                $('.bg1111_1').delay(100).animate({top:'-2000px'},2000);
                $(".bg10_2").delay(200).animate({'bottom': '250px',left:0},1000);
                $('.bg10_1').delay(300).animate({'margin-left': '230px',right: '100px',top: '20px'},1000);

            }
			
      			if(!Modernizr.csstransitions){
      				extend.afterLoad(anchorLink, index, slideAnchor, slideIndex);
      			}
        } ,
        onLeave: function(index, nextIndex, direction){

            if(index==1){
                  $(".bg13").animate({'top': '-2000px',opacity:0});
                  $(".bg12").animate({'left': '25%'});
                  $(".bg11").animate({'left': '-290px'});
                  $(".bg14").animate({'bottom': '-2000px' ,opacity:0},0,function(){ _section1 = false;});
            }
            if(index==11){

                $(".bg131").animate({'left': '-2000px','top': '2000px'},0);
                $(".bg132").animate({'left': '2000px','top': '-2000px'},0);
                $(".bg141").animate({'left': '-2000px','top': '2000px'},0);
                $(".bg142").animate({'left': '2000px','top': '-2000px'},0);
                $(".section13 .bg img").attr("src","images/1/slide131.jpg");
            }
            if(index==9){
                $('.bg1111_1').animate({top:0},0);
                $(".bg10_2").animate({left:'-800px'});
                $('.bg10_1').animate({right: '-2000px'});
            }
            if(index==8 && direction=='down'){
                $('.bg1111_1').delay(100).animate({top:'-2000px'},2000);
            }
            if(index==12){
                hasShow = false;
                $('.tip').show();
                $(".footer").hide(1000,function(){$('.section13 .bg img,.section13 .bg131 img,.section13 .bg132 img').removeAttr('style');});
                $(".bg133").removeAttr("style");
                $(".bg133").show();
                $(".bg133").animate({'left': '-2000px'},0);
                $(".bg131").animate({'left': '0px','top': '0px'},0);
                $(".bg132").animate({'left': '0px','top': '0px'},0);
                $(".bg141").animate({'left': '0px',top:'0px'},0); 
                $(".bg142").animate({'left': '-100px','top':'0px'},0);
                $(".section13 .bg img").attr("src","images/1/slide13.jpg");
            }
            if(index==13){
                $(".footer").hide();
            }
      			if(!Modernizr.csstransitions){
      				extend.onLeave(index, nextIndex, direction);
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
   
    var _section13 = false;
    var isanimated=function(){
        return $(".bg131").is(":animated")|| $(".bg132").is(":animated") ||  $(".bg141").is(":animated") ||  $(".bg142").is(":animated");
    }
    $(".section1").mousewheel(function (e) {

        if (!_section1) {
            $(".bg13").animate({opacity:1});
			     $(".bg14").animate({opacity:1});
			
            setTimeout(function(){$(".bg12").animate({'left': '2000px'},1000);},0);
            setTimeout(function(){$(".bg11").animate({'left': '-2000px'},1000);},0);
            setTimeout(function(){$(".bg13").animate({'top': '100px'},1000);},0);
            setTimeout(function(){$(".bg14").animate({'bottom': '0px'},1000);},0);
                $(".bg15").show("shake", { direction: "top"  }, 1000, function () {
                    _section1 = true;
                });

            stopEvent()
            return false;
        }
    });

   $(".section13") .mousewheel(function (e) {
          if(isanimated()) {
              stopEvent()
              return false;
          }
       if (!_section13) {
            if(times==1){           //飞出前两个
                $(".bg133").show();
                 $(".bg131").animate({'left': '-2000px','top': '2000px'},1000);
              $(".bg132").animate({'left': '2000px','top': '-2000px'},1000,function(){

              });
               $(".bg133").animate({'left': '100px','top':'200px'},1000,function(){times++;});
                times++
                stopEvent()
                return false;

            }
           if(times==3){          //再次飞出，展现双孔杯架
               $(".bg133").animate({'left': '-2000px' },0);
               $(".section13 .bg img").attr("src","images/1/slide14.jpg");
               $(".bg133").css("background-image","url(images/1/flag14.png)");
               $(".bg132").animate({'left': '0px','top': '0px'},0);
               $(".bg132").animate({'left': '-2000px','top': '2000px'},1000);
               $(".bg141").animate({'left': '2000px','top': '-2000px'},1000);
               $(".bg133").animate({'left': '100px'},1000,function(){times++;});
                               times++
               stopEvent()
               return false;

           }
           if(times==5){    //再次飞出展现迷你小冰箱
               $(".bg133").animate({'left': '-2000px'},0);
               $(".bg132").animate({'left': '0px','top': '0px'},0);
               $(".bg141").animate({'left': '0px',top:'0px'},0,function(){times++;$(".bg142").animate({'left': '-82px','top':'0'},0);});


               $(".section13 .bg img").attr("src","images/1/slide15.jpg");
               $(".bg133").css("background-image","url(images/1/flag15.png)")
               $(".bg133").animate({'left': '100px'},1000);

               $(".bg131").animate({'left': '0px','top': '0px'},0);
               $(".bg132").animate({'left': '0px','top': '0px'},0);
               $(".bg141").animate({'left': '-2000px','top': '2000px'},1000);
               $(".bg142").animate({'left': '2000px','top':'-2000px'},1000,function(){ });


               stopEvent()
               return false;
           }
           if(times==6){    //再次飞入遮挡

               $(".bg133").animate({'left': '-2000px'},0);
               $(".bg133").css("background-image","url(images/1/flag16.png)")
               $(".bg131").animate({'left': '0px','top': '0px'},1000);
               $(".bg132").animate({'left': '0px','top': '0px'},1000);
               $(".bg141").animate({'left': '0px',top:'0px'},0);
               $(".bg142").animate({'left': '-100px','top':'0px'},0,function(){times++; $(".section13 .bg img").attr("src","images/1/slide16.jpg");});
               $(".bg141").animate({'left': '-2000px','top': '2000px'},1000);
               $(".bg142").animate({'left': '2000px','top':'-2000px'},1000,function(){times++;$(".section13 .bg img").attr("src","images/1/slide16.jpg");});
               $(".bg133").animate({'left': '100px'},500);
               stopEvent()
               return false;
           }
           if(times==8){
               if(e.deltaY < 0 && !hasShow){
                   hasShow=true;
                   $(".footer").show(1000);
                   var bg = $('.section13 .bg img,.section13 .bg131 img,.section13 .bg132 img');
                   bg.animate({'top':'-360px'},500).css({'position':'absolute'});
                   $(".footer").delay(100).show(1000);
                   $('.tip').hide();
                   stopEvent()
                   return false;
               }
           }
       }
   });

    window.onresize=function(){
        $('.standard').delay(100).trigger('fitbg');
    };

    $('.standard').on('fitbg',function(){
        $(this).css('margin-left',-($(this).width() - $(document).width())/2);
    });


    $('.first').coveringBad({
        marginY : 30 ,
        marginX : 30 ,
        setX  : 900,
        setY  : 0 ,
        direction   : "vertical"
    });

    if(document.location.href.indexOf("?visual=1")>0){

         $(".section .bg img").css({width:'100%',height:'auto'})
        $("body").css({'min-width':'200px' })
        $(".section").css("height",$(".standard").height()+"px")
        $(".fp-tableCell").css("height",$(".standard").height()+"px")

    }
});