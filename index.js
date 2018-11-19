// Code your solution in this file!
function logDriverNames (array) {
  function meantForEach (el, i, array) {
    console.log(el.name);
  }
  array.forEach(meantForEach);
}

function logDriversByHometown (array, location) {
  function meantForEach (el, i, array) {
    if (el.hometown === location) {
      console.log(el.name);
    }
  }
  array.forEach(meantForEach);
}

function driversByRevenue (array) {
  let newArray = [...array]
  return newArray.sort(function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  })
}

function driversByName (array) {
  let newArray = [...array];
  return newArray.sort(function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  })
}

// the second argument supplied in reduce is the initial value of the
// ... first argument of the callback
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
