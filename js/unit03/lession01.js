// toán tử với chuỗi
let a =10; // kiểu number
let b= '20'; // kiểu string 
b = Number.parseInt(b); // ép về kiểu số nguyên Number

let c = a +b  
// + : toán tử ghép chuỗi

console.log( c)

let number = 'b100';
number = Number.parseInt(number);

console.log(number , typeof(number));

let name = '';
// '' == false == 0 : về mặt gía trị 
// true == 1 : về mặt giá trị 
// khác nhau về kiểu dữ liệu
if(name === false){
    console.log('aa');
}
else{
    console.log(' Error');
}

//chuỗi
let time = '20h';
let myString = ` number ${ time}  `

console.log(myString);


let str = " toi dang hoc js "
console.log(str.length);

let pos = str.lastIndexOf('d',5)
console.log(pos);

// tách chuỗi
let chid = str.slice(2);
console.log(chid);
let chid2 = str.substring(2);
console.log(chid2);

let link = ' https://abwwwwwwwwwc.com/?id=10&name=ABC';
//?id=10&name=ABC : query string
// viết hàm tách chuỗi lấy ra ptu

const myQueryString = (url)=>{
let pos = url.indexOf('?') //tìm kiếm vtri ?
    return url.slice(pos,url.length) // cắt chuỗi từ vị trí ? đến vtri cuối cùng theo chiều dài
}
console.log(myQueryString(link));
////////////////////////

// Symbol
let id = Symbol('id1')
let id2 = Symbol('id1')
if(id == id2){
    console.log('yes');
}
else{ console.log('NO');}
console.log(id, typeof(id));
console.log(id2, typeof(id2));