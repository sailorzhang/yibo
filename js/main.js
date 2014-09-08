require.config({
    baseUrl: 'js',
	waitSeconds:100,
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'vendor/jquery-1.11.1.min',
        'jquery-ui':'vendor/jquery-ui.min',
        modernizr:'vendor/modernizr-2.8.3.min',
        'jquery-migrate':'jquery-migrate-1.2.1.min',
       'jquery-easings': 'vendor/jquery.easings.min' ,
       'jquery.slimscroll':'vendor/jquery.slimscroll.min' ,
        'jquery-fullPage':'jquery.fullPage'       ,
        'jquery-mousewheel':'vendor/jquery.mousewheel' ,
        'simpleSlider':  'simpleSlider',
        'backstretch':'backstretch',
        'transit':'transit',
         'coveringBad':'coveringBad',
        'head':'head' ,
        'preload':'preload',
        'jquery.easing.1.3':'jquery.easing.1.3' ,
        'jquery.jrumble.1.3.min':'jquery.jrumble.1.3.min',
        'spin':'vendor/spin.min'
    },
    shim: {
        'jquery-fullPage': {
            deps: ['jquery','jquery-easings', 'jquery.slimscroll']

        } ,
        'jquery.easing.1.3':{
            deps:['jquery']
        } ,
        'jquery.jrumble.1.3.min':{
            deps:['jquery']
        },
        'jquery-migrate':{
            deps:['jquery']
        } ,
        'transit':{
            deps:['jquery']
        } ,
        'coveringBad':{
            deps:['jquery']
        } ,
        'backstretch':{
            deps:['jquery']
        } ,
        'simpleSlider':{
            deps:['jquery']
        } ,
        'jquery-easings':{
            deps:['jquery']
        } ,
        'jquery-ui':{
            deps:['jquery']
        },
        'jquery-mousewheel':{
            deps:['jquery']
        },
        'head':{
            deps:['jquery']
        },
        'jquery.slimscroll' :{
            deps:['jquery']
        },
        'preload' :{
            deps:['jquery']
        },
        'spin':{
            deps:['jquery']
        }

    }
});

