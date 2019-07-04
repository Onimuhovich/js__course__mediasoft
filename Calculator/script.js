alert("Вас приветствует очень простой калькулятор v1.0.0, \nвыполняющий только четыре операции : \nСложение \nВычитание \nУмножение \nДеление");

let a = +prompt('Введите первое число', '');
let op = prompt('Введите одно из даных операций " + ", " - ", " * ", " / ".', '');
let b = +prompt('Введите второе число', '');

let result;

if (op === '+') {
    result = (a + b);
} else if (op === '-') {
    result = a - b;
} else if (op === '*') {
    result = a * b;
} else if (op === '/') {
    result = a / b;
}

alert(a + String(op) + b + '=' + result);