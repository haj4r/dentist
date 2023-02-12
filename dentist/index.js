function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("contact").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
      service: document.getElementById("service").value,
    };
    const serviceID = "service_qkzrkh5";
    const templateID = "template_dy19jeb";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("contact").value = "";
          document.getElementById("date").value = "";
          document.getElementById("time").value = "";
          document.getElementById("service").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  // emailjs to send email 