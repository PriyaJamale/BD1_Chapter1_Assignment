const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3030;

app.use(express.static('static'));

app.get('/shout', (req, resp) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  resp.send(upperCaseName);
});

app.get('/fullName', (req, resp) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  resp.send(fullName);
});

app.get('/date', (req, resp) => {
  let month = req.query.month;
  let year = req.query.year;
  let date = month + ',' + ' ' + year;
  resp.send(date);
});

app.get('/greeting', (req, resp) => {
  let name = req.query.name;
  let greetingMessage = 'Namaste, ' + name + '!';
  resp.send(greetingMessage);
});

app.get('/address', (req, resp) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ',  ' + city + ',  ' + state;
  resp.send(address);
});

app.get('/email', (req, resp) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = username + '@' + domain;
  resp.send(email);
});

app.get('/total-distance', (req, resp) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let distance = (distance1 + distance2).toString();
  resp.send(distance);
});

app.get('/total-time', (req, resp) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let totalDistance = (time1 + time2 + time3).toString();
  resp.send(totalDistance);
});

app.get('/average-speed', (req, resp) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);
  let averageSpeed = totalDistance / totalTime;
  resp.send(averageSpeed.toString());
});

app.get('/eta', (req, resp) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);
  let eta = distance / speed;
  resp.send(eta.toString());
});

app.get('/total-calories', (req, resp) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);
  let totalCalories = (duration1 + duration2) * caloriesPerMinute;
  resp.send(totalCalories.toString());
});

app.get('/intrest-earned', (req, resp) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let intrestEarned = (principal * rate * time) / 100;
  resp.send(intrestEarned.toString());
});

app.get('/check-number', (req, resp) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'positive';
  } else {
    result = 'Negative';
  }
  resp.send('Number is ' + result);
});

app.get('/check-even-odd', (req, resp) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number % 2 == 0) {
    result = 'even';
  } else {
    result = 'odd';
  }
  resp.send('Number is ' + result);
});

app.get('/check-login', (req, resp) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  if (isLoggedIn) {
    result = 'User is Logged in';
  } else {
    result = 'User is not logged in';
  }
  resp.send(result);
});

app.get('/check-discount', (req, resp) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age <= 65) {
    result = 'User is not eligible for discount';
  } else {
    result = 'User is eligible for discount';
  }
  resp.send(result);
});

app.get('/check-number-type', (req, resp) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = 'positive';
  } else if (number < 0) {
    result = 'Negative';
  } else {
    result = 'zero';
  }
  resp.send('Number is ' + result);
});

app.get('/check-temprature', (req, resp) => {
  let temprature = req.query.temprature;
  let result;
  if (temprature < 15) {
    result = 'Temprature is Cold';
  } else if (temprature < 25) {
    result = 'Temprature is warm';
  } else {
    result = 'Temparture is Hot';
  }
  resp.send(result);
});

app.get('/check-activity-level', (req, resp) => {
  let steps = parseFloat(req.query.steps);
  let result;
  if (steps < 5000) {
    result = 'Activity level is low';
  } else if (steps < 10000) {
    result = 'Activity level is moderate';
  } else {
    result = 'Activity Level is high';
  }
  resp.send(result);
});

app.get('/check-engagement', (req, resp) => {
  let likes = req.query.likes;
  let result;
  if (likes < 100) {
    result = 'Engagement level is low';
  } else if (likes < 500) {
    result = 'Engagement level is medium';
  } else {
    result = 'Engagement level is high';
  }
  resp.send(result);
});

function getWelcomeMessage() {
  return 'Welcome to our service';
}
app.get('/welcome', (req, resp) => {
  resp.send(getWelcomeMessage());
});

function getGreetingMessage(userName) {
  return 'Hello, ' + userName + '!';
}
app.get('/greet', (req, resp) => {
  let userName = req.query.userName;
  resp.send(getGreetingMessage(userName));
});

function checkPassword(password) {
  if (password.length > 15) {
    return 'Password is Strong';
  } else {
    return 'Password is weak';
  }
}
app.get('/check-password', (req, resp) => {
  let password = req.query.password;
  resp.send(checkPassword(password));
});

function calSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}
app.get('/sum', (req, resp) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  resp.send(calSum(num1, num2));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
