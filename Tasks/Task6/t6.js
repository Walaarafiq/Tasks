let total =0;
let tips = [.2 , 1.5 , .1]; /** array for tips **/
let name = 'johan';
const bill = [124, 48, 268]; /** array for bills**/
const final_amounts_arr = [];
   for(let i=0; i< bill.length; i++){
   	if(bill[i] <= 50){
   		total = bill[i] * tips[0];
   		
   	}
   	else if( 200 < bill[i] < 50){
   		total = bill[i] * tips[1];
   		
   	}
   	else if(bill[i] >= 200){
   		total = bill[i] * tips[2];
   		
   	}
   	final_amounts_arr[i]=total;

   	console.log("The final amount is : "+total);
   
   }
   	console.log(final_amounts_arr);