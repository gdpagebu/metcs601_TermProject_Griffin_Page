function validate() {
    //Variables for form fields.
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    //Set error to false
    let error = false;

    //Clear errors so user knows when they fixed an input problem.
    document.getElementById("nameLabel").style.color='black';
    document.getElementById("emailLabel").style.color='black';
    document.getElementById("messageLabel").style.color='black';

    //Check if name is at least 5 chars, and matches letters and spaces.
    if (name.value.length <= 5 || !name.value.match(/^[a-zA-Z]+( [a-zA-Z]+)+$/)) {
        document.getElementById("nameLabel").style.color='red';
        error = true;
    }

    //Check if at least 5 characters and contains @, etc.
    if(email.value.length < 5 || !email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        document.getElementById("emailLabel").style.color='red';
        error=true;
    }

    //Check if at least 10 characters in message
    if(message.value.length < 10) {
        document.getElementById("messageLabel").style.color='red';
        error = true;
    }

    //If caught errors, return false to stop submit
    if(error==true){
        return false;
    }

}