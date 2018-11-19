// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver){
    console.log(driver.name)
  });
}

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver){
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  })
}

const driversByRevenue = function (drivers) {
  let newArray = [...drivers]
  return newArray.sort(function (a, b) {
     return a.revenue- b.revenue;
  });
}

const driversByName = function (drivers) {
  let newArray = [...drivers];
  return newArray.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = function (drivers) {
  let total = 0;
    drivers.forEach(function (driver) {
      total += driver.revenue;
    });
  return total;
}

const averageRevenue = function (drivers) {
  const total = totalRevenue(drivers);
  return total / (drivers.length)
}
