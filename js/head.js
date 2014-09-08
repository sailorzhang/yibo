//公共效果
$(function($) {
    var nav = $('.header-nav'),

        curNav = $('li.on', nav),
        outItv = null,
        selectCls = 'on',
        hoverLi = $('.top_hover', nav) ;




    (function($) {
        var inter = $({});
        $.bind = function() {
            inter.bind.apply(inter, arguments);
            return inter;
        };
        $.trigger = function() {
            inter.trigger.apply(inter, arguments);
            return inter;
        };
        $.unbind = function() {
            inter.unbind.apply(inter, arguments);
            return inter;
        }
    })(jQuery);


    //头部导航
    $('.header-nav .sub_nav').each(function(){
        $(this).children('a').each(function(index, a){
            $(a).css({
                'left': 0 - 9*index
            });
        });

    });

    nav.on( 'mouseleave','li', function(evt) {
        var target = $(evt.currentTarget),
            sub = $('.sub_nav', target);
        switch (evt.type) {
            case 'mouseleave':
                sub.hide();
                break;
        }
        return false;
    });

    nav.on( 'mouseenter','li', function(evt) {
        var target = $(evt.currentTarget),
            sub = $('.sub_nav', target);
        switch (evt.type) {
            case 'mouseenter':
                //字体高亮
                target.siblings().removeClass('active');
                target.addClass('active');
                clearTimeout(outItv);
                var left = target.prop('offsetLeft');
                left = left>0?left-12:left;
                hoverLi.stop(true).animate({
                    left: left
                }, 'slow');
                //更换滑动块背景
                if(hoverLi.hasClass('last')){
                    setTimeout(function(){
                        hoverLi.removeClass('first last');
                        if(left < 5){
                            hoverLi.addClass('first');
                        }else if(left > 750){
                            hoverLi.addClass('last');
                        }
                    },100);
                }else{
                    hoverLi.removeClass('first last');
                    if(left < 5){
                        hoverLi.addClass('first');
                    }else if(left > 750){
                        hoverLi.addClass('last');
                    }
                }
                if (!evt.isTrigger) {
                    sub.show();
                }
                break;
            case 'mouseleave':
                target.addClass('active');
                clearTimeout(outItv);
                outItv = setTimeout(function() {
                    curNav.trigger('mouseenter');
                }, 100);
                sub.hide();
                break;
        }
        return false;
    });

    $.bind('nav.public', function(evt, index) {
        curNav = $('li', nav).eq(index);
        curNav.trigger('mouseenter').addClass(selectCls).siblings('.' + selectCls).removeClass(selectCls);
        return false;
    });


    $(window).load(function() {
        var loadQueue = [];
        if (typeof $CONF == 'undefined') {
            $CONF = {};
        }

        setTimeout(function() {
            $.each(loadQueue, function(i, func) {
                func.apply(null);
            });
        }, 500);
    });
});