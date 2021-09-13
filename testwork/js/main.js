
// let nameJs = prompt('Какое "официальное" название JavaScript?', '');

// if (nameJs == 'ECMAScript') {
//     alert('Правильно!')
// } else {
//     alert('Не знаете? "ECMAScript"!');
// }

// let numberOfUser = +prompt('Введите число:', '');

// if (numberOfUser > 0) {
//     alert(1)
// } else if (numberOfUser < 0) {
//     alert(-1);
// } else {
//     alert(0);
// }

// let result;
// let a = 2;
// let b = 1;

// (a + b < 4) ? result = 'Мало': result = 'Много';

// console.log(result);


// let login = prompt('Введите логин:', '');


// let message;
// (login == 'Сотрудник') ? message = 'Привет':
//  (login == 'Директор') ? message = 'Здравствуйте':
//  (login == '') ? message = 'Нет логина': message = '';
//  console.log(message); 


// let age = +prompt('Age:', '');

// if ( age >= 14 && age <= 90) {
//     console.log('Попали');
// }

// if (age <= 14 || age >= 90) {
//     console.log('Попали');
// }

// let userName = prompt('Username:', '');

// if (userName == 'Админ') {
//     let password = prompt('Password:', '');
// } else if (userName != 'Админ') {
//     alert('Неверный пароль');
// } else if (userName == '' || userName == null) {
//     alert('Отмена');
// }
// for (i = 1; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let i = 0;

// while (i < 3) {
//     alert(`number ${i}`);
//     i++;
// }



// do {
//     let number = +prompt('Введит число больше 100:', '');
// } while (number > 100);

// for (i = 0; i < 1000; i++) {
//     let number = +prompt('Введит число больше 100:', '');
//     if (number > 100) {
//         alert(number);
//         break;
//     } else if (number == null || number < 100) {
//         continue;
//     }
// }
// let n = +prompt('Введите число:', '');
// for (i = 2; i < n; i++) {
//     if( i % 2 != 0) {
//         console.log(i);
//     }
// }

// let i = 2;

// do {
//     console.log(i);
//     i++;
// } while (i < n);

// let browser = prompt('Введите название браузера:', '');

// if (browser == "Edge") {
//     alert("You've got the Edge!");
// } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     alert('Okay we support this browsers too')
// } else {
//     alert('We hope that this page looks ok!');
// }

// let que = '{ "data": [
//         {"question": "Сколько вам лет?", "id": 1},
//         {"question": "Как вас зовут?", "id": 2},
//         {"question": "В каком городе вы живете?", "id": 3},
//         {"question": "Ваш любимый цвет?", "id": 4},
//         {"question": "У вас есть собака?", "id": 5},
//         {"question": "Любимая музыка?", "id": 6}
// }'







let questionJson = '{"data": [{"question": "Cколько вам лет?", "id": 1}, {"question": "Как вас зовут?", "id": 2}, {"question": "В каком городе вы живете?", "id": 3}, {"question": "Ваш любимый цвет?", "id": 4}, {"question": "У вас есть собака?", "id": 5},{"question": "Любимая музыка?", "id": 6}]}'

questionJson = JSON.parse(questionJson);

let div = document.querySelector('.questions');

window.onload = function () {
    inputQue(questionJson);  
};

function inputQue(jsonObj) {
    let queP = jsonObj['data'];

    for (i = 0; i < queP.length; i++) {
        let p = document.createElement('p');
        let input = document.createElement('input');
        input.placeholder="*Введите текст";
        p.textContent = queP[i].question;
        div.appendChild(p);
        div.appendChild(input);
    }
};


document.querySelector('.button').addEventListener('click', () => {
    let sendAnswer = document.getElementsByTagName('input');
    let queP = questionJson['data'];
    let values = [];
    let keys = [];
    let result = {}
    for (i = 0; i < sendAnswer.length; i++) {
        values.push(sendAnswer[i].value);
        sendAnswer[i].value = '';
    }
    for (j = 0; j < queP.length; j++) {
        keys.push(queP[j].question); 
    }
    keys.forEach((key, i) => result[key] = values[i]);
    for (key in result) {
        localStorage.setItem(key, result[key]);
    }
    // localStorage.setItem('form', JSON.stringify(result)); 
});


