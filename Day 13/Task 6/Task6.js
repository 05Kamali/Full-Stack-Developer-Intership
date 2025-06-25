function bmical(weight,height){
    var bmi = weight / (height * height);
    return Math.round(bmi);
}
var bmi=bmical(60,1.7);
console.log(bmi);
if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi}, so you are underweight.`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Your BMI is ${bmi}, so you are normal weight.`);
} else {
    console.log(`Your BMI is ${bmi}, so you are overweight.`);
}