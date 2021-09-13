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


