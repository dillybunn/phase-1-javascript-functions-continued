// code your solution here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function (mondayActivity = "go to the office") {
  return `This Monday, I will ${mondayActivity}.`;
};

function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
