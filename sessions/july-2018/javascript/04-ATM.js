class ATM {
    constructor(cashinmachine, bankname){
        this.cashinmachine = cashinmachine;
        this.bankname = bankname;
    }
    withdraw(amount){
        var a = [];
        var remain;
        a[0] = parseInt(amount/2000);
        remain = amount%2000;
        a[1] = parseInt(remain/500);
        remain = remain%500;
        a[2] = parseInt(remain/200);
        remain = remain%200;
        a[3] = parseInt(remain/100);
        remain = remain%100;
        a[4] = parseInt(remain/50);
        remain = remain%50;
        a[5] = parseInt(remain/20);
        remain = remain%20;
        a[6] = parseInt(remain/10);
        remain = remain%10;
        a[7] = parseInt(remain/5);
        remain = remain%5;
        a[8] = parseInt(remain/2);
        remain = remain%2;
        a[9] = parseInt(remain/1);
        remain = remain%1;
        console.log(`2000 x ${a[0]}`);
        console.log(`500 x ${a[1]}`);
        console.log(`200 x ${a[2]}`);
        console.log(`100 x ${a[3]}`);
        console.log(`50 x ${a[4]}`);
        console.log(`20 x ${a[5]}`);
        console.log(`10 x ${a[6]}`);
        console.log(`5 x ${a[7]}`);
        console.log(`2 x ${a[8]}`);
        console.log(`1 x ${a[9]}`);
    }
}

var amount = new ATM("1000000",'Bank of Baroda');
amount.withdraw(5780);