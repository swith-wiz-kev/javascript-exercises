const findTheOldest = function (array) {
  const sortedArray = array.sort((current, next) => {
    const currentAge =
      (current.yearOfDeath || new Date().getFullYear()) - current.yearOfBirth;
    const nextAge =
      (next.yearOfDeath || new Date().getFullYear()) - next.yearOfBirth;
    return currentAge > nextAge ? -1 : 1;
  });
  return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
