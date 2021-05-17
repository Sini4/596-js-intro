//alert('Hello JS');

// comment 
/* block
    comment
*/

const message = 'Hello JS';

const userName = prompt('Enter your name: ');
alert('Hello ' + userName);

const userAge = Number(prompt('Enter your age: '));
alert(userAge + ' y.o.');

const nextAge = userAge + 1;
alert('Next year you will be ' + nextAge);

// Boolean

if (userAge >= 18) {
    alert('You are adult');
} else {
    alert('You are underaged');
}

const funcWs = add(userAge, 10);
alert(funcWs);

/*  !== - перевірка на нерівність
    === - перевірка на рівність
    || - 
    && - 
*/

/* 
alert(message);

const num = 12 + 23;
alert(num);

let message = 'Hello JS';
alert(message);
*/

/*
var message = 'Hello JS'; // не бажано юзати
alert(message);
*/

function add(a, b) {
    const sum = a + b;
    return sum;
}