var user = {    // really really valuable like user information
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells: ["abrakadra", "shazam", "boo"],
	shout: function() {
		console.log("AHHHHHHH!");
	}
};

// console.log(user);

// var list = ["apple", "banana", "orange"]; // really really valuable like shopping list, todo list etc
// console.log(list);

// console.log(user.name);
// console.log(user.age);
// console.log(user.hobby);
// console.log(user.isMarried);

// user.favouriteFood = "spinach";
// console.log(user);

// user.isMarried = true;
// console.log(user);

// console.log(user.spells[1])

var list = [
   {
   	username: "andy",
   	password: "secre",
   },
   {
   	username: "jess",
   	password: "123"
   }
]

console.log(list[0].password);

// console.log(user.shout());
// user.shout() // -> this is a method a function inside a object is called method (user)

// like list.pop() -> pop() is a method of list;

// console.log() -> log() is a method of console;
// console -> an object
// log -> a method

// user2 = {}
// list2 = []

// console.log(list[0]);
// console.log(list2[0]);

// var a;
// a // undefined

var emptyObj = {};
// emptyObj;

var nullObj = null; // full empty
console.log(nullObj);

// nullObj.name = "Andy";
// console.log(nullObj); // can't set property in null object;

emptyObj.name = "Andy";
console.log(emptyObj);

// Until now , That was a whole lot of stuff.
// But you've actually learned so much in Javascript.
// This is pretty much, I would say , 80% of what you need to know in Javascript to work professionally.
// And it sounds like we didn't cover that much.
// Or maybe to some it may feel like we covered a lot.
// But in terms of syntax, just looking at this, we've only learned a few words and a few ways fo doing things.
// With this new found power, I'm going to show you how we can build a simple Facebook with what we just learned.

