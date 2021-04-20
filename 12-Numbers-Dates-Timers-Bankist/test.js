const calcDays = (depth) => {
  let day = 0;
  let feetsClimbed = 0;

  //   while feetclimbed less than depth
  while (feetsClimbed < depth) {
    feetsClimbed = feetsClimbed + 7;
    ++day;
    // if feets climbed is greater than depth don't slip at night
    feetsClimbed >= depth
      ? console.log(
          `Snail climbed ${feetsClimbed} feets in ${day} ${
            day === 1 ? "day" : "days"
          } `
        )
      : (feetsClimbed = feetsClimbed - 2);
  }
};

calcDays(31);
