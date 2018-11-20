// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
}


function logDriversByHometown(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers) {
  const driversCopy = [...drivers];
  return driversCopy.sort(function(a, b){return a.revenue - b.revenue});
    // alternative syntax: return driversCopy.sort((a,b) => a.revenue - b.revenue);
}

function driversByName(drivers) {
  const driversCopy = [...drivers];
  return driversCopy.sort(function(a, b) {return a.name.localeCompare(b.name)})
} // helpful post: https://stackoverflow.com/questions/8900732/javascript-sort-objects-in-an-array-alphabetically-on-one-property-of-the-arra

function totalRevenue(drivers) {
  let totalRev = 0;
  drivers.forEach(function (driver) {
    totalRev += driver.revenue;
  })
  return totalRev;
}

// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
function averageRevenue(drivers) {
  const count = drivers.length;
  return totalRevenue(drivers)/count;
}
