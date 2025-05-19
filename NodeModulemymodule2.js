exports.num = 6;

exports.isPrime=function (n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) { 
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

exports.calFact=function (n) {
    var fact=1;
    for(i=1;i<=n;i++){
        fact *= i;
    }
    return fact;
}

exports.isPerfect=function (n) {
    let sum=0;
    for(let i=1;i<=n/2;i++){
        if(n%i===0){
            sum += i;
        }
    }
    return sum===n
}
