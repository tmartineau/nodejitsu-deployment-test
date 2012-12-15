var jam = {
    "packages": [
	    {
		    "name": "jquery",
		    "location": "vendor/jquery",
		    "main": "jquery.js"
	    },
        {
            "name": "backbone",
            "location": "vendor/backbone",
            "main": "backbone.js"
        },
        {
            "name": "underscore",
            "location": "vendor/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.11",
    "shim": {
        "backbone": {
            "deps": [
                "underscore"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({packages: jam.packages, shim: jam.shim});
}
else {
    var require = {packages: jam.packages, shim: jam.shim};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}