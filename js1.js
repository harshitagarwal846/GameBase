function hide(x){
    x.style.visibility='visible';
}
setTimeout(hide, 1010, document.getElementById('heading'));
// setTimeout(hide, 1010, document.getElementsByTagName("h1"));
setTimeout(hide, 5010, document.getElementById('login'));
setTimeout(hide, 5010, document.getElementById('register'));
// setTimeout(hide, 2010, document.getElementsByClassName('btn'));
setTimeout(hide, 3001, document.getElementById('head2'));
var i=0;
function anim() {
    // setTimeout(anim,3001);
    let str="A Fathomless World of Online Games";
    if(i<str.length){
        document.getElementById("head2").innerHTML+=str[i++];
        setTimeout(anim,50);
    }
}
setTimeout(anim,3010);