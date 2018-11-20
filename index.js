function logDriverNames(driver) {
  driver.forEach(function(driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(driver, location) {
  driver.forEach(function(driver) {
    if (driver.hometown === location){
      console.log(driver.name)
    }
  });
}

const driversByRevenue = function(drivers) {
  const result = [...drivers]
    return result.sort(function (a, b) {
      return a["revenue"] - b["revenue"];
  });
}

const driversByName = function(driver) {
  const result = [...driver]
  return result.sort(function(a, b){
    return a["name"].localeCompare(b["name"]);
  })
}

const totalRevenue = function(driver) {
  const result = [...driver]
  const counter = 0
  return result.reduce(function(accumulator, currentValue){
    return accumulator + currentValue["revenue"];
  }, counter);
}

const averageRevenue = function(driver) {
  return totalRevenue(driver) / driver.length
};
