class Details {
	constructor(name, year){
		this.name=name;
		this.year=year;
	}
}
class Park extends Details{
	constructor(name, year, treenum, area){
		super(name, year);
		this.treenum = treenum;
		this.area = area;
	}
	treeDensity(){
		const tree_den = treenum/area;
		console.log("The "+this.name+" has a tree density of "+tree_den+" per squares");
	}
} 
class Street extends Details{
	constructor(name, year){
		this.size = size;
	}
	type_of_street(){
		let typeSt = new Array();
		typeSt[0]='Tiny';
		typeSt[1]='small';
		typeSt[2]='medium';
		typeSt[3]='large';
		typeSt[4]='huge';

		console.log('${this.name} was built in ${this.year} , with type ${this.size}.');
	}
}

function report(){
	console.log("------ Report for Street -------");
	console.log("our 3 parks have an average" );
}





// class Park{
// 	constructor(name,year){
// 		this.name = name;
// 		this.year = parseInt(year);
// 	}
// }
// class Streets{
// 	constructor(name,year){
// 		this.name = name;
// 		this.year = year;
// 	}
// }
// let sum=0;
// let num = 0;
// let parkList=[];
// let streetList=[];
// const addbtn = document.getElementById('add');
// const findAvg = document.getElementById('avg');
// const adding = function addPT(){
// let what = prompt("What do u want to add ? Park or Tree");
// if(what== 'park'){
// 	let myPark = new Park();
// 	let x = prompt("What the name of park?");
// 	let y= prompt("The year that tree built in?");
// 	let n= prompt("Number of trees in the park?");
// 	let m= prompt("Area of the park?");

// 	myPark.name=x;
// 	myPark.year=y;
// 	let z = parseInt(y);
// 	let tree_num = parseInt(n);
// 	let area = parseInt(m);
// 	let den = tree_num/area;
// 	parkList.push({name: x,year:z,trees:tree_num, area:area,density:den});
// 	console.log(z);
// 	num = num+1;
//     document.getElementById("park").innerHTML ="new Park : " + x +" "+ z;
// }else if(what ==='street'){
// 	let myStreet = new Streets();
// 	let x = prompt("What the name of street?");
// 	let y= prompt("The year that street built in?");
// 	myStreet.name=x;
// 	myStreet.year=y;
// 	let z = parseInt(y);
// 	streetList.push({name: x,year:z});
// 	console.log(z);
// 	num = num+1;
//     document.getElementById("park").innerHTML ="new street : " + x +" "+ z;
// }
// else{
// 	alert('Something Wrong!');
// }
// }

// const avg_town = function avgTown(){
	
// 	for(let i=0; i<parkList.length;i++){
		
//           sum = parkList[i].year;
		
// 	}
// 	console.log("The averge age of the town is "+((2021-sum)/3));
// }

// const max_trees = function maxTrees(){
//        for(let i=0; i<parkList.length;i++){
//        	 if(parkList[i] > 1000){
//        	 	maxTT=parkList[i].name;
//        	 }
       	 
//        }
//        console.log(maxTT);
       
// }

findAvg.addEventListener('click',avg_town);
addbtn.addEventListener('click',adding);