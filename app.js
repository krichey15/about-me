'use strict';

var name;
var correct = 0;

while (name.toUpperCase() !== 'YES' || name.toUpperCase() !== 'Y') {
  name = prompt('This is the first of five YES or NO questions to unlock my life. \nHere is is a gimme\'. \n\nIs my name Kyle?\n\n\(Hint:YES\)');
  if (name.toUpperCase() === 'YES' || name.toUpperCase() === 'Y') {
    correct++;
    alert(correct + ' of 5 correct.');
    console.log('Understood my hint');
    console.log('correct: ' + correct);
    break;
  } else if (name.toUpperCase() === 'NO' || name.toUpperCase() === 'N') {
    alert('Hint: See Hint!');
    console.log('More than one try.');
  } else {
    alert('Seriously? \"Yes\" and \"No\" are not difficult words.');
    console.log('Not a \"Yes\" or \"No\" answer.');
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
  console.log('Not a \"Yes\" or \"No\" answer.');
}
/*
while (origin.toUpperCase() !== 'YES' || 'Y') {
  origin = prompt('')
  if (orign.toUpperCase() === 'YES' || 'Y') {
    break;
  }
  alert();
  console.log();
}
correct++
console.log();
console.log();

while (origin.toUpperCase() !== 'YES' || 'Y') {
  origin = prompt('')
  if (orign.toUpperCase() === 'YES' || 'Y') {
    break;
  }
  alert();
  console.log();
}
correct++
console.log();
console.log();

while (origin.toUpperCase() !== 'YES' || 'Y') {
  origin = prompt('')
  if (orign.toUpperCase() === 'YES' || 'Y') {
    break;
  }
  alert();
  console.log();
}
correct++
console.log();
console.log();
*/
