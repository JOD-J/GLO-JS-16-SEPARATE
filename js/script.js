"use strict";

let isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
function userGame () {
	let attempts = 10;
	let numRandom = Math.floor(Math.random(1) * 100);
	console.log( numRandom );
	function user () {
		function attemptsExpired () {
			if ( confirm( 'Попытки закончились, хотите попробовать еще раз?' )) {
				attempts = 10 ; 
				user();
			} else {
				alert( 'конец игры' );
			}
		}
		let userGuess = prompt( 'Угадай число от 1 до 100' );
		if (userGuess === null) {
			alert( 'конец игры' );
		} else if (!isNumber(userGuess)) {
			alert( 'Введи число!' );
			user();
		} else if (numRandom > Number(userGuess)) {
			attempts--;
			if( attempts === 0 ){
				attemptsExpired();
			} else {
				alert( 'ваше число ' + userGuess + ' Загаданное число больше ' + 'осталось попыток ' + attempts );
				user();
			}
		}	else if (numRandom < Number(userGuess)) {
			attempts--;
			if( attempts === 0 ){
				attemptsExpired();
			} else {
				alert( 'ваше число ' + userGuess + ' Загаданное число меньше ' + 'осталось попыток ' + attempts  );
				user();
			}
		} else if (numRandom === Number(userGuess)) {
			alert( 'Поздравляю, загаданное число ' + numRandom + ' Вы угадали!!!' );
			if (confirm('Хотели бы сыграть еще?')) {
				attempts = 10;
                userGame();
			}
		}
	}
	user();
}
userGame();


