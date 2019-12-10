(function(){
    //Initialize Firebase
        const config={
            apiKey:"AIzaSyCOp8f7iPBDQfqUolcH97xgDCgBgFVNZWM",
            authDomain:"quizapp-29372.firebaseapp.com",
            databaseURL:"https://quizapp-29372.firebaseio.com",
            storageBucket:"quizapp-29372.appspot.com"

        };
    firebase.initializeApp(config);
    var ref = firebase.database().ref();

    ref.on("value", function(snapshot) {
       console.log(snapshot.val());
    }, function (error) {
       console.log("Error: " + error.code);
    });

//     //Get Elements
//     const preObject=document.getElementById('user');

//     //Create References
//     const dbRefObject = firebase.database().ref().child('user');
//     //Syn Changes
//     dbRefObject.on('value',snap => console.log(snap.val()));

}());
