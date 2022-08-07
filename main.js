let button_press = false;

//var input_date;
var number_date;

var result = "";

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var d = new Date();


function button_onclick()
{
 
    input_date = new Date(document.getElementById("fild_for_input").value);
    number_date = input_date.getDay();

    document.getElementById("exsamp").style.background = "#A0bF";
    document.getElementById("exsamp").style.color = "#FFFF";
    document.getElementById("exsamp").innerText = number_date;


switch (number_date) {

    case  0 : {
    result = "This is a Sunday";
    break;
}
    case  1 : {
        result = "This is a Monday";
        break;
    }
    case  2 : {
        result = "This is a Tuesday";
        break;
    }
    case  3 : {
        result = "This is a Wednesday";
        break;
    }
    case  4 : {
        result = "This is a Thursday";
        break;
    }
    case  5 : {
        result = "This is a Friday";
        break;
    }
    case  6 : {
        result = "This is a Saturday";
        break;
    }

}


/*

if (length_string < 5) {
    result = "This is a tiny string";
}
else if ((length_string >= 5)&&(length_string < 10)){
    result = "This is a short string";
}

else if ((length_string >= 10)&&(length_string < 15)){
    result = "This is an average string";
}

else if ((length_string >= 15)&&(length_string < 30)){
    result = "This is a large string";
}

else if (length_string >= 30) {
    result = "This is a gigantic string";
};
 */

//result = number_date;


document.getElementById("exsamp").innerText = result;
}
