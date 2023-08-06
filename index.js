function findMatching(drivers, searchString) {
  // Convert the search string to lowercase to make the search case-insensitive
  const searchLowerCase = searchString.toLowerCase();

  // Filter the drivers array based on whether their names match the search string
  const matchingDrivers = drivers.filter((driver) =>
    driver.toLowerCase().includes(searchLowerCase)
  );

  return matchingDrivers;
}

function fuzzyMatch(drivers, letters) {
  const matchingDrivers = [];

  for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].startsWith(letters)) {
      matchingDrivers.push(drivers[i]);
    }
  }

  return matchingDrivers;
}

function matchName(drivers, searchName) {
  let matchedDrivers = [];

  for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].name === searchName) {
      matchedDrivers.push(drivers[i]);
    }
  }

  return matchedDrivers;
}
