// You are required to provide the code for an application that simulates a set of traffic lights at an intersection.
// The traffic lights are designated (N, S) and (E, W) like a compass.
// You're not required to optimize, just focus on a functional approach to requirements.
// You should provide unit tests for your solution.

// REQUIREMENTS

// The lights change automatically every 5 minutes.

// When switching from green to red, the yellow light must be displayed for 30 seconds prior to it

// switching to red and the opposite direction switching to green from red.

// Provide the output for the light changes which occur during the period between 9am and 9:30am.

//loop to change lights

//change lights

// console.log("Hello world");

// Basic scenario: get one traffic light working

//3 states
//red [1]
//yellow [2]
//green [3]

//Green -> Yellow -> Red
//If the light is green
//Green
// for 135 seconds
//Yellow
// for 30 seconds
//Red
//got 135 seconds
//Lights to change every 5 mins

//Red -> Yellow -> Green (REVERSE THE ABOVE)
//If the light is red
//Red
// for 135 seconds
//Yellow
// for 30 seconds
//Green
//got 135 seconds
//Lights to change every 5 mins

//LOGIC

//North-south //East-West
//NS: Red //EW: Red
//NS: Red  //EW: Yellow
//NS: Yellow //EW: Red
//NS: Red //EW: Green
//NS: Green //EW: Red

//30 minute time window
//5 minute increments
//Start with 5 minutes first

//Function that wraps entire, takes in 2 parameters

var stateChange = function(state, i) {
  //return the colour changes within here
  if (state === "a") {
    var NS = {
      color: "red",
      light: "NS",
      time: i
    };
    var EW = {
      color: "green",
      light: "EW",
      time: i
    };
    var yellowEW = {
      color: "yellow",
      light: "EW",
      time: i + 4.5
    };
    return [NS, EW, yellowEW];
  } else {
    var NS = {
      color: "green",
      light: "NS",
      time: i
    };
    var EW = {
      color: "red",
      light: "EW",
      time: i
    };

    var yellowNS = {
      color: "yellow",
      light: "NS",
      time: i + 4.5
    };
    return [NS, EW, yellowNS];
  }
};

var printIteration = function(anIteration) {
  //loop through anIteration which contains a number of changes
  for (var i = 0; i < anIteration.length; i++) {
    console.log(
      //Using moment to change the date into minutes and seconds
      moment()
        .startOf("day")
        .seconds(anIteration[i].time * 60)
        .format("h:mm:ss A"),
      anIteration[i].light + " changed to",
      anIteration[i].color
    );
  }
  //Each change print out a message
};

var trafficLights = function(startTime, endTime) {
  // First 5 mins
  //add to another array

  //Convert into minutes because we are working in 5 minutes windows.
  var startTimeMinutes = startTime * 60;
  var period = (endTime - startTime) * 60;
  var duration = 5;

  //representing time window
  //i is 30 % 5, we then need to take i multiple it up into minutes
  var allChanges = [];
  for (var i = 0; i < period / duration; i++) {
    if (i % 2 === 0) {
      allChanges.push(stateChange("a", startTimeMinutes + i * duration));
    } else {
      allChanges.push(stateChange("b", startTimeMinutes + i * duration));
    }
  }
  return allChanges;

  //take the endTime and minus the startTime, gives us the difference between the 3
  //startTime and endTime to come in as hours
};

$(document).ready(function() {
  var result = trafficLights(9, 9.5);
  // console.log(result);

  for (var i = 0; i < result.length; i++) {
    printIteration(result[i]);
  }
}); //doc.ready end of
