const one = {question:"Is javascript is the coolest programming language in the world!",
	 choice_1 : '0: true',
	 choice_2 : '1: false',
	 corr:'0'};
const two = {question:"The Mr of the course",
	 choice_1 : '0: johns',
	 choice_2 : '1: Max',
	 corr:'1'};
const three = {question:"Color of trees?",
	 choice_1 : '0: blue',
	 choice_2 : '1: green',
	 corr:'1'};
const four = {question:"the capital of palestine?",
	 choice_1 : '0: jerusalem',
	 choice_2 : '1: gaza',
	 corr:'0'};

const listQ = new Array();
listQ[0]=one;
listQ[1]=two;
listQ[2]=three;
listQ[3]=four;
console.log(listQ);
let score=0;
const startbtn = document.getElementById('start');	
const answer = function nextQuestion(i){
   for (i=0; i<listQ.length; i++){
	let q = listQ[i];
	
	console.log (q.question);
	console.log (q.choice_1);
	console.log (q.choice_2);
	let answer = prompt('Choose the correct answer');
		if(q.corr === answer){
			console.log('correct answer');
			score = score+1;
			console.log('Your score '+ score);
			console.log('---------------');
			
		}
		else if (answer === 'exit'){
			answer.style.display='none';
			console.log('Quit!');
		}
		else{
			console.log('wrong answer , try again');
			console.log('Your score '+ score);
			console.log('---------------');
			nextQuestion(i+1);
		}
}

}
startbtn.addEventListener('click',answer);