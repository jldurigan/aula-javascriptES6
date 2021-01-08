function teste() {
	var func = () => {
		let variavel = "teste";
		variavelVar = "teste";
	        console.log("----- escopo arrow function ----");
		console.log(typeof variavel);
		console.log(typeof variavelVar);
	}
	func();
	console.log("----- escopo function ----");
	console.log(typeof variavel);
	console.log(typeof variavelVar);
}
var variavelVar = 1;
console.log(typeof variavelVar);
teste();
console.log(typeof variavel);
console.log(typeof variavelVar);