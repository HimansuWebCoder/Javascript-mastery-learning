// exisiting function
// alert()
// prompt()
// alert -> f alert() { [native code] }
// () -> execute the function

// function sayHello() {
// 	console.log("Hello");
// }

// sayHello();

// // function expression 2nd way 

// var sayBye = function() { // doesn't have a name called Anonymous function
// 	console.log("Bye");
// }

// sayBye();

// function name() {}

// function sing() {
// 	console.log("AHHHHHHHHHH");
// 	console.log("TEEEEEEEEEE")
// }

// sing();

// function sing2() {
// 	console.log("laaa deee daaa");
// 	console.log("laaaaaaaa");
// }

// sing2();

// DRY - Don't Repeat Yourself

// function sing(song) {
// 	console.log(song);
// }

// sing("Laaa deee daaa");
// sing("hellloooooo");
// sing("backstreets back alright");

// return

// function multiply(a, b) {
// 	// console.log(a, b);
// 	// return a * b; // give only value otherwise undefined
// 	// console.log(a * b); // give two value undefined and output
// 	// return a; // only one statment to return otherwise others have no return
// 	// return a * b;
// 	// return b;
// }

// function multiply(a, b) {
// 	if (a > 10 || b > 10) {
// 		return "that's too hard";
// 	} else {
// 		return a*b;
// 	}
// 	// return a *b; // not 
// }

// multiply(5, 10);

// var a = function (a, b) {
// 	if (a > 10 || b > 10) {
// 		return "that's too hard";
// 	} else {
// 		return a*b;
// 	}
// }

// a(5, 10)

function multiply(a, b) { // -> parameters
	return a*b;
}

// alert(multiply(3,4));
// var total = multiply(4, 5); // -> arguments
// alert(total);

// parameters
// arguments

