let inpA = document.querySelector('#inpA');
let inpB = document.querySelector('#inpB');
let inpC = document.querySelector('#inpC');
let inpX1 = document.querySelector('#inpX1');
let inpX2 = document.querySelector('#inpX2');
let findRootsButton = document.querySelector('#findRootsButton');
let pythagoreanTripleButton = document.querySelector('#pythagoreanTriple');
let foundCommonDivisorsButton = document.querySelector('#foundCommonDivisors');
let commonDivisorsList = document.querySelector('#commonDivisorsList');


findRootsButton.addEventListener('click', function() {
    findRootsButton.classList.add('animationPythagoreanTriple');
        let animationTimerId = setInterval(function() {
            findRootsButton.classList.remove('animationPythagoreanTriple');
            clearInterval(animationTimerId);
        }, 150);
    
    let coefficient1 = Number(inpA.value);
    let coefficient2 = Number(inpB.value);
    let coefficient3 = Number(inpC.value);
    let discriminant = (coefficient2 ** 2) - (4 * coefficient1 * coefficient3);
    
    if (discriminant > 0) {
        inpX1.value = (-coefficient2 + Math.sqrt(discriminant)) / (2 * coefficient1);
        inpX2.value = (-coefficient2 - Math.sqrt(discriminant)) / (2 * coefficient1);
    } else if (discriminant === 0) {
        inpX1.value = (-coefficient2) / (2 * coefficient1);
        inpX2.value = "второй корень отсутствует";
    } else if (discriminant < 0) {
        inpX1.value = "корней нет";
        inpX2.value = "корней нет";
    }
});


pythagoreanTripleButton.addEventListener('click', function functionPythagoreanTriple() {
    pythagoreanTripleButton.classList.add('animationPythagoreanTriple');
        let animationTimerId = setInterval(function() {
            pythagoreanTripleButton.classList.remove('animationPythagoreanTriple');
            clearInterval(animationTimerId);
        }, 150);
    
    let num1 = Number(inpA.value);
    let num2 = Number(inpB.value);
    let num3 = Number(inpC.value);
    let max  = Math.max(num1, num2, num3);
    
    let arr = [num1, num2, num3];
    let newArr = [];
    for (let elem of arr) {
        if (elem !== max) {
            newArr.push(elem);
        }
    }

    let sumNewArr = 0;
    for (let elem of newArr) {
        sumNewArr += elem ** 2;
    }

    if (max ** 2 === sumNewArr && num1 !== 0 && num2 !== 0 && num3 !== 0) {
        pythagoreanTripleButton.textContent = 'Тройка Пифагора!';
        let returnTextTimerId1 = setInterval(function() {
            pythagoreanTripleButton.textContent = 'Проверить коэффициенты на "тройку Пифагора"';
            clearInterval(returnTextTimerId1);
        }, 800);
    } else {
        pythagoreanTripleButton.textContent = 'Не тройка Пифагора';
        let returnTextTimerId2 = setInterval(function() {
            pythagoreanTripleButton.textContent = 'Проверить коэффициенты на "тройку Пифагора"';
            clearInterval(returnTextTimerId2);
        }, 800);
    }
});


foundCommonDivisorsButton.addEventListener('click', function functionFoundCommonDivisors() {
    foundCommonDivisorsButton.classList.add('animationPythagoreanTriple');
    let animationTimerId = setInterval(function() {
        foundCommonDivisorsButton.classList.remove('animationPythagoreanTriple');
        clearInterval(animationTimerId);
    }, 150);

    let lies = document.querySelectorAll('#commonDivisorsList li');
    for (let elem of lies) {
        elem.remove();
    }

    let num1 = Number(inpX1.value);
    let num2 = Number(inpX2.value);
    let max = Math.max(num1, num2);

    for (let i = 2; i <= max; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            let li = document.createElement('li');
            commonDivisorsList.appendChild(li);
            li.textContent = i;
        }
    }
});
