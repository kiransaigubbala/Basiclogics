function findAvg(){
    let n1=parseInt(document.getElementById("num1").value);
    let n2=parseInt(document.getElementById("num2").value);
    let n3=parseInt(document.getElementById("num3").value);
    let sum=n1+n2+n3;
    let avg=sum/3;
    document.getElementById("res").value=avg
}
function avg(){
    let n1=parseInt(prompt("Enter n1"))
    let n2=parseInt(prompt("Enter n2"))
    let n3=parseInt(prompt("Enter n3"))
    console.log(n1+n2+n3/3);
    
}
function natural(){
    let n1=parseInt(document.getElementById("num").value);
    let sum= n1 * (n1 + 1) / 2;
    document.getElementById("sum").value=sum
}
function Average(){
    let n1=parseInt(document.getElementById("avg").value);
    let avg=(n1 + 1) / 2;
    document.getElementById("avgn").value=avg
}
function findprofit(){
    let sp=parseInt(document.getElementById("sp").value);
    let cp=parseInt(document.getElementById("cp").value);
    let profit=sp-cp
    let profitpercentage=(profit/cp)*100
    document.getElementById("profitper").value=profitpercentage

}
function simpleinterest(){
    let p=parseInt(document.getElementById("prin").value);
    let r=parseInt(document.getElementById("rate").value);
    let t=parseInt(document.getElementById("time").value);
    let simple=(p*t*r)/100
    document.getElementById("si").value=simple
}
function missingangle(){
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let m=180-(n1+n2)
    document.getElementById("miss").value=m
}
function lastdigit(){
    let n=parseInt(document.getElementById("a").value);
    let last=n%10
    document.getElementById("last").value=last

}
function remove_lastdigit(){
    let n=parseInt(document.getElementById("b").value);
    let last=parseInt(n/10)
    document.getElementById("remove").value=last

}
function remove_last5digit(){
    let n=parseInt(document.getElementById("d").value);
    let last=parseInt(n/10000)
    document.getElementById("remove5").value=last

}
function celsius(){
    let c=parseInt(document.getElementById("cel").value);
    let f=(c * 9/5)+32;
    document.getElementById("cel_f").value=f

}
function fahrenheit(){
    let f=parseInt(document.getElementById("fah").value);
    let c=(f - 32) * 5 / 9;
    document.getElementById("fah_c").value=c

}
function calculateSalary() {
    let basic = parseFloat(document.getElementById("basic").value);
    let hra = parseFloat(document.getElementById("hra").value);
    let da = parseFloat(document.getElementById("da").value);

    let gross = basic + hra + da;

    document.getElementById("gross").value = gross;
}
function swapNumbers() {
    let a = parseInt(document.getElementById("swap1").value);
    let b = parseInt(document.getElementById("swap2").value);

    let temp = a;
    a = b;
    b = temp;

    document.getElementById("result1").value = a;
    document.getElementById("result2").value = b;
}
function swapNumbers() {
    let a = parseInt(document.getElementById("s1").value);
    let b = parseInt(document.getElementById("s2").value);

    a = a + b;
    b = a - b;
    a = a - b;

    document.getElementById("r1").value = a;
    document.getElementById("r2").value = b;
}