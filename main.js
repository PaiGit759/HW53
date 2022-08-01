ar = new Array("one", 1, "two", false, "three", [77,88,99] ,"four", 
{"one":1, "two":"two", "three": false}, "five", undefined);

var el_arr;

var ind = new Number;

var this_is_array;

var type_of_objekt = false;


sss = "Array content =  " + ar;


var boxElem = document.activeElement.querySelector(".exsample");

boxElem.innerHTML = sss;

function Return_an_array_element_by_index(arr, index) {
    if ((typeof (index) == "number") && (index <= (ar.length - 1))) {
        var boxElem1 = document.activeElement.querySelector(".exsample1");
        boxElem1.innerHTML = boxElem1.innerHTML + " True";
        return ar[index];
    } else {
        var boxElem1 = document.activeElement.querySelector(".exsample1");
        boxElem1.innerHTML = boxElem1.innerHTML + " False";
        return undefined;

    }
};

ind = 5;

el_arr = Return_an_array_element_by_index(ar, ind);
//alert(el_arr);

this_is_array = Array.isArray(el_arr);
//alert(typeof(el_arr));

if (typeof (el_arr) == "number")  {
    type_of_objekt = "number";
}

else if (typeof(el_arr) == "string") {
type_of_objekt = "string";
}    

else if (typeof(el_arr) == "boolean") {
    type_of_objekt = "boolean";
}        

else if (typeof(el_arr) == "object") {
    if (this_is_array) {
        type_of_objekt = "array";
    } else {
        type_of_objekt = "object";
    }
    }        

else {
    type_of_objekt = undefined;}   
;

var boxElem2 = document.activeElement.querySelector(".exsample2");
boxElem2.innerHTML = boxElem2.innerHTML + ind + " is " + type_of_objekt;
