//Array js
// kiểu giữ liệu : Object
// const : có thể thay đổi giá trị ban đầu trong mảng nhưng ko thay đổi kiểu dữ liệu của Mảng
const arr = [ 1,2,3,4,5,6,7,8,9];
arr[8]=10;
console.log(arr);
console.log(arr.length);
console.log(arr[5]);
const number = [1,2,3,4,['dua','le'],5,6];
console.log(number[4] [0]);

//for 
let number3 = [1,2,3,4,5,6,7,8,9];
let count = number3.length;
for(let i=0; i< count; i++){ // number3.length : sau mỗi vòng lặp lại đếm lại length khi đặt ở for 
    console.log(number3[i]);
}
// forEach
// forEach gióng loop for nhưng có thể call ở các nơi khác dk
number3.forEach(function(item, index,element){
// tham số callback truyền trong forEach là 1 function
// item: giá trị (bắt buộc)
//index: vtri (tùy chọn)
// element: mảng ban đầu (tùy chọn)

console.log(`vi tri ${ index} = giá trị ${item}`);
 })

//  number3.forEach((item)=>console.log(item))
 
 //for ...of.. => dành cho Arr
 // for ...in => dành cho Object
 for(let j of number3){
    console.log(j); // j là item trong mảng 
 }

 //map()
// map sẽ return kết quả về 1 mảng mới 
// hàm map sẽ ko làm ảnh hưởng đến mảng ban đầu và sẽ tạo ra 1 mảng mới
 number3.map(function(item, index){console.log(`vị trí ${index} = giá trị ${item}` ); })

 //in ra các số lẻ trong mảng

 let res =number3.filter((item)=>{
    //filter thì sẽ lấy ptu khi đủ điều kiện theo kiểu giá trị . duyệt qua từng ptu
    //map : sẽ trả 1 mảng hết các ptu n đi qua theo kiểu true/false string
    if(item %2 !==0){
        return item
    }
 })
 console.log(res);

 /// viết hàm xử lí số chẵn và bình phương lên

 let myFn = (arr)=>{
 return arr.filter(item=>item %2===0).map(item=>Math.pow(item, 2));
 }
console.log(myFn(number3));


//// cách thủ công
let newArr2=(arr)=>{
    let newArr =[];
  for(let i =0; i<arr.length; i++){
    if(arr[i] % 2 ===0){
        newArr.push(arr[i])
    }
  }
  let newArr2=[];
  for(let i = 0; i< newArr.length;i++){
    newArr2.push(newArr[i]**2)
   
  }
  return newArr2;
}
  console.log(newArr2(number3));

  ////
  const numbers4 = [1,2,3,4,5,6,7,8,9];

// viet ham  xu ly tra ve mot mang chua tat ca cac so la binh phuong cua so chan nam trong mang da cho
let myFn1 = (arr) => {
    //return arr.filter(item => item % 2 === 0)
              //.map(item => Math.pow(item, 2));
    let newArr = [];
    let j = 0;
    let k = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] % 2 === 0){
           //newArr.push(arr[i]); 
            newArr[j] = arr[i];
            j++;
        }
    }
    // newArr: chua toan so chan
    let newArr2 = [];
    for(let i = 0; i < newArr.length; i++){
        //newArr2.push(Math.pow(newArr[i], 2));
        newArr2[k] = Math.pow(newArr[i], 2);
        k++;
    }
    return newArr2;
}
console.log(myFn1(numbers4));