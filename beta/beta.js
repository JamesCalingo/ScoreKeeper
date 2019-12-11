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

$(".nameChange").on("click", function(e){
  e.preventDefault();
  
  $(".name1").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirmChange" class="btn btn-sm btn-block">Confirm</button>`);
  $(".btn-primary").addClass("disabled").removeClass("nameChange")
  
})

$(document).on("click", "#confirmChange", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?")
    return false
  }
  else{
  $(".name1").html(newName);
  $(".btn-primary").removeClass("disabled").addClass("nameChange")
  }
})

showData()