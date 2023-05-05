function getAllUser (callback){
    //let users = [];
    setTimeout( ()=>{  //hàm bất đồng bộ nên return ra users = [ ]
      callback(  [
                { 
                    id:1,
                    name: 'teo',
                    age:20
                },
                { 
                    id:2,
                    name: 'ty',
                    age:24
                },
                { 
                    id:3,
                    name: 'hoi',
                    age:29
                },
            ]);
    },1000)
 //   return users; //= []
    // return [
    //     { 
    //         id:1,
    //         name: 'teo',
    //         age:20
    //     },
    //     { 
    //         id:2,
    //         name: 'ty',
    //         age:24
    //     },
    //     { 
    //         id:3,
    //         name: 'hoi',
    //         age:29
    //     },
    // ]
}
function getUserByName(name=' ',callback,reject ){
    // let users = getAllUser( );
    // let user = users.filter(item =>item.name ===name);
    // return user;
    getAllUser((users)=>{
        let user = users.filter(item =>item.name ===name);
        console.log(user);
        if(user.length >0){
            callback(user)
        }else{
            reject({ cod:400, mess : 'error code'})
        }
    })
}
 getUserByName('teo',(data)=>{ // hàm gọi lại với các đối số truyền vào là : ...
    console.log(data);
 }, err=>{console.log(err)});// name, callback,reject là tham số dk nhận 


// console.log(data);
//tham số hình thức là tham số truyền vào khi định nghĩa
// tham số thực là tham số 

//////////////// Promise /////////

function getListUsers ( ){
return new Promise ( (resolve,reject)=>{ // callback fn
    setTimeout(() =>{
       if(true){
        resolve( [
            {  id:1, name: 'teo', age:20},
            {  id:2,name: 'ty', age:24 },
            {  id:3,  name: 'hoi',   age:29 },
            {  id:4,  name: 'Tao',   age:29 },
        ])
       }else{
        reject({cod:404, mess : ' Not found data'})
       }
     },1000);
});
}
//lấy dâta từ promise
const users = getListUsers();
//console.log(users); //Promise { <pending> } đag đợi data
users.then(
             data=>{
                let user = data.filter(item =>item.name ==='teo');
                console.log(user);
        })  //then là lấy data từ resolve
        .catch(
            err=>{
                console.log(err);            }
        );//catch là lấy data từ reject
