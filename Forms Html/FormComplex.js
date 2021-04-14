function validateFirstName(){
    
    var fName = document.getElementById("firstName").value;
    var rel = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if(rel.test(fName)){

        document.getElementById("firstNamePrompt").style.color = "green";
        document.getElementById("firstNamePrompt").innerHTML = "<strong> valid </strong>";
        return true;
    }

    else{

        document.getElementById("firstNamePrompt").style.color = "Red";
        document.getElementById("firstNamePrompt").innerHTML = "<strong> Enter 2-15 letters";
        return false;
    }
}

function validateLastName(){

    var lName = document.getElementById("lastName").value;
    var rel2 = /^[a-zA-Z\s\'\-] {2,15}$/;
   
    if(rel2.test(lName)){

        document.getElementById("lasttNamePrompt").style.color = "green";
        document.getElementById("lasttNamePrompt").innerHTML = "<strong> valid </strong>";
        return true;
    }

    else{

        document.getElementById("lastNamePrompt").style.color = "Red";
        document.getElementById("lasstNamePrompt").innerHTML = "<strong> Enter 2-15 letters";
        return false;
    }
} 

function validatePhoneNumber(){

    var phoneNumber = document.getElementById("phone").value;
    var rel3 = /^\d{3}-\d{3}-\d{4}$/;

    if(rel3.test(phoneNumber)){

        document.getElementById("phonePrompt").style.color = "Green";
        document.getElementById("phonePrompt").innerHTML = "<strong> valid </strong>"
        return (true);
    }

    else{

        document.getElementById("phonePrompt").style.color = "Red";
        document.getElementById("phonePrompt").innerHTML = "<strong> Use xxx-xxx-xxxx  ";
        return (false);
    }
}

function calcOrder(){

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = firstName + " " + lastName;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quiantity").value;
    var price = document.getElementById("price").value;

    document.getElementById("orderConfirm").innerHTML= "<h2> Order Summary: </h2>";
    document.getElementById("orderConfirm").innerHTML= "<p>" + userName.toUpperCase() + "</br>" + phone + "</p>";
    document.getElementById("orderConfirm").innerHTML= "<p> Order Total: $" + price * quantity + "</p>";
}