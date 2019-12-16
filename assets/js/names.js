let player1 = "Player 1";
let player2 = "Player 2";
let player3 = "Player 3";
let player4 = "Player 4";
let player5 = "Player 5";
let player6 = "Player 6";
let player7 = "Player 7";
let player8 = "Player 8";

$(".name1").html(player1)
$(".name2").html(player2)
$(".name3").html(player3)
$(".name4").html(player4)
$(".name5").html(player5)
$(".name6").html(player6)
$(".name7").html(player7)
$(".name8").html(player8)

$("#change1").on("click", function(){
  $(".name1").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirmChange1" class="btn btn-sm btn-dark btn-block">Confirm</button>`);
  $("change1").addClass("disabled")
  
})

$(document).on("click", "#confirmChange1", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?")
    return false
  }
  else{
    p1.name = newName
  $(".name1").html(newName);
  $(".btn-primary").removeClass("disabled")
  }
})