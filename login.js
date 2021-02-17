firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });


function register() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cnfpassword = document.getElementById("cnfpassword").value;
  if (password == cnfpassword) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
  }
  else {
    window.alert("Password does not match");

  }
}


function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    window.location.href = "main.html";
  }
});

let eye = document.getElementById("eye");
let slasheye = document.getElementById("slasheye");
let pass = document.getElementById("password");
eye.addEventListener('click', () => { //TogglePassword
  pass.type = "text";
  eye.style.display = "none";
  slasheye.style.display = "inline";
});

slasheye.addEventListener('click', () => { //TogglePassword
  pass.type = "password";
  eye.style.display = "inline";
  slasheye.style.display = "none";

});



