var database = [
{
	username: "athena",
	password: "secret1"
},
{
	username: "anjali",
	password: "secret2"
},
{
	username: "aryan",
	password: "secret3"
},
{
	username: "ananya",
	password: "secret4"
},
{
	username: "anish",
	password: "secret5"
},
{
	username: "mehwish",
	password: "secret6"
}
];

var newsFeed = [
{
	username: "Bobby",
	timeline: "Hey, it's my birthday"
},
{
	username: "Sally",
	timeline: "I love Java"
},
{
	username: "Rachel",
	timeline: "Just Graduated"
}
];

function isUserValid(username, password)
{
	for(var i=0;i<database.length;i++)
	{
		if(database[i].username ===username && database[i].password===password)
			return true;
	}
	return false;
}

function signIn(username, password)
{
	if(isUserValid(username,password))
	{
		console.log(newsFeed);
	}
	else
	{
		alert("Sorry, wrong username or password!");
	}
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);