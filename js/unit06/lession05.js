//viet chuong trình bậc 2 theo OOP js

class GiaiPTB2{
    // thông thường contructor cũng là nơi giúp để định nghĩa- tạo ra thuộc tính
    constructor( a, b, c){ //hàm khởi tạo . hàm này sẽ tự động chạy đầu tiên khi khởi tạo đối tượng trong class
        //console.log('call 1st time');
        this.a = a;// this.a là thuộc tính // a là tham số thực truyền vào để chạy // const của hàm
        this.b = b;
        this.c = c;
        // this.a = a; this.b = b;this.c = c; là hệ só pt bậc 2
    }
   #getData = () => { // # là khai báo phạm vi hạt động . và hàm này chỉ chạy trong class và ra bên ngoài sẽ ko truy cẬP DK 
    
        return (Math.pow(this.b,2)-4*this.a*this.c)
    }

    //tìm nghiệm
    getResulf = () =>{
        const detal = this.getData();
        const result ={};// 
        if(detal === 0){
            result.mess = 'Pt có nghiem kep';
            result.res = -this.b / 2*this.a;
           return result;
       }else if( detal > 0){
          let x1 = (-this.b - Math.sqrt(detal)) / 2*this.a ;
          let x2 = (-this.b + Math.sqrt(detal)) / 2*this.a ;
          result.mess = 'pt có 2 nghiệm ';
          result.res = {x1, x2};
          return result;
       }else if(detal < 0){
        result.mess = ' pt vô nghiệm';
        result.res = 'NaN'
            return result;
       }
      
        
    }
}
const pt =new GiaiPTB2(1, -3, 2); // constructor sẽ chạy // magic medthods
// pt.getResulf().result;// xong test sẽ dk chạy
const {mess, res} = pt.getResulf(); // bổ sung mess, res vào object result
console.log(mess , res);