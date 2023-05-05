// console.log( 'Hello world');

// var number ='abc';
// console.log(typeof(  number), number);

// const pi =4.1;
// pi = 233; // ko thể thay đổi gtri của const
// console.log(typeof(pi));
// var a=10;
// var b=20;
// var  x=10;
// if( a ==10){
//     var  x=20;
//     if(b==20){
//         var  x=30;
//         console.log(x);
//     }
//     console.log(x);
// }
// console.log(x);

let a=21;
if( a % 2 ==0){
    console.log( 'chẵn');
}
else {
     console.log( 'lẻ');
}

for( let i =1; i<=20; i++ ){
    // if(i % 2 !==0){
    //     console.log(i);
    // }
  
}

let i=0;
while( i<21){

  if(i %2 !==0){
    // console.log(i);
  }
  i++;
}


let u =10;
let v=9;
let res= (u++) + (--v) +(u--) - (v++) + (++u) + (v--)
 //         10    +      8   +  11  -     8    +     11   +   9 
 // u++ /u-- sau là gọi ra chưa thực thi phép toán
 // ++u/--u trước là thực thi trc xog mới gọi ra 


 let x1 = 20;
 let x2 = 30;
 let res2 = (--x2) -(--x1) +(x2++) -(x1++) - (x2--) + (++x1)
//                29 -        19+     29     -19          -30       +21

/*
swich - case  chỉ có so sánh bằng, có break : sẽ thoát ctrinh và kp ktra các th còn lại
if-else sẽ có so sánh lớn hơn, nhỏ hơn , bằng
 */
let month1 = 5;
switch (month1) {
  case 1:
    //do something
    break;
    case 3:
      //do something
      break;
      case 5:
        //do something
        break;
  default:
    //error
    break;
}


let month = 6;
if( month  ===5 ){
  console.log(" có 28 ngày");
}
else if ( month === 6){
  console.log("có 30 ngày");
}
//nếu chạy if sẽ ko chạy else

//kiểm tra từ 1-100 bn số chiwa hết 5
let count=0;
for(let i =1; i<=100; i++){
  if(i %5===0){
    count ++;
  }
}
console.log("log count"+ count);
////////////////////////
let count2 = 0;
let n = 1;
while(n<=100){
  if(n % 5===0){
    count2++
  }
  n++;
}
console.log("log n "+n);
////////////////////
let count3= 0;
let m=1;
do {
  if(m % 5 ===0){
    count3 ++;
  }
  m++;
} while (m<=100 );
console.log("log m "+m);