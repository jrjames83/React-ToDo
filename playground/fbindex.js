import firebase from 'firebase';


var config = {
apiKey: "AIzaSyBRdN5WbSyVmDUcvVEJvMo-sCkaSdxwgyc",
authDomain: "jeffjamestodoapp.firebaseapp.com",
databaseURL: "https://jeffjamestodoapp.firebaseio.com",
storageBucket: "jeffjamestodoapp.appspot.com",
messagingSenderId: "1093013088068"
};

firebase.initializeApp(config);

// set wipes all the data at the current reference

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name:'Todo App',
		version: 1.0
	},
	isRunning: true,
	user: {
		name: "Jeffrey",
		age: 32
	}
})

// var notesRef = firebaseRef.child('notes');

// notesRef.on('child_added', function(value) {
// 	console.log("Child Added: ", value.val())
// })


// notesRef.on('child_changed', function(value) {
// 	console.log("Child Changed: ", value.val())
// })

// notesRef.on('child_removed', function(value) {
// 	console.log("Child Removed: ", value.val())
// })
// var newNoteRef = notesRef.push({
// 	text: 'Walk the Collie'
// })

// Get the ID of the item addded


// Store a ref to the todos array
var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', function(value) {
	console.log("Child Added: ", value.val())
})
todosRef.push({
	text: 'Walk the Collie'
})

var todoRef = todosRef.push({
	text: 'Close on the house'
})

console.log(todoRef)
// Use child added, print out key and value to the screen
// Add 2 todos to the arrya, push calling text property







/*
// -------HANDLING UPDATES TO NESTED ELEMENTS
// --- ALSO RETURNS A PROMISE
// Update a nested property like app > name
// You can use a path for nested objects
firebaseRef.update({
	'app/name': "Todo App Updated"
})

// OR

firebaseRef.child('app').update({
	name: 'Todo APp Final Update',
	breed: 'Border collie'
}).then(function(value) {
	console.log(value)
}, function(reason) {
	console.log(reason)
})

// Challenge - update the appname and user

firebaseRef.update({
	'app/name': 'Challenge update'
// On the success callback, update the child value
}).then(function(value) {
	// The below call actually executes LAST...
	firebaseRef.child('user').update({
		name: null
	}, function(e) {
		console.log(e)
	})

}, function(error) {
	console.log(error)
})

// Simple MultiPath Update approach
firebaseRef.update({
	'app/name' : 'final app update name',
	'user/name' : 'Bobance'
})

// Removing Elements

firebaseRef.child('app/name').remove()

// Can also set values to null

firebaseRef.child('app').update({
	version: '2.0',
	name: null // effectively removes it
})

// Remove User age

firebaseRef.update({
	'user/name': 'new username here',
	'app/new_field': 'new one'
}).then(function(value) {
	console.log("it worked")
}, function(er) {
	console.log(er);
})

// Fetching Data:

firebaseRef.once('value').then(function(snapshot) {
	console.log("listenting", snapshot.val())
}, function(e) {
	console.log('Cannot fetch', e)
})

// Listen to changes on the database
// Cannot use a promise
// can derefernece the below by calling off()
firebaseRef.on('value', (snapshot) => {
	console.log('Got value', snapshot.val())
})

firebaseRef.update({
	isRunning: false
})
*/
// Liste to changes for any part of the database

// Challenge Listen for changes to the user object, then update it in user


// firebaseRef.on('value', (snapshot) => {
// 	console.log('Got Updated Value', snapshot.val())
// })

// firebaseRef.update({
// 	'user/name': 'Listening for a new user',
// 	'app/booooo': 'hahahahaha'
// })

// Dealing with Arrays










