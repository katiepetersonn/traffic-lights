//State change function to be tested

//pure function

//assert that result length is 15 ( 3 events per 5 min window)

//first one should be Ns -red, EW - green, third yellow

//test

//state change

// a

// b

//make sure they break, pass a, pass b, assert that you get NS turning red, NS turning

//Deliberatly break, b and see if it breaks

describe("State change", function() {
  describe("State A", function() {
    it("should change NS to red", function() {
      var result = stateChange("a", 0)[0];

      expect(result.color).toBe("red");
      expect(result.light).toBe("NS");
      expect(result.time).toBe(0);
    });
    it("should change EW to green");
    it("should change EW to yellow");
  });
});

//State B - 6 tests in total for a and B

//trafficLights - a test that verify that after 5 mins, you get 3 changes
//trafficlights ( 9 and "15 or 30 min window")

//assert on length - expect there to be 3 slots, 3 changes in each slot

//array of 3 items, that return an array of state changes which contain [ 3 ]

//First one should be NS
//Second one should be ...

//Print function - not worth the effort to test

//Function at the end which calls traffic light function

//Test behaviour not side effects
//Abstract away the console as much as possible.

//Not running it in the browser - run Jasmine through the terminal

//Run code without the browser -
//run through node in the terminal - makes it easier for people to run and view themselves
