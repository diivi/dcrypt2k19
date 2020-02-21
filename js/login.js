/*var firebaseConfig = {
    apiKey: "AIzaSyBuM8Cpvnd_Mlg0-WghgaCBLONt2je4TQc",
    authDomain: "dcrypt2019.firebaseapp.com",
    databaseURL: "https://dcrypt2019.firebaseio.com",
    projectId: "dcrypt2019",
    storageBucket: "dcrypt2019.appspot.com",
    messagingSenderId: "426265522675",
    appId: "1:426265522675:web:372f0bd9b46f2edbfca286",
    measurementId: "G-V73X4SY2RH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
*/
  const username = document.querySelector("#user_name");
  const pass = document.querySelector("#user_pass");
  const sub = document.querySelector("#submitt");

  sub.addEventListener("click", function()
  {
      console.log("asds");
    db.collection("UserDB").where("username", "==", username.value)
    .get()
    .then(function(querySnapshot)
    {
        querySnapshot.forEach(function(doc)
        {
            if(pass.value == doc.data().password)
            {
                localStorage.setItem("loggedinuser", doc.id);
                window.location.href = "dashboard.html";
            }
        });
    });
  });
