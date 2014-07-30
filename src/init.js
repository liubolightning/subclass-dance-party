$(document).ready(function(){
  window.dancers = [];

  $("body").on("mousemove", function(event){

    $("#panda").css({left: event.pageX - 40,
                     top: event.pageY - 15});

  });

  var counter = 0;
  $("#EasyButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var switchBool = false;
    setInterval(function(){

      $('img').on('mouseover',function(){
        if(!switchBool){
        alert($('#counter').text());
        switchBool = true;
        }
        setTimeout(function(){
          location.reload();
        }, 500);
      });


      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );


      $('body').append(dancer.$node);

      var rand = Math.floor((Math.random() * 4) + 1);

      if(rand === 1){
        $('.dancer').animate({left: '+=10000'}, 12000);
      } else if(rand === 2){
        $('.dancer').animate({left: '-=10000'}, 12000);
      } else if(rand === 3){
        $('.dancer').animate({top: '+=10000'}, 12000);
      } else {
        $('.dancer').animate({top: '-=10000'}, 12000);
      }

    }, 100);

    setInterval(function(){
      console.log(counter);
      counter++;
      $('#counter').text(counter);

    }, 500);

   });


  $("#HardButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var switchBool = false;
    setInterval(function(){

      $('img').on('mouseover',function(){
        if(!switchBool){
        alert($('#counter').text());
        switchBool = true;
        }
        setTimeout(function(){
          location.reload();
        }, 500);
      });


      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );


      $('body').append(dancer.$node);

      var rand = Math.floor((Math.random() * 8) + 1);

      if(rand === 1){
        $('.dancer').animate({left: '+=10000', height: '500px', width: '500px'}, 12000);
      } else if(rand === 2){
        $('.dancer').animate({left: '-=10000'}, 12000);
      } else if(rand === 3){
        $('.dancer').animate({top: '+=10000'}, 12000);
      } else if(rand === 4){
        $('.dancer').animate({top: '-=10000', height: '500px', width: '500px'}, 12000);
      }else if(rand === 5){
        $('.dancer').animate({left: '+=10000', top: '+=10000'}, 12000);
      } else if(rand === 6){
        $('.dancer').animate({left: '-=10000', top: '-=10000', height: '500px', width: '500px'}, 12000);
      } else if(rand === 7){
        $('.dancer').animate({top: '-=10000', left: '+=10000'}, 12000);
      } else {
        $('.dancer').animate({top: '+=10000', left: '-=10000'}, 12000);
      }

    }, 75);

    setInterval(function(){
      console.log(counter);
      counter++;
      $('#counter').text(counter);

    }, 500);

   });

});

