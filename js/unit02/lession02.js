//function
// viết hàm tính tổng 2 số bất kì
function sumNumber(a,b) {
    //a,b là tham số truyền vào hàm
    return a+b;
    
}

//gọi hàm ra sử dụng
 let res = sumNumber(2);
console.log(res);

//viết hàm tính tổng các số chẵn 1-100
//viết hàm ktra số chẵn
//viết hàm tính tổng các số chẵn

function kiemTraChanLe(n) {
    return n % 2 ===0;//true

}
function countNumber(i=1,j=100) {
        let sum=0;
        for( let a = i; a<=j; a++){
            if(kiemTraChanLe(a)){
                sum +=a;
            }            
            }
            return sum;
}
let res1 = countNumber(1,100);
console.log( "sum " + res1);


let tinhTong= function(n,m){
    return n + m
}
console.log(tinhTong(1,2));



// ktra cac so nguyen to

let kiemTraSoNguyenTo = function(n){
  if(n <=1){
    return false;
  }
  if(n ===2){
    return true;
  }

  for(let i=2; i <= Math.sqrt(n) ; i++){ // căn bậc 2 
    if(n % i ===0){
        return false;
    }
  }
  return true;
}

// viết đếm có bn số nguyên tố 1-100  nho hơn 50
let countNguyenTo = function(n, m){
    let sum = 0;
    for(let j =n; j<=m; j++){
        if(kiemTraSoNguyenTo(j) && j<50){
            
            sum++;
        }
    }
    return sum;
}

console.log(countNguyenTo(1,51));


// Arow function

let check1 = n => n % 2 ==0;
let check2 = (n)=> {
    return n % 2 ===0;
    
}
let check3 = n =>{
    if(n%2 ===0){
        return true;
    }
    return false;
}
let check4 = n => n % 2 ===0 ? true : false;



let  resul = function(u,v){
    if((u+v)/2 >= Math.sqrt(u*v)){
        if(v-u > u/2){
            return v
        }
        return u;
    }
    return u-v;
    
}
console.log(" sum "+resul(10,9));

//tìm ước số chung lớn nhất của 2 số bất kì
function timUSCLL(a,b){
    if(a===0 || b ===0){
        return a + b;
    }
    while(a != b ){
        if (a > b) {
            a -=b; // tìm a lớn nhất 
        } else {
            b -= a;
        }
    }
    return a;
}
//viet pt bậc 2
// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = 1;
let b = 2;
let c = 3;

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}

///////////////////////////
let a1 = 1;
let b1 = 2;
let c1 =3;

let kq1,kq2;

let nghiem =  b1 * b1 - 4*a1*c1;

if(nghiem > 0){
    kq1 = -b - Math.sqrt()
}