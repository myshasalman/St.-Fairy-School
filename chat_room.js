var firebaseConfig = {
      apiKey: "AIzaSyDj6udjALU9TPPY_Qz6dTlmtVVFjx7d-Gs",
      authDomain: "st-fairy-school.firebaseapp.com",
      databaseURL: "https://st-fairy-school-default-rtdb.firebaseio.com",
      projectId: "st-fairy-school",
      storageBucket: "st-fairy-school.appspot.com",
      messagingSenderId: "795520427425",
      appId: "1:795520427425:web:b3ff086ab43333d98817e0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function add_room()
{
    var username = document.getElementById("inputroom").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding the name of user"
    });
}