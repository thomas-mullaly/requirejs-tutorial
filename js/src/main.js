require.config({
    shim: {
        'jquery': {
            exports: '$'
        },
        'kendo': {
            exports: 'kendo',
            deps: ['jquery']
        }
    },
    paths: {
        'jquery': '../lib/jquery-1.8.2',
        'kendo': '../lib/kendo.web.min'
    }
});

require(['app', 'kendo'], function(app, kendo) {
    "use strict";

    app.init();

    kendo.bind($("body"), kendo.observable({
        name: "Jonathon Joestar"
    }));
});