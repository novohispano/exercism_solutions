"use strict";

global.Bob = function () {
    this.hey = function (saying) {
        if (saying === '' ) {
            return ('Fine, be that way.');
        } else if (saying[saying.length - 1] === "?") {
            return ('Sure');
        } else if (saying === saying.toUpperCase()) {
            return ('Woah, chill out!');
        } else {
            return ('Whatever');
        }
    };
};