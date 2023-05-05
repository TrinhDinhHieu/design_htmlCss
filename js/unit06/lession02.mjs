
import axios from "axios";
// genertor function giups ktra cac lan chay tl kq
function* callData(){
    console.log('call Get all comment');
    yield axios.get('https://dummyjson.com/comments');
    console.log('call single Comment ');
    yield axios.get('https://dummyjson.com/comments/1');

}
const data = callData();
console.log(data);
const result = data.next().value; //Promies

result.then(i =>i.data) //axios return ve data
.then(res =>{console.log(res)})
.catch(
    err=>{
        console.log(err);            }
);//catch là lấy data từ reject

// .catch(err => {console.log(err)});

