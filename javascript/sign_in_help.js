var config = {
    apiKey: "AIzaSyAIQTk0muzBb4lnRYLw5EOqW-c8NyNPAY0",
    authDomain: "lista-d3a6d.firebaseapp.com",
    databaseURL: "https://lista-d3a6d.firebaseio.com",
    projectId: "lista-d3a6d",
    storageBucket: "lista-d3a6d.appspot.com",
    messagingSenderId: "264837662672"
};

firebase.initializeApp(config);

//Send a password Reset Email
var auth = firebase.auth();
var emailAddress = $('email');

auth.sendPasswordResetEmail(emailAddress).then(function() {
    
    
}).catch(function(error) {
  // An error happened.
});



































// //Sign in help page
// $(document).ready(function () {

//     //Grab user input from text fields
//     $("#sign-in-help").on("click", function (event) {
//         event.preventDefault();

//         if ($("#email").val() != '') {
//             var userEmail = $("#email").val().trim();
//         }
//         resetPassword($email, $database);
//     })
// })