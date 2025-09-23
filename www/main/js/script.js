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

const addProductToList = (data, data_list) => {
    data.forEach((product) => {
        var productBox = document.createElement("div")
        var productImage = document.createElement("img")
        var productData = document.createElement("div")
        var productTitle = document.createElement("div")
        var productPrice = document.createElement("div")
        
        productBox.className = "product"
        productImage.className = "product-image"
        productData.className = "product-data"
        productTitle.className = "product-title"
        productPrice.className = "product-price"
                    
        productImage.src = baseUrl+product.images[0].image
        productTitle.textContent = product.title
        productPrice.textContent = product.price
        productBox.onclick = () => {openProductView(product.id)}
                    
        productData.appendChild(productTitle)
        productData.appendChild(productPrice)
        productBox.appendChild(productImage)
        productBox.appendChild(productData)
                    
        data_list.appendChild(productBox)
    })
}

const addMyProductToList = (data, data_list) => {
    data.forEach((product) => {
        var productBox = document.createElement("div")
        var productImage = document.createElement("img")
        var productTitle = document.createElement("div")
        var productIcon = document.createElement("i")
            
        productBox.className = "my-product"
        productImage.className = "my-product-image"
        productTitle.className = "my-product-title"
        productIcon.className = "fas fa-chevron-right"
            
        productImage.src = baseUrl+product.images[0].image
        productTitle.textContent = product.title
        productBox.onclick = () => {
            sessionStorage.setItem("update_product_id", product.id)
            location.assign("update-product.html")
        }
            
        productBox.appendChild(productImage)
        productBox.appendChild(productTitle)
        productBox.appendChild(productIcon)
        data_list.appendChild(productBox)
    })
}