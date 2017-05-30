
	app.factory('ismobile', function() {

	    'use strict';
	    //logic to test if this should be treated as a mobile
	    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
	    	if((/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())))
	        	return true;
	    	else
	    		return false;
	    }
	    return false;

	});


	app.factory('ismobileResolution', function() {

		if($(window).width() < 480 || $(window).height() < 480){
			return true;
		}
		return false;

	});
