// HASHING FUNCTIONS
function plzHash256(input) {
  var SHA256 = new Hashes.SHA256
  return SHA256.hex(input);
}

function plzHashMD5(input) {
  var MD5 = new Hashes.MD5 
  return MD5.hex(input);
}

// LOGIN FUNCTION
function userLogin() {
  // FETCHING USER INPUT FROM LOGIN.HTML FORM
  var userID = plzHashMD5(document.getElementById('email').value);
  var userEmail = document.getElementById('email').value;
  var userPassword = plzHash256(document.getElementById('password').value);

  var userInfo = JSON.parse(localStorage.getItem('userInfo'));

  // CHECKING IF THERE IS DATA IN LOCALSTORAGE
  if (localStorage.getItem('userInfo') == null) {
    alert('Please register first!')
  }
  else if (userEmail != userInfo.userEmail) {
    alert('User does not exist.')
  }
  // CHECKING IF CORRECT USERNAME AND PASSWORD
  else if (userEmail == userInfo.userEmail && userPassword == userInfo.userPassword) {
    event.preventDefault();
    window.location.href = 'index.html';
  }
  else {
    alert('Incorrect credentials.');
}
}
