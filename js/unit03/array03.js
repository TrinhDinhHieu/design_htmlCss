const myArr =[1,2,3,4,5]
const arr=[...myArr,6,7,8]; //Spread operator sử dụng được cả Array, Object
console.log(arr);

// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // Expected output: 10

// console.log(b);
// // Expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// a=10, b=20, rest = 30,40,50,...
// console.log(rest);
// // Expected output: Array [30, 40, 50]

//////
function testFN ( ...a){
    //...a rest params : nhận tất cả các tham số truyền vào

    console.log(a);
}
testFN(1,2,3,4,5,'AAA')

///////////////
myArr2 = [1,2,3,4,5,6,7,8,9];
const findEl = myArr2.indexOf(6); // tìm kiếm phần tử trong mảng xem tồn tại ko
console.log('indexOf' ,findEl);
//includes trả về true/false 
// indexOf,lastIndexOf trả về number

const childArr = myArr2.slice(2,6)
console.log('slice', childArr);

//splice(startIndex, [how_many] , [value1, value2,…])
 const newArr = [ 1,2,3,4,5,6];
 const childArr2 = newArr.splice(2,3,100,200,300);
 console.log(childArr2, newArr);

 /// 
 const newArr2 = [1,2,3,4,5,6];
 const myFn2 =(arr ) =>{
    // tính tổng các số chắn
    return arr.filter(item=>item %2===0).reduce(
        (accumulator, currentValue) => accumulator + currentValue,invalue = 0
      );
 }
 console.log('myFN2',myFn2(newArr2));


 /////
 let s =0;
 for(let i =0; i< newArr2.length; i++){
    if(arr[i] % 2 ===0){
        s += arr[i]
    }
 }
 console.log(s);
 console.log('---------------------');
 ///////////
 let arr2 = [ 0, 1,2,3,4,5,6,7,8,9];

 for(let i=0; i<10; i++){
    if(i % 2 ===0){
       console.log(arr2[i]);
    }
   
 }

