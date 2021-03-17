$(document).ready(function() {
  window.dancers = [];
  // this.$anchor = $('<a href="#" class="addDancerButton" data-dancer-maker-function-name="makeBlinkyDancer">add a blinky dancer></a>');

  // $('.addDancerButton').on('click', function(event) {

  //   var iceCreamMakerFunction = $(this).data('ice_Cream_Maker');

  //   var iceCreamMaker = window[iceCreamMakerFunction];

  //   var iceDancer = new iceCreamMaker(
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 1000
  //   );
  //   $('body').append(dancer.$node);

  //   //<i class="fas fa-ice-cream"></i>
  // });




  $('.addDancerButton').on('click', function(event) {

    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make - grab the makeBlinkyDancer func using upper string
    var dancerMakerFunction = window[dancerMakerFunctionName];

    console.log(dancerMakerFunction);
    // make a dancer with a random position

    // create new instance of blinky dancer in pseudeoclassical by adding a new keyword
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
});


// /*
// JQuery HTML
// var $updateFeedButton = $('<button id="update-feed">Update Feed</button>');

// Set event listener
// $updateFeedButton.on("click", updateFeedButtonClick);

// Create event handler function
// var updateFeedButtonClick = function () {
//   $feed.html('');
//   renderFeed();
// };

// Appending to Elements
// $profilePhoto.appendTo($tweet);


// Render the feed
// renderFeed()
// */