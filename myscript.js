//<![CDATA[ 
$(function(){
(function($){
    $.fn.tweets = function(options) {
        $.ajaxSetup({ cache: true });
        var defaults = {
            tweets: 5,
            before: "<li>",
            after: "</li>"
        };
        var optionsWithDefaults = $.extend(defaults, options);
        return this.each(function() {
            var obj = $(this);
            $.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?callback=?&screen_name='+optionsWithDefaults.username+'&count=' + optionsWithDefaults.tweets,
                function(data) {
                    $.each(data, function(i, tweet) {
                        if(tweet.text !== undefined) {
                            $(obj).append(optionsWithDefaults.before+tweet.text+optionsWithDefaults.after);
                        }
                    });
                }
            );
        });
    };
})(jQuery);


$('#tweets').tweets({
           tweets:10,
           username: "shreyaghoshal"
  });
});//]]>  
