function Player (name, score){
  this.name = name,
  this.score = score
}

let p1 = new Player("Player 1", 0);
let p2 = new Player("Player 2", 0);
let p3 = new Player("Player 3", 0);
let p4 = new Player("Player 4", 0);
let p5 = new Player("Player 5", 0);
let p6 = new Player("Player 6", 0);
let p7 = new Player("Player 7", 0);
let p8 = new Player("Player 8", 0);

showData = () => {
$(".name").html(this.name);
$(".score").html(this.score);
$(".name2").html(p2.name);
$("#p2Score").html(p2.score)
}

$(".nameChange").on("click", function(e){
  e.preventDefault();
  
  $(".name1").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirmChange1" class="btn btn-sm btn-block">Confirm</button>`);
  $("#nameChange1").addClass("disabled").removeClass("nameChange")
  
})

$(document).on("click", ".confirmChange", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?")
    return false
  }
  else{
    p1.name = newName
  $(".name1").html(newName);
  $(".btn-primary").removeClass("disabled").addClass("nameChange")
  }
})

$("#nameChange2").on("click", function(e){
  e.preventDefault();
  
  $(".name2").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirmChange2" class="btn btn-sm btn-block">Confirm</button>`);
  $("#nameChange2").addClass("disabled").removeClass("nameChange")
  
})

$(document).on("click", "#confirmChange2", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?")
    return false
  }
  else{
    p2.name = newName
  $(".name2").html(newName);
  $(".btn-primary").removeClass("disabled").addClass("nameChange")
  }
})

showData();

$("#p1ScoreUp").on("click", function (event){
  event.preventDefault();
  p1.score++;
  showData();
});

$("#p1ScoreDn").on("click", function (event){
  event.preventDefault();
  p1.score--;
  showData()
});

$("#p2ScoreUp").on("click", function (event){
  event.preventDefault();
  p2.score++;
  showData()
});

$("#p2ScoreDn").on("click", function (event){
  event.preventDefault();
  p2--;
  showData()
});