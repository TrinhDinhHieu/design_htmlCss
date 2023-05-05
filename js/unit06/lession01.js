
function foo(){
    console.log('I');
    console.log('Can not');
    console.log('pause');

}
foo();
//I
// cant not
//pause 
//triển khai theo generator function
function generate(){
    //function* : cú pháp ghi nhớ
    console.log('call 1st time');
    yield 1;//pause 1
    console.log('call 2st time');
    yield 2; // pause 2
}
const gen = generate();

console.log(gen); // Ob {generator}
console.log(gen.next); // {value : 1 ; done: false}
// next : thực thi các hàm đã pause 
console.log(gen.next); // {value : 2 ; done: false}