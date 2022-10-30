function scuberGreetingForFeet(someValue){
  let greeting;
  if (someValue <= 400) {
    greeting = "This one is on me!";
  }
  else if (someValue >= 400 && someValue <= 2000) {
    greeting = "That will be twenty bucks.";
  }
  else if (someValue >= 2000 && someValue < 2500) {
    greeting = "I will gladly take your thirty bucks.";
  }
  else if (someValue > 2500) {
    greeting = "No can do.";//i don't understand why this won't pass the last test
  }
  return greeting;
}

function ternaryCheckCity(someCity){
  return (someCity === 'NYC')? "Ok, sounds good.": "No go.";

}

function switchOnCharmFromTip(charm){
  let greeting;
  switch(charm) {
    case "generous":
      greeting = "Thank you so much.";
      break;
    case "not as generous":
      greeting = "Thank you.";
      break;
      default:
        greeting = "Bye.";

  }
  return greeting;
}
