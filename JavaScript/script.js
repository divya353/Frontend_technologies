
// contact
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const loadingMsg = document.querySelector(".loading");
  const errorMsg = document.querySelector(".error-message");
  const sentMsg = document.querySelector(".sent-message");



const publickey = "wBF5_OkZPde3SDtUc";
const serviceID = "service_kohoqej";
const templateID = "template_0uker1t";

emailjs.init(publickey);


contactForm.addEventListener("submit",e=>{
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerText = "Sending..."; 
    loadingMsg.classList.remove("d-none");
    errorMsg.classList.add("d-none");
    sentMsg.classList.add("d-none");


    const inputFields = {
        from_name: nameInput.value,
        email_id: emailInput.value,
        message: messageInput.value
    };
    
    
emailjs.send(serviceID, templateID, inputFields)
      .then(() => {
        submitBtn.innerText = "Message Sent Successfully";
        sentMsg.classList.remove("d-none");
        loadingMsg.classList.add("d-none");
        submitBtn.disabled = false;

        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        submitBtn.innerText = "Send Message";
        errorMsg.classList.remove("d-none");
        loadingMsg.classList.add("d-none");
        submitBtn.disabled = false;
      });
  });
