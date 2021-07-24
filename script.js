let section1 = document.querySelector('.section1');
let section2 = document.querySelector('.section2');
let section3 = document.querySelector('.section3');
let arraySection1 = create();
let arraySection2 = create();
display(section1, arraySection1);
display(section2, arraySection2);


function create() {
    let massiveExamle = [];
    let min = 0;
    let max = 300;

    for (let createRandom = 0; createRandom <= 20; createRandom++) {

        massiveExamle[createRandom] = Math.floor(Math.random() * (max - min)) + min;
        // massiveExamle.push(getRandomInt(0, 600));

    }

    return massiveExamle;

}

function display(section, massive) {
    section.innerHTML += massive.join();
}

function findIdenticalElement() {
    console.log(arraySection1);
    console.log(arraySection2);


    for(let number = 0; number < arraySection1.length; number++){

        for(let indexMassive = 0; indexMassive <  arraySection2.length; indexMassive++){
            if(arraySection1[number] === arraySection2[indexMassive]){
                section3.innerHTML += arraySection1[number];
            }
        }
    }
}

findIdenticalElement();