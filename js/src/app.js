define([
    'logger',
    'text!greetingTemplate.html'
], function(Logger, greetingTemplate) {
    "use strict";

    return {
        init: function() {
            var logger = new Logger();
            logger.log("Hello World!");

            $("#greeting").html(greetingTemplate);
        }
    };
});