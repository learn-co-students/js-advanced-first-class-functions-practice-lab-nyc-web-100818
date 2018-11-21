// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(array, location) {
  array.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(array) {
  return array.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(array) {
  return array.slice().sort(function(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  })
}

function totalRevenue(array) {
  const allRevenue = array.map(d => d.revenue)
  return allRevenue.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  })
}

function averageRevenue(array) {
  return totalRevenue(array) / array.length
}
