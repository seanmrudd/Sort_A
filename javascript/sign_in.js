var config = {
    apiKey: "AIzaSyAIQTk0muzBb4lnRYLw5EOqW-c8NyNPAY0",
    authDomain: "lista-d3a6d.firebaseapp.com",
    databaseURL: "https://lista-d3a6d.firebaseio.com",
    projectId: "lista-d3a6d",
    storageBucket: "lista-d3a6d.appspot.com",
    messagingSenderId: "264837662672"
};

firebase.initializeApp(config);

//Grab user inputs to login into their firebase accounts

//Login
$('#loginBtn').click(function (event) {
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

    //
    auth.signInUserWithEmailAndPassword(email, password);

    if ($('#zip').val().trim() != '') {
        zip = $('#email').val().trim();
    }

    console.log(auth.signInUserWithEmailAndPassword(email, password))
})

























// //Login to Account
// $(document).ready(function () {

//     var useremail = localStorage.getItem('email')
//     var userid = localStorage.getItem('userid')
//     if (useremail && userid) {
//         //TODO: AUTO LOGIN
//         //if there is local storage value for 'email and 'password', load those values into form?

//     }
//     //Grab user input from text fields
//     $("#loginBtn").on("click", function (event) {
//         event.preventDefault();
//         $('#loginBtn').prop('disabled', true)
//         if ($("#username").val() != '') {
//             var userEmail = $("#username").val().trim();
//         }
//         if ($("#password").val() != '') {
//             var userPassword = $("#password").val().trim();
//         }

//         data_LogInUser(userEmail, userPassword);

//         if ($('#indeterminate-checkbox') = true) {
//             localStorage.setItem("email", userEmail);
//             localStorage.setItem("password", userPassword);
//         }
//     })

//     $(document).on('isLoggedIn', function (response) {
//         console.log(userEmail);
//         var userinfo = response.message
//         if (userinfo.userid) {
//             window.location.href = "userInterface.html"
//         } else {
//             $('#loginBtn').prop('disabled', false)
//         }
//     })



// })

                                            // //Login to Account
                                            // $(document).ready(function () {

                                            //     //Grab user input from text fields
                                            //     $("#login-btn").on("click", function (event) {
                                            //         event.preventDefault();

                                            //         if ($("#emailLogin").val() != '') {
                                            //             var userEmail = $("#emailLogin").val().trim();
                                            //         }
                                            //         if ($("#passwordLogin").val() != '') {
                                            //             var userPassword = $("#passwordLogin").val().trim();
                                            //         }

                                            //         data_LogInUser(userEmail, userPassword);

                                            //         window.location.href = "http://userpage.com";

                                            //     })
                                            // })