form = document.getElementById("form");

function submit(e)
{
    var username = document.getElementById("username").value;
    var usernameRegex = /^(?=.{4,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    var password = document.getElementById("password").value;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var error = document.getElementById("error");
    var c_password = document.getElementById("c_password").value;
    if (!usernameRegex.test(username))
    {
        e.preventDefault();
        error.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Invalid Username</div>';
        return;
    }
    if (!passwordRegex.test(password))
    {
        e.preventDefault();
        error.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">password should have 8 characters,atleast one number</div>';
        return;
    }
    if (password != c_password)
    {
        error.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">password fields do not match</div>';
    }
}

form.addEventListener("submit",submit);