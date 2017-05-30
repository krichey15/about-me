'use strict'

var name = prompt('This is the first of five YES or NO questions to unlock my life. \nHere is is a gimme\'. \n\nIs my name Kyle?\n\n\(Hint:YES\)');

if (name.toUpperCase == 'YES') {
  console.log('user got the anser correct');
  alert('I am SO glad you understood the hint.');
} else if (name.toUpperCase == 'NO') {
  console.log('user didn\'t see the hint');
  alert('Wrong! Hint: See Hint');
}else {
  console.log('no answer');
  alert('It is just three letters! Are you really SO lazy?');
}
