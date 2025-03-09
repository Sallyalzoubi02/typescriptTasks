//You are given an object that follows an interface Person with properties name and age. 
// Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."
function checkAge(p) {
    if (p.Age > 18) {
        console.log("Adult");
    }
    else {
        console.log("Minor");
    }
}
var p1 = {
    Name: "Ali",
    Age: 20,
    Gender: "Male"
};
checkAge(p1);
var teacher = {
    Name: "Ahmad",
    subjects: ["Math", "Music", "English"]
};
teacher.subjects.forEach(function (subject) {
    console.log(subject);
});
console.log(teacher.subjects);
var products = [
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
function sale(products) {
    products.forEach(function (product) {
        if (product.quantitiy > 5) {
            product.price = product.price * 0.15;
        }
        console.log(product);
    });
}
sale(products);
var pro = [];
var form = document.getElementById("form1");
form.onsubmit = function (_) {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var i = pro.length;
    var data = new FormData(form);
    pro[i] = {
        name: data.get('name'),
        quantitiy: data.get('quantity'),
        price: data.get('price'),
        description: data.get('description')
    };
    console.log(pro[i]);
    localStorage.setItem("products", JSON.stringify(pro));
    view();
};
function view() {
    var p = localStorage.getItem("products");
    var Products = JSON.parse(p);
    var productList = document.getElementById("view");
    productList.innerHTML = "";
    Products.forEach(function (product) {
        var listItem = document.createElement("li");
        listItem.textContent = "".concat(product.name, " - ").concat(product.description, " - ").concat(product.price, " - ").concat(product.quantitiy);
        productList === null || productList === void 0 ? void 0 : productList.appendChild(listItem);
    });
}
