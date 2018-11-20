// Code your solution in this file!
function logDriverNames(driver) {
  for (let i = 0; i < driver.length; i++) {
    console.log(driver[i].name);
  }
}

function logDriversByHometown(drivers, driverLocation) {
  // console.log(drivers)
  return drivers.forEach(function(driver) {
    if (driver["hometown"] === driverLocation) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  const result = [...drivers]
    return result.sort(function (a, b) {
      return a["revenue"] - b["revenue"];
  });
}

// The localeCompare() method returns a number indicating
// whether a reference string comes before or after or
// is the same as the given string in sort order.
function driversByName(driver) {
  const result = [...driver]
  return result.sort(function(a, b){
    return a["name"].localeCompare(b["name"]);
  })
}
// Receives an array of `driver` objects
// and returns the sum of the revenue earned by each driver.
function totalRevenue(driver) {
  const result = [...driver]
  const counter = 0
  return result.reduce(function(accumulator, currentValue){
    return accumulator + currentValue["revenue"];
  }, counter);
}
const averageRevenue = function(driver) {
  return totalRevenue(driver) / driver.length
};
