function gallery() {
    alert(" "+"Oops! this function is\n not available at the moment...")
}
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
//Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click",function(e) {
       e.preventDefault();
       document.querySelector(
       this.getAttribute("href")
       ).scrollIntoView({
           behavior: "smooth"
       });
    })
})
//The submit function
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

function sendEmail(name, email, message) {
Email.send({
    Host : "smtp.gmail.com",
    Username : "learnvnclass1@gmail.com",
    Password : "learnVN@whatsapp.com/2005",
    To : "desmopinvestment@gmail.com",
    From : $email,
    Subject : "$name sent you a message.",
    Body : "Name: $name <br>Email: $email <br>Message: $message" 
}).then(
  message => alert("Message sent successfully")
);
}
