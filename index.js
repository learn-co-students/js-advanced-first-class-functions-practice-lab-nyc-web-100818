// Code your solution in this file!
// logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.
name_arr = [
  {
    name: "vera",
    age: 23,
    revenue: 2
  }, 
  {
    name: "jeff",
    age: 23,
    revenue: 1
  }, 
  {
    name: "laura",
    age: 23,
    revenue: 3
  }, 

]

function logDriverNames(arr) {
  arr.forEach(element => console.log(element.name));
};

function logDriversByHometown(arr, location) {
  arr.filter( 
    driver => driver.hometown ==  location
  ).forEach(
    driver => console.log(driver.name)
  );
};

const driversByRevenue = function(drivers) {
  return [...drivers].sort((a,b) => a.revenue - b.revenue);
 }

//  driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
function driversByName(drivers) {
  return [...drivers].sort((a,b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers){
  return drivers.reduce((accumulator, currentValue) => accumulator + currentValue.revenue, 0);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
};


