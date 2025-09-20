function greet() {
  let greetings = "Hello world";
  return greetings;
}

function getCurrentDate(){
  return new Date().toDateString();
}

function getCurrentTime(){
  return new Date().toTimeString();
}
module.exports = { greet, getCurrentDate, getCurrentTime };