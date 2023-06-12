const btnRandom = document.querySelector('.button-random');

let myArray = ['Samir', 'Nicolas', 'Garry', 'Alexandre', 'Quentin', 'Nisrine', 'Loic', 'Fabrice', 'Samra', ];

btnRandom.addEventListener('click', (e) => {
    // console.log(e)
    RandArray(myArray)
    setTimeout(() => {
        btnRandom.innerHTML = "Random apprenant"
    }, 3000);
})

function RandArray(array){
    let rand = Math.random()*array.length | 0;
    console.log(rand);
    let rValue = array[rand];
    console.log(rValue);
    btnRandom.innerHTML = rValue;
}
