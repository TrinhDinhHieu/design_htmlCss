import { api } from "./services/api.mjs";

//c1
function getDataPost(id){
    const data = api.getDataPosById(id);
    // console.log(data);
    data.then(resolve =>{
        console.log(resolve);
    }).catch(err=>{
        console.log(err);
    })
}
// getDataPost(1);
//c2
async function getDataPostV2 (id){
    const data = await api.getDataPosById(id); // async/await đã return về Promise r nên ta ko cần then/catch
    console.log(data);
    if(data.hasOwnProperty('id')){ // kiểm tra object xem có key=id ko
        const comment = await api.getDataCommentPosById(data.id); // lấy ra id của data trên
        // console.log(comment);
        return comment
    }
    
}
const dt =getDataPostV2(1);
console.log(dt);
//đang return về Promise
dt.then(res =>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})