Beer = {
    verse: function(n) {
        function bottles(i) {
            if (i === 0) {
                return "no more bottles";
            } else if (i === 1) {
                return i + " bottle";
            } else {
                return i + " bottles";
            }
        }

        function ending(i) {
            if (i === 0) {
                return "Go to the store and buy some more, " + bottles(99) + " of beer on the wall.\n";
            } else if (i === 1) {
                return "Take it down and pass it around, " + bottles(i - 1) + " of beer on the wall.\n";
            } else {
                return "Take one down and pass it around, " + bottles(i - 1) + " of beer on the wall.\n";
            }
        }

        return bottles(n).charAt(0).toUpperCase() + bottles(n).slice(1) + " of beer on the wall, " + bottles(n) + " of beer.\n" + ending(n);
    },
    sing: function(start, finish) {
        var song = "";

        if ( typeof(finish) === 'undefined' ) {
            var ending = 0;
        } else {
            var ending = finish;
        }

        for(var i = start; i >= ending; i--) {
            if (i > ending) {
                song += Beer.verse(i) + "\n";
            } else {
                song += Beer.verse(i);
            }
        }

        return song;
    }
}