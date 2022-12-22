const register = (ev)=>{
    let users=[];
    ev.preventDefault();

    let user = {
        id: Date.now,
        fname:      document.getElementById('fname').value,
        lname:      document.getElementById('lname').value,
        username:   document.getElementById('username').value,
        email:      document.getElementById('email').value,
        password:   document.getElementById('password').value,
    }

    users.push(user)
    document.forms[0].reset();

    localStorage.setItem("myUserList", JSON.stringify(users));


}