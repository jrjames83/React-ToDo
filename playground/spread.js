// function add(a,b) {
// 	console.log( a+b );
// }


// // Spread operator - call function with args in array

// var toAdd = [9,5];

// add(toAdd[0], toAdd[1])

// add(...toAdd)

// var groupA = ['jeff', 'chance'];
// var groupB = ['Vikram'];
// var final = [...groupA, ...groupB] // spread operator flattens the array
// var fina2 = [groupA, groupB]
// console.log(final)
// console.log(fina2)


var person = ['Jeff', 32];
var person2 = ['Chance', 4];

function greet(name, age) {
	console.log(name, age)
}


greet(...person)


