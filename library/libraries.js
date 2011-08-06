var d41d8cd98f00b204e9800998ecf8427e_LibraryDetectorTests = {

	'jQuery': {
		icon: 'jquery',
		url: 'http://jquery.com',
		test: function(win) {
			var jq = win.jQuery || win.$ || win.$jq || win.$j;
			if(jq && jq.fn && jq.fn.jquery) {
				return { version: jq.fn.jquery };
			}
			return false;
		}
	},

	'jQuery UI': {
		icon: 'jquery_ui',
		url: 'http://jqueryui.com',
		test: function(win) {
			var jq = win.jQuery || win.$ || win.$jq || win.$j;
			if(jq && jq.fn && jq.fn.jquery && jq.ui) {
				var plugins = 'accordion,datepicker,dialog,draggable,droppable,progressbar,resizable,selectable,slider,menu,grid,tabs'.split(','), concat = [];
				for (var i=0; i < plugins.length; i++) { if(jq.ui[plugins[i]]) concat.push(plugins[i].substr(0,1).toUpperCase() + plugins[i].substr(1)); };
				return { version: jq.ui.version, details: concat.length ? 'Plugins used: '+concat.join(',') : '' };
			}
			return false;
		}
	},

	'Dojo': {
		icon: 'dojo',
		url: 'http://dojotoolkit.org',
		test: function(win) {
			if(win.dojo) {
				return { version: win.dojo.version.toString(), details: 'Details: '+(win.dijit ? 'Uses Dijit' : 'none') };
			}
			return false;
		}
	},

	'Prototype': {
		icon: 'prototype',
		url: 'http://prototypejs.org',
		test: function(win) {
			if(win.Prototype && win.Prototype.Version) {
				return { version: win.Prototype.Version };
			}
			return false;
		}
	},

	'Scriptaculous': {
		icon: 'scriptaculous',
		url: 'http://script.aculo.us',
		test: function(win) {
			if(win.Scriptaculous && win.Scriptaculous.Version) {
				return { version: win.Scriptaculous.Version };
			}
			return false;
		}
	},

	'MooTools': {
		icon: 'mootools',
		url: 'http://mootools.net',
		test: function(win) {
			if(win.MooTools && win.MooTools.version) {
				return { version: win.MooTools.version };
			}
			return false;
		}
	},

	'Spry': {
		icon: 'spry',
		url: 'http://labs.adobe.com/technologies/spry',
		test: function(win) {
			if(win.Spry) {
				return { version: '(not detectable)' };
			}
			return false;
		}
	},

	'YUI': {
		icon: 'yui',
		url: 'http://developer.yahoo.com/yui',
		test: function(win) {
			if(win.YAHOO && win.YAHOO.VERSION) {
				return { version: win.YAHOO.VERSION };
			}
			return false;
		}
	},

	'Qooxdoo': {
		icon: 'qooxdoo',
		url: 'http://qooxdoo.org',
		test: function(win) {
			if(win.qx && win.qx.Bootstrap) {
				return { version: '(not detectable)' };
			}
			return false;
		}
	},

	'Ext JS': {
		icon: 'extjs',
		url: 'http://www.sencha.com/products/extjs',
		test: function(win) {
			if(win.Ext && win.Ext.version) {
				return { version: win.Ext.version };
			}
			else if (win.Ext && window.Ext.versions) {
                return { version: window.Ext.versions.core.version };
			}
			return false;
		}
	},

	'base2': {
		icon: 'base2',
		url: 'http://code.google.com/p/base2',
		test: function(win) {
			if(win.base2 && win.base2.version) {
				return { version: win.base2.version };
			}
			return false;
		}
	},

	'Closure Library': {
		icon: 'closure',
		url: 'http://code.google.com/closure/library',
		test: function(win) {
			if(win.goog) {
				return { version: '(not detectable)' };
			}
			return false;
		}
	},
	
    'Rapha&euml;l': {
		icon: 'raphael',
		url: 'http://raphaeljs.com',
		test: function(win) {
			if(win.Raphael) {
				return { version: win.Raphael.version };
			}
			return false;
		}
	},

	'Modernizr': {
		icon: 'modernizr',
		url: 'http://www.modernizr.com',
		test: function(win) {
			if(win.Modernizr) {
				return { version: Modernizr._version };
			}
			return false;
		}
	},

	'Processing.js': {
		icon: 'processingjs',
		url: 'http://processingjs.org',
		test: function(win) {
			if(win.Processing) {
				return { version: Processing.version };
			}
			return false;
		}
	},
	
	'Backbone': {
		icon: 'backbone',
		url: 'http://documentcloud.github.com/backbone',
		test: function(win) {
			if (win.Backbone) {
				return {version: win.Backbone.VERSION};
			}
			return false;
		}
	},
	
	'Underscore': {
		icon: 'underscore',
		url: 'http://documentcloud.github.com/underscore',
		test: function(win) {
			// *should* be safeish for sites that have assigned a generic "_" to something else
			if (win._ && win._.VERSION && typeof win._.tap === 'function') {
				return {version: win._.VERSION};
			}
			return false;
		}
	},
	
	'Sammy': {
		icon: 'sammy',
		url: 'http://sammyjs.org',
		test: function(win) {
			if (win.Sammy && win.Sammy.VERSION) {
				return {version: win.Sammy.VERSION};
			}
			return false;
		}
	},
	
	'Rico': {
		icon: 'rico',
		url: 'http://openrico.org',
		test:  function(win) {
			if (win.Rico && win.Rico.Version) {
				return {version: win.Rico.Version};
			}
			return false;
		}
	},
	
	'MochiKit': {
		icon: 'mochikit',
		url: 'http://www.mochikit.com',
		test: function(win) {
			if (win.MochiKit) {
				return {version: MochiKit.VERSION};	
			}
			return false;
		}
	},
	
	'gRapha&euml;l': {
		icon: 'graphael',
		url: 'http://g.raphaeljs.com',
		test: function(win) {
			if (win.Raphael && win.Raphael.fn.g) {
				return {version: '(not detectable)'};
			}
			return false;
		}
	},
	
	'Glow': {
		icon: 'glow',
		url: 'http://www.bbc.co.uk/glow',
		test: function(win) {
			if (win.gloader) {
				return {version: '(not detectable)'};
			}
			else if (win.glow && win.glow.dom) {
				return {version: win.glow.VERSION};
			}
			else if (win.Glow) {
				return {version: win.Glow.version};
			}
			return false;
		}		
	},
	
	'Socket.IO': {
		icon: 'icon_48', // currently has no icon
		url: 'http://socket.io',
		test: function(win) {
			if (win.io && win.io.on) {
				return {version: win.io.version};
			}
			return false;
		}
	},
	
	'Mustache': {
		icon: 'mustache',
		url: 'http://mustache.github.com',
		test: function(win) {
			if (win.Mustache) {
				return {version: win.Mustache.version};
			}
			return false;
		}
	},
	
	'Fabric.js': {
		icon: 'icon_48', // currently has no icon
		url: 'https://github.com/kangax/fabric.js',
		test: function(win) {
			if (win.fabric) {
				return {version: win.fabric.version};
			}
			return false;
		}
	},
	
	'FuseJS': {
		icon: 'fusejs',
		url: 'http://fusejs.com',
		test: function(win) {
			if (win.fuse) {
				return {version: win.fuse.version};
			}
			return false;
		}
	},
	
	'Tween.js': {
		icon: 'icon_48', // currently has no icon
		url: 'https://github.com/sole/tween.js',
		test: function(win) {
			if (win.TWEEN) {
				return {version: '(not detectable)'};
			}
			return false;
		}
	},
	
	'SproutCore': {
	   icon: 'sproutcore',
	   url: 'http://www.sproutcore.com',
	   test: function(win) {
	       if (win.SC && win.SC.Application) {
	           return {version: '(not detectable)'};
	       }
	       return false;
	   }
	},
	
	'Zepto.js': {
	   icon: 'zepto',
	   url: 'http://zeptojs.com',
	   test: function(win) {
	       if (win.Zepto && win.Zepto.fn) {
	           return {version: '(not detectable)'};
	       }
	       return false;
	   }
	},
	
	'three.js': {
	   icon: 'icon_48', // currently has no icon
	   url: 'https://github.com/mrdoob/three.js',
	   test: function(win) {
	       if (win.THREE) {
	           return {version: '(not detectable)'};
	       }
	       return false;
	   }
	},
	
	'PhiloGL': {
	   icon: 'philogl',
	   url: 'http://senchalabs.github.com/philogl/',
	   test: function(win) {
	       if (win.PhiloGL) {
	           return {version: win.PhiloGL.version};
	       }
	       return false;
	   }
	},
	
	'CamanJS': {
		icon: 'camanjs',
		url: 'http://camanjs.com/',
		test: function(win) {
			if (win.Caman) {
				return {version: '(not detectable)'};
			}
			return false;
		}
	},
	
	'yepnope': {
		icon: 'yepnope',
		url: 'http://yepnopejs.com/',
		test: function(win) {
			if (win.yepnope) {
				return {version: '(not detectable)'};
			}
			return false;
		}
	},
	
	'LABjs': {
		icon: 'icon_48',
		url: 'http://labjs.com/',
		test: function(win) {
			if (win.$LAB) {
				return {version: '(not detectable)'};
			}
			return false;
		}
	},
	
	'Head JS': {
		icon: 'headjs',
		url: 'http://headjs.com/',
		test: function(win) {
			if (win.head &&  win.head.js) {
				return {version: '(not detectable)'};
			}
			return false;
		}
	},
	
	'ControlJS': {
		icon: 'icon_48',
		url: 'http://stevesouders.com/controljs/',
		test: function(win) {
			if (win.CJS) {
				return {version: '(not detectable)'};
			}
			return false;
		}
	},
	
	'RequireJS': {
		icon: 'requirejs',
		url: 'http://requirejs.org/',
		test: function(win) {
			if (win.require) {
				return {version: win.require.version};
			}
			return false;
		}
	},
	
	'RightJS': {
		icon: 'rightjs',
		url: 'http://rightjs.org/',
		test: function(win) {
			if (win.RightJS) {
				return {version: win.RightJS.version};
			}
			return false;
		}
	},	

	'jQuery Tools': {
	   icon: 'jquerytools',
	   url: 'http://flowplayer.org/tools',
	   test: function(win) {
            var jq = win.jQuery || win.$;
            if(jq && win.$.tools) {
	           return { version: $.tools.version };
	       }
	       return false;
	   }
    },	
    
    'Pusher': {
	   icon: 'pusher',
	   url: 'http://pusher.com/docs/pusher_js',
	   test: function(win) {
            if(win.Pusher) {
	           return { version: win.Pusher.VERSION };
	       }
	       return false;
	   }
    }
// maybe include some of the other javascript loaders? - http://jhn.me/7aeW
};