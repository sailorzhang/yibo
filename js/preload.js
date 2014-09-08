//全局变量

//预加载
var preLoad = function(preCallback){
	//预加载的资源列表
	var resourceArr = [
            'images/1/1.png',
            'images/2/1.png',
            'images/3/1.png',
            'images/4/1.png'
	],
	resourceLen = resourceArr.length,
	loadedCount = 0;

	preCallback = preCallback || function(){};

	//执行预加载
	$.each(resourceArr, function(index, resource){
		$('<img>').on('load error',function(){
			loadedCount++;
			preCallback(Math.round(loadedCount/resourceLen * 100));
		}).attr('src', resource);

	});
}

//动画初始化
var animateInit = function(preAnmtCalbck){
	preAnmtCalbck = preAnmtCalbck || function(){};

	$('.animates').each(function(){
		var _t = $(this);

		var duration = + _t.attr('data-duration'),
		easy = _t.attr('data-easy') || 'easeOutQuint',
		delay = + _t.attr('data-delay'),
		from = $.parseJSON(_t.attr('data-from')) || {},
		to = $.parseJSON(_t.attr('data-to')) || {};

		if(_t.is(':hidden')){
			_t.show();
		}

		_t.css(from).delay(delay).animate(to, duration, easy, function(){
			preAnmtCalbck(_t);
		});
	});
}

//页面初始化
var docInit = function(){
	//隐藏加载进度
	$('#loading').fadeOut();

	//初始化动画
	animateInit(function(element){
		//@todo code sm
	});


}

//Document ready
$(function(){

	//先预加载，再初始化页面
	preLoad(function(pre){
		$('#progress').html(pre);
		if(pre >= 98){
			docInit();
		}
	});

	//其他
});