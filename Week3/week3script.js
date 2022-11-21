
alert("Hello to my javascript!"); //welcomes the visitor
while(true){    //promts for a name. if none provided, keep asking
    const visitor = prompt("What's your first name?");
    if (isNaN(visitor)){ //checking if it's a valid string
        alert("Let's play with some javascript "+visitor+"!"); //welcomes the visitor by name
        document.querySelector("div").innerHTML = `Thanks for visiting ${visitor}!`;
        break;
    }else{
        alert("Invalid input! Please type a valid string.");
    }
}
    
function Byebye(){
    alert("Thank you for visiting us bye");
    document.querySelector("div").innerHTML= "";
}

function looping(){
    let askAgain = prompt("Do you want to add two numbers?(yes/no)");
    askAgain = askAgain.toLowerCase();
    while (true){ //then keep asking the visitor if they want to add more
        if (askAgain === "yes"){ //if yes, call addition again
            addition();
            break;
        }
        else if(askAgain === "no"){ //if no, bye.
            Byebye();
            break;
        }else{
            alert("Invaild input");
        }
    }
}

function addition(){ //function that gets two values from prompt and add them in total variable
    firstNumber = Number(prompt("Enter your first number:"));
    seconNumber = Number(prompt("Enter your second number:"));
    while(true){
        if (!isNaN(firstNumber) || !isNaN(seconNumber)){ //checking for numbers
            total = (firstNumber+seconNumber);
            alert("The sum of your two numbers is: "+total);
            compareTotal(total); //calls the function by passing total value to check against the number 10
            break;
        } else{
            alert("Please enter a number");
    }
}


}
function compareTotal(total){ //does the checking and prints out the comments
    if (total > 10){
        alert("That is a big number!");
    }else if (total <=10) {
        alert("That is a small number!");
    }
    looping();
}




