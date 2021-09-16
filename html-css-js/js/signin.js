// for fixed header when scroll
window.addEventListener("scroll", function(){
    var navScroll = document.querySelector('header');
    navScroll.classList.toggle("fixed", window.scrollY>50);
})

// checks if passwore at least 8 character
let singInBtn=document.getElementById("submit");
let userPassword=document.getElementById("userPassword");
let userEmail=document.getElementById("userLogin")

singInBtn.onclick=function(event){
    if (userEmail.value.length<8){
        alert("Please enter appropriate email!")
        event.preventDefault();
    }
    if (userPassword.value.length<8){
        alert("Password should be at least 8 characters!");
        event.preventDefault();
    }
    event.preventDefault();
}