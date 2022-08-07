let button_press = false;

var input_string;

var result = "";

function button_onclick()
{
  
    input_string = document.getElementById("fild_for_input").value;

    document.getElementById("exsamp").style.background = "#A0bF";
    document.getElementById("exsamp").style.color = "#FFFF";
    document.getElementById("exsamp").innerText = "";

    length_string =  input_string.length;


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

document.getElementById("exsamp").innerText = result;
}
