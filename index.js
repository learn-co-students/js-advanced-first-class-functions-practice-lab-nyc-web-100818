// const drivers = [
//     { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
//     { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
//     { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
//     { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
//     { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
//   ];

//logDriverNames - takes in argument of drivers and prints out each drivers name property
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};


//logDriversByHomeTown - takes in two argument (drivers,hometown), if driver's hometown matches the hometown argument print out their name
const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function (driver) {
    if (driver.hometown === hometown) {
      console.log(driver.name);
    }
  });
};

// driversByRevenue() - uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest).
// use .slice() to copy the array to a new array and then perform .sort to non-destructively sort the original array

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
};

//driversByName() - 'uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z)

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  });
};

// totalRevenue() - uses the reduce() method to sum the revenue of every driver and return the total
// reduce() calls the callback function one time on each element in the array from left to right !!!! 
// reduce takes in two arguments (optionally 4), the callback and the starting value (0 in this case, because we want to start summing from 0 )
//arr.reduce(callback[, initialValue])
const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, driver) {
    return driver.revenue + total;
  }, 0)
};

// averageRevenue() calculates the average revenue across all drivers
// Leverage the totalRevenue() function written above, call it on array drivers and divide by the length of drivers array to get average 

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
