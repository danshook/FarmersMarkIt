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

  // ---------- Check if username is available ----------
  // ---------- Check if email already exists ----------

  // *********************************************************
  //                         Sign-in
  // *********************************************************

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // user is signed in
      console.log(user);
      alert("You are logged in!");
      // Toggle on/off navigation bar for users' profile and log-out buttons
      $("#profile").removeAttr("hidden");
      // window.location.replace(
      //   "file:///Users/danielshook/Documents/UA%20Bootcamp/Project_1/FarmersMarkIt/index.html"
      // );
    } else {
      // no user is signed in
      console.log("not logged in");
      // alert("Not logged in");
    }
  });

  // Event listener for login event
  $("#signIn").on("click", function(event) {
    event.preventDefault();

    // Grab user input from email field
    var txtEmail = $("#user")
      .val()
      .trim();

    // Grab user input from password field
    var txtPassword = $("#pass")
      .val()
      .trim();

    // log email and password
    console.log("Email: " + txtEmail);
    console.log("Password: " + txtPassword);

    // Clears all of the text-boxes
    $("#user").val("");
    $("#pass").val("");

    // Sign-in
    // Daniel's ToDo: Verify real email addresses
    firebase
      .auth()
      .signInWithEmailAndPassword(txtEmail, txtPassword)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password");
        } else {
          alert(
            "Error Code: " + errorCode + "\n\nError Message: " + errorMessage
          );
        }
        console.log(error);
      });
  });

  // *********************************************************
  //                         Sign-out
  // *********************************************************

  // Event listerner for user Sign-out then redirect to home page
  $("#signOut").on("click", function(event) {
    firebase.auth().signOut();
    console.log(user);
    alert("You are signed out");
    window.location.replace(
      "file:///Users/danielshook/Documents/UA%20Bootcamp/Project_1/FarmersMarkIt/index.html"
    );
  });
});
