/*requirejs.config({
  baseUrl: './scripts',
  paths: {
    app: 'app'
  }
});

http://www.runoob.com/w3cnote/requirejs-tutorial-2.html

*/

requirejs.config({
  baseUrl: './scripts',
  paths: {
    hello: 'hello',
    app: 'app'
  },
  shim: {
    hello: { 
    	exports: 'hello',
    	init: function() {
    		return {
    			hello: hello,
    			hi: hi
    		}
    	}
    }
  }
});

requirejs(['app'], function(app) {
	  app.hello();
});

requirejs(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
	
	util.hello();
});


requirejs(['hello'], function(hello) {
		
	hello.hello();
	hello.hi();
});



