//You are given an object that follows an interface Person with properties name and age. 
// Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

interface Person{
    Name : string,
    Age : number,
    Gender : "Male" | "Female"
}

function checkAge (p : Person){
     if (p.Age > 18 ){
        console.log("Adult")
     }
     else{
        console.log("Minor")
     }
}

var p1 : Person = {
    Name : "Ali",
    Age : 20 ,
    Gender : "Male"
}

checkAge(p1)

//-------------------------------------------------------------------------------------------------------------
//You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects).
//  Print all the subjects the teacher teaches.

interface Teacher {
    Name : string,
    subjects : string[]
}

var teacher : Teacher ={
    Name : "Ahmad",
    subjects :["Math","Music","English"]
}

teacher.subjects.forEach(subject => {
    console.log(subject)
});

console.log(teacher.subjects)

//-------------------------------------------------------------------------------------------------------------------------
//You are given an array of Product interfaces, where each product has a name, price, and quantity.
// Write a script to decrease the price of each product by 15% if the quantity is greater than 5.

interface Product {
    name: string;
    quantitiy: number;
    price: number;
}

const products: Product[] = [
    {
        name: "Laptop",
        price: 999.99,
        quantitiy: 4
    },
    {
        name: "Headphones",
        price: 149.99,
        quantitiy: 10

    },
    {
        name: "Smartphone",
        price: 799.99,
        quantitiy: 1
    }
];

function sale(products : Product[]){
    products.forEach(product =>{
        if(product.quantitiy > 5){
            product.price = product.price * 0.15
        }
        console.log(product)
    })
}


sale(products)

//---------------------------------------------------------------------------
// Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) 
// for product and when you submit the form it will save the product inside array in the local storage and then
//  display all the products as a cards under the form.
//use interface to create a structure for this product 


interface product {
    name: string,
    quantitiy: number,
    price: number,
    description : string
}

var pro : product[] =[]
var form : any= document.getElementById("form1");
form.onsubmit = (_) => {
    event?.preventDefault();
    var i = pro.length;
    
    var data : any = new FormData(form)
    pro[i]= {
        name : data.get('name') ,
        quantitiy: data.get('quantity'),
        price : data.get('price'),
        description: data.get('description')
    }
    console.log(pro[i])
    localStorage.setItem("products" , JSON.stringify(pro))
    view()
}

function view(){
    var p : any = localStorage.getItem("products")
    var Products :any = JSON.parse(p);
    var productList : any = document.getElementById("view")
    productList.innerHTML = "";
    
    Products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - ${product.description} - ${product.price} - ${product.quantitiy}`;
        productList?.appendChild(listItem);
    });
    
}

