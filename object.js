var student1 ={
    id: 24,
    name: "Nayan",
    dept: "CSE"
};
var book ={
    title:"start with why !",
    price: 100,
    page: 200
}

// console.log(book)
// console.log(book.price)

//way-1
// book.page = 150;
// console.log(book.page)

//way-2
// book["title"] = "XYZ"
// console.log(book.title)

//way-3
var changeBookPrice = "price"
book[changeBookPrice] = 90;
console.log(book.price)