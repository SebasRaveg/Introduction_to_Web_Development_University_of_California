function validate_Name(){
  var name = document.getElementById("name").value;
  var text;
  var error_message = document.getElementById("error_message");
  if(name.length < 5){
    text = "<strong > Please Enter a Valid Name </strong>";
    error_message.innerHTML = text;
    return false;
  }
}

function validate_Phone(){
  var phone = document.getElementById("phone").value;
  var text;
  var error_message = document.getElementById("error_message");
  if(phone.length < 10){
    text = "<strong > Please Enter a Valid Phone </strong>";
    error_message.innerHTML = text;
    return false;
  }
}

function validate_Email(){
  var mail = document.getElementById("mail").value;
  var text;
  var error_message = document.getElementById("error_message");
  if(mail.indexOf("@") == -1 || mail.length < 6){
    text = "<strong > Please Enter a Valid Email </strong>";
    error_message.innerHTML = text;
    return false;
  }
}

function validate_Message(){
  var message = document.getElementById("message").value;
  var text;
  var error_message = document.getElementById("error_message");
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
}








