function minMedMax(num1, num2, num3) {
    let max;
    let min;
    let med;
    //max = 1
    if((num1 > num2 && num2 > num3) ) {
        max = num1;
        min = num3;
        mid = num2
    }else if(num1 > num3 && num3 > num2) {
        max = num1;
        min = num2;
        mid = num3;
    }

    //max = 2
    if((num2 > num1 && num1 > num3) ) {
        max = num2;
        min = num3;
        mid = num1
    }else if(num2 > num3 && num3 > num1) {
        max = num2;
        min = num1;
        mid = num3;
    }

    //max = 3
    if((num3 > num2 && num2 > num1) ) {
        max = num3;
        min = num1;
        mid = num2
    }else if(num1 > num3 && num3 > num2) {
        max = num3;
        min = num2;
        mid = num1;
    }

    const result = {max: max, mid: mid, min:min}
    return result
}

console.log(minMedMax(20,65,8));