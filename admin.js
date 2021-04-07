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

let c = 0;
function upload() {
    let gamename = document.getElementById("gamename").value;
    let gamedesc = document.getElementById("gamedesc").value;
    let gameimage = document.getElementById("gameimage").value;
    let gamelink = document.getElementById("gamelink").value;
    let newGame = firebase.database().ref().child("New");
    c++;
    newGame.child(c).child("Name").set(gamename);
    newGame.child(c).child("Desc").set(gamedesc);
    newGame.child(c).child("Image").set(gameimage);
    newGame.child(c).child("Link").set(gamelink);
    window.alert("Game Uploaded Successfully");
    document.getElementById("gamename").value = "";
    document.getElementById("gamedesc").value = "";
    document.getElementById("gameimage").value = "";
    document.getElementById("gamelink").value = "";
}

function admin() {
    // Set admin privilege on the user corresponding to uid.
    let uid = document.getElementById("uid").value;
    admin.auth().setCustomUserClaims(uid, { admin: true }).then(() => {
        window.alert("You're now an admin");
    });
}