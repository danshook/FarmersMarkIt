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
  var storage = firebase.storage();

  //Global variables
  var name, photoUrl, uid, username, email, password, checkPass;
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
    database.ref("vendor/info").push({
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
      });
    window.location.replace("index.html"); //Send user to homepage
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
  //Realtime listener
  //When change in authentication happens
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      // User is signed in
      $("#profile").removeAttr("hidden");
      $(".profile").text(user.email);
      $(".sign-in").remove(); //Remove sign-in button when a user is signed in
    } else {
      // User is signed out.
      console.log("You are not signed in.");
    }
  });
  // *********************************************************
  //                         Sign-out
  // *********************************************************
  // Event listerner for user Sign-out then redirect to home page
  $("#signOut").on("click", function(event) {
    firebase.auth().signOut();
    window.location.replace("index.html");
    //$("#profile").removeAttr("hidden");
    //$(".profile").text("Signed Out");
  });
  // *********************************************************
  //                         When Signed In
  // *********************************************************
  // *********************************************************
  //                         Permanently Added to the page
  // *********************************************************

  //This is to write user info to their page
  database.ref("vendor/info").on("child_added", function(childSnapshot) {
    //console.log(childSnapshot.val());

    // Store everything into a variable.
    var name = childSnapshot.val().name;
    var email = childSnapshot.val().email;
    var vendorName = childSnapshot.val().vendor;
    var location = childSnapshot.val().location;
    var type = childSnapshot.val().type;
    var bio = childSnapshot.val().bio;
    var photo = childSnapshot.val().photo;

    // Vendor Info
    /*console.log(name);
    console.log(email);
    console.log(vendorName);
    console.log(location);
    console.log(type);
    console.log(bio);
    */
    //Add info to HTML
    $(".all-vendor").append(
      "<div class='card'> <img class='card-img-top profile-img'> <div class='card-body'> <h5 class='card-title vendor-name'>" +
        vendorName +
        "</h5><p class='card-text'>" +
        bio +
        "</p></div></div>"
    );
  });
});
