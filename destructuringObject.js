// const student ={
//     id: 21,
//     name:'King Hilsha',
//     phone: 9111,
//     add: "Dhaka"
// }

// const {name,phone,id} = student
// console.log(phone)

const student ={
    id:22,
    name:'Rahim',
    makrs : {bangla:90, english:89,math:99},
    add:'Dhaka'
}

// const infoMarks = student.makrs.english;
// console.log(infoMarks)

const {bangla,english,math}  = student.makrs
console.log(bangla,english,math)