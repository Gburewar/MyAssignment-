//Assignment :

//1.Write a JavaScript code that takes an integer as input and prints `Odd` if the number is odd and `"Even"` if the number is even.
let a = 1
if (a%2==1){
    console.log(a+ "is odd");

    }else{
        console.log(a+ "is even");
    }





//2.Write a JavaScript code that evaluates a student's score and prints their grade using a switch statement to assess score ranges.

let score = 60

function grade(){
    switch(score){
        case 85:
            console.log("Grade is A");
            break;
            case 60:
                console.log("Grade is B");
                break;
                default :
                console.log("Garde is C");

    }
   
}
 grade();


 //3.Write a JavaScript code that prints odd numbers between 1 and 25


for (i=1;i<=25;i++){
    if(i%2==1){
        console.log(i +" "+"is a odd number");
    }else{
        console.log(i +" "+"is a even number");
    }
}

// 4.Create two JavaScript code with `if-else` for browser launch messages, and with `switch` for test type messages.

let browserName = "Chrome"
if(browserName=="Chrome"){
    console.log("launch chrome");

}else{
    console.log("Incorrect data");
}
 let testType = "sanity"
 switch(testType){
        case "sanity" :
        console.log(testType +" testing");
        break;
        case "regression":
            console.log(testType +"testing");
            break;
            default:
                console.log(testType+"testing");
 }

 //5.Create a JavaScript code that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type.

 
let number = 9;

if (number > 0) {
   
    console.log(number +" " +"is Postive ");
} else if (number < 0) {
    console.log(number +" " +"is Negatuve ")
} else {
     console.log(number +" " +"is neutral ")
}

//6.Create a JavaScript code that have a string, reverses it, and checks if the reversed string is a palindrome, print the results.

let  originalString = "MADAM"
let characters= originalString.split("")
let reversedString =""

for (let i=characters.length-1;i>=0;i--){
    reversedString +=characters[i]
    
}
console.log(reversedString);

if(originalString===reversedString){
    console.log("string is palindrome");
}else{
    console.log("string is not a palindrome");
}