// for

// var todos = [
// 	"clean room",
// 	"brush teeth",
// 	"exercise",
// 	"study javascript",
// 	"eat healthy"
// ];

// console.log(todos.length);
// console.log("Hello Himansu".length);
// var name = "himansu";
// console.log(name.length);

// var i = 0;
// i++;
// console.log(i);
// i++;
// console.log(i);


// for (var i = 0; i < todos.length; i++) {
//     // console.log(todos[i] + "!");
//     // todos[i] = todos[i] + "!";
//     // todos[i] += "!";
//     // console.log(todos[i] += "!");
//     todos.pop();
// }


// var i = 0; 

// if (i < todos.length) { // i = 0, i < 5
// 	todos.pop(); // one gone
// 	console.log(todos);
// }

// i++;

// if (i < todos.length) { // i = 1; i < 4
// 	todos.pop(); // one gone
// 	console.log(todos);
// }

// i++;

// if (i < todos.length) { // i = 2; i < 3
// 	todos.pop();
// 	console.log(todos);
// }

// i++;

// if (i < todos.length) { // i = 3; i < 2 not possible;
// 	todos.pop();
// 	console.log(todos);
// }


// var todosLength = todos.length;

// for (var i = 0; i < todosLength; i++) {
//     // console.log(todos[i] + "!");
//     // todos[i] = todos[i] + "!";
//     // todos[i] += "!";
//     // console.log(todos[i] += "!");
//     todos.pop();
// }

// while

// var counterOne = 0;
// while (counterOne < 10) {
// 	console.log(counterOne);
// 	counterOne++;
// }

// var counterOne = 10;
// while (counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne--;
// }

// var counterOne = 10;
// while (counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne++; // this keep going infinity loop
// }

// var counterOne = 10;
// while (counterOne > 10) {
// 	console.log("while ", counterOne);
// 	counterOne++; // this keep going infinity loop
// }


// do...while

// var counterTwo = 10;
// do {
// 	console.log(counterTwo);
// 	counterTwo--; // also this create infinity loop
// } while (counterTwo > 0);

// counterTwo = 10;
// do {
// 	console.log("do while ", counterTwo);
// 	counterTwo--; // also this create infinity loop
// } while (counterTwo > 10);

// But to be honest with you, most of the time you're going to be using a for loop.

// also a better for this

// forEach

var todos = [
   "clean room",
   "brush teeth",
   "exercise",
   "study javascrpt",
   "eat healthy"
];

var todosImportant = [
   "clean room",
   "brush teeth",
   "exercise",
   "study javascrpt",
   "eat healthy"
];

// todos.forEach(function(i) {
// 	console.log(i);
// })

// todos.forEach(function(todo, i) {
// 	console.log(todo, i);
// })

// todos.forEach((x) => {
// 	console.log(x);
// })

function logTodos(todos, i) {
  console.log(todos, i);
}

todos.forEach(logTodos);

todosImportant.forEach(logTodos);

// [].forEach
console.log([].forEach);

// go to caniuse.com to check compatibility and check....