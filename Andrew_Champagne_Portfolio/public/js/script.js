function sendMail(){
    console.log("first step")
    var params = {
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        body: document.getElementById("body").value
    }
    console.log("made it here")
    emailjs.send("service_kyv692r", "template_1a1l5mj",params).then(function (res){
        alert("Successfully sent.")
    })
    console.log("wow we did it!")
}