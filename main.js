// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCDMvFD5zthICujULAK7ocBmpZamJ7View",
  authDomain: "gamebase-fa264.firebaseapp.com",
  projectId: "gamebase-fa264",
  storageBucket: "gamebase-fa264.appspot.com",
  messagingSenderId: "307863343800",
  appId: "1:307863343800:web:8a4bf144a06b04f4869a4d",
  measurementId: "G-5L8T4Q6WGY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    //   window.location.href="main.html";
  } else {
    window.location.href = "login.html";
    // No user is signed in.
  }
});

function logout() {
  firebase.auth().signOut().catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

let selected;
function optSel() {
  selected = document.getElementById("filterid").value;

  let game = firebase.database().ref().child(selected);

  const details = (num) => {
    game.child(num).on("value", (snap) => {
      let image = snap.child("Image").val();
      let loc = snap.child("Link").val();
      document.getElementById("game" + (num)).style.backgroundImage = "url('" + image + "')";
      document.getElementById("head" + (num)).innerHTML = snap.child("Name").val();
      document.getElementById("desc" + (num)).innerHTML = snap.child("Desc").val();
      document.getElementById("game" + (num)).addEventListener("click", () => {
        // window.open(loc, "_blank");
        location.href = loc;
      });

      let flip = document.getElementById("flip" + (num));
      document.getElementById("game" + (num)).addEventListener("mouseover", () => {

        flip.style.visibility = "visible";
      });
      document.getElementById("game" + (num)).addEventListener("mouseout", () => {

        flip.style.visibility = "hidden";

      });
    });
  }

  for (let i = 1; i <= 8; i++) {
    details(i);
  }
}
function changed() {
  optSel();
}
var names = [];
for (let i = 1; i <= 8; i++) {
  firebase.database().ref().child("Best").child(i).on("value", (snap) => {
    names[i - 1] = snap.child("Name").val();
  });
  firebase.database().ref().child("Arcade").child(i).on("value", (snap) => {
    names[8 + i - 1] = snap.child("Name").val();
  });
  firebase.database().ref().child("Cards").child(i).on("value", (snap) => {
    names[16 + i - 1] = snap.child("Name").val();
  });
  firebase.database().ref().child("Girls").child(i).on("value", (snap) => {
    names[24 + i - 1] = snap.child("Name").val();
  });
  firebase.database().ref().child("Puzzle").child(i).on("value", (snap) => {
    names[32 + i - 1] = snap.child("Name").val();
  });
  firebase.database().ref().child("Quiz").child(i).on("value", (snap) => {
    names[40 + i - 1] = snap.child("Name").val();
  });
  firebase.database().ref().child("Racing").child(i).on("value", (snap) => {
    names[48 + i - 1] = snap.child("Name").val();
  });
  firebase.database().ref().child("Sports").child(i).on("value", (snap) => {
    names[56 + i - 1] = snap.child("Name").val();
  });
}

function dropdown(){
  document.getElementById("content").classList.toggle("show");
}

