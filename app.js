'use strict';

var correct = 0;

var userName = prompt('Well hey there what is your name?');

if (userName.toUpperCase() === 'KYLE'){
  alert('I see you have been blessed with the best name as well.');
} else {
}

var name;

while (name.toUpperCase() !== 'YES' || name.toUpperCase() !== 'Y') {
  name = prompt('This is the first of five YES or NO questions to unlock my life. \nHere is is a gimme\'. \n\nIs my name Kyle?\n\n\(Hint:YES\)');
  if (name.toUpperCase() === 'YES' || name.toUpperCase() === 'Y') {
    correct++;
    alert(correct + ' of 7 correct.');
    console.log('Question 1: Understood my hint');
    console.log('correct: ' + correct);
    break;
  } else if (name.toUpperCase() === 'NO' || name.toUpperCase() === 'N') {
    alert('Hint: See Hint!');
    console.log('Question 1: More than one try.');
  } else {
    alert('Seriously? \"Yes\" and \"No\" are not difficult words.');
    console.log('Question 1: Not a \"Yes\" or \"No\" answer.');
  }
}

var island = prompt('Did I grow up in the San Juan Islands?');

if (island.toUpperCase() === 'YES' || island.toUpperCase() === 'Y') {
  alert('Technically no. \n\nI grew up on Camano Island which is actually part of Island County.');
  console.log('Question 2: Wrong');
} else if (island.toUpperCase() === 'NO' || island.toUpperCase() === 'N'){
  correct++;
  alert(correct + ' of 7 correct.');
  console.log('correct: ' + correct);
} else {
  alert('Seriously? \"Yes\" and \"No\" are not difficult words.');
  console.log('Question 2: Not a \"Yes\" or \"No\" answer.');
}

var age = prompt('Am I under the age of 30?');

if (age.toUpperCase() === 'YES' || age.toUpperCase() === 'Y') {
  correct++;
  alert('Yup and my birthday is August 27th.\n\nI expect birthday wishes \;\)\n\n' + correct + ' of 7 correct.');
  console.log('correct: ' + correct);
} else if (age.toUpperCase() === 'NO' || age.toUpperCase() === 'N'){
  alert ('Rude');
  console.log('Question 3: Wrong');
} else {
  alert('Seriously? \"Yes\" and \"No\" are not difficult words.');
  console.log('Question 3: Not a \"Yes\" or \"No\" answer.');
}

var wife = prompt('Is my wife better than your wife?');

while (wife.toUpperCase() !== 'YES' || wife.toUpperCase() !== 'Y') {
  if (wife.toUpperCase() === 'YES' || wife.toUpperCase() === 'Y') {
    correct++;
    alert('Never forget what was said by you today.\n\n' + correct + ' of 7 correct.');
    console.log('correct: ' + correct);
    break;
  } else if (wife.toUpperCase() === 'NO' || wife.toUpperCase() === 'N') {
    alert('You know what you have to say.\n\n\(I don\'t care if you don\'t have a wife\)');
    console.log('Question 4: More than one try.');
    wife = prompt('Is my wife better than your wife?');
  } else {
    alert('Seriously? \"Yes\" and \"No\" are not difficult words.');
    console.log('Question 4: Not a \"Yes\" or \"No\" answer.');
    wife = prompt('Is my wife better than your wife?');
  }
}

var home = prompt('Do I get to call the Kitsap Peninsula my home?');

if (home.toUpperCase() === 'YES' || home.toUpperCase() === 'Y') {
  correct++;
  console.log('correct: ' + correct);
  alert('Yup my wife and I bought a home in the beautiful small town of Kingston.\n\n' + correct + ' of 7 correct.');
} else if (home.toUpperCase() === 'NO' || home.toUpperCase() === 'N'){
  alert('I know it is far but I love it over there and it is in fact where I live.');
  console.log('Question 5: Wrong');
}else {
  alert('Seriously? \"Yes\" and \"No\" are not difficult words.');
  console.log('Question 5: Not a \"Yes\" or \"No\" answer.');
}

var housesWrong = 0;

while(housesWrong !== 4){
  var houses = prompt('I have lived in my fair share of places. How many would you guess?\n\n (Your guess should be a number.)');
  if (houses == 12){
    correct++;
    alert('You got it ' + userName + '!\n\n' + correct + ' out of 7 correct');
    console.log('correct: ' + correct);
    break;
  } else if (houses > 12){
    housesWrong++;
    alert(userName + ' I am not that mobile!');
    console.log('guessed to high');
  } else if (houses < 12){
    housesWrong++;
    alert(userName + ' I have moved more than that.');
    console.log('guessed to low');
  } else{
    housesWrong++;
    alert(userName + ' Make sure you entered a number.');
    console.log('no number entered');
  }
}

/*I want to ask a question with multiple answers. I want to create an array that holds all possible answers to question 7. I only want to give the user 6 tries to get the answer correct. */
var attempts = 0;

var cities = ['CAMANO ISLAND', 'STANWOOD', 'BELLINGHAM', 'LAKE FOREST PARK', 'SEATTLE', 'POULSBO', 'SUQUAMISH', 'KINGSTON'];


var whichCity = prompt('Can you guess a city I have lived in in the past?\n\n I will give you 6 tries.');

for(var i = 0; i < cities.length; i++){
  console.log(cities[i]);
  if (whichCity.toUpperCase() === cities[i]){
    var result = true;
  }
}
// currently at 7 attempts before break.
while (attempts !== 6){
  if(result){
    correct++;
    alert(correct + ' of 7 correct.');
    console.log('Correct: ' + correct);
    break;
  } else {
    alert('Try again\n\n HINT: Use previous questions for clues.');
    attempts++;
    console.log('User had ' + attempts + ' attempts.');
    whichCity = prompt('Can you guess a city I have lived in in the past?\n\n I will give you 6 tries.');
  }
}
console.log('out of while loop');


if (correct === 7){
  document.write('<br>' + 'PERFECT SCORE! CONGRATULATIONS!' + '<br>');
}else {
  document.write('<br>' + 'Womp Womp! only ' + correct + ' of 7 correct. You could always refresh the page and try again.' + '<br>');
}
