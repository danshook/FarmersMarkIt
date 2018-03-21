// ---------- Sign up JS ----------
$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDKcl2RLFtvO_JaPaHK46UzCjOJ_hp3MPA",
    authDomain: "farmers-markit.firebaseapp.com",
    databaseURL: "https://farmers-markit.firebaseio.com",
    projectId: "farmers-markit",
    storageBucket: "farmers-markit.appspot.com",
    messagingSenderId: "236876279787"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  //NEW USER variables
  var username = "";
  var email = "";
  var password = "";
  var checkPass = "";
  //Add to firebase

  //Get user info and store into variable
  var email = $("#email") //email
    .val()
    .trim();
  var userName = $("#newUser") //username
    .val()
    .trim();
  var password = $("#newPass") //password
    .val()
    .trim();
  var checkPass = $("#rePass") //retyped password
    .val()
    .trim();

  //When user clicks sign up
  //Push values into user object
  $("#signUp").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text-boxes
    username = $("#newUser")
      .val()
      .trim();
    email = $("#email")
      .val()
      .trim();
    password = $("#newPass")
      .val()
      .trim();
    checkPass = $("#rePass")
      .val()
      .trim();

    // Code for "Setting values in the database"
    database.ref("user").push({
      username: username,
      email: email,
      password: password
    });
  });

  // ---------- Checks if password match ----------

  function checkPasswordMatch() {
    var password = $("#newPass")
      .val()
      .trim();
    var confirmPassword = $("#rePass")
      .val()
      .trim();
    //Conditions to check if passwords that was typed in matches
    if (password != confirmPassword) {
      $("#CheckPasswordMatch").text("Passwords do not match!");
    } else {
      $("#CheckPasswordMatch").text("Passwords match.");
    }
  }
  checkPasswordMatch();

  //Hide div first
  $("#CheckPasswordMatch").hide();

  //Show when password is being typed in
  $("#rePass").on("keyup", function() {
    $("#CheckPasswordMatch").show();
  });
  $("#rePass").keyup(checkPasswordMatch);
});

// ---------- Check if username is available ----------
// ---------- Check if email already exists ----------

// *********************************************************
//                  Sign-in / Sign-out
// *********************************************************

// Event listener for login event
$("#signIn").on("click", function(event) {
  event.preventDefault();

  // Grab user input from email field
  txtEmail = $("#user")
    .val()
    .trim();

  // Grab user input from password field
  txtPassword = $("#pass")
    .val()
    .trim();

  // Test sign-in button is working
  // alert(txtEmail + " " + txtPassword);

  // log email and password
  console.log("Email: " + txtEmail);
  console.log("Password: " + txtPassword);

  // Clears all of the text-boxes
  $("#user").val("");
  $("#pass").val("");
});

// Sign-in
// TODO: CHECK FOR REAL EMAIL
firebase
  .auth()
  .signInWithEmailAndPassword(txtPassword, txtPassword)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error Code: " + errorCode + "Error Message: " + errorMessage);
    // ...
  });

// Add a realtime listener
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // user is signed in
    console.log(user);
    alert("You are logged in!");
    // window.location.replace("https://google.com");
  } else {
    // no user is signed in
    console.log("not logged in");
    // alert("Not logged in");
  }
});

// Event listerner for user Sign-out then redirect to home page
$("#signOut").on("click", function(event) {
  firebase.auth().signOut();
  alert("You are signed out");
  // window.location.replace("https://google.com");
});
