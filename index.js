// Code your solution in this file!

const logDriverNames = function (drivers) {
  drivers.forEach(function (el) {
    console.log(el.name);
  });
};

const logDriversByHometown = function (drivers, homeTown) {
  drivers.forEach(function (el) {
    if (el.hometown ===homeTown){
      console.log(el.name);
    }
  });
};


const driversByRevenue = function (drivers) {
  return drivers.slice(0).sort(function (dOne, dTwo) {
    return dOne.revenue - dTwo.revenue;
  });
};

const driversByName = function (drivers) {
  const sortedDrivers = drivers.slice().sort(function (dOne, dTwo) {
    return dOne.name.localeCompare(dTwo.name)
  });
  return sortedDrivers;
};

const totalRevenue = function (drivers){
  let revenue = 0
  drivers.forEach(function (driver){
    revenue += driver.revenue
  });
  return revenue
}

const averageRevenue = function (drivers){
  return totalRevenue(drivers)/drivers.length
}
