// 1. returnFirstTwoDrivers — returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. returnLastTwoDrivers — returns the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. selectingDrivers — array containing the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. createFareMultiplier — higher-order function that returns a fare-multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. fareDoubler — uses createFareMultiplier to double the fare
const fareDoubler = createFareMultiplier(2);

// 6. fareTripler — uses createFareMultiplier to triple the fare
const fareTripler = createFareMultiplier(3);

// 7. selectDifferentDrivers — takes an array of drivers and a function, returns selected drivers
function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}

