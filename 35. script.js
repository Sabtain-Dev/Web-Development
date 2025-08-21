let hellobtn = document.querySelector('button');
hellobtn.addEventListener('click', inputMsg);

// function showMsg(){
//     alert("Hello, Its_Sabtain!");
// }

function inputMsg(){
    let name= prompt('Change Student Name: ');
    hellobtn.textContent= 'Roll:01 >' + name;
}