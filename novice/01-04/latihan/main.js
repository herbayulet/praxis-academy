function calculateIdealBody() {
  let myHeight = document.getElementById("height").value;
  let yourName = document.getElementById("name").value;
  let total = myHeight - 100 - (myHeight - 100) * 0.1;
  alert(`${yourName}, total berat ideal anda ${total}.`);
  document.getElementById("form").reset();
}
