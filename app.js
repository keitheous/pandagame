$(document).ready(function(){

  var startGame = function(){
    var turn = 0;
    var game = true;
    var player = '<div id="player"><img id="you" src="panda1.png"/></div>';
    var gorilla = '<div id="gorilla"><img id="enemy" src="panda3.png"/></div>';
    var ribbon = '<img id="ribbon" src="ribbon.png">';
    var openedRibbon = '<img id="open-ribbon" src="opened_ribbon.png">';
    var origin = 225;

    var moveVertically = function(destination) {
      var positionGorilla = $('#gorilla').position();

      yDistance = parseInt(destination)- parseInt(positionGorilla.top);
      // console.log(yDistance);
      if (yDistance < 0){
        $('#gorilla').css('top', positionGorilla.top - 10 + "px");
      }
      else {
        $('#gorilla').css('top', positionGorilla.top + 10 + "px");
      }

    }
    var moveHorizontally = function(destination) {
      var positionGorilla = $('#gorilla').position();

      xDistance = parseInt(destination)- parseInt(positionGorilla.left);
      // console.log(xDistance);
      if (xDistance < 0){
        $('#gorilla').css('left', positionGorilla.left - 10 + "px");
      }
      else {
        $('#gorilla').css('left', positionGorilla.left + 10 + "px");
      }
    }

    var gorillaMoves = function(vertical, horizontal){
      var positionPlayer = $('#player').position();
      if (turn%2==0){
        moveVertically(positionPlayer.top);
      }
      else {
        moveHorizontally(positionPlayer.left);
      }
    }

    var gorillaEnters = function(){
      $('#arena').append(gorilla);
      $('#announcement').html("MATING SEASON! HORNY MALE PANDA APPEARS!");
      _.delay(function(){$('#announcement').html("");}, 2000)
      // play scary music
    }

    var Lost = function() {
      game = false;
      $('#announcement').html("Game Over!");
      $('#gorilla').children().attr("src","panda2.png");
      $('#arena').css("pointer-events","none");

    }

    var Win = function(){
      game = false;
      $('#announcement').html("you win!");
      $('#gorilla').children().attr("src","panda2.png");
      setInterval(function(){
        moveHorizontally(0);
        moveVertically(0);
      }, 50);
    }

    var winCheck = function(){
      var positionPlayer = $('#player').position();
      var positionGorilla = $('#gorilla').position();
      // console.log(yDistance+","+xDistance)
      if ((yDistance == 5)&&(xDistance == 6)){
        Lost();
      } else if ((yDistance == -5)&&(xDistance == -4)){
        Lost();
      }
      else {

      }
    }

    $('#arena').append(player);
    $('#player').css({ "left": origin + "px", "top": origin + "px" })
    $('#player').append(ribbon);

    _.delay(gorillaEnters, 2000);
    setInterval(function(){
      var positionPlayer = $('#player').position();
      moveHorizontally(positionPlayer.left);
      moveVertically(positionPlayer.top);
      winCheck();
    }, 500);

    if(!game){
      $('#announcement').html("");
    }
    else
    {
      _.delay(function(){
        $('#announcement').html("Here's Clue 1: user input at the speed of light!");
      }, 10000);
      _.delay(function(){
        $('#announcement').html("");
      }, 15000);
      _.delay(function(){
        $('#announcement').html("Keep Running! Clue 2: the difference between you and i");
      }, 25000);
      _.delay(function(){
        $('#announcement').html("");
      }, 30000);
      _.delay(function(){
        $('#announcement').html("OMG! Clue 3: I AM NOT A GIRL!");
      }, 40000);
      _.delay(function(){
        $('#announcement').html("");
      }, 45000);
      _.delay(function(){
        $('#announcement').html("Last one or you're dead. Final Clue: The thing that makes me a girl");
      }, 60000);
      _.delay(function(){
        $('#announcement').html("");
      }, 80000);
    }

    $('#ribbon').draggable()
    $('#ribbon').mouseup(function(e) {
      $('#ribbon').hide();
      $('#arena').css("pointer-events","none");
      var xRibbon = e.pageX;
      var yRibbon = e.pageY;
      $('#arena').append(openedRibbon);
      $('#open-ribbon').css({"top": yRibbon});
      Win();

    });
    $('#restartBtn').on('click', function(){
      location.reload();
    });

    $(document).keydown(function(e){
      var positionPlayer = $('#player').position();
      var positionGorilla = $('#gorilla').position();
      xPlayer= Math.floor(positionPlayer.left);
      yPlayer = Math.floor(positionPlayer.top);
      // console.log("Player:"+xPlayer+","+yPlayer);


      if (!game){
        e.preventDefault
      }
      else{
        switch (e.keyCode) {
          case 37:  // move Left - origin - origin is out of bound
            if (xPlayer <= origin-origin){
              turn ++;
              gorillaMoves(yPlayer, xPlayer);
              break;
            }
            else {
              $('#player').css('left', xPlayer - 10 + "px"); //player effectively move left
              turn ++;
              gorillaMoves(yPlayer, xPlayer);
              break;
              // console.log("Player:"+xPlayer+","+yPlayer);
            }

          case 38:  // Move Up - origin - origin is out of bound
            if (yPlayer <= origin-origin){
              turn ++;
              gorillaMoves(yPlayer, xPlayer);
              break;
            }
            else {
              $('#player').css('top', yPlayer - 10 + "px"); //player effectively move up
              turn ++;
              gorillaMoves(yPlayer, xPlayer);
              break;
              // console.log("Player:"+xPlayer+","+yPlayer);
            }

          case 39:  // move right - origin * 2 is out of bound
            if (xPlayer >= (2*origin)){
              turn ++;
              gorillaMoves(yPlayer, xPlayer);
              break;
            }
            else {
              $('#player').css('left', xPlayer+ 10 + "px"); //player effectively move right
              turn ++;
              gorillaMoves(yPlayer, xPlayer);
              break;
              // console.log("Player:"+xPlayer+","+yPlayer);
            }

          case 40:  // move Down - origin * 2 is out of bound
            if (yPlayer >= (2*origin)){
              turn ++;
              gorillaMoves(yPlayer, xPlayer);
              break;
            }
            else {
              $('#player').css('top', yPlayer + 10 + "px"); //player effectively move down
              turn ++;
              gorillaMoves(yPlayer, xPlayer);
              break;
              // console.log("Player:"+xPlayer+","+yPlayer);
            }
          }
      }
    });
  }

  $('#gameBtn').on('click',function(){
    $('.storyboard').hide();
    $('.gameboard').show();
    startGame();
  })
});
