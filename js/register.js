// HASHING FUNCTIONS
function plzHash256(input) {
  var SHA256 = new Hashes.SHA256
  return SHA256.hex(input);
}

function plzHashMD5(input) {
  var MD5 = new Hashes.MD5
  return MD5.hex(input);
}

// REGISTER FUNCTION
function userRegister() {

  // FETCHING USER INPUT FROM REGISTER.HTML FORM
  var userID = plzHashMD5(document.getElementById('email').value);
  var userEmail = document.getElementById('email').value;
  var userPassword = plzHash256(document.getElementById('password').value);

  // SAVING USER INPUT TO JSON OBJECT
  var userInfo = {
    userID: userID,
    userEmail: userEmail,
    userPassword: userPassword
  }

  localStorage.setItem("userInfo", JSON.stringify(userInfo))
}