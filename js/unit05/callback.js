const allNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//tự viết 1 hàm trả về số chẵn /lẻ

function filterArr(arr, callback){ 
    //callback là 1 function để xử lý 1 tính toán logic 
    if(typeof callback !== 'function'){
        return false;
    }
    if(Array.isArray(arr)){ // ktra pải là 1 mảng hay ko
        return false;
    }
    let result = [];
    for(let number of allNumber){ //duyệt mảng lấy item
        // if(number % 2 ===0 ){
        //     result.push(number)
        // }
        if(callback(number)){ // callback là tham số truyền vào
            result.push(number)
        }
    }
    return result;
}

//định nghĩa 1 callback để truyền vào hàm khác
function isEven(numbers){
    return numbers %2 ===0;
}

function isODD(numbers){
    return numbers %2 !==0;
}
console.log(filterArr(allNumber,isEven));
console.log(filterArr(allNumber,isODD));
//cách khác callback
console.log(filterArr(allNumber,(n)=>n % 2===0));
// callback là 1 tham số truyền vào hàm và n là 1 hàm 
//
console.log('A');
setTimeout(()=>{
    console.log('B');
},0)
    //(callback, time) 
    // thực thi 1 cv nào đó đúng 1 lần
    // setTimeout là 1 hàm bất đồng bộ
console.log('C');