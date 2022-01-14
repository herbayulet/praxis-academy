function testEmail() {
  let myName = document.getElementById("name").value;
  let myEmail = document.getElementById("email").value;
  let myDomain = document.getElementById("domain").value;
  let getName = myName.match().value;
  let getEmail = myEmail.replace("@", " ");
  let getDomain = myDomain.match().value;
  alert(`Halo, username anda adalah ${getName}, domain anda adalah ${getEmail}${getDomain} `);
  document.getElementById("form").reset();
}
