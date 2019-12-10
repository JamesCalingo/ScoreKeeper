function Player (name, score){
  this.name = name,
  this.score = score
}

var p1 = new Player("Player 1", 0);
var p2 = new Player("Player 2", 0);

showData = () => {
$(".name1").html(p1.name);
$("#p1Score").html(p1.score);
$(".name2").html(p2.name);
$("#p2Score").html(p2.score)
}

showData()