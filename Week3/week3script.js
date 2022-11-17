
alert("Hello to my javascript!") //welcomes the visitor

while(true){    //promts for a name. if none provided, keep asking
    let visitor = prompt("What's your first name?");
    if (visitor.length != 0){
        alert("Let's play with some javascript "+visitor+"!"); //welcomes the visitor by name
        break;
    }else{
        alert("Invalid input! Please type something.")
    }
}

addition(); //initially call the this function to do the addition of two numbers
while (true){ //then keep asking the visitor if they want to add more
    let askAgain = prompt("Do you want to add two numbers again?(yes/no)");
    askAgain = askAgain.toLowerCase();
    if (askAgain == String("yes")){ //if yes, call addition again
        addition();
    }
    else if(askAgain == String("no")){ //if no, bye.
        alert("Thank you for visiting us "+visitor+"!");
        break;
    }else{
        alert("Invaild input");
    }
}
function addition(){ //function that gets two values from prompt and add them in total variable
    firstNumber = Number(prompt("Enter your first number:"));
    seconNumber = Number(prompt("Enter your second number:"));
    total = (firstNumber+seconNumber);
    alert("The sum of your two numbers is: "+total);
    compareTotal(total); //calls the function by passing total value to check against the number 10
}
function compareTotal(total){ //does the checking and prints out the comments
    if (total > 10){
        alert("That is a big number!");
    }else if (total <=10) {
        alert("That is a small number!");
    }
}




