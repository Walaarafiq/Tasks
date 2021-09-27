let johan = {
  name: 'Johan Cage',
  mass: '60',
  height: '1.90',
  calcBMI: function(){
    this.bmi = this.mass / Math.pow(this.height,2);
  }

}
johan.calcBMI();
console.log(johan);
let mark = {
    name: 'Mark', 
  mass: '78',
  height: '1.75', /**?**/
  calcBMI: function(){
    this.bmi = this.mass / Math.pow(this.height,2);
  }
}
mark.calcBMI();
console.log(mark);
if(mark.bmi > johan.bmi){
  console.log('Mark has a higher BMI');
}
else if (mark.bmi < johan.bmi){
  console.log('Johan has a higher BMI');
} 
else {
  console.log('Mark and Johan has the same BMI');
}