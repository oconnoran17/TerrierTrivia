(function(){
    //Initialize Firebase
        var config={
            apiKey:"AIzaSyCOp8f7iPBDQfqUolcH97xgDCgBgFVNZWM",
            authDomain:"quizapp-29372.firebaseapp.com",
            databaseURL:"https://quizapp-29372.firebaseio.com",
            storageBucket:"quizapp-29372.appspot.com"
            //MessagingSender
        };
    firebase.initializeApp(config);
    
    var userDataRef = firebase.database().ref("UserData").orderByKey();
    userDataRef.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();              

      var name_val = childSnapshot.val().Name;
      var id_val = childSnapshot.val().AssignedID;

      $("#name").append(name_val);
      $("#id").append(id_val);

      });
    });
    
    
    
    
//     var userDataRef = firebase.database().ref("user").orderByKey();
//     userDataRef.once("value").then
//     (function(snapshot)) {
//      snapshot.forEach(function(childSnapshot){
//         var key = childSnapshot.key;
//         var childData = chil  
//     var ref = firebase.database().ref();

//     ref.on("value", function(snapshot) {
//        console.log(snapshot.val());
//     }, function (error) {
//        console.log("Error: " + error.code);
//     });

//      //Get Elements
//      const preObject=document.getElementById('user');

//      //Create References
//      const dbRefObject = firebase.database().ref().child('user');
//      //Syn Changes
//      dbRefObject.on('value',snap => console.log(snap.val()));

}());
