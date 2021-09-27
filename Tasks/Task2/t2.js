/**second task */
let round = new Array ();
for(let i = 1; i<20; i++){
	round[i] = dice;
	let current_dice= round[i];
	let last_dice = round[i-1];
	if( current_dice ===6 && last-dice ===6){
		 scores[activePlayer] = 0;
         document.querySelector('#score_0').textContent='0';
		 nextPlayer();
	}
	else {
		nextPlayer();
	}
}

/**b
  after create 2 inputs element in html and give it an id = "inputField0"
  and other with an id = "inputField1"
**/
let element0 = document.getElementById('inputField0').value;
let element1 = document.getElementById('inputField0').value;
function setScore (){
	if (activePlayer == ('player-1')){
		scores[activePlayer] = element0;
	
	}
	else{
		scores[activePlayer] = element1;
	}
}
/** c**/
let dice2= Math.random()*6;
if(dice1 !==1 && dice2 !==1){
	roundScore = dice1 + dice2;
	document.querySelector('#current').textContent = roundScore;
}else {
	nextPlayer();
}