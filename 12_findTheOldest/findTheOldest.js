const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const currentAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;
    const oldestAge = (oldestPerson.yearOfDeath || currentYear) - oldestPerson.yearOfBirth;

    if (currentAge > oldestAge) {
      return currentPerson;
    } else {
      return oldestPerson;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
