
function* makeId(){
    let id = 0;
    while(true){ //loop vo hạn
        yield id++;
    }
}
const gen = makeId();
console.log(gen.next); 
//yield làm tạm dừng lại khi chưa gọi đến . và có thể quay lại chạy ctrinh đó
console.log(gen.next); 
