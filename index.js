// Code your solution in this file!
const logDriverNames = function(drivers) {
  drivers.forEach(driver => console.log(driver.name));
}

const logDriversByHometown = function(drivers, hometown) {
  // drivers.forEach(function(driver) {
  //   if (driver.hometown === hometown) {
  //     console.log(driver.name)
  //   }
  // });
  drivers.filter(driver => driver.hometown === hometown)
    .forEach(driver => console.log(driver.name))
}

const driversByRevenue = function(drivers) {
  return [...drivers].sort((a,b) => a.revenue - b.revenue);
}

const driversByName = function(drivers) {
  return [...drivers].sort((a,b) => a.name.localeCompare(b.name));
}

const totalRevenue = function(drivers) {
  return drivers.reduce((accumulator, currentValue) => accumulator + currentValue.revenue, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
}