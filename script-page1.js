window.onscroll = function() {myFunction()};

function myFunction() {
  let window = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (window / height) * 100;
  document.getElementById("scroll").style.width = scrolled + "%";
}

let pw = document.documentElement.clientHeight;
console.log(pw);