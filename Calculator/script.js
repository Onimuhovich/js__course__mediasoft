alert("Вас приветствует очень простой калькулятор v1.0.0, \nвыполняющий только четыре операции : \nСложение \nВычитание \nУмножение \nДеление");

let valid = true;

 while (valid === true) {
  let a = +prompt('Введите первое число', '');
  let op = prompt('Введите одно из данных операций " + ", " - ", " * ", " / ".', '');
  let b = +prompt('Введите второе число', '');


function calc(a, op, b) {
    
  if (op === '+') {
      return a + b;
  } else if (op === '-') {
      return a - b;
  } else if (op === '*') {
      return a * b;
  } else if (op === '/') {
      return a / b;
  }
  
}

alert(a + String(op) + b + '=' + calc(a, op, b));

valid = confirm('Запустить калькулятор снова ?');     
     
}
