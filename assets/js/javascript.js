let p1={
  name: "Player 1",
  score: 0
};
let p2={
  name: "Player 2",
  score: 0
};
let p3=0;
let p4=0;
let p5=0;
let p6=0;
let p7=0;
let p8=0;

$(".name1").html(p1.name)
$(".name2").html(p2.name)

$("#p1Score").html(p1.score);
$("#p2Score").html(p2.score);
$("#p3Score").html(p3);
$("#p4Score").html(p4);
$("#p5Score").html(p5);
$("#p6Score").html(p6);
$("#p7Score").html(p7);
$("#p8Score").html(p8);

function updateScores(){
  $("#p1Score").html(p1.score);
  $("#p2Score").html(p2.score);
  $("#p3Score").html(p3);
  $("#p4Score").html(p4);
  $("#p5Score").html(p5);
  $("#p6Score").html(p6);
  $("#p7Score").html(p7);
  $("#p8Score").html(p8);
  };
  
  
  $("#p1ScoreUp").on("click", function (event){
    event.preventDefault();
    p1.score++;
    updateScores();
  });
  
  $("#p1ScoreDn").on("click", function (event){
    event.preventDefault();
    p1.score--;
    updateScores()
  });
  
  $("#p2ScoreUp").on("click", function (event){
    event.preventDefault();
    p2.score++;
    updateScores()
  });
  
  $("#p2ScoreDn").on("click", function (event){
    event.preventDefault();
    p2.score--;
    updateScores()
  });
  
  $("#p3ScoreUp").on("click", function (event){
    event.preventDefault();
    p3++;
    updateScores()
  });
  
  $("#p3ScoreDn").on("click", function (event){
    event.preventDefault();
    p3--;
    updateScores()
  });
  
  $("#p4ScoreUp").on("click", function (event){
    event.preventDefault();
    p4++;
    updateScores()
  });
  
  $("#p4ScoreDn").on("click", function (event){
    event.preventDefault();
    p4--;
    updateScores()
  });
  
  $("#p5ScoreUp").on("click", function (event){
    event.preventDefault();
    p5++;
    updateScores()
  });
  
  $("#p5ScoreDn").on("click", function (event){
    event.preventDefault();
    p5--;
    updateScores()
  })
  
  $("#p6ScoreUp").on("click", function (event){
    event.preventDefault();
    p6++;
    updateScores()
  });
  
  $("#p6ScoreDn").on("click", function (event){
    event.preventDefault();
    p6--;
    updateScores()
  });

  $("#p7ScoreUp").on("click", function (event){
    event.preventDefault();
    p7++;
    updateScores()
  });

  $("#p7ScoreDn").on("click", function (event){
    event.preventDefault();
    p7--;
    updateScores()
  });

  $("#p8ScoreUp").on("click", function (event){
    event.preventDefault();
    p8++;
    updateScores()
  });

  $("#p8ScoreDn").on("click", function (event){
    event.preventDefault();
    p8--;
    updateScores()
  });