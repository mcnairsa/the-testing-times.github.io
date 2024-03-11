/*
Notes:
  This program uses two variables 'name' and 'event'
  both get crossed out since these are keywords and 
  their use is considered 'deprecated' (q.v.) for 
  reasons beyond the scope of the lesson. 
  It doesn't cause the program to fail but it's worth 
  noting that using common words like 'name' can be a 
  problem. The environment of Codecademy's platform
  thinks word 'event' is refers to a DOM Event. Use 
  names like competitor_name and competition_event not
  only makes the code clearer but also avoids the 
  possibility of upsetting your editor. VSCode throws 
  a wobbly too.

  Because we are using function expressions to create
  our functions (technically to 'declare' them) we must
  wait to call them till the end of the program. If we 
  were to use the function keyword to declare them 
  we could call them at the head of the program. I'm not
  sure which would be clearer.

  Can we have the function calls before the functions are 
  defined? Only if we declare the functions with the 
  function keyword. We cannot do that if we use 'arrow 
  syntax'. See here:
  https://stackoverflow.com/questions/261599/why-can-i-use-a-function-before-its-defined-in-javascript
*/

/*
Notes on program structure:
First we set up our environment by decaring
variables and functions.

getRandEvent() sets up the event to train for

getTrainingDays() 
  returns days
  works out how many days training we need for 
  this event.

Then we call these two functions to get the values
used as arguments to pass to the two log functions

logEvent
  returns nothing
  just does a console.log()

logDays
  returns nothing
  just does a console.log()

Then we call 
  getRandEvent() 
and
  getTrainingDays()

Finally we call the log functions to get the 
output info.
*/

/*
Notes on changes:
@7:
remember to change both the praameter list on the declaration and the argument list on the call to the two functions.

@9:
can we have a copy link/button please?
*/

// The scope of `random` is too loose 
// moved to inside getRandEvent()
// so it now has local scope

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};
const name = 'Nala';
// The scope of `name` is too tight 
const logEvent = (name, event) => {

  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {

  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

/* Now call the two 'log' functions to get the info we want */
logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);