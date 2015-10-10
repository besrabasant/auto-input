var phantom = require('phantom');

phantom.create(function (ph) {
  ph.createPage(function (page) {
    var url = "http://cms.devwebtest.com/";
    page.open(url, function() {
      console.log("page opened!");
      page.includeJs("https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js", function() {
        console.log("js included!");
        page.evaluate(function() {
          console.log('evaluted!');
          $('.cms_sec .container h3').text(function (text) {
            console.log('found!');
            console.log(text);
          });
        }, function(){
          ph.exit()
        });
      });
    });
  });
});