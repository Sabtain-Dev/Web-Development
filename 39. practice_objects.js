
// Object 
let product = {
    itemName: 'Flower',
    price:50,
    discount:20,
    itemCode:'F40'
}

// Constructor
function createProduct(name, price, discount, itemCode){
    return{
        itemName: name,
        price: price,
        discount: discount,
        itemCode: itemCode
    }
}

// Usage
const football =  createProduct('football', 400, 10, 'F30');

// Constructor Function 
function Product(name, price, discount, itemCode){
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode;
    this.discountValue = function(){
        return price*discount/100;
    } //ananymous function
}

// Usage
const mobile = new Product('Iphone', 100000, 5, '15')

// ------------------------------------------------------------------------------------------------------------------------------

// OOP 

// Delaring a Class 
class Product{
    constructor(itemname){        //Price, Discount, ProductCode
       this.itemname = itemname;
    //    this.Price = Price;
    //    this.Discount = Discount;
    //    this.ProductCode = ProductCode; 
    }
    getItemName(){
        return this.itemname + "is a Product";
    }
}

class Furniture extends Product {
    constructor(itemName){
        super(itemName);
    }
    getItemName(){
        return this.itemName + "is a Furniture"
    }
}

// USE 
let pencil = new Product('Pencil')//, 20, 2, 'P10'
let chair = new Furniture('Chair', 499, 15, 'C10')

// const Product_1 = class Product{
//     constructor(itemname, Price, Discount, ProductCode){
//        this.itemname = itemname;
//        this.Price = Price;
//        this.Discount = Discount;
//        this.ProductCode = ProductCode; 
//     }
//     get getdiscountValue(){
//         return this.Discount;  //getter
//     }
//     set setdiscountValue(value){
//         return this.Discount = value;  //setter
//     }
//     discountValue(){
//         return this.Discount*this.Price/100 //Method
//     }
// };