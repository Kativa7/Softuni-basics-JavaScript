function bonusScore(numAsString){
    let number = Number(numAsString);
    let bonus = 0;
    if(number<=100){
        bonus = 5
    }else if(number>=1000){
        bonus = number * 0.1
    } else if(number>100){
        bonus = number * 0.2
    }
    if(number % 2 === 0){
        bonus = bonus + 1
    }else if(number % 10 ===5){
        bonus = bonus + 2
    }
console.log(bonus);
console.log(number + bonus);
}

bonusScore(2703)