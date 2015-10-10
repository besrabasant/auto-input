var request = require('request');
	cheerio = require('cheerio');

request('http://cms.devwebtest.com/wp-admin/post-new.php?post_type=job_opening', function(err, response, body){
	if(!err && response.statusCode == 200 ){
		var $ = cheerio.load(body);
		$('#user_login').val('admin');
		$('#user_pass').val('cms@123');
		$('#loginform').submit();
	}
});