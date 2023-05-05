//
import { api } from "./services/api.mjs";

function getData(){
    const data = api.getAllDataProduct();
    console.log(data);
    //lấy data từ Api về
    data.then( resolve =>{
        console.log(resolve.data);
    })
            .catch(
              err =>{
                console.log(err);
              }
            )
}
// getData();

function getDataByID(id){
    api.getAllDataProductByID(id).then(result =>result.data)
    .then ( data =>{ // .then thứ 2 để nhận data từ then trên trả về //changing
  console.log(data);
   })
    .catch(err=>{
        console.log(err);
    })
}
// getDataByID(2);

