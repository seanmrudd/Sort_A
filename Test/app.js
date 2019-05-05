// Initialize Firebase
var config = {
    apiKey: "AIzaSyAIQTk0muzBb4lnRYLw5EOqW-c8NyNPAY0",
    authDomain: "lista-d3a6d.firebaseapp.com",
    databaseURL: "https://lista-d3a6d.firebaseio.com",
    projectId: "lista-d3a6d",
    storageBucket: "lista-d3a6d.appspot.com",
    messagingSenderId: "264837662672"
};
firebase.initializeApp(config);

const database = firebase.initializeApp(config);

//User Authentication
const auth = firebase.auth();

//auth.onAuthStateChanged(firebaseUser => {};)


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

    //
    auth.createUserWithEmailAndPassword(email, password);

    if ($('#zip').val().trim() != '') {
        zip = $('#email').val().trim();
    }

    console.log(auth.createUserWithEmailAndPassword(email, password))
})

// //Login event
// $('#email').click(function (event) {
//     event.preventDefault();

//     if ($('#email').val().trim() != '') {
//         var email = $('#email').val().trim();
//     }
//     if ($('#password').val().trim() != '') {
//         var password = $('#password').val().trim();
//     }

//     //Login
//     auth.signInWithEmailAndPassword(email, password);

//     console.log(auth.signInWithEmailAndPassword(email, password));
// })

// //Real-time listener
// auth.onAuthStateChanged(firebaseUser => {
//     if(firebaseUser) {
//         console.log(firebaseUser);
//         } else {
//             console.log('not logged in')
//         }
// });


// //Log-out
// $('#loggOutBtn').click(function(){
//     auth.signOut();
// })




//Create A List

//Add Items to list





//Modify List Name

//Delete List





//Modify Item names

//Delete items




//Walmart API calls

//Google maps API calls

