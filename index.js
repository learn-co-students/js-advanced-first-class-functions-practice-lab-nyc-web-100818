
const logDriverNames = function(drivers){
	drivers.forEach((driver)=>{
		console.log(driver.name)
    });
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown == location)
      console.log(driver.name)
  });
}

const driversByRevenue = function(drivers) {
  const result = [...drivers]
  return result.sort(function (a, b) {
    return a["revenue"] - b["revenue"];
  });
}

const driversByName = function(drivers) {
  const result = [...drivers]
  return result.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function(drivers) {
  const result = [...drivers]
  const initialValue = 0
  return result.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue["revenue"];
  }, initialValue);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
