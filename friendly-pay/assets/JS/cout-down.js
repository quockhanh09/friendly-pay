function countTo() {
    let from = 0;
    let to = 160;
    let step = to > from ? 5 : -1;
    let interval = 100;

    if (from == to) {
        document.querySelector("#output").textContent = from;

        return;
    }

    let counter = setInterval(function() {
        from += step;
        document.querySelector("#output").textContent = from;


        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}
countTo();


function countTo1() {
    let from = 0;
    let to = 120;
    let step = to > from ? 3 : -1;
    let interval = 100;

    if (from == to) {
        document.querySelector("#output-1").textContent = from;

        return;
    }

    let counter = setInterval(function() {
        from += step;
        document.querySelector("#output-1").textContent = from;


        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}
countTo1();

function countTo2() {
    let from = 0;
    let to = 9;
    let step = to > from ? 1 : -1;
    let interval = 100;

    if (from == to) {
        document.querySelector("#output-2").textContent = from;

        return;
    }

    let counter = setInterval(function() {
        from += step;
        document.querySelector("#output-2").textContent = from;


        if (from == to) {
            clearInterval(counter);
        }
    }, interval);
}
countTo2();