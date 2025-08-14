window.onload = function () {
  var num1 = document.getElementById("num1");
  var op = document.getElementById("op1");
  var num2 = document.getElementById("num2");
  var submitBtn = document.getElementById("submit");
  var resultText = document.getElementById("p");

  submitBtn.onclick = function () {
    var zahl1 = parseFloat(num1.value);
    var zahl2 = parseFloat(num2.value);
    var operation = op.value;
    var ergebnis;

    if (operation === "+") {
      ergebnis = zahl1 + zahl2;
    } else if (operation === "-") {
      ergebnis = zahl1 - zahl2;
    } else if (operation === "*") {
      ergebnis = zahl1 * zahl2;
    } else if (operation === "/") {
      ergebnis = zahl1 / zahl2;
    } else {
      ergebnis = "Fehler: Ungültiger Operator";
    }

    resultText.innerHTML = "Ergebnis: " + ergebnis;
  };
};
