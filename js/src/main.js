require.config({
    shim: {
        'jquery': {
            exports: '$'
        }
    },
    paths: {
        'jquery': '../lib/jquery-1.8.2'
    }
});

require(['app'], function(app) {
    "use strict";

    app.init();
});