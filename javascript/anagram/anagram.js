Anagram = function(input){
  this.match = function(words){
    var matches = [],
        secondWord = sortChars(input);

    for(var i = 0; i < words.length; i++){
      var firstWord = sortChars(words[i]);

      if(firstWord === secondWord){
        matches.push(words[i]);
      }
    };
    return matches;
  };

  var sortChars = function(word){
    return word.split("").sort().join();
  };
};