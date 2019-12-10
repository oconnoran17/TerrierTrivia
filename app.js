(function(){
    //Initialize Firebase
        const config={
            apiKey:"AIzaSyCOp8f7iPBDQfqUolcH97xgDCgBgFVNZWM",
            authDomain:"quizapp-29372.firebaseapp.com",
            databaseURL:"https://quizapp-29372.firebaseio.com",
            storageBucket:"quizapp-29372.appspot.com"
            //MessagingSender
        };
    firebase.initializeApp(config);
    
//     var userDataRef = firebase.database().ref("user").orderByKey();
//     userDataRef.once("value").then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       var key = childSnapshot.key;
//       var childData = childSnapshot.val();              

//       var name_val = childSnapshot.val().Name;
//       var id_val = childSnapshot.val().AssignedID;

//       $("#name").append(name_val);
//       $("#id").append(id_val);

//       });
//     });
    
    
    
    
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

     //Get Elements
     const preObject=document.getElementById('user');

     //Create References
     const dbRefObject = firebase.database().ref().child('user');
     //Syn Changes
     dbRefObject.on('value',snap => console.log(snap.val()));
    var data = [1,2,3,4,5,6,8,9,10];
    var list_html = "<ul>";
    var my_div = document.getElementById("leaderboard_div");
    for (var i = 0; i < data.length; i++) {
        list_html += "<li>" + data[i] + "</li>";
    }
    list_html += "</ul>";
    my_div.innerHTML = list_html;

}());
