const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
  console.log(driver.name);
});
}

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown)
    console.log(driver.name);
  });
}

const driversByRevenue = function(drivers) {
  newArr = [...drivers]
  return newArr.sort(function (a,b) {
    return a.revenue - b.revenue;
  });
}

const driversByName = function(drivers) {
  newArr = [...drivers]
  return newArr.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(array) {
  const reducer = function (accumulator, currentDriver) {
    return accumulator + currentDriver.revenue;
  }
  return array.reduce(reducer, 0);
}


 function averageRevenue(array) {
  const totalRev = totalRevenue(array);
  const divisor = array.length
  return totalRev/divisor;
}
