import firebase from 'firebase';



try {

	var config = {
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTH_DOMAIN,
		databaseURL: process.env.DATABASE_URL,
		storageBucket: process.env.STORAGE_BUCKET
	};

	console.log(config);

	firebase.initializeApp(config);



} catch (e) {


}


// set wipes all the data at the current reference

export var firebaseRef = firebase.database().ref();
export default firebase; // Root library to clean-up files