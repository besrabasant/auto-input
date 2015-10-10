var async = require('async');
var $ = require('jquerygo');

$.config.site = 'http://cms.devwebtest.com';
$.config.addJQuery = true;


$.visit('/wp-admin/post-new.php?post_type=job_opening',function(){
	$.waitForElement('#login h1 a', function(){
		$('input#user_login').val('admin', function(){
			$('input#user_pass').val('cms@321',function(){
				$('input#wp-submit').click( function(){
					$.waitForPage( function(){
						$.waitForElement('#wpbody .wrap h1', function(){
							$('#wpbody .wrap h1').text( function(text){
								console.log(text);
								$.close();
							} );

						});
					});
				});
			});
		});
	});
});