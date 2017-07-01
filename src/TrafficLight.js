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

console.log("Hello world");

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
