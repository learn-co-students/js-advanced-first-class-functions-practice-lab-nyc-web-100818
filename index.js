// Code your solution in this file!
function logDriverNames(arr) {
  arr.map(x => console.log(x.name))
}

function logDriversByHometown(arr, location) {
  homeBois = arr.filter(x => (x.hometown == location));
  logDriverNames(homeBois);
}

function driversByRevenue(arr) {
  return [...arr].sort((a, b) => a.revenue - b.revenue);
}

function driversByName(arr) {
   return [...arr].sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(arr) {
  return arr.reduce((acc, i) => acc += i.revenue, 0);
}

function averageRevenue(arr) {
  return (totalRevenue(arr) / arr.length);
}
