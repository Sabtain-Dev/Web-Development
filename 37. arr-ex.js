const characters = [{
    name: 'Ahmed',
    height: '172',
    mass: '77',
    eye_color: 'brown',
    gender: 'male'
},
{
    name: 'Gul',
    height: '175',
    mass: '167',
    eye_color: 'red',
    gender: 'female'
},{
    name: 'Ali',
    height: '162',
    mass: '57',
    eye_color: 'blue',
    gender: 'male'
},{
    name: 'Khan',
    height: '192',
    mass: '189',
    eye_color: 'black',
    gender: 'male'
}];

//Get an array of all names
const names = characters.map((ch) => ch.name)
console.log(names)

//Get an array of objects with just name and height properties
const propertiesofch = characters.map(ch => {
    return { name: ch.name, 
            height: ch.height}
})
console.log(propertiesofch);

//Get the total height of all characters
const totalheight = characters.reduce((prevheight, characters) => {
    return prevheight + Number(characters.height);
},0);
console.log(totalheight);

//Get characters with mass greater than 100
const greatermass = characters.filter((characters) => {
    return characters.mass > 100
})
console.log(greatermass)

//Sort by all male charaters
const malech = characters.filter(characters => characters.gender === 'male')
console.log(malech)

//Sort by Gender
const sortbygender = characters.sort((character1, character2) => 
{
    if(character1.gender > character2.gender){
    return -1;
    }
    if(character1.gender < character2.gender){
        return 1;
    }   
    return 0;
}
)
console.log(sortbygender)

//Sort by name
const sortbyname = characters.sort((character1, character2) => 
{
    if(character1.name > character2.name){
    return -1;
    }
    if(character1.name < character2.name){
        return 1;
    }   
    return 0;
}
)
console.log(sortbygender)
  
// Does every character have mass more than 60?
console.log(characters.every(character => character.mass > 60));
  
// Does every character have blue eyes?
console.log(characters.every(character => character.eye_color === 'blue'));
  
// Is there at least one female character?
console.log(characters.some(character => character.gender === 'female'));
  
// Is there any person taller than 200?
console.log(characters.some(character => character.height > 200));  