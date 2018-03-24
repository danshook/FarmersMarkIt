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

  //Global variables
  var username = "";
  var email = "";
  var password = "";
  var checkPass = "";
  var name, photoUrl, uid;

  //When user clicks sign up
  //Push values into user object
  $("#signUp").on("click", function(event) {
    event.preventDefault();

    var username = "";
    var email = "";
    var password = "";
    var checkPass = "";

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

    if ($("#rePass").length) {
      checkPass = $("#rePass")
        .val()
        .trim();
    }
    var name =
      $("#firstName")
        .val()
        .trim() +
      " " +
      $("#lastName")
        .val()
        .trim();
    var vendor = $("#venName")
      .val()
      .trim();
    var type = $("#typeVen").val();

    var bio = $("#bio").val();

    // Code for "Setting values in the database"
    database.ref("user").push({
      email: email,
      password: password,
      name: name,
      vendor: vendor,
      type: type,
      bio: bio
    });

    //Create user with password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.location.replace("index.html"); //Send user to homepage
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
  $("#rePass").keyup(checkPasswordMatch);

  // ---------- Check if username is available ----------
  // ---------- Check if email already exists ----------

  // *********************************************************
  //                         Sign-in
  // *********************************************************

  //Realtime listener
  firebase.auth().onAuthStateChanged(function(user) {
    if (user != null) {
      console.log(user);
      // user is signed in
      // alert("You are logged in!");
      // Toggle on/off navigation bar for users' profile and log-out buttons
      $("#profile").removeAttr("hidden");
      $(".profile").text(user.email);
      $(".sign-in").remove(); //Remove sign-in button when a user is signed in
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
    window.location.replace("index.html");
    $("#profile").removeAttr("hidden");
    $(".profile").text("Signed Out");
  });
  // *********************************************************
  //                         When Signed In
  // *********************************************************
});
