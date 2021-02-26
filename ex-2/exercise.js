
function tellFortune (job, place, partner, kids){
    var fortune =  "You will be a  " + job + " in " + place + ", and married to " + partner + " with " + kids + " kids";
  window.alert(fortune) ;
};

var n = window.prompt("give me a number of children");
var z  = window.prompt("give me a partner's name" );
var y  = window.prompt("give me an geographic location");
var x = window.prompt("give me an job title");

tellFortune (x, y, z, n)

tellFortune("cfo", "roma", "linda", "0")
tellFortune("ceo", "milano", "nora", "1")
