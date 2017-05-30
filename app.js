'use strict'

var name = prompt('This is the first of five YES or NO questions to unlock my life. \nHere is is a gimme\'. \n\nIs my name Kyle?\n\n\(Hint:YES\)');

if (name.toUpperCase === 'YES') {
  console.log('user got the anser correct');
  alert('I am SO glad you understood the hint.');
} else if (name.toUpperCase === 'NO') {
  console.log('user didn\'t see the hint');
  alert('Wrong! Hint: See Hint');
}else {
  console.log('no answer');
  alert('It is just three letters! Are you really SO lazy?');
}

var age = prompt('Ok so I see you can read, but now it gets tough. \n\nHow old am I?');

if (age === 28) {
  console.log('They know my age');
  alert('First Try!!');
}else if (age > 28) {
  console.log('user thinks I\'m old');
  alert('I am not that old!!! Wow...just wow.');
}
