let player1 = "Player 1";
let player2 = "Player 2";
let player3 = "Player 3";
let player4 = "Player 4";
let player5 = "Player 5";
let player6 = "Player 6";
let player7 = "Player 7";
let player8 = "Player 8";

$(".name1").html(player1);
$(".name2").html(player2);
$(".name3").html(player3);
$(".name4").html(player4);
$(".name5").html(player5);
$(".name6").html(player6);
$(".name7").html(player7);
$(".name8").html(player8);

$("#change1").on("click", function(){
  $(".name1").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm1" class="btn btn-dark">Confirm</button>`);
  $("#change1").addClass("disabled");
  
})

$(document).on("click", "#confirm1", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false;
  }
  else{
    player1 = newName;
  $(".name1").html(newName);
  $("#change1").removeClass("disabled");
  };
})

$("#change2").on("click", function(){
  $(".name2").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm2" class="btn btn-dark">Confirm</button>`);
  $("#change2").addClass("disabled");
});

$(document).on("click", "#confirm2", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false;
  }
  else{
    player2 = newName;
  $(".name2").html(newName);
  $("#change2").removeClass("disabled");
  };
});

$("#change3").on("click", function(){
  $(".name3").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm3" class="btn btn-dark">Confirm</button>`);
  $("#change3").addClass("disabled");
});

$(document).on("click", "#confirm3", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false
  }
  else{
    player3 = newName
  $(".name3").html(newName);
  $("#change3").removeClass("disabled");
  };
});

$("#change4").on("click", function(){
  $(".name4").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm4" class="btn btn-dark">Confirm</button>`);
  $("#change4").addClass("disabled");
  
})

$(document).on("click", "#confirm4", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false;
  }
  else{
    player4 = newName;
  $(".name4").html(newName);
  $("#change4").removeClass("disabled");
  };
})

$("#change5").on("click", function(){
  $(".name5").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm5" class="btn btn-dark">Confirm</button>`);
  $("#change5").addClass("disabled");
});

$(document).on("click", "#confirm5", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false;
  }
  else{
    player5 = newName;
  $(".name5").html(newName);
  $("#change5").removeClass("disabled");
  };
});

$("#change6").on("click", function(){
  $(".name6").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm6" class="btn btn-dark">Confirm</button>`);
  $("#change6").addClass("disabled");
});

$(document).on("click", "#confirm6", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false
  }
  else{
    player6 = newName
  $(".name6").html(newName);
  $("#change6").removeClass("disabled");
  };
});

$("#change7").on("click", function(){
  $(".name7").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm7" class="btn btn-dark">Confirm</button>`);
  $("#change7").addClass("disabled");
});

$(document).on("click", "#confirm7", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false
  }
  else{
    player7 = newName
  $(".name7").html(newName);
  $("#change7").removeClass("disabled");
  };
});

$("#change8").on("click", function(){
  $(".name8").html(`<input class="form-control form-control-sm" id="newName" type="text" placeholder=""><button id="confirm8" class="btn btn-dark">Confirm</button>`);
  $("#change8").addClass("disabled");
});

$(document).on("click", "#confirm8", function(e){
  e.preventDefault();
  let newName = $("#newName").val().trim();
  if (!newName){
    alert("What's your name?");
    return false
  }
  else{
    player8 = newName
  $(".name8").html(newName);
  $("#change8").removeClass("disabled");
  };
});