function Resultat(event, el) {
        event.preventDefault();
        var dano = el.Choose1.value;
        var iz = el.System.value;
        var v = el.System2.value;
        var o = el.querySelector('.Oshipka');

        o.textContent="";
        el.Choose2.value="";

    if (dano === "") {
        errorElement.textContent = "Пожалуйста, введите число!";
        return false;
    }
    
    function getBase(system) {
        if (system == "Двоичная") return 2;
        else if (system == "Восьмиричная") return 8;
        else if (system == "Десятиричная") return 10;
        else if (system == "Шестнадцатиричная") return 16;
    }
    
    var fromBase = getBase(iz);
    var toBase = getBase(v);
    
    var decimal = parseInt(dano, fromBase);
    
    if (isNaN(decimal)) {
        o.textContent = "Некорректное число для выбранной системы!";
        return false;
    }
    
    var result = decimal.toString(toBase);
    
    if (v === "Шестнадцатиричная") {
        result = result.toUpperCase();
    }
    
    el.Choose2.value = result;
    return false;
    }
