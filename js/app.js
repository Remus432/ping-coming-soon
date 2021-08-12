const submitBtn = document.querySelector(".ping__notify-btn")
const email = document.querySelector(".ping__notify-email")
const message = document.querySelector(".message")

submitBtn.addEventListener("click", verifyEmail)

function verifyEmail() {
  const emailRegex = /\S+@\S+\.\S+/

  console.log(email.value)

  // email.value === "" && warningMsg("Please complete the field")

  if (email.value === "") {
    warningMsg("Please complete the field")
  } else {
    if (!emailRegex.test(email.value)) {
      warningMsg("Please provide a valid email address")
    }
  }
  // emailRegex.test(email.value) && warningMsg("Please provide a valid email address") 
}

function warningMsg(msg) {
  message.textContent = msg
  email.classList.add("warning")
  console.log(msg)

  setTimeout(() => {
    message.textContent = ""  
    email.classList.remove("warning")
  }, 2000)
}