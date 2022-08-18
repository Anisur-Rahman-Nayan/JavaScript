const date = new Date('1971-12-16')
// console.log(date)


const date1 = new Date(1971,12,16,12,11,50,40,80)
// console.log(date)

// moment.js

if(date.getTime() < date1.getTime()){
    console.log('True')
}