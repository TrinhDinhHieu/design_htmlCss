// object là 1 kiểu dữ liệu có thể thay đổi được dữ liệu bên trong 
//property
const car = {}; // object rỗng
car.name = 'Toyota'; // thêm thuộc tính vò object
car['weight']= 500;
//methods
car.start = function (){
    //bổ xung phương thức vào object
    console.log('do something');
}
console.log(car); //{ name: 'Toyota', weight: 500 }
//truy cạp vào thuộc tính - phương thức trong object
// 1- truy cập thuộc tính : cú pháp : nameObject.key || nameObject['key']
console.log(car.name, car['weight']);
car.color = 'red';
car.start(); // truy cập phương thức :: () : thực thi phương thức
console.log(car.start);

///////
const persion = {name: 'Văn A', age: 20, phone : '33224423', add : 'HN'};
console.log(persion);
// duyệt object
for(let i in persion){
    console.log('duyet oj',persion[i]);
}
//Destructuring assignment
const {a,b, c } = {a :10, b:20, c:30}
console.log(a,b,c);
const student = {...persion , ms: 'acs1223', class: 'ADSS'};
console.log(student);

/// kết hợp array + object
// array là lưu dữ các biến đơn
const listProductions = [ 
    {
    id:1,
    name: 'Iphone',
    price: 32000
    }, 
    {
        id:2,
        name: 'Bphone',
        price: 42000
    }, 
    {
        id:3,
        name: 'SamSung',
        price: 44200
    }]
    // tính tổng giá
     //b1-lấy giá gộp vào 1 mảng
    const total = listProductions.filter(item=>item.price >40000 );
    console.log(total);
   // b2- tính tổng giá
   const sumtotal = total.reduce((i ,j)=> i.price + j.price)
   console.log('sum', sumtotal);

   ///////////
   const tableList = `
   <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>price</th>
            </tr>
        </thead>
        <tbody>
            //duyệt các item trong mảng và lấy ra value 
            // map sẽ lấy value trong mảng và thay đổi để tạo thành 1 mảng mới
        ${listProductions.map((item, key) => ( ` 
        <tr index= ${key}>
            <td>${item.id}</td>    
            <td>${item.name}</td>    
            <td>${item.price}</td>    
        </tr>
        `))}
        </tbody>
   </table>
   `
   console.log(tableList);

   ////
   const  rooms = [
    {
        id :1,
        name : 'CNTT'
    },
    {
        id:2,
        name : 'Ke Toan'
    }
   ];
   const staffs = [
    {
        id:1,
        room_id: 1,
        room_name:'Văn A',
        age: 20,
        phone: 2222211
    },
    {
        id:2,
        room_id: 1,
       room_name:'Văn B',
        age: 22,
        phone: 333211
    }
    ,{
        id:3,
        room_id: 2,
        room_name:'Văn C',
        age: 20,
        phone: 44422211
    }
   ]

   //Làm the nao lay dc tên phòng từ rooms samh staffs

   for(let i =0; i<staffs.length; i++){
        for( let j =0; j < rooms.length; j++){
            if(staffs[i].room_id ===rooms[j].id){
                staffs[i].room_name = rooms[j].name
            }
        }
   }
console.log(staffs);

const tableStaffs =`
<table>
     <thead>
         <tr>
             <th>ID</th>
             <th>name</th>
             <th>age</th>
             <th>phone</th>
         </tr>
     </thead>
     <tbody>
         //duyệt các item trong mảng và lấy ra value 
         // map sẽ lấy value trong mảng và thay đổi để tạo thành 1 mảng mới
     ${staffs.map((item, key) => ( ` 
     <tr index= ${key}>
         <td>${item.room_id}</td>    
         <td>${item.room_name}</td>    
         <td>${item.age}</td>    
         <td>${item.phone}</td>
     </tr>
     `))}
     </tbody>
</table>
`
console.log(tableStaffs);
//
const randomNumber = [10,20,30,92,2,11,8,9,7,6,98];
// viết hàm trả về mảng chứa 2 số min, max
const findMinAndMax = (arrNumbers) =>{
    let min = arrNumbers[0]; //gán ptu item đầu tiên là min
    let max = arrNumbers[0]; 
      for(let i =0; i<arrNumbers.length; i++){
        if(arrNumbers[i] < min){
            min = arrNumbers[i];
        }
        if(arrNumbers[i] > max){
            max = arrNumbers[i];
        }     
      }
      return [min, max]; // return về 1 array. Array lưu trữ nhiều gtrij trong 1 biến đơn
    }
let min, max;
[min, max] = findMinAndMax(randomNumber); // trả về 1 mảng . dùng Destruc để nhận gtri 1 cách nhanh nhất
console.log(min, max);
// let res = findMinAndMax(randomNumber); 
//console.log(res[0], res[1]);

/////
const listWork =[
    {
        id:1,
        name: 'html',
        done: false
    },
    {
        id:2,
        name: 'css',
        done: false
    },
    {
        id:3,
        name: 'Js',
        done: true
    },
]
//chuyen false => true, với id =2
//map: duyệt qua và return lại
const newWork =listWork.map(item =>{
        return item.id ===2 ? {...item,done: true} : item;
        // ...item //  { id:2, name: 'css', done: false ,done: true} // nếu bị trùng key thì key ban đầu sẽ bị xóa đi
});
console.log(newWork);

//// trả về 1 mảng ko chứa id=3, ko dk ảnh hưởng đến arr ban đầu
    const newWork2 = listWork.filter(item => item.id !=3  );
    console.log(newWork2);

///// then 1 object moi vao ko làm thay đổi mang bd
const newWorks = [...listWork, {id : 4, name: 'React', done: false}]
console.log(newWorks);
////
const t1 = {a:1, b:2, c:3};
const t2 = { ...t1, a:5, b:7,d: 6 }
console.log('t2',t2); // vì t1 là thêm vào t2 nên t2 sẽ ưu tiên gtri của n và xóa của t1

const t3 = {a:1, b:2, c:3, list : [ { id:1, name: 'ty'} , { id:2, name: 'teo'}]};
const {list } = t3; // lấy ra mảng list
const {name}= list[0]; // lấy name ở phần tử 0
console.log(name);


//////////////////////

let a1=10;
let b1 =20;
const d = { a1, b1}; // cú pháp ngắn gọn /dk sd khi có 1 key
console.log(d);