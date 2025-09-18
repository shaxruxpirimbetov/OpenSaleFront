var customAlert = (message) => {
    var alertBox = document.createElement("div")
    var alertMessage  = document.createElement("div")
    var alertButton = document.createElement("div")
    
    alertBox.className = "custom-alert-box"
    alertMessage.textContent = message
    alertMessage.className = "custom-alert-message"
    alertButton.textContent = "Okay"
    alertButton.className = "custom-alert-button"
    alertButton.onclick = () => {document.body.removeChild(alertBox)}
    alertBox.appendChild(alertMessage)
    alertBox.appendChild(alertButton)
    document.body.appendChild(alertBox)
}

var customErrorAlert = (message) => {
    var alertBox = document.createElement("div")
    var alertIcon = document.createElement("i")
    var alertBody = document.createElement("div")
    var alertTitle = document.createElement("h3")
    var alertMessage  = document.createElement("div")
    
    alertTitle.textContent = "Error!"
    alertBox.className = "custom-error-alert-box"
    alertBody.className = "custom-error-body"
    alertIcon.className = "fas fa-close"
    alertMessage.textContent = message
    alertMessage.className = "custom-error-alert-message"
    
    alertBody.appendChild(alertTitle)
    alertBody.appendChild(alertMessage)
    alertBox.appendChild(alertIcon)
    alertBox.appendChild(alertBody)
    document.body.appendChild(alertBox)
    setTimeout(() => {document.body.removeChild(alertBox)}, 1500)
}

//if (!navigator.onLine) {location.replace("test.html")}
//window.addEventListener("offline", () => {location.replace("test.html")})

var addCenteredText = (message) => {
    var textBox = document.createElement("div")
    var textMessage = document.createElement("pre")
    
    textBox.className = "centered-text-box"
    textMessage.textContent = message
    textBox.appendChild(textMessage)
    document.body.appendChild(textBox)
}
