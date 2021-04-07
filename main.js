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
  console.log(game.child.length);
  const details = (num) => {
    document.getElementById("game" + (num)).style.display = "block";
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
var links = [];
var images = [];
var descs = [];
for (let i = 1; i <= 8; i++) {
  firebase.database().ref().child("Best").child(i).on("value", (snap) => {
    names[i - 1] = snap.child("Name").val();
    links[i - 1] = snap.child("Link").val();
    images[i - 1] = snap.child("Image").val();
    descs[i - 1] = snap.child("Desc").val();
  });
  firebase.database().ref().child("Arcade").child(i).on("value", (snap) => {
    names[8 + i - 1] = snap.child("Name").val();
    links[8 + i - 1] = snap.child("Link").val();
    images[8 + i - 1] = snap.child("Image").val();
    descs[8 + i - 1] = snap.child("Desc").val();
  });
  firebase.database().ref().child("Cards").child(i).on("value", (snap) => {
    names[16 + i - 1] = snap.child("Name").val();
    links[16 + i - 1] = snap.child("Link").val();
    images[16 + i - 1] = snap.child("Image").val();
    descs[16 + i - 1] = snap.child("Desc").val();
  });
  firebase.database().ref().child("Girls").child(i).on("value", (snap) => {
    names[24 + i - 1] = snap.child("Name").val();
    links[24 + i - 1] = snap.child("Link").val();
    images[24 + i - 1] = snap.child("Image").val();
    descs[24 + i - 1] = snap.child("Desc").val();
  });
  firebase.database().ref().child("Puzzle").child(i).on("value", (snap) => {
    names[32 + i - 1] = snap.child("Name").val();
    links[32 + i - 1] = snap.child("Link").val();
    images[32 + i - 1] = snap.child("Image").val();
    descs[32 + i - 1] = snap.child("Desc").val();
  });
  firebase.database().ref().child("Quiz").child(i).on("value", (snap) => {
    names[40 + i - 1] = snap.child("Name").val();
    links[40 + i - 1] = snap.child("Link").val();
    images[40 + i - 1] = snap.child("Image").val();
    descs[40 + i - 1] = snap.child("Desc").val();
  });
  firebase.database().ref().child("Racing").child(i).on("value", (snap) => {
    names[48 + i - 1] = snap.child("Name").val();
    links[48 + i - 1] = snap.child("Link").val();
    images[48 + i - 1] = snap.child("Image").val();
    descs[48 + i - 1] = snap.child("Desc").val();
  });
  firebase.database().ref().child("Sports").child(i).on("value", (snap) => {
    names[56 + i - 1] = snap.child("Name").val();
    links[56 + i - 1] = snap.child("Link").val();
    images[56 + i - 1] = snap.child("Image").val();
    descs[56 + i - 1] = snap.child("Desc").val();
  });
  // firebase.database().ref().child("New").child(i).on("value", (snap) => {
  //   names[64 + i - 1] = snap.child("Name").val();
  //   links[64 + i - 1] = snap.child("Link").val();
  //   images[64 + i - 1] = snap.child("Image").val();
  //   descs[64 + i - 1] = snap.child("Desc").val();
  // });
}

function optionselect() {
  let option = document.getElementById("useroptions").value;
  if (option === "logout")
    var con = confirm("Are you sure you want to logout?");
  if (con == true)
    logout();
  if(option==="admin")
    window.open("admin.html","_blank");
  // window.alert(option);
}

var index = [];
let searchgame = document.getElementById("searchgame");
searchgame.addEventListener("keyup", () => {
  let c = 1;
  for (let i = 1; i <= 10; i++) {
    document.getElementById("name" + (i)).style.display = "none";
  }
  let inputvalue = searchgame.value.toUpperCase();
  if (inputvalue.length >= 2) {
    for (let i = 0; i < 64; i++) {
      if (names[i].indexOf(inputvalue) > -1) {
        document.getElementById("name" + (c)).innerHTML = names[i];
        index[c - 1] = i;
        c++;
        // console.log(names[i]);
        // console.log(links[i]);
      }
    }
  }
  for (let i = 1; i < c; i++) {
    document.getElementById("name" + (i)).style.display = "block";
    document.getElementById("name" + (i)).addEventListener("click", () => {
      for (let j = 1; j < c; j++)   //removes all search results
        document.getElementById("name" + (j)).style.display = "none";   
      searchgame.value="";    //clears the text inside search box
      document.getElementById("game1").style.backgroundImage = "url('" + images[index[i - 1]] + "')";
      document.getElementById("head1").innerHTML = names[index[i - 1]];
      document.getElementById("desc1").innerHTML = descs[index[i - 1]];
      document.getElementById("game1").addEventListener("click", () => {
        // window.open(loc, "_blank");
        location.href = links[index[i - 1]];
      });
      for (let j = 2; j <= 8; j++)    //displays only the required game
        document.getElementById("game" + (j)).style.display = "none";
    });
  }
});


