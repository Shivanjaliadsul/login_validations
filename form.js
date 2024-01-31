
//email validation
function validateEmail(){
    const email = document.getElementById("email");
    const emailValidText = document.getElementById("emailValidText");

    if(!isvalidEmail(email.value)){
        emailValidText.innerText="Email is not valid. ";
        emailValidText.style.color="red";
        return false;
    }else{
        emailValidText.innerText="Email is valid. ";
        emailValidText.style.color="green";
        return true;
    }
}

function isvalidEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


//phone number


function validatePhoneNumber() {
    const phoneNumberInput = document.getElementById("phone");
    const phoneNumberValidText = document.getElementById("phoneNumberValidatetext");
    const phoneNumber = phoneNumberInput.value.trim();
    
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(phoneNumber)) {
        
        phoneNumberValidText.innerText = "Phone number is valid";
        phoneNumberValidText.style.color = "green";
        return true;
    } else {
       
        phoneNumberValidText.innerText = "Please enter a valid phone number which is exactly 10 digits";
        phoneNumberValidText.style.color = "red";
        return false;
    }
}

const phoneNumberInput = document.getElementById("phoneNumber");
phoneNumberInput.addEventListener("keyup", validatePhoneNumber);

//URL

    function validateUrl() {
        const urlInput = document.getElementById("url");
        const urlValidText = document.getElementById("urlValidText");
        const url = urlInput.value.trim();
    
        // Regular expression for URL validation
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    
        if (urlRegex.test(url)) {
            // URL is valid
            urlValidText.innerText = "URL is valid";
            urlValidText.style.color = "green";
            return true;
        } else {
            // URL is invalid
            urlValidText.innerText = "URL is not valid";
            urlValidText.style.color = "red";
            return false;
        }
    }
    
    
    const urlInput = document.getElementById("url");
    urlInput.addEventListener("keyup", validateUrl);


    //Textarea

    function validateTextarea() {
        const textareaInput = document.getElementById("text");
        const textareaValidText = document.getElementById("textareaValidText");
        const textarea = textareaInput.value.trim();
    
        if (textarea.length > 0) {
            // Textarea is not empty
            textareaValidText.innerText = "Textarea is valid";
            textareaValidText.style.color = "green";
            return true;
        } else {
            // if Textarea is empty
            textareaValidText.innerText = "Textarea is required";
            textareaValidText.style.color = "red";
            return false;
        }
    }

    const textareaInput = document.getElementById("textarea");
    textareaInput.addEventListener("keyup", validateTextarea);

//Image field validation
    function validateImage() {
        const imageInput = document.getElementById("image");
        const imageValidText = document.getElementById("imageField");
    
        if (imageInput.files.length > 0) {
            // Image file has been selected
            imageValidText.innerText = "Image is selected";
            imageValidText.style.color = "green";
            return true;
        } else {
            // No image file selected
            imageValidText.innerText = "Please select an image";
            imageValidText.style.color = "red";
            return false;
        }
    }
    
    
    const imageInput = document.getElementById("image");
    imageInput.addEventListener("change", validateImage);



//Password validation

    function validatePassword() {
        const passwordInput = document.getElementById("pass");
        const passwordValidText = document.getElementById("passwordValidText");
        const password = passwordInput.value.trim();
    
        const minLength = 8; 
    
        if (password.length >= minLength) {
            
            passwordValidText.innerText = "Password is valid";
            passwordValidText.style.color = "green";
            return true;
        } else {
            passwordValidText.innerText = `Password should be at least ${minLength} characters long`;
            passwordValidText.style.color = "red";
            return false;
        }
    }
    
    const passwordInput = document.getElementById("password");
    passwordInput.addEventListener("keyup", validatePassword);


//Currency validation
    function validateCurrency() {
        const currencyInput = document.getElementById("currency");
        const currencyValidText = document.getElementById("currencyValidText");
        const currency = currencyInput.value.trim();
    
       
        const currencyRegex = /^\d+(\.\d{1,2})?$/;
    
        if (currencyRegex.test(currency)) {
            
            currencyValidText.innerText = "Currency format is valid";
            currencyValidText.style.color = "green";
            return true;
        } else {
            
            currencyValidText.innerText = "Please enter a valid currency amount";
            currencyValidText.style.color = "red";
            return false;
        }
    }
    
    const currencyInput = document.getElementById("currency");
    currencyInput.addEventListener("keyup", validateCurrency);

//Image Validation
    function validateImage() {
        const imageInput = document.getElementById("image");
        const imageValidText = document.getElementById("imageValidText");
        
        if (imageInput.files.length > 0) {
            // Image file has been selected
            imageValidText.innerText = "Image is selected";
            imageValidText.style.color = "green";
            return true;
        } else {
            // No image file selected
            imageValidText.innerText = "Please select an image";
            imageValidText.style.color = "red";
            return false;
        }
    }
    
    //const imageInput = document.getElementById("image");
    imageInput.addEventListener("change", validateImage);

   
   
    // function submit(){
    //     window.alert("Button clicked!");
    // }


function submit(){
    if(validateEmail() && validatePhoneNumber && validateUrl() && validateTextarea() && validateImage()){
    window.alert("Form Submitted");
    }
    else{
    window.alert("Please fill the form");
    }
}
    
//alpha validation
function validateAlpha(){

    const alphatextInput = document.getElementById("alpha");
    const alphaValidText = document.getElementById("alphaValidText");
    const alpha=alphatextInput.value;

    if(!/^[a-zA-Z]+$/.test(alpha)){
        alphaValidText.textContent="Alpha contain only alphabetic characters";
        alphaValidText.style.color="red";
        return false;
    }else{
        alphaValidText.textContent="Alpha is valid";
        alphaValidText.style.color="green";
    }
    }












// function validateForm(){
//     if(validateEmail()){
//         window.alert("Form submitted");
//     }else{
//         window.alert("Please fill form");
//     }
// }









