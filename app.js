'use strict';

var name;
var correct = 0;
var userName = prompt('Well hey there what is your name?');

if (userName.toUpperCase() === 'KYLE'){
  alert('I see you have been blessed with the best name as well.');
} else {
}

while (name.toUpperCase() !== 'YES' || name.toUpperCase() !== 'Y') {
  name = prompt('This is the first of five YES or NO questions to unlock my life. \nHere is is a gimme\'. \n\nIs my name Kyle?\n\n\(Hint:YES\)');
  if (name.toUpperCase() === 'YES' || name.toUpperCase() === 'Y') {
    correct++;
    alert(correct + ' of 5 correct.');
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
  alert(correct + ' of 5 correct.');
  console.log('correct: ' + correct);
} else {
  alert('Seriously? \"Yes\" and \"No\" are not difficult words.');
  console.log('Question 2: Not a \"Yes\" or \"No\" answer.');
}

var age = prompt('Am I under the age of 30?');

if (age.toUpperCase() === 'YES' || age.toUpperCase() === 'Y') {
  correct++;
  alert('Yup and my birthday is August 27th.\n\nI expect birthday wishes \;\)\n\n' + correct + ' of 5 correct.');
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
  wife = prompt('Is my wife better than your wife?');
  if (wife.toUpperCase() === 'YES' || wife.toUpperCase() === 'Y') {
    correct++;
    alert('Never forget what was said by you today.\n\n' + correct + ' of 5 correct.');
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
  alert('Yup my wife and I bought a home in the beautiful small town of Kingston.\n\n' + correct + ' of 5 correct.')
} else if (home.toUpperCase() === 'NO' || home.toUpperCase() === 'N'){
  alert('I know it is far but I love it over there and it is in fact where I live.');
  console.log('Question 5: Wrong');
}else {
  alert('Seriously? \"Yes\" and \"No\" are not difficult words.');
  console.log('Question 5: Not a \"Yes\" or \"No\" answer.');
}

var housesWrong = 0;
// var houses = prompt('I have lived in my fair share of places. How many would you guess?\n\n (Your guess should be a number.)');

while(housesWrong !== 4){
  var houses = prompt('I have lived in my fair share of places. How many would you guess?\n\n (Your guess should be a number.)');
  if (houses == 12){
    correct++;
    alert('You got it ' + userName + '!'  )
    console.log('correct: ' + correct);
    break;
  } else if (houses > 12){
    housesWrong++;
    alert(userName + ' I am not that mobile!');
    console.log('guessed to high ' + housesWrong + ' times.');
  } else if (houses < 12){
    housesWrong++;
    alert(userName + ' I have moved more than that.');
    console.log('guessed to low ' + housesWrong + ' times.');
  } else{
    housesWrong++;
    alert(userName + ' Make sure you entered a number.');
    console.log('no number entered ' + housesWrong + 'times.');
  }
}

if (correct === 5){
  document.write('<br>');
  document.write('PERFECT SCORE! CONGRATULATIONS!');
  document.write('<br>')
}else {
  document.write('<br>');
  document.write('Womp Womp! only ' + correct + ' of 5 correct. You could always refresh the page and try again.');
  document.write('<br>');
}

document.write('To Recap:');
document.write('<br>');
document.write('My name is Kyle.');
document.write('<br>');
document.write('I live in Kingston, WA.');
document.write('<br>');
document.write('I grew up on Camano Island.');
document.write('<br>');
document.write('I am 28 years old.');
document.write('<br>');
document.write('My wife is the best. Her name is Courtney.');
document.write('<br>');
