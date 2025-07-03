class Counter2 {
     static count: number = 0;

     static increamenet() {
        this.count++;
     }

     static getCount() {
        console.log(this.count);
     }
}

// let counter1 = new Counter2(); 객체화 x
Counter2.increamenet();
Counter2.increamenet();
Counter2.increamenet();
Counter2.getCount();