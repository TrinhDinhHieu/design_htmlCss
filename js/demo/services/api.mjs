//Export Api
import axios from 'axios';

const getAllDataProduct= ( ) =>{
    const urlApi =` https://dummyjson.com/products`;
    return axios.get(urlApi); // return về 1 Promise
}
const getAllDataProductByID = (id)=>{
    const urlApi = ` https://dummyjson.com/products/${id}`;
    return axios.get(urlApi); // return về 1 Promise
}
// async/ await  sẽ xem được trạng thái của n 
const getDataPosById = async (id)=>{
    const url = `https://dummyjson.com/products/${id}`;
    const reponse = await axios.get(url);
    return await reponse.status ===200 ? await reponse.data : {}; // là 1 promise 
}
const getDataCommentPosById = async (id)=>{
    const url = `https://dummyjson.com/posts/${id}/comment`;
    const reponse = await axios.get(url);
    return await reponse.status ===200 ? await reponse.data : {};
}
export const api = { 
    // getAllDataProduct : getAllDataProduct ; //viết đầy đủ 
    getAllDataProduct,
    getAllDataProductByID,
    getDataPosById,
    getDataCommentPosById
    
}
// export default là chỉ export dk cho 1 đối tượng