function validationform(){
    let firstname = document.validform.fname.value;
    let lastname = document.validform.lname.value;
    let pno = document.validform.pno.value;
    let city = document.validform.city.value;
    let address = document.validform.address.value;

    if(firstname==="" || lastname==="" || pno==="" || city==="" || address===""){
        alert("Fill all the Required Details");
        return false;
    }
    else if(isNaN(pno) || pno.length!=10){
        alert("Enter Valid Phone Number");
        return false;
    }
    else{
        alert("Successfully Registered");
        return true;
    }
}
