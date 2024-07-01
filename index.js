// Code your solution in this file!
const drivers1 = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
    
    return drivers.slice(0, 2);
    
};
const drivers2 = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
  };

  const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers, 
  ];
  

  const createFareMultiplier = (multiplier) => {
    return (value) => {
      return value * multiplier;
    };
  };
  //faredoubler function 
  const fareDoubler = (fare) => {
    return fare * 2;
  };

  //fareTripler function
  const fareTripler = (fare) => {
    return fare * 3;
  };

  //selectDifferentDrivers(arrayOfDrivers, function)
  const selectDifferentDrivers = (arrayOfDrivers, func) => {
    return func(arrayOfDrivers);
  };
returnFirstTwoDrivers();
returnLastTwoDrivers();
    