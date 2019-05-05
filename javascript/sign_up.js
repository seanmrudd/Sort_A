var config = {
    apiKey: "AIzaSyAIQTk0muzBb4lnRYLw5EOqW-c8NyNPAY0",
    authDomain: "lista-d3a6d.firebaseapp.com",
    databaseURL: "https://lista-d3a6d.firebaseio.com",
    projectId: "lista-d3a6d",
    storageBucket: "lista-d3a6d.appspot.com",
    messagingSenderId: "264837662672"
};

firebase.initializeApp(config);

// Grab user inputs and create a password authentication with firebase

//Sign-up
$('#signupBtn').click(function (event) {
    event.preventDefault();

    if ($('#email').val().trim() != '') {
        var email = $('#email').val().trim();
    }
    console.log(email);
    if ($('#password').val().trim() != '') {
        var password = $('#password').val().trim();
    }
    console.log(password);

    const auth = firebase.auth();

    firebase.auth().createUserWithEmailAndPassword(email, password);

    if ($('#zip').val().trim() != '') {
        zip = $('#email').val().trim();
    }

    console.log(auth.createUserWithEmailAndPassword(email, password))
})



































// //Create user account (Sign Up)
// $(document).ready(function () {

//     //Grab user input
//     $("#signupBtn").on("click", function (event) {
//         event.preventDefault();
//         //Check if email is valid email format, name isn't blank, and zip code is 5 digits
//         if ($("#email").val() != '') {
//             var email = $("#email").val().trim();
//         }
//         if ($("#password").val() != '') {
//             var password = $("#password").val().trim();
//         }
//         if ($("#zipCode").val() != '') {
//             var zip = $("#zipCode").val().trim();
//         }

//         //Validate email
//         function validateEmail(email) {
//             var re = /\S+@\S+\.\S+/;
//             return re.test(email);
//         }

//         if (validateEmail(email)) {

//         //Push email to data
//         data_AddUser(email, password, zip);
        
//         }
//     })
// })


