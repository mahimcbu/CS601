function validateForm(){
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var facilitator = document.getElementById("facilitator");
    var regex = /^[A-Za-z]+$/;
    var validNames = ["Jen", "Josh","Chris","Christian","Behdad"]; //store the facilitator names in an array
    var checkNames;
    for (let i = 0; i < validNames.length; i++) { //loop through and check for a match against the input
        if(facilitator.value == (validNames[i]) ){
            checkNames = true; 
            break; //break and set the flag to true if matched (in the if condition we check for false)
        }else{
            checkNames = false; 
        }
    }
    if ((!(firstname.value.match(regex)) || !(lastname.value.match(regex))) || ((firstname.value.length <=2)||(lastname.value.length<=2)) || (checkNames==false))
  
    {
        alert("Invalid name");
        return false;
    }
    return true;
}