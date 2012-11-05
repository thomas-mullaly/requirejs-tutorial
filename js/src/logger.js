define(['jquery'], function($) {
    "use strict";

    function Logger(selector) {
        this.ul = $(selector) || $("#log");
    };

    Logger.prototype.log = function() {
        var ul = this.ul;
        $.each(arguments, function() {
            $("<li />", { text: this }).fadeIn().appendTo(ul);
        });
    };

    return Logger;
});