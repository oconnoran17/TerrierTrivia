 function onDatabaseChange(snap) {
     var list_html = "<ul>";
     var array = new Array();
     var count = 0;
     var colon = ": ";
     var space = " ";
     var data_obj = snap.val();
    var my_div = document.getElementById("leaderboard_div");
  
     //Put objects into an array
     for (var index in data_obj) {
         array[count] = [{name: data_obj[index].userName, score: data_obj[index].userScore}];
         count = count + 1;
     }
     
     //sort the array
     do{
        for (i = 0; i < (array.length-1); i++) {
          if(array[i].score < array[i+1].score) {
                let tmp = array[i];
                array[i] = array[i+1];
                array[i+1] = tmp;
                swapped = true;
          }
          else {
                swapped = false;
          }
        }
     }while(swapped);
       
    //add sorted objects to html
    for (j = 0; j < (array.length); j++) {
         console.log(array[j]);
         list_html += "<li>" + array[j].name + colon + space + array[j].score + "</li>";
     }
     list_html += "</ul>";
     my_div.innerHTML = list_html;
 }
    
//  function onDatabaseChange(snap) {
//      var list_html = "<ul>";
//      var colon = ": ";
//      var space = " ";
//      var data_obj = snap.val();
//     var my_div = document.getElementById("leaderboard_div");
//      for (var entry in data_obj) {
//          list_html += "<li>" + data_obj[entry].userName + colon + space + data_obj[entry].userScore + "</li>";
//      }
//      list_html += "</ul>";
//      my_div.innerHTML = list_html;
//  }

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
     //console.log("we are here");
     const dbRefObject = firebase.database().ref().child('user');
     //Syn Changes
     
   //Show sorted values in the console: works
//      dbRefObject.orderByChild("userScore").on("child_added", snap => {var data_obj = snap.val();
//            console.log(data_obj); 

//            var my_div = document.getElementById("leaderboard_div");
//             console.log(data_obj);
//            do {
//             for (var entry in data_obj) 
//             {
//                 console.log(entry);
//                 console.log(data_obj[entry]);
//                 var burak = data_obj[entry];
//                 console.log(burak.userScore);
//                 if (data_obj[entry].userScore < data_obj[entry + 1].userScore) {
//                        let tmp = data_obj[entry];
//                        data_obj[entry] = data_obj[entry + 1];
//                        data_obj[entry + 1] = tmp;
//                        swapped = true;
//                  }
//                }
//            } while(swapped);
//            for (var index in data_obj) {
//                 list_html += "<li>" + data_obj[index].userName + colon + space + data_obj[index].userScore + "</li>";
//             }
//             list_html += "</ul>";
//             my_div.innerHTML = list_html;   
//      });
   //Show sorted values on the page: does not work
     //dbRefObject.orderByChild("userScore").on("child_added", snap => {onDatabaseChange(snap);
     //})
   //Show unsorted values on the screen: works
     dbRefObject.on('value',snap => onDatabaseChange(snap));
 
//      dbRefObject.once('value').then(function(snapshot){
    
//            var data_obj = snapshot.val();
//            console.log(data_obj); 

//            var my_div = document.getElementById("leaderboard_div");
//             console.log(data_obj);
//            do {
//             for (var entry in data_obj) 
//             {
//                 console.log(entry);
//                 console.log(data_obj[entry]);
//                 var burak = data_obj[entry];
//                 console.log(burak.userScore);
//                 if (data_obj[entry].userScore < data_obj[entry + 1].userScore) {
//                        let tmp = data_obj[entry];
//                        data_obj[entry] = data_obj[entry + 1];
//                        data_obj[entry + 1] = tmp;
//                        swapped = true;
//                  }
//                }
//            } while(swapped);
//            for (var index in data_obj) {
//                 list_html += "<li>" + data_obj[index].userName + colon + space + data_obj[index].userScore + "</li>";
//             }
//             list_html += "</ul>";
//             my_div.innerHTML = list_html;      
      
      
//       });
     //dbRefObject.on('value',snap => {console.log(snap.val());
     //});
}());
