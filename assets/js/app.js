// variables

const checkbox = document.querySelector('#check1');
const checkbox2 = document.querySelector('#check2');
const checkbox3 = document.querySelector('#check3');
const buttonReset = document.querySelector('#bt')

// funcion

checkbox.onclick = function(){
    if(checkbox.checked === true){
        check1.disabled = true;
    }
}
checkbox2.onclick = function(){
    if(checkbox2.checked === true){
        check2.disabled = true;
    }
}
checkbox3.onclick = function(){
    if(checkbox3.checked === true){
        check3.disabled = true;
    }
}

// reset

buttonReset.onclick = function(){
    check1.disabled = false;
    check1.checked = false;

    check2.disabled = false;
    check2.checked = false;

    check3.disabled = false;
    check3.checked = false;
    
}