'use strict';

var name;
var origin;
var age;
var bae;
var home;

while (name.toUpperCase() !== 'YES') {
  name = prompt('This is the first of five YES or NO questions to unlock my life. \nHere is is a gimme\'. \n\nIs my name Kyle?\n\n\(Hint:YES\)');
  if (name.toUpperCase() === 'YES') {
    break;
  }
  alert('Hint: See Hint!')
}
console.log('Understood my hint')
