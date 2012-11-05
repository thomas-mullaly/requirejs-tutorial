define([], function() {
    "use strict";

    function Logger() {
    };

    Logger.prototype.log = function() {
        console.log(arguments);
    };

    return Logger;
});