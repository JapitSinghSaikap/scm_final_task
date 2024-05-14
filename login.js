function changetoSign()
{
    document.querySelector(".signupFORM").style.display = "block";
    document.querySelector(".loginFORM").style.display = "none";
}

function changetoLog()
{
    document.querySelector(".signupFORM").style.display = "none";
    document.querySelector(".loginFORM").style.display = "block";
}
var userArray = []; 
var passwordArray = [];


function DOLOGIN()
{
    let username = document.querySelector("#login_user").value;
    let password = document.querySelector("#login_Pass").value;

    let flag = false;
        for(let i =0;i<userArray.length;i++){
            if (username == userArray[i] && password == passwordArray[i])
            {
                flag = true;
                break;
            }
            }
        if(flag){
            alert("User Present");
            window.location.href = "https://www.youtube.com/";
        } else{
            alert("User not found");
            location.reload();
        }
} 

function DOSIGNUP() {
    let newUsername = document.querySelector("#signup_username").value;
    let newPassword = document.querySelector("#signup_Pass").value;
    let confirmPassword = document.querySelector("#signup_confirm_Pass").value;
    let newEmail = document.querySelector("#signup_Email").value;

    if (newPassword === "" || newUsername === "" || newEmail === "") {
        alert("All fields are required");
    } else if (newPassword === confirmPassword) {
        userArray.push(newUsername);
        passwordArray.push(newPassword);
        alert("Sign-up Successful");
    } else {
        alert("Passwords are different");
    }
}





function forgotPassword(){
    let show_password = prompt("Enter Username ");
    for(let i =0;i<userArray.length;i++){
        if (show_password == userArray[i] )
        {
           alert("Password is: "+ passwordArray[i]);
        } else{
            alert("Username not found")
        }
        }
}