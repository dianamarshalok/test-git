const people =[
    {
        name: 'Rose',
        sex: 'male'
    },
    {
        name: 'Monica',
        sex: 'female'
    },
    {
        name: 'Chandler',
        sex: 'male'
    },
    {
        name: 'Phoebe',
        sex: 'female'
    },
    {
        name: 'Joey',
        sex: 'male'
    },
    {
        name: 'Rachel',
        sex: 'female'
    },
]
function addNiceAdjective(arr) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i].sex === 'male') {
            console.log (arr[i].name + ' handsome')
        } else { console.log (arr[i].name + ' beautiful')}
    }
}

addNiceAdjective(people)

const count = {
    men: 0,
    women: 0,
}
people.forEach((element ) => {
    element.sex === "female" ? count.women++ : count.men++ ;
})
 console.log(count)



const peopleWithName = people.map(element => ({
    ...element, 
    age: Math.floor(Math.random() * (50 - 13 + 1)) + 13 
}));
console.log(peopleWithName)


const peopleWithName2 = people.map(function(element){
    return element.sex === "male" ? "Mr." + element.name : "Mrs." + element.name;
})

console.log(peopleWithName2)








let btnHapiness = document.getElementById('btn-hapiness');
let imgDisplay = document.querySelector('.img1').style ;
let btnSadness = document.getElementById('btn-sadness');
let imgDisplay2 = document.querySelector('.img2').style ;

btnHapiness.addEventListener('click', function(){
    imgDisplay.display = 'inline';
    imgDisplay2.display = 'none';
    btnHapiness.disabled = true;
    btnSadness.disabled = false;
})
btnSadness.addEventListener('click', function(){    
    imgDisplay.display = 'none';
    imgDisplay2.display = 'inline';
    btnHapiness.disabled = false;
    btnSadness.disabled = true;
})






const numbers = [1, 3, 4, 3, 5, 4, 4, 2, 4, 4, 5, 4, 0, 9, 9, 6, 0, ]
function getRepetitionOfNumber(numbersArr, number) {
    let respond = 0;
    for (let i=0; i<numbersArr.length; i++){
        if (numbersArr[i] === number) {
            respond++
        }
    }
    // if (respond > 0){
    //      return respond
    // } else {return "Даного числа немає в масиві!"} скоточуємо нижче
    return respond > 0 ? respond : "Даного числа немає в масиві!"

}
console.log(getRepetitionOfNumber(numbers, 4))


// for (let i=0; i<numbersArr.length; i++){
//     if (numbersArr[i] === number) {
//         respond++
//     } else {respond = respond}
// }