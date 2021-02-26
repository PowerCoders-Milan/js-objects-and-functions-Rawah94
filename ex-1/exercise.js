function phraseBuilder(noun, verb, adverb, adjective){
    var phrase =  noun  + " " +  verb + " " +  adverb  + " " + adjective;
    return phrase ;
};

var noun = window.prompt("give me a noun");
var verb  = window.prompt("give me a verb" );
var adverb  = window.prompt("give me an adverb");
var adjective = window.prompt("give me an adjective");

window.alert(phraseBuilder(noun, verb, adverb, adjective));


