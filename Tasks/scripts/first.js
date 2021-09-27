/** first Task    **/
const MaxHeight = prompt("what is max height?");
const JohnHeight = prompt("what is Johan height?");
const MaxMass = prompt("what is max Mass?");
const JohanMass = prompt("what is johan Mass?");
let state = false;
let MaxBmi = (MaxMass / (MaxHeight * MaxHeight));
let JohnBmi = (JohanMass / (JohnHeight * JohnHeight));

if (MaxBmi > JohnBmi){
	state = true;
}
else {
	state = false;
}

console.log("Is Max have a higher BMI " +state);