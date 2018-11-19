// logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.
const logDriverName = function(driver){
  console.log(driver.name)
}

function logDriverNames(drivers) {
  drivers.forEach(logDriverName)
}

// logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.

function logDriversByHometown(drivers, location) {
  drivers.forEach(
    function(driver) {
      if (driver.hometown === location) {
        console.log(driver.name)
      }
    }
  )
}

// driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.

const revSorter = function(d1, d2) {
  return d1.revenue - d2.revenue
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(revSorter)
}

// driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
const nameSorter = function(d1, d2) {
  return d1.name.localeCompare(d2.name)
}

function driversByName(drivers) {
  return drivers.slice().sort(nameSorter)
}

// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
const reduceRevenue = function(agg, el) {
  return agg + el.revenue
}
function totalRevenue(drivers) {
  return drivers.reduce(reduceRevenue, 0)
}

// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
const average = function(agg, el, i) {
  return ((agg * i) + el.revenue) / (i + 1)
}

function averageRevenue(drivers) {
  return drivers.reduce(average, 0, 0)
}
