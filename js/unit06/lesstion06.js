class A{
    #name = 'teo';
    age =20;
    phone = '7,8,9'
    constructor(){ 
       
        console.log('contructor class A');
    }
    getName = () =>{
        return this.#name;
    }
    getPhone(){ // super ko hỗ trợ
        return this.phone;
    }
}
 //console.log(a.#name); // private - ko thể truy cập ngoài class
//  console.log(a.name);//pulic
class B extends A{ // class B là con của class A - nên B sẽ kế thừa thừ A
    // myName = ()=>{
    //     return this.#name; // sai - vì #name là private của class A nên tk B ko kế thừa dk
    // }
    myAge = () =>{
        return this.age; // age là pulic của class A nên B dk sd
    }
    constructor(){ 
        super(); // ưu tiên lùi về sau  - để tránh tính trạng override ( ghi đè) contructor của class cha A
        console.log('contructor class B');
    }
    myphone = '1,2,3';
    getPhone = () =>{
        //override lại medthods của A
        return this.myphone;
    }
    myPhone =()=>{
        //
        return super.getPhone();
    }
}
const b = new B; // nếu có 2 contructor thì hàm sẽ ko bit chạy của tk nào trc nên error
console.log(b.getName());
console.log(b.myAge());
console.log(b.myPhone()); //

