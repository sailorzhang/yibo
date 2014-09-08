define([], function () {
	return {
		afterLoad:function(anchorLink, index, slideAnchor, slideIndex){
			if(index==2){
				$('.bg21').animate({top:0,right:0,'margin-left':'-608px'},1000);
				$('.bg23').animate({bottom:'25%'},1000);
                //setTimeout(function(){$(".bg44").animate({top: 0,right: 0},1000);},0);
			}
			if(index==3){
               $(".bg31").fadeTo(1000,1);
			   $(".bg32").animate({
				opacity:1,
				top:0,
				left:0
			   },1000);
           }
		   if(index==4){
				setTimeout(function(){$(".bg41").animate({bottom: '15%','margin-top': 0},1000);},100);
				setTimeout(function(){$(".bg42").animate({bottom: '15%',opacity: 1,'margin-top': 0},1000);},300);
				setTimeout(function(){$(".bg43").animate({bottom: '26%',opacity: 1},1000);},1000);
				setTimeout(function(){$(".bg44").animate({top: 0,right: 0},1000);},1300);
		   }
		   if(index==5){
				$(".bg51").fadeTo(1000,1);
		   }
		   if(index==6){
				setTimeout(function(){$(".bg61").animate({opacity: 1,'margin-top': '43%'},1000);},300);
				setTimeout(function(){$(".bg62").animate({left: '70%',opacity: 1},1000);},1900);
				setTimeout(function(){$(".bg44").animate({top: 0,right: 0},1000);},1100);
		   }
		   if(index==7){
				$(".bg71").delay(100).animate({'bottom': '250px',left:0},1000);
				$(".bg72").delay(300).animate({opacity: 1,'bottom': '40%',left:'18%'},1000);
		   }
		   if(index==8){
				$('.bg21').animate({top:0,right:0,'margin-left':'-608px'},1000);
				$('.bg82').animate({bottom:'80px',right:'200px'},1000);
               //setTimeout(function(){$(".bg44").animate({top: 0,right: 0},1000);},0);
		   }
		   if(index==9){
               $('.bg1111_1').delay(300).animate({top:'-2000px'},2000);
				$('.bg1111').animate({opacity:0},6000);
				$(".bg10_2").delay(1000).animate({'bottom': '250px',left:0},1000);
			    $('.bg10_1').delay(1300).animate({'margin-left': '230px',right: '100px',top: '20px'},1000);
		   }
		   if(index==10){
				//$('.bg121').animate({left:'200px'},1000);
				$('.bg1111').animate({opacity:0},6000);
				$('.bg111').animate({right:'350px',opacity:1},1000);
		   }
		   if(index==11){
				$('.bg121').animate({left:'200px'},1000);
		   }
            if(index==12){
               // $(".bg133").css('filter', 'progid:DXImageTransform.Microsoft.Alpha(opacity=100)');
            }
		},
		onLeave:function(index, nextIndex, direction){
			if(index==1){
                  $(".bg31").fadeTo(0,0);
			}
			if(index==2){
				$('.bg21').animate({top:0,right:'-800px'},1000);
				$('.bg23').animate({bottom:'-40%'},1000);
			}
			
			if(index==3){
               $(".bg31").fadeTo(1000,0);
			   $(".bg32").animate({
				opacity:0,
				top:0,
				left:'-800px'
			   },1000);
           }
		   
		   if(index == 4){
				$(".bg41").animate({bottom: '0%','margin-top': '2000px'});
				$(".bg42").animate({bottom: '200%',opacity: 0,'margin-top':'-300px'});
                $(".bg43").animate({bottom: '-449px',opacity: 0});
				$(".bg44").animate({right: '-900px'},0);		   
		   }
		   if(index==5){
				$(".bg51").fadeTo(1000,0);
		   }
		   if(index == 6){
				$(".bg61").animate({opacity: 1,'margin-top': '0%'});
				$(".bg62").animate({left: '-30%',opacity: 1});
				$(".bg44").animate({right: '-900px'},0);	   
		   }
		   if(index==7){
				$(".bg71").animate({left:'-800px'});
				$(".bg72").animate({opacity: 0,'bottom': '-206px',left:'2000px'});
		   }
		   if(index==8){
				$('.bg21').animate({top:0,right:'-800px'},1000);
				$('.bg82').animate({bottom:'80px',right:'2000px'},1000);
		   }
		   if(index==9){
				$('.bg1111').stop(true).animate({opacity:1},0);
               $('.bg1111_1').animate({top:0},0);
               $(".bg10_2").animate({left:'-800px'});
               $('.bg10_1').animate({right: '-2000px'});
		   }
		   if(index==10){
				$('.bg1111').stop(true).animate({opacity:1},0);
				$('.bg111').animate({right:'2000px',opacity:0},1000);
		   }
		   if(index == 11){
				$('.bg121').animate({left:'-900px'},1000);
		   }
		}
	};
});