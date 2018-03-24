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

  //When user clicks sign up
  //Push values into user object
  $("#signUp").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text-boxes
    if ($("#newUser").length) {
      username = $("#newUser")
        .val()
        .trim();
    }

    if ($("#email").length) {
      email = $("#email")
        .val()
        .trim();
    }

    if ($("#newPass").length) {
      password = $("#newPass")
        .val()
        .trim();
    }

    if ($("#newUser").length) {
      checkPass = $("#rePass")
        .val()
        .trim();
    }

    // Code for "Setting values in the database"
    database.ref("user").push({
      username: username,
      email: email,
      password: password
    });

    //Create acc on firebase when info is submitted
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  });

  // ---------- Checks if password match ----------

  function checkPasswordMatch() {
    var password = "";
    var confirmPassword = "";
    
    if ($("#newPass").length) {
      password = $("#newPass")
        .val()
        .trim();
    }

    if ($("#rePass").length) {
      confirmPassword = $("#rePass")
        .val()
        .trim();
    }
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
  //Show alert in real time
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
    alert("You are signed out");
    // window.location.replace("https://google.com");
  });
});
