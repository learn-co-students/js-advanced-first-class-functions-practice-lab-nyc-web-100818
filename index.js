// Code your solution in this file!

const logDriverNames = function(arr) {
  arr.forEach(function(el) {
    console.log(el["name"]);
  });
}

const logDriversByHometown = function(arr, town) {
  arr.forEach(function(el) {
    if (el["hometown"] === town) {
      console.log(el["name"]);
    }
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
    return a.name.localeCompare(b.name);
  });
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
