// const array = [1,2,3,4,5,6,7,8,9]
// console.log(array[array.length-1])

const num = new Array[1,2,3,4,5,6,7,8,9]
//Push
num.push(10)
console.log(num.push(10))

//Unshift
num.unshift(0)
console.log(num.unshift(0))

//Pop
num.pop()
console.log(num.pop())

//Shift
num.shift()
console.log(num.shift())

//Change value
num[0]= {num:80}
console.log(num)

// --------------------------------------------------------
const names = ['Ali', 'Sabtain', 'Shuja', 'Saad', 'Anwar', 'Bilal', 'Ali']
// names.indexOf('Ali')

//indexof
console.log(names.indexOf('Sabtain'))  //returns 1 and not exist return -1
console.log(names.indexOf('Ali', 1)) //returns 6 instead of 0

//lastindexof
names.lastIndexOf('Ali')
console.log(names.lastIndexOf('Ali')) //returns 6 checks last occurence

//includes
names.includes('Shuja')
console.log(names.includes('Shuja')) //returns boolean if name exist in list
console.log(names.includes('Shuja', 3)) //locates form index 3 returns false

// -------------------------------------------------------------------

let channels = [{
    name : 'Its_Sabtain',
    subscribers : 200 
},{
    name : 'Apna College',
    subscribers : 30000
},{
    name : 'M.Sabtain Khan',
    subscribers : 4000 
}];

//Inline Call back function
console.log(channels.find(function(element){
    return element.subscribers === 4000
}))//return object and if use name also returns object

//arrow functions
console.log(channels.find (element => element.subscribers === 'Its_Sabtain'))
//same as above

// -------------------------------------------------------------------------
let names1 = ['Ali', 'Sabtain', 'Shuja']
let names2 = ['Saad', 'Anwar', 'Bilal']
// let names3 = names1.concat(names2)
let names3 = [...names1, ...names2] //using spread method do same as concat do
//...(spread operator)   //also used data instead of names1 and names2

console.log(names3)
console.log(names1.slice(3,5)) //removes names1 and display Saad and Anwar and alos removes 5 means bilal

// ---------------------------------------------------------------------------------

//For loop
for(let i =0; i< names.length; i++){
    // console.log(names[i]) //returns all names 
}

//For off Loop
for(let name of names){
    // console.log(name) //returns all names
}

//For-each
names.forEach(function(name,index){
    // console.log(name,index) //returns data with indexes
})

// ----------------------------------------------------------------------------------------------

//Join
let student = ['K', 'H', 'A', 'N']
console.log(student.join(" "))

//Split
console.log(student.split('_'))

// -----------------------------------------------------------------------------

let cities = [
    {name: 'Karachi', population: 56435574},
    {name: 'Islamabad', population: 753026},
    {name: 'Haripur', population: 91324366},
    {name: 'Peshawar', population: 8631097},
    {name: 'Skardu', population: 659769989}
];

console.log(cities.filter(city => city.population > 3000000))
console.log(cities.map(city => city.population * 2))

// --------------------------------------------------------------------------------