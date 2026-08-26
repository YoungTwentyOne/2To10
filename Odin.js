function convertNumber() {
    // Получаем значения полей
    var input = document.getElementById('inputNumber').value.trim();
    var fromSystem = document.getElementById('fromSystem').value;
    var toSystem = document.getElementById('toSystem').value;
    var resultField = document.getElementById('resultNumber');
    var errorField = document.getElementById('errorMessage');
    
    // Очищаем ошибку и результат
    errorField.textContent = "";
    resultField.value = "";
    
    // Проверка на пустое поле
    if (input === "") {
        errorField.textContent = "Пожалуйста, введите число!";
        return;
    }
    
    // Функция для получения основания системы
    function getBase(system) {
        switch(system) {
            case "Двоичная": return 2;
            case "Восьмиричная": return 8;
            case "Десятиричная": return 10;
            case "Шестнадцатиричная": return 16;
            default: return 10;
        }
    }
    
    var fromBase = getBase(fromSystem);
    var toBase = getBase(toSystem);
    
    // Проверка на валидность символов для выбранной системы
    var validPatterns = {
        "Двоичная": /^[01]+$/,
        "Восьмиричная": /^[0-7]+$/,
        "Десятиричная": /^[0-9]+$/,
        "Шестнадцатиричная": /^[0-9A-Fa-f]+$/
    };
    
    // Проверяем, соответствует ли введенное число выбранной системе
    if (!validPatterns[fromSystem].test(input)) {
        errorField.textContent = "Некорректное число для выбранной системы!";
        return;
    }
    
    // Преобразуем число
    var decimal = parseInt(input, fromBase);
    
    // Дополнительная проверка (на случай, если parseInt вернул NaN)
    if (isNaN(decimal)) {
        errorField.textContent = "Ошибка при преобразовании числа!";
        return;
    }
    
    // Преобразуем в нужную систему
    var result = decimal.toString(toBase);
    
    // Для шестнадцатеричной системы делаем заглавные буквы
    if (toSystem === "Шестнадцатиричная") {
        result = result.toUpperCase();
    }
    
    // Выводим результат
    resultField.value = result;
    
    // Логирование для отладки (можно убрать)
    console.log("Входное число:", input);
    console.log("Из системы:", fromSystem, "(" + fromBase + ")");
    console.log("В систему:", toSystem, "(" + toBase + ")");
    console.log("Десятичное значение:", decimal);
    console.log("Результат:", result);
}
