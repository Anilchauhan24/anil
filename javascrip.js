let a= 50.1;
let b= 40;
c= a+b;
console.log(Math.floor(c));

let x= 45;
let y= 50;
if(x>y){
    console.log("the value should be invalid");
} else if(x==y){
    if(x<y){
        console.log("the value is also invalid");
    }
} else{
    if(x<y){
        console.log("the value is valid you should move ahead");
    }

    if(x>y){
        console.log("this is also correct statement");
    }
};

/*
let book= pen;
let pen= pencil;
 if(book==pencil){
    if(pen==book){
        console.log("Correct statement");
    }
 } else if(pen==pen){
    if(book=book){
        console.log("invalid statement");
    }
 } 
 else{
    if(book==pen){
        console.log("valid logic");
    }
 };
 function myNumber(a,b){
    return a+b;
 }
  myNumber(40, 60);
  console.log()

 
*/

function isEven(input){
    let out;
     if(input % 2==0){
        out= `Number ${input} is Even`;

     }
     else {
        out = `Number ${input} is Odd`;
      }
      return out;
}  

console.log(isEven(50)); //Number 50 is Even
console.log(isEven(35)); //Number 35 is Odd


