const products = cartObj();
let firstObj;
let total = 0;
let delivery = 10000;
for (const key in products) {
    total += products[key].price;
    firstObj = products[key];
    console.log(firstObj);
    if (total == 39000) {
        console.log(`${"Sizning zakazingiz"} ${total + 10000} ${"so'm bo'ldi"} ${"(Zakaz :"} ${total} ${"dostavka : 10000)"}`);
    }
    if (total == 37000) {
        console.log(`${"Sizning zakazingiz"} ${total + 10000} ${"so'm bo'ldi."} ${"(Zakaz :"} ${total} ${"dostavka : 10000)"}`);
    }
};
