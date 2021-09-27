let tips = 0;
let total =0;
const tips_final = [];
const amounts= [];
let johan = {
	name:'johan',
	bills:[124, 48, 268, 180, 42],
	calculateTip: function(){
		for(let i=0; i<this.bills.length; i++){
			if (this.bills[i] < 50){
				tips = 0.2;
			}
			else if (200 <= this.bills[i] <= 50){
				tips = 1.5;
			}
			else if (this.bills[i] > 200){
				tips = 0.1;
			}
			tips_final[i] = this.bills[i]*tips;
			amounts[i] = this.bills[i] + (this.bills[i] * tips);
   			
		}

	}
}
johan.calculateTip();
console.log(johan);
console.log("the final tips : "+tips_final);
console.log("the final amounts : "+amounts);