function calculateBMI(weight, height) {
    let BMI;
    BMI = weight / (height * height)
    return BMI;
}

function getBMIMeaning(weight, height) {
    let BMI = calculateBMI(weight, height);
    if(BMI < 18.5) console.log('UnderWeight');
    else if( BMI > 18.4 && BMI < 25.0) console.log('Normal Weight');
    else if( BMI > 25.0) console.log('OverWeight');
}
console.log(calculateBMI(52,1.7));
getBMIMeaning(52, 1.7);