global.Words = function (words) {
    "use strict";

    var validWord = function (word) {
        return word !== "";
    };

    this.countWords = function (words) {
        var wordsCollection = cleanWords(words),
            counts = {},
            i = 0,
            word = "";

        for (i = 0; i < wordsCollection.length; i++) {
            word = wordsCollection[i];

            if (validWord(word)) {
                if (counts[word] === undefined) {
                    counts[word] = 1;
                } else {
                    counts[word]++;
                }
            }
        }

        return counts;
    };

    this.count = this.countWords(words);
};

var cleanWords = function (words) {
    return words.toLowerCase().split(/\W+/);
};