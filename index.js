// Code your solution in this file!

//Receives an array of driver objects and logs the name attribute of each driver to the console.

const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

//Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.

const logDriversByHometown = function (drivers, location) {
  drivers.forEach( function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

//Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.

const driversByRevenue = function (drivers) {
  return drivers.slice().sort( function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  });
}

//Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.

const driversByName = function (drivers) {
  return drivers.slice().sort( function (driver1, driver2) {
  return driver1.name.localeCompare(driver2.name);
  });
}

//Receives an array of driver objects and returns the sum of the revenue earned by each driver.

const totalRevenue = function (drivers) {
  return drivers.reduce( function ( total, currentDriver ) {
    return total + currentDriver.revenue;
  }, 0)
}

//Receives an array of driver objects and returns the average revenue earned by each driver.

const averageRevenue = function (drivers) {
  return (totalRevenue(drivers)/drivers.length)
}
