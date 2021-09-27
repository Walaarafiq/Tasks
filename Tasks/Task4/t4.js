let JohanTeam = (89+120+103)/3;
let MikeTeam = (116+94+123)/3;
let MaryTeam = (97+134+105)/3;

console.log('John avg ' +JohanTeam);
console.log('Mike avg ' +MikeTeam);
console.log('Mary avg ' +MaryTeam);

if(JohanTeam > MikeTeam && JohanTeam > MaryTeam){
	console.log("The Winners is Johan's Team , with average scores "+JohanTeam);
}
else if (MikeTeam > JohanTeam && MikeTeam > MaryTeam){
	console.log("The Winners is Mike's Team , with average scores "+MikeTeam);
}
else if (MaryTeam > JohanTeam && MaryTeam > MikeTeam){
	console.log("The Winners is Mary's Team , with average scores "+MaryTeam);
}
else if (JohanTeam === MikeTeam && JohanTeam > MaryTeam){
	console.log("Johan And Mike are evens , the winners");
}
else if (JohanTeam === MaryTeam && JohanTeam > MikeTeam){
	console.log("Johan And Mary are evens , the winners");
}
else if (MikeTeam === MaryTeam && MikeTeam > JohanTeam){
	console.log("Mike And Mary are evens , the winners");
}
console.log('Scores : ------------');
console.log('Johan Team Scores : 89, 120, 103');
console.log('Mike Team Scores : 116, 94, 123');
console.log('Mary Team Scores : 97, 134, 105');