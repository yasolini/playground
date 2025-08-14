setInterval(() => {
  var p = document.getElementById("p");

  var a = new Date();
  var st = a.getHours();
  var min = a.getMinutes();
  var sek = a.getSeconds();
  var zeit = st + ":" + min + ":" + sek;

  p.innerHTML = zeit;
}, 1000);
