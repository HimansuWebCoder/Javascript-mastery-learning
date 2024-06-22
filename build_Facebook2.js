// Build_Facebook2
// user credential signIn 

var database = [
    {
    	username: "andrei",
    	password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
    	username: "Bobby",
    	timeline: "So tired from all that learning!"
    },
    {
    	username: "Sally",
    	timeline: "Javascript is soooo coool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preety coool!"
    }
];


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


// function signIn(user, pass) {
//     if (user === database[0].username &&  pass === database[0].password) {
//         console.log(newsFeed);
//     }  else {
//     	alert("Sorry, wrong username and password!");
//     }
// }

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

 function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    }  else {
        alert("Sorry, wrong username and password!");
  }
}


 // function signIn(username, password) {
    // console.log(isUserValid(username, password));
    // if (user === database[i].username &&  pass === database[i].password) {
    //     console.log(newsFeed);
    // }  else {
    //     alert("Sorry, wrong username and password!");
    // }
// } 

signIn(userNamePrompt, passwordPrompt);

// we have built a facebook basic signIn 