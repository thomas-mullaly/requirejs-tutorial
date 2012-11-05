define(['logger'], function(Logger) {
    "use strict";

    return {
        init: function() {
            var logger = new Logger();
            logger.log("Hello World!");
        }
    };
});