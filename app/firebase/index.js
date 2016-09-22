import firebase from 'firebase';



try {

	var config = {
		apiKey: "AIzaSyBRdN5WbSyVmDUcvVEJvMo-sCkaSdxwgyc",
		authDomain: "jeffjamestodoapp.firebaseapp.com",
		databaseURL: "https://jeffjamestodoapp.firebaseio.com",
		storageBucket: "jeffjamestodoapp.appspot.com",
		messagingSenderId: "1093013088068"
	};

	firebase.initializeApp(config);



} catch (e) {




}








// set wipes all the data at the current reference

export var firebaseRef = firebase.database().ref();
export default firebase; // Root library to clean-up files