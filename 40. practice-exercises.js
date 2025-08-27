let square ={
    side: 5,
    get area (){
        // return this.side * this.side
        return this.side ** 2
    }
}

square.side = 10
console.log(square)

// ---------------------------------------
 function stringconcate(separator, ...strings){
    let returnval = ''
    strings.forEach((strings, i) => {
        if(i == strings.length -1 ){
        returnval += string;
    }
    else{
        returnval += string + separator;
    }
 })
 return returnval;
 }
 console.log(stringconcat('+', 'this', 'is', 'invalid'))

//  -------------------------------------------

let [first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8]
// let first = arr[0]
// let second = arr[1]
// let third = arr[2]
// let other = arr.slice[3]

// ------------------------------------------------

function matchhouse(house){
    if(house <= 0 ){
        return 0;
    }
    else{
        return house * 6 - house + 1
    }
}

console.log(matchhouse(0))
console.log(matchhouse(4))
console.log(matchhouse(87))

// ============================================================