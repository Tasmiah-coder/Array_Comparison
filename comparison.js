// PROBLEM-2:Grade Evaluation 

let score = 85;

if (score>=90){
    console.log("Grade:A");
}

else if (score>=80 && score<90){
    console.log("Grad:B");
}

else if (score>=70 && score<80){
    console.log("Grade:C");
}

else if (score>=60 && score<70){
    console.log("Grade:D");
}

else{
    console.log("Grade:F");
}


// PROBLEM-4:weather Check 

let tempareture = 15;
let isRaining = true;

if (tempareture<0){
    console.log("Wear-Heavy Jacket")
}

else if (tempareture>=0 && tempareture<=20 && isRaining == true){
    console.log("Wear-Raincoat and Sweater");
}

else if (tempareture>=20  && isSunny == true){
    console.log("Wear-T-shirt and Sunglass");
}

else{
    console.log("Wear-Regular clothes");
}