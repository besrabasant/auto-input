var async = require('async');
var $ = require('jquerygo');

$.config.site = 'http://cms.devwebtest.com';
$.config.addJQuery = true;

async.series([
	$.go('visit','/wp-admin/post-new.php?post_type=job_opening'),
	$.go('waitForPage'),
	$.go('capture',__dirname + '\\screenshot_login_window.png'),
	function(done){
		$('input#user_login').val('admin',function(){ console.log('user name entered!'); done(); });
	},
	function(done){
		$('input#user_pass').val('cms@321', function(){ console.log('password entered!'); done(); });
	},
	function(done){
		$('input#wp-submit').click( function(){ console.log('logging in!'); done();} );
	},
	$.go('waitForPage'),
], function(){
	$.capture(__dirname + '\\screenshot_loggedin.png');
	$.close();
});