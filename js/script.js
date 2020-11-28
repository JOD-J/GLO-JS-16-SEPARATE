"use strict";

let isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

// let numRandom = Math.floor(Math.random(1) * 100);
// console.log( numRandom );

function userGame (num) {
	let attempts = 10;
	let numRandom = Math.floor(Math.random(1) * 100);
	console.log( numRandom );

	return function user () {
		function attemptsExpired () {
			if () {

			} else {

			}
		}



		let userGuess = prompt( 'Угадай число от 1 до 100' );
		if (userGuess === null) {
			alert( 'Игра окончена' );
		} else if (!isNumber(userGuess)) {
			alert( 'Введи число!' );
			user();
		} else if (num > Number(userGuess)) {
			alert( 'ваше число ' + userGuess + ' Загаданное число больше, осталось попыток' );
			user();
		}	else if (num < Number(userGuess)) {
			alert( 'ваше число ' + userGuess + ' Загаданное число меньше, осталось попыток' );
			user();
		} else if (num === Number(userGuess)) {
			alert( 'Поздравляю, загаданное число ' + num + ' Вы угадали!!! xотели бы сыграть еще?' );
		} else if (){

		};
	};
}

let gameUser = userGame(numRandom);
gameUser();

