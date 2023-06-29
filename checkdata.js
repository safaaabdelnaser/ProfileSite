function checkname() {
    var fname=document.getElementById("validationDefault01").value;
    var namevalid=/^[A-Za-z]{3,}()[A-Z a-z]{3,}$/;
    while(true){
        if (namevalid.test(fname)==true) {
            alert("your name valid "+fname);
            
            break;
            
        } 
        else {
            alert("Invalid first name");
            break;
        }
    }
    console.log( namevalid.test(fname));
    return namevalid.test(fname);
    
    
}

function checklname() {
    var name=document.getElementById("validationDefault02").value;
    var namevalid=/^[A-Za-z]{3,}()[A-Z a-z]{3,}$/;
    while(true){
        if (namevalid.test(name)==true) {
            alert("your name valid "+name);
            break;
        } 
        else {
            alert("Invalid list name");
            break;
        }
    }
    return namevalid.test(name);
}
function checkemails(){
    var email=document.getElementById("validationDefaultUsername").value;
    var emailvalid=/^[A-Za-z0-9].*(@)[A-Za-z].*(.com|.net|.edu|.org)$/;
    while(true){
        if (emailvalid.test(email)==true) {
            alert("your email valid "+email);
            break;
        } 
        else {
            alert("Invalid email ");
           
        }
    }
    return emailvalid.test(email);
}
function showname()
{
    var name = document.getElementById('validationDefault01').value;
    // var myform=document.getElementById("Contactus");
    document.getElementById('msg').innerHTML ="welcome "+ name;
}
