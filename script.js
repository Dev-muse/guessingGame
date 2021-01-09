'use strict';



let secretNum = Math.floor(Math.random()*20)+1;
let score = 20;
let highScore = 0;
const displayMsg = message => document.querySelector('.message').textContent = message

//Event Handler function : 
const gameLogic = () =>{
	let guessNum = Number(document.querySelector('.guess').value)

	if(!guessNum){
		//when there is no input
		displayMsg('⚠ No Number Entered!');

	} else if(guessNum === secretNum){
		//when player wins
		displayMsg('🌟 Yay correct guess!');
		document.querySelector('.number').textContent = secretNum;
		document.querySelector('body').style.backgroundColor = "green"
		document.querySelector('.number').style.width = "30rem"
	 	if(score > highScore){
	 		highScore = score;
	 		document.querySelector('.highscore').textContent = highScore;
	 	} 

	 	//when guess is wrong
	} else if(guessNum !== secretNum){
		if(score>1){ 
				displayMsg(guessNum > secretNum ? '☹ Too high, try again!': '🤒Too low, try again!');
				score--
				document.querySelector('.score').textContent = score;
			}else { 
				displayMsg('☹ You lost!');
				document.querySelector('.score').textContent = 0;
			}

	}
}


const reloadGame = () =>{
		score = 20;

		secretNum = Math.trunc(Math.random() *20) + 1;
		displayMsg('Start guessing...');
		document.querySelector('.score').textContent= score;
		document.querySelector('.number').textContent= '?';
		document.querySelector('.guess').value = '';
		document.querySelector('body').style.backgroundColor = '#222'
		document.querySelector('.number').style.width='15rem';
};


//Event Listener on button to check answer: 

document.querySelector(".check").addEventListener("click", gameLogic);


//reload game
let reload = document.querySelector('.again').addEventListener('click',reloadGame);






//OLD REFACTORED GAME LOGIC: 
// } else if(guessNum > secretNum){
// 	//when guess is too high
// 	if(score>1){
// 		document.querySelector('.message').textContent = '☹ Too high, try again!'
// 		score--
// 		document.querySelector('.score').textContent = score;
// 	}else { 
// 		document.querySelector('.message').textContent = '☹ You lost!'
// 		document.querySelector('.score').textContent = 0;
// 	}
// } else if(guessNum < secretNum){
// 	//guess is too low

// 	if(score > 1){
// 		document.querySelector('.message').textContent = '🤒Too low, try again!'
// 		score--
// 		document.querySelector('.score').textContent = score;
// 	}else { 
// 		document.querySelector('.message').textContent = '☹ You lost!'
// 		document.querySelector('.score').textContent = 0;
// 	}
// }


