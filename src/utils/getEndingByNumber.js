export const getEndingByNumber = (
  number,
  endingDefault,
  endingWithOne,
  endingWithTwoThreeFour
) => {
  if (number % 100 >= 10 && number % 100 <= 20) {
    return endingDefault;
  } else if (number % 10 >= 2 && number % 10 <= 4) {
    return endingWithTwoThreeFour;
  } else if (number % 10 === 1) {
    return endingWithOne;
  }

  return endingDefault;
};
