class Student{
    //dinh nghia thuoc tinh
    name = 'Teo';
    age = 20 ;
    address = 'Ha Noi';
    // trong Class ko dk dung let/var/const de khai bao thuoc tinh

    //dinh nghia phuong thuc (ham) - hanh động của đối tượng
    learning(){
        //ko có từ khóa function
        return "JS"
    }
    sleeping = () =>{ return 'ngủ lúc 12h'}
    getName = ()=>{
        console.log(this);
        return this.name; // this là con trỏ của nội tại class đến các thuộc tính
    }
    static showName(){
        const st = new Student;
                 return st.name}     // static là ko cần đối tượng để truy cập vào // và ko tồn tại object trong this
        static getAddress(){
            //neu dung this thì chỉ gọi đến nhưng thuộc tính hay phuong cung phải static
            return this.address;
        }
        myAddress(){
            return Student.getAddress(); // ko dùng this.getAddress dk vì getAddress là 1 static
        }
}
// khoi tao doi tuong cho class
const IT = new Student; //Một đối tượng mới được tạo ra.
const CK = new Student;
//truy cap vao class
console.log(IT.name);
console.log(CK.age);
console.log(Student.showName());
//truy cập vào hàm và gọi hàm ra sử dụng

// console.log(CK.getName());
console.log(IT.myAddress());