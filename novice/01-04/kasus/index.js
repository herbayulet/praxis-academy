function testEmail() {
  let myName = document.getElementById("name").value;
  let myEmail = document.getElementById("email").value;
  let myDomain = document.getElementById("domain").value;
  let getName = myName;
  let getEmail = myEmail.replace("@", " ");
  // let getDomain = myDomain;
  alert(`Halo, username anda adalah ${getName}, domain anda adalah ${getEmail}`);
  document.getElementById("form").reset();
}
