function Resultat(el) {
        var dano = el.Choose1.value;
        var resultat = el.Choose2.value;
        var iz = el.System.value;
        var v = el.System2.value;
        var o = el.Oshipka.value;
        if(iz == "Двоичная")
         var iz2 = 2;
        else if(iz == "Восьмиричная")
         var iz2 = 8;
        else if(iz == "Десятиричная")
         var iz2 = 10;
        else if(iz == "Шестнадцатиричная")
         var iz2 = 16;

         if(v == "Двоичная")
         var v2 = 2;
        else if(v == "Восьмиричная")
         var v2 = 8;
        else if(v == "Десятиричная")
         var v2 = 10;
        else if(v == "Шестнадцатиричная")
         var v2 = 16;

        if(isNaN(dano))
        {
            el.Oshipka.value = "Пожалуйста, введите число!";
            return false;
        }

         resultat = parseInt(String(dano), iz2);
         var number = resultat.toString(v2);
         el.Choose2.value = number;
         
        

        return false;
    }
