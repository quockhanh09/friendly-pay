function shuffle(array) {
    let currentIndex = array.length,
    randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex] =
        array[currentIndex],
        array[currentIndex],
         ];
    }
        return array;
}

let block = 0;

function spin() {
    if (block == 1) {
        const loginC = confirm('You need to Login');
        if (loginC) {
            window.location.href ='/assets/HTML/login.html';
        }
        return true;
    }

    block = 1;

    let selectItem = '';
    wheel.play();
    const box = document.getElementById('box');
    const element = document.getElementById('mainbox');


    let slot1 = shuffle([3000]); //
    let slot2 = shuffle([2610]); //2250, 2610, 1890, 2250, 
    let slot3 = shuffle([2570]); // 2130, 2530, 1850, 2170, 2570 /2210, 1810, 2170, 2530, 1850, 
    let slot4 = shuffle([2490]); //2110, 2470, 2490, 1750/ 1750,1770, , 2110, 2470, 2130
    let slot5 = shuffle([3850]); //1750, 
    let slot6 = shuffle([2350]); // 2350, 1990, 1630/ , 1630 1990, 

    let results = shuffle([
        slot1[0],
        slot2[0],
        slot3[0],
        slot4[0],
        slot5[0],
        slot6[0],
    ])

    if(slot1.includes(results[0])) selectItem = 'John Cena payed';
    if(slot2.includes(results[0])) selectItem = 'Amadin Sef payed';
    if(slot3.includes(results[0])) selectItem = 'Holy Winner payed';
    if(slot4.includes(results[0])) selectItem = 'Cristina Robetor payed';
    if(slot5.includes(results[0])) selectItem = 'Khoa Nguyen Van payed';
    if(slot6.includes(results[0])) selectItem = 'Elon Musk payed';

    box.style.setProperty('transition', 'all ease-out 15s');
    box.style.transform = 'rotate(' + results[0] + 'deg)';
    element.classList.remove('animate');
    setTimeout(function() {
        element.classList.add('animate');
    }, 15000);

    setTimeout(function() {
        applause.play();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${selectItem}`,
            showConfirmButton: false,
            timer: 10000
          })
    }, 15500);

    setTimeout(function() {
        box.style.setProperty('transition', 'initial');
        box.style.transform = `rotate(${results[0]}deg)`;
    }, 15000);

}