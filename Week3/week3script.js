
alert("Hello to my javascript!")
let visitor = prompt("What's your first name?");
if (visitor !=null){
    alert("Let's play with some javascript "+visitor+"!");
}
addition();
while (true){
    let askAgain = prompt("Do you want to add two numbers again?(yes/no)");
    askAgain = askAgain.toLowerCase();
    if (askAgain == String("yes")){
        addition();
    }
    else if(askAgain == String("no")){
        alert("Thank you for visiting us "+visitor+"!");
        break;
    }else{
        alert("Invaild input");
    }
}
function addition(){
    firstNumber = Number(prompt("Enter your first number:"));
    seconNumber = Number(prompt("Enter your second number:"));
    total = (firstNumber+seconNumber);
    alert("The sum of your two numbers is: "+total);
    compareTotal(total);
}
function compareTotal(total){
    if (total > 10){
        alert("That is a big number!");
    }else if (total <=10) {
        alert("That is a small number!");
    }
}




