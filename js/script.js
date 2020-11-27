"use strict";
//  варинат 1
let isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

let numRandom = Math.floor(Math.random(1) * 100);
console.log( numRandom );

function userGame (num) {
	return function user () {
		let userGuess = prompt( 'Угадай число от 1 до 100' );
		if (userGuess === null) {
			alert( 'Игра окончена' );
		} else if (!isNumber(userGuess)) {
			alert( 'Введи число!' );
			user();
		} else if (num > Number(userGuess)) {
			alert( 'ваше число ' + userGuess + ' Загаданное число больше' );
			user();
		}	else if (num < Number(userGuess)) {
			alert( 'ваше число ' + userGuess + ' Загаданное число меньше' );
			user();
		} else if (num === Number(userGuess)) {
			alert( 'Поздравляю, загаданное число ' + num + ' Вы угадали' );
		}
	};
}

let gameUser = userGame(numRandom);
gameUser();

//  варинат 2 не могу разобраться как это все в тернарный оператор записать некоторые моменты понять не могу всегда в теранром операторе у меня что то либо 1 не работает.

// let isNumber = function(n) {
// 	return !isNaN(parseFloat(n)) && isFinite(n);
// };

// let numRandom = Math.floor(Math.random(1) * 100);
// console.log( numRandom );

// function userGame (num) {
	
// 	return function user () {
// 		let example;
// 		let userGuess = prompt( 'Угадай число от 1 до 100' );

// 		if (!isNumber(userGuess)){
// 			alert('Введи число!');
// 		}
		
// 		!isNumber(userGuess) ? alert('Введи число!') && user() : example = alert( userGuess === null  ? 'Игра окончена' : num > Number(userGuess) ? 'ваше число ' + userGuess + ' Загаданное число больше '  : num < Number(userGuess) ? 'ваше число ' + userGuess + ' Загаданное число меньше'  :  num === Number(userGuess) ? 'Поздравляю, Вы угадали!!!' : 'sdsd');

// 		example = alert( userGuess === null  ? 'Игра окончена' : num > Number(userGuess) ? 'ваше число ' + userGuess + ' Загаданное число больше '  : num < Number(userGuess) ? 'ваше число ' + userGuess + ' Загаданное число меньше'  :  num === Number(userGuess) ? 'Поздравляю, Вы угадали!!!' : 'sdsd');

		
// 	};
// }

// let gameUser = userGame(numRandom);
// gameUser();
