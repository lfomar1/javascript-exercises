const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  const oldestPerson = people.reduce((oldest, current) => {
    const oldestAge = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : currentYear - oldest.yearOfBirth;
    const currentAge = current.yearOfDeath
      ? current.yearOfDeath - current.yearOfBirth
      : currentYear - current.yearOfBirth;
    return currentAge > oldestAge ? current : oldest;
  });
  return oldestPerson;
};
// Do not edit below this line
module.exports = findTheOldest;
